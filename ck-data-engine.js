/**
 * MOTEUR DE DÉCISION DATA-DRIVEN
 *
 * Interprète des configurations JSON pour générer des décisions CK3
 * Reproduit exactement le comportement de ck.js mais avec des configs purement déclaratives
 *
 * @version 2.0 - Architecture Data-Driven
 */

class DataDrivenEngine {
    /**
     * @param {Object} config - Configuration JSON d'un type de décision
     * Structure attendue :
     * {
     *   positionVue: { categories: [], idElement: "" },
     *   siRien: "texte par défaut si rien",
     *   defaut: "texte par défaut si liste vide",
     *   selonEtats: {
     *     "etat": {
     *       decisions: ["texte1", "texte2"],
     *       arret: true/false
     *     }
     *   }
     * }
     */
    constructor(config) {
        this.config = config;
        this.positionVue = config.positionVue || {};
        this.siRien = config.siRien || null;
        this.defaut = config.defaut || "ne rien changer";
        this.selonEtats = config.selonEtats || {};
        this.initialStack = config.initialStack || null;
    }

    /**
     * Traite une liste de problèmes et retourne les décisions
     *
     * @param {Array} p - Liste des problèmes (états du jeu)
     * @param {Array} t - Stack de décisions (array de Sets)
     * @param {*} o - Options (pour compatibilité, utilisé pour détecter le cas initial)
     * @param {Map} optionModifications - Map des modifications cumulées des options
     * @returns {Array} - Stack de décisions
     *
     * @example
     * // Cas siRien : appel initial sans problèmes
     * process([], [], null) → utilise "siRien"
     *
     * @example
     * // Cas defaut : tous les états traités sans arret
     * process(['stress', 'prestige'], [], null)
     * → traite 'stress' (pas de règle, continue)
     * → traite 'prestige' (pas de règle, continue)
     * → p.length === 0 mais t peut avoir du contenu
     * → utilise "defaut"
     */
    process(p, t = [], o = null, optionModifications = new Map(), isInitialCall = true) {
        // Initialiser la stack si nécessaire (pour decisions qui commence toujours avec "stress éviter niveau+")
        if (this.initialStack && t.length === 0 && isInitialCall) {
            // Si initialStack est un tableau, ajouter chaque élément
            if (Array.isArray(this.initialStack)) {
                this.initialStack.forEach(item => this.pushDecisionAvecLeviers(t, new TexteDecision(item)));
            } else {
                // Sinon, ajouter l'élément unique
                this.pushDecisionAvecLeviers(t, new TexteDecision(this.initialStack));
            }
        }

        // Cas 1: siRien - aucun problème dès le départ (appel initial sans problèmes)
        // Condition : liste vide DÈS LE DÉPART (isInitialCall = true)
        if (p.length === 0 && isInitialCall) {
            // Si siRien est null, chercher un état spécial "siRien" dans selonEtats
            if (this.siRien === null && this.selonEtats['siRien']) {
                return this.handleProbleme(['siRien'], t, o, optionModifications);
            }
            return this.handleRien(t);
        }

        // Cas 2: defaut - tous les problèmes ont été dépilés sans rencontrer "arret: true"
        // Condition : liste vide APRÈS traitement (isInitialCall = false)
        if (p.length === 0) {
            return this.handleDefaut(t, optionModifications);
        }

        // Cas 3: traiter le problème actuel
        return this.handleProbleme(p, t, o, optionModifications);
    }

    /**
     * Gère le cas "siRien" (aucun problème dès le départ)
     * = "Que faire quand tout va bien dès le début ?"
     */
    handleRien(t) {
        if (!this.siRien) {
            return t;
        }

        // Cas 1: siRien est un tableau de décisions
        if (Array.isArray(this.siRien)) {
            this.siRien.forEach(decision => {
                if (decision && decision !== "undefined") {
                    this.pushDecisionAvecLeviers(t, new TexteDecision(decision));
                }
            });
        }
        // Cas 2: siRien est un objet avec { decisions: [...] }
        else if (typeof this.siRien === 'object' && this.siRien.decisions) {
            this.siRien.decisions.forEach(decision => {
                if (decision && decision !== "undefined") {
                    this.pushDecisionAvecLeviers(t, new TexteDecision(decision));
                }
            });
        }
        // Cas 3: siRien est une chaîne simple
        else if (typeof this.siRien === 'string') {
            this.pushDecisionAvecLeviers(t, new TexteDecision(this.siRien));
        }

        return t;
    }

