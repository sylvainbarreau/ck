/**
 * CK DECISIONS DE JEU LOADER
 *
 * Ce script charge les fichiers decisions_*.json et gère l'affichage
 * des décisions de jeu (true/false) avec la fonction decisionOuNon
 */

// Stockage des décisions de jeu
window.decisionsJeu = {};

// Liste des fichiers JSON de décisions à charger
const DECISIONS_FILES = [
    'decisions_rom.json',
    'decisions_admin.json',
    'decisions.json',
    'decisions_cour.json'
];

/**
 * Charge tous les fichiers decisions_*.json
 */
async function loadDecisionsJeu() {
    console.log('🎮 Chargement des décisions de jeu...');

    try {
        // Charger tous les fichiers en parallèle
        const promises = DECISIONS_FILES.map(file =>
            fetch(file).then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement de ${file}: ${response.status}`);
                }
                return response.json();
            })
        );

        const results = await Promise.all(promises);

        // Fusionner tous les résultats dans window.decisionsJeu
        window.decisionsJeu = {};
        results.forEach((data, index) => {
            Object.assign(window.decisionsJeu, data);
            console.log(`✅ ${DECISIONS_FILES[index]} chargé (${Object.keys(data).length} décisions)`);
        });

        console.log(`✅ Total: ${Object.keys(window.decisionsJeu).length} décisions de jeu chargées`);
        return true;
    } catch (error) {
        console.error('❌ Erreur lors du chargement des décisions de jeu:', error);
        return false;
    }
}

/**
 * Affiche toutes les décisions de jeu en utilisant decisionOuNon
 * @param {Array} decisionsResult - Résultat de la fonction decisions(p)
 */
window.displayDecisionsJeu = function(decisionsResult) {
    if (!window.decisionsJeu || Object.keys(window.decisionsJeu).length === 0) {
        console.warn('⚠️ Aucune décision de jeu chargée');
        return;
    }

    // Grouper les décisions par idListe
    const decisionsParListe = {};
    for (const [id, decision] of Object.entries(window.decisionsJeu)) {
        const idListe = decision.positionVue?.idListe;
        if (!idListe) {
            console.warn(`⚠️ Décision ${id} n'a pas d'idListe`);
            continue;
        }

        if (!decisionsParListe[idListe]) {
            decisionsParListe[idListe] = [];
        }

        decisionsParListe[idListe].push({ id, ...decision });
    }

    // Pour chaque liste, trier les décisions par ordre d'affichage
    for (const [idListe, decisions] of Object.entries(decisionsParListe)) {
        const decisionsTriees = trierDecisionsParOrdre(decisions);
        afficherDecisionsDansListe(idListe, decisionsTriees, decisionsResult);
    }
};

/**
 * Trie les décisions selon leur ordre d'affichage (precedent = libellé)
 * @param {Array} decisions - Tableau de décisions
 * @returns {Array} Décisions triées
 */
function trierDecisionsParOrdre(decisions) {
    const decisionsMap = new Map();
    const decisionsSansPrec = [];

    // Créer une map par libellé ET par id pour accès rapide
    const decisionsParLib = new Map();
    decisions.forEach(dec => {
        decisionsMap.set(dec.id, dec);
        decisionsParLib.set(dec.lib, dec);

        if (!dec.positionVue?.precedent || dec.positionVue.precedent === null) {
            decisionsSansPrec.push(dec);
        }
    });

    const resultat = [];
    const visite = new Set();

    // Fonction récursive pour construire l'ordre
    function ajouterDecisionEtSuivantes(dec) {
        if (!dec || visite.has(dec.id)) return;

        visite.add(dec.id);
        resultat.push(dec);

        // Trouver la décision suivante (celle qui a precedent === dec.lib)
        const suivante = decisions.find(d => d.positionVue?.precedent === dec.lib);
        if (suivante) {
            ajouterDecisionEtSuivantes(suivante);
        }
    }

    // Commencer par les décisions sans précédent
    decisionsSansPrec.forEach(dec => ajouterDecisionEtSuivantes(dec));

    // Ajouter les décisions restantes (si cycles ou erreurs)
    decisions.forEach(dec => {
        if (!visite.has(dec.id)) {
            resultat.push(dec);
        }
    });

    return resultat;
}

/**
 * Affiche les décisions dans une liste HTML
 * @param {string} idListe - ID de la liste <ul>
 * @param {Array} decisions - Décisions triées
 * @param {Array} decisionsResult - Résultat de decisions(p)
 */
function afficherDecisionsDansListe(idListe, decisions, decisionsResult) {
    const liste = document.getElementById(idListe);
    if (!liste) {
        console.warn(`⚠️ Liste HTML #${idListe} introuvable`);
        return;
    }

    // Vider la liste avant d'afficher les nouvelles décisions
    liste.innerHTML = '';

    decisions.forEach(decision => {
        // Créer les Sets pour decisionOuNon
        const setOui = decision.effetsPositifs ? new Set(decision.effetsPositifs) : null;
        const setNon = decision.effetsNegatifs ? new Set(decision.effetsNegatifs) : null;

        // Appeler decisionOuNon pour déterminer true/false
        const ouiNon = decisionOuNon(decisionsResult, setOui, setNon);

        // Stocker avec liOuiNon
        liOuiNon(decision.lib, decision.id, ouiNon);

        // Afficher avec liDec
        liDec(idListe, decision.id);
    });

    console.log(`✅ ${decisions.length} décisions affichées dans #${idListe}`);
}

// Auto-chargement au démarrage
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDecisionsJeu);
} else {
    loadDecisionsJeu();
}
