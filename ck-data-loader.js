/**
 * CK DATA-DRIVEN LOADER
 *
 * Ce script charge tous les fichiers JSON de configuration et crée les fonctions
 * data-driven qui remplacent progressivement les fonctions de ck.js
 *
 * Usage:
 * 1. Inclure ce script APRÈS ck-data-engine.js et AVANT ck.js dans ck.html
 * 2. Les fonctions data-driven seront créées automatiquement
 * 3. Les fonctions de ck.js restent disponibles comme fallback
 */

// Registry global pour toutes les configurations
window.ckDataRegistry = new DataDrivenRegistry();

// Liste de tous les fichiers JSON à charger
const JSON_FILES = [
    'militaire_conseillers.json',
    'postes_cour.json',
    'gestion_prison.json',
    'gestion_complots.json',
    'gestion_hamecons_secrets.json',
    'gestion_decisions.json',
    'gestion_regence.json',
    'activites_grandioses.json',
    'activites.json'
];

// Fonction pour charger tous les fichiers JSON (nécessite un serveur HTTP)
async function loadAllConfigurations() {
    console.log('🔄 Chargement des configurations data-driven...');

    try {
        // Charger tous les fichiers JSON en parallèle
        const loadPromises = JSON_FILES.map(async (filename) => {
            const response = await fetch(filename);
            if (!response.ok) {
                throw new Error(`Erreur lors du chargement de ${filename}: ${response.status}`);
            }
            const config = await response.json();
            return { filename, config };
        });

        const results = await Promise.all(loadPromises);

        // Fusionner toutes les configurations
        const mergedConfig = {};
        results.forEach(({ filename, config }) => {
            Object.assign(mergedConfig, config);
            console.log(`✅ ${filename} chargé (${Object.keys(config).length} types)`);
        });

        // Charger dans le registry
        window.ckDataRegistry.loadFromJSON(mergedConfig);

        // Créer les fonctions globales
        createGlobalFunctions();

        console.log('✅ Toutes les configurations chargées avec succès !');
        console.log(`📊 Total: ${window.ckDataRegistry.listTypes().length} types de décisions disponibles`);

        return true;
    } catch (error) {
        console.error('❌ Erreur lors du chargement des configurations:', error);
        console.error('💡 Assurez-vous d\'utiliser Live Server (VS Code) ou un serveur HTTP local');
        console.error('   Ne PAS ouvrir en file:// - utiliser http://localhost ou http://127.0.0.1');
        return false;
    }
}

/**
 * Crée les fonctions globales qui remplacent les fonctions de ck.js
 * Stratégie: créer des fonctions avec un suffixe "_data" pour tester
 */
function createGlobalFunctions() {
    const types = window.ckDataRegistry.listTypes();

    types.forEach(typeName => {
        // Sauvegarder la fonction originale si elle existe
        if (typeof window[typeName] === 'function') {
            window[typeName + '_original'] = window[typeName];
            console.log(`💾 Sauvegardé: ${typeName}_original()`);
        }

        // Créer la fonction data-driven
        const dataFunction = window.ckDataRegistry.createFunction(typeName);

        // Enregistrer avec le nom original (remplace ck.js)
        window[typeName] = dataFunction;

        console.log(`✅ Fonction remplacée: ${typeName}() → version data-driven`);
    });
}

/**
 * Fonction helper pour comparer les résultats entre version originale et data-driven
 */
window.compareResults = function(functionName, problemStack) {
    const originalFunction = window[functionName + '_original'];
    const dataFunction = window.ckDataRegistry.createFunction(functionName);

    if (!originalFunction) {
        console.warn(`⚠️ Fonction originale ${functionName}_original non trouvée`);
        return;
    }

    const originalResult = originalFunction(problemStack);
    const dataResult = dataFunction(problemStack);

    console.group(`🔍 Comparaison: ${functionName}([${problemStack}])`);
    console.log('Original:', originalResult);
    console.log('Data-driven:', dataResult);

    // Comparer les résultats
    if (JSON.stringify(originalResult) === JSON.stringify(dataResult)) {
        console.log('✅ IDENTIQUES');
    } else {
        console.warn('⚠️ DIFFÉRENTS');
    }
    console.groupEnd();

    return { original: originalResult, data: dataResult };
};

/**
 * Fonction pour sauvegarder les fonctions originales avant remplacement
 */
window.saveOriginalFunctions = function() {
    const types = window.ckDataRegistry.listTypes();

    types.forEach(typeName => {
        if (typeof window[typeName] === 'function') {
            window[typeName + '_original'] = window[typeName];
            console.log(`💾 Sauvegardé: ${typeName}_original()`);
        }
    });
};

/**
 * Fonction pour afficher automatiquement tous les résultats en utilisant les métadonnées JSON
 * Remplace les multiples appels evidence() dans calculate()
 */
window.displayAllResults = function(p) {
    const types = window.ckDataRegistry.listTypes();

    types.forEach(typeName => {
        const engine = window.ckDataRegistry.get(typeName);
        const positionVue = engine.getPositionVue();

        if (!positionVue.idElement) {
            console.warn(`⚠️ ${typeName} n'a pas d'idElement défini - pas d'affichage`);
            return;
        }

        // Vérifier que l'élément HTML existe
        const element = document.getElementById(positionVue.idElement);
        if (!element) {
            console.warn(`⚠️ Élément HTML #${positionVue.idElement} introuvable pour ${typeName} - ignoré`);
            return;
        }

        // Appeler la fonction data-driven
        const result = window[typeName](p);

        // Lire le mot de liaison depuis positionVue (par défaut "SINON")
        const liaison = positionVue.motLiaison || "SINON";

        const texte = sansDoublon(result, liaison);

        // Utiliser evidence pour tous les types
        evidence(positionVue.idElement, texte, false);
        console.log(`📊 ${typeName} → #${positionVue.idElement}: ${result.length} décisions`);
    });
};

// Auto-chargement au démarrage
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllConfigurations);
} else {
    loadAllConfigurations();
}