    /**
     * Gère le cas "defaut" (tous les problèmes traités sans "arret: true")
     * = "Que faire après avoir dépilé tous les problèmes sans décision d'arrêt ?"
     */
    handleDefaut(t, optionModifications) {
        if (!this.defaut) {
            return t;
        }

        // Cas 1: defaut est un tableau de décisions
        if (Array.isArray(this.defaut)) {
            this.defaut.forEach(decision => {
                const modifiedDecision = this.applyModificationsToText(decision, optionModifications);
                if (modifiedDecision && modifiedDecision !== "undefined") {
                    this.pushDecisionAvecLeviers(t, new TexteDecision(modifiedDecision));
                }
            });
        }
        // Cas 2: defaut est un objet avec { decisions: [...] }
        else if (typeof this.defaut === 'object' && this.defaut.decisions) {
            this.defaut.decisions.forEach(decision => {
                const modifiedDecision = this.applyModificationsToText(decision, optionModifications);
                if (modifiedDecision && modifiedDecision !== "undefined") {
                    this.pushDecisionAvecLeviers(t, new TexteDecision(modifiedDecision));
                }
            });
        }
        // Cas 3: defaut est une chaîne simple
        else if (typeof this.defaut === 'string') {
            const defautText = this.applyModificationsToText(this.defaut, optionModifications);
            this.pushDecisionAvecLeviers(t, new TexteDecision(defautText));
        }

        return t;
    }

    /**
     * Traite un problème spécifique
     */
    handleProbleme(p, t, o, optionModifications) {
        const etat = p[0];

        // Extraire la clé de l'état (ex: "guerre-offensive" -> "guerre")
        const etatKey = this.extractKey(etat);

        // Chercher la règle correspondante
        const regle = this.selonEtats[etatKey];

        if (!regle) {
            // Pas de règle pour cet état : passer au suivant
            return this.process(p.slice(1), t, o, optionModifications, false);
        }

        // Enregistrer les modifications de cet état (si présentes)
        if (regle.modifications) {
            this.accumulateModifications(optionModifications, regle.modifications);
        }

        // Appliquer les décisions si présentes
        if (regle.decisions && regle.decisions.length > 0) {
            regle.decisions.forEach(decision => {
                const modifiedDecision = this.applyModificationsToText(decision, optionModifications);
                if (modifiedDecision !== "undefined") {
                    this.pushDecisionAvecLeviers(t, new TexteDecision(modifiedDecision));
                }
            });
        }

        // Si arret: true, retourner immédiatement
        if (regle.arret === true) {
            return t;
        }

        // Sinon, continuer avec le reste des problèmes
        return this.process(p.slice(1), t, o, optionModifications, false);
    }

    /**
     * Extrait la clé d'un état (enlève les suffixes après "-")
     * Ex: "guerre-offensive" -> "guerre"
     */
    extractKey(etat) {
        const parts = etat.split('-');
        return parts[0];
    }

    /**
     * Crée un Set à partir d'un array de décisions
     * Applique les modifications cumulées aux textes des décisions
     */
    createDecisionsSet(decisions, optionModifications) {
        const set = new Set();
        decisions.forEach(decision => {
            const modifiedDecision = this.applyModificationsToText(decision, optionModifications);
            if (modifiedDecision !== "undefined") {
                set.add(modifiedDecision);
            }
        });
        return set;
    }

    /**
     * Accumule les modifications dans la Map
     * Les nouvelles modifications écrasent les anciennes pour la même clé
     */
    accumulateModifications(optionModifications, modifications) {
        Object.keys(modifications).forEach(key => {
            optionModifications.set(key, modifications[key]);
        });
    }

