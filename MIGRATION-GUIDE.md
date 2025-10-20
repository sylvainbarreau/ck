# Guide de Migration vers le Système Data-Driven

## 📋 Objectif

Migrer progressivement les fonctions de `ck.js` vers le système data-driven sans casser l'application existante ni modifier la vue `ck.html`.

## 🔧 Étapes d'intégration

### 1. Modifier ck.html (ajout minimal)

Ajouter ces lignes dans `ck.html` **APRÈS** la ligne 512 (`</script>`) et **AVANT** la ligne 513 (`<script src="ck.js"></script>`):

```html
</script>
<!-- Système data-driven (nouveau) -->
<script src="ck-data-engine.js"></script>
<script src="ck-data-loader.js"></script>
<script src="ck.js"></script>
```

**Important**: L'ordre de chargement est crucial:
1. `ck-data-engine.js` - Le moteur
2. `ck-data-loader.js` - Le chargeur qui lit les JSON
3. `ck.js` - Les fonctions originales (comme fallback)

### 2. Stratégie de migration progressive

Le système fonctionne en **deux modes**:

#### Mode A: Remplacement direct (recommandé pour la production)
Les fonctions data-driven **remplacent** automatiquement les fonctions de `ck.js` avec le même nom.

**Exemple**: La fonction `militaire()` de ck.js sera remplacée par la version data-driven.

#### Mode B: Coexistence (recommandé pour les tests)
Pour tester sans casser l'existant, modifier `ck-data-loader.js` ligne 67:

```javascript
// AVANT (mode remplacement):
window[typeName] = dataFunction;

// APRÈS (mode coexistence):
window[typeName + '_data'] = dataFunction;
```

Puis dans ck.js, modifier manuellement les appels pour tester:
```javascript
// Original
liOuiNon("Militaire", 'militaireResult', sansDoublon(militaire(p), "SINON"));

// Test data-driven
liOuiNon("Militaire", 'militaireResult', sansDoublon(militaire_data(p), "SINON"));
```

### 3. Vérifier que tout fonctionne

1. Ouvrir `ck.html` dans le navigateur
2. Ouvrir la console développeur (F12)
3. Vérifier les messages de chargement:
```
🔄 Chargement des configurations data-driven...
✅ militaire_conseillers.json chargé (8 types)
✅ postes_cour.json chargé (6 types)
✅ gestion_prison.json chargé (1 types)
✅ gestion_complots.json chargé (4 types)
✅ gestion_hamecons_secrets.json chargé (2 types)
✅ gestion_decisions.json chargé (1 types)
🔧 Chargé 22 types de décisions
✅ Fonction créée: militaire()
✅ Fonction créée: militaireAuto()
... (etc)
```

### 4. Tester les fonctions migrées

Dans la console, utiliser la fonction helper `compareResults()`:

```javascript
// Comparer militaire original vs data-driven
compareResults('militaire', ['guerre', 'vassalAInfluencer'])
```

Cela affichera:
```
🔍 Comparaison: militaire([guerre,vassalAInfluencer])
  Original: [Set {...}, Set {...}]
  Data-driven: [Set {...}, Set {...}]
  ✅ IDENTIQUES
```

## 📊 Fonctions migrées

### ✅ Déjà converties en JSON (22 types)

**militaire_conseillers.json** (8 types):
- `militaire()`
- `militaireAuto()`
- `conjoint()`
- `chancelier()`
- `marechal()`
- `religieux()`
- `intendant()`
- `espion()`

**postes_cour.json** (6 types):
- `epidemies()`
- `posteCaravanier()`
- `posteAntiq()`
- `posteNour()`
- `posteEcuyer()`
- `posteChamp()`

**gestion_prison.json** (1 type):
- `prison()`

**gestion_complots.json** (4 types):
- `influence()`
- `contreMesure()`
- `compHostile()`
- `compPolitique()`

**gestion_hamecons_secrets.json** (2 types):
- `secrets()`
- `hamec()`

**gestion_decisions.json** (1 type):
- `decisions()`

### ⏳ Encore dans ck.js (à migrer)

Les fonctions suivantes utilisent encore le code JavaScript original:
- `typeCour()`
- `commoditesMode()`
- `posteSenech()`
- `posteProf()`
- `posteChasse()`
- `posteChroni()`
- Et autres...

## 🎯 Fonctionnalités préservées

### ✅ Ce qui continue de fonctionner

1. **Toute l'interface utilisateur** - Aucun changement
2. **La fonction `liOuiNon()`** - Fonctionne exactement pareil
3. **Le drag & drop** - Inchangé
4. **Les calculs de conseillers** - Inchangés
5. **Toutes les fonctions non migrées** - Continuent de fonctionner normalement

### 🆕 Ce qui est nouveau

1. **Système de modifications cumulées** - Pour `contreMesure()`
2. **Stack initiale** - Pour `decisions()` qui commence toujours par "stress éviter niveau+"
3. **Configuration JSON externe** - Plus besoin de modifier du code JavaScript
4. **Meilleure maintenabilité** - Modifier une décision = éditer un JSON

## 🐛 Dépannage

### Problème: "Fonction X is not defined"

**Cause**: Le fichier JSON correspondant n'a pas été chargé.

**Solution**: Vérifier que le fichier JSON existe et est bien listé dans `ck-data-loader.js` ligne 15-22.

### Problème: "Cannot read property 'process' of undefined"

**Cause**: `ck-data-engine.js` n'a pas été chargé avant `ck-data-loader.js`.

**Solution**: Vérifier l'ordre des `<script>` dans ck.html.

### Problème: Les résultats sont différents entre original et data-driven

**Cause**: Possible erreur dans la conversion JSON.

**Solution**:
1. Utiliser `compareResults()` pour identifier les différences
2. Vérifier le JSON correspondant
3. Comparer avec le code original dans ck.js

### Problème: Fichier JSON non trouvé (404)

**Cause**: Les fichiers JSON doivent être dans le même dossier que ck.html.

**Solution**: Vérifier que tous les fichiers JSON sont présents:
- militaire_conseillers.json
- postes_cour.json
- gestion_prison.json
- gestion_complots.json
- gestion_hamecons_secrets.json
- gestion_decisions.json

## 🚀 Prochaines étapes

1. **Tester les 22 fonctions migrées** - S'assurer qu'elles produisent les mêmes résultats
2. **Migrer les fonctions restantes** - Créer de nouveaux fichiers JSON
3. **Simplifier ck.js** - Supprimer les fonctions migrées une fois validées
4. **Performance** - Mesurer les gains (le data-driven devrait être plus rapide)

## 💡 Conseils

- **Commencer par tester en mode coexistence** (Mode B) pour éviter de casser l'existant
- **Utiliser `compareResults()` systématiquement** pour valider chaque migration
- **Migrer fonction par fonction** - Ne pas tout remplacer d'un coup
- **Garder ck.js comme backup** pendant la phase de migration

## 📝 Notes importantes

1. **Les fonctions liOuiNon ne sont PAS migrées** - Elles restent dans ck.js et continuent de fonctionner normalement
2. **Le HTML n'est pas modifié** (sauf l'ajout des 2 scripts)
3. **Le CSS n'est pas modifié**
4. **La logique métier est identique** - Seule la représentation change (code → JSON)
