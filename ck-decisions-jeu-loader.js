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
    'decisions_cour.json',
    'decisions_nom.json',
    'decisions_activites.json'
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
    const decisionsSansPrec = [];
    const decisionsOrphelines = [];

    // Index par libellé pour savoir si un "precedent" pointe vers une décision existante
    const decisionsParLib = new Map();
    decisions.forEach(dec => {
        decisionsParLib.set(dec.lib, dec);
    });

    // Index enfants: libellé du précédent -> décisions qui en dépendent
    const enfantsParPrecedent = new Map();
    decisions.forEach(dec => {
        const precedent = dec.positionVue?.precedent;

        if (precedent === null || precedent === undefined || precedent === "") {
            decisionsSansPrec.push(dec);
            return;
        }

        if (!decisionsParLib.has(precedent)) {
            decisionsOrphelines.push(dec);
        }

        if (!enfantsParPrecedent.has(precedent)) {
            enfantsParPrecedent.set(precedent, []);
        }
        enfantsParPrecedent.get(precedent).push(dec);
    });

    const resultat = [];
    const visite = new Set();

    // DFS stable: respecte l'ordre source pour les égalités (même precedent)
    function ajouterDecisionEtSuivantes(dec) {
        if (!dec || visite.has(dec.id)) return;

        visite.add(dec.id);
        resultat.push(dec);

        const suivantes = enfantsParPrecedent.get(dec.lib) || [];
        suivantes.forEach(ajouterDecisionEtSuivantes);
    }

    // 1) Commencer par les décisions sans précédent
    decisionsSansPrec.forEach(dec => ajouterDecisionEtSuivantes(dec));

    // 2) Puis les orphelines (precedent absent du jeu de décisions)
    decisionsOrphelines.forEach(dec => ajouterDecisionEtSuivantes(dec));

    // 3) Compléter avec le reste (cycles, cas pathologiques)
    decisions.forEach(dec => ajouterDecisionEtSuivantes(dec));

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

    decisions.forEach(decision => {
        // Créer les Sets pour decisionOuNon
        const setOui = decision.effetsPositifs ? new Set(decision.effetsPositifs) : null;
        const setNon = decision.effetsNegatifs ? new Set(decision.effetsNegatifs) : null;

        // Appeler decisionOuNon pour déterminer true/false
        const ouiNon = decisionOuNon(decisionsResult, setOui, setNon);

        // Convertir true/false en "cocher"/"décocher"
        const texteAffiche = ouiNon ? "cocher" : "décocher";

        // Chercher si le span existe déjà
        let span = document.getElementById(decision.id);

        if (!span) {
            // Créer le <li> et le <span> s'ils n'existent pas
            const li = document.createElement('li');
            li.textContent = decision.lib + ': ';

            span = document.createElement('span');
            span.id = decision.id;
            span.textContent = texteAffiche;

            li.appendChild(span);
            liste.appendChild(li);
        }

        // Utiliser evidence() pour mettre en évidence si changement
        evidence(decision.id, texteAffiche);
    });

    console.log(`✅ ${decisions.length} décisions affichées dans #${idListe}`);
}

// Auto-chargement au démarrage
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDecisionsJeu);
} else {
    loadDecisionsJeu();
}