    /**
     * Applique les modifications cumulées à un texte de décision
     * Remplace les textes originaux par leurs versions modifiées
     */
    applyModificationsToText(text, optionModifications) {
        let modifiedText = text;

        // Parcourir toutes les modifications enregistrées
        optionModifications.forEach((newValue, originalText) => {
            // Si le texte contient le texte original, le remplacer
            if (modifiedText.includes(originalText)) {
                modifiedText = modifiedText.replace(originalText, newValue);
            }
        });

        return modifiedText;
    }

    /**
     * Ajoute un TexteDecision au tableau t et ajoute ses leviers s'il en a
     */
    pushDecisionAvecLeviers(t, decision) {
        t.push(decision);

        // Si la décision a des leviers, les ajouter aussi
        if (decision.leviers && decision.leviers.length > 0) {
            decision.leviers.forEach(levier => {
                t.push(levier);
            });
        }
    }

    /**
     * Retourne les métadonnées de position/vue
     */
    getPositionVue() {
        return this.positionVue;
    }
}

/**
 * Registry pour gérer toutes les configurations de décisions
 */
class DataDrivenRegistry {
    constructor() {
        this.engines = new Map();
        this.configs = null;
    }

    /**
     * Charge les configurations depuis un objet JSON
     */
    loadFromJSON(configs) {
        this.configs = configs;

        // Créer un engine pour chaque type de décision
        Object.keys(configs).forEach(name => {
            const config = configs[name];
            this.engines.set(name, new DataDrivenEngine(config));
        });

        console.log(`🔧 Chargé ${this.engines.size} types de décisions`);
    }

    /**
     * Charge depuis un fichier JSON (pour Node.js)
     */
    async loadFromFile(filePath) {
        if (typeof require !== 'undefined') {
            // Node.js
            const fs = require('fs').promises;
            const content = await fs.readFile(filePath, 'utf-8');
            const configs = JSON.parse(content);
            this.loadFromJSON(configs);
        } else {
            // Browser
            const response = await fetch(filePath);
            const configs = await response.json();
            this.loadFromJSON(configs);
        }
    }

    /**
     * Récupère un engine par son nom
     */
    get(name) {
        const engine = this.engines.get(name);
        if (!engine) {
            throw new Error(`Type de décision '${name}' introuvable`);
        }
        return engine;
    }

    /**
     * Crée une fonction de décision pour un type donné
     * Compatible avec l'API de ck.js : function(p, t, o)
     */
    createFunction(name) {
        return (p, t = [], o = null) => {
            return this.get(name).process(p, t, o);
        };
    }

    /**
     * Crée toutes les fonctions et les retourne dans un objet
     */
    createAllFunctions() {
        const functions = {};
        this.engines.forEach((engine, name) => {
            functions[name] = this.createFunction(name);
        });
        return functions;
    }

    /**
     * Enregistre toutes les fonctions comme variables globales (browser)
     */
    registerGlobalFunctions() {
        if (typeof window === 'undefined') {
            console.warn('⚠️ registerGlobalFunctions() doit être appelé dans un navigateur');
            return;
        }

        this.engines.forEach((engine, name) => {
            window[name] = this.createFunction(name);
            console.log(`✅ Fonction globale créée : ${name}()`);
        });
    }

    /**
     * Liste tous les types de décisions disponibles
     */
    listTypes() {
        return Array.from(this.engines.keys());
    }

    /**
     * Obtient les métadonnées de vue pour tous les types
     */
    getAllPositionVue() {
        const result = {};
        this.engines.forEach((engine, name) => {
            result[name] = engine.getPositionVue();
        });
        return result;
    }
}

// Export pour Node.js et Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DataDrivenEngine, DataDrivenRegistry };
}

// Export pour Browser
if (typeof window !== 'undefined') {
    window.DataDrivenEngine = DataDrivenEngine;
    window.DataDrivenRegistry = DataDrivenRegistry;
}
