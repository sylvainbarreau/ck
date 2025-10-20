# Sémantique : `siRien` vs `defaut`

## 📚 Définitions

### `siRien`
**Décisions présentées quand la pile des états est vide dès le début des traitements**

- **Condition** : `p.length === 0 && t.length === 0`
- **Signification** : "Que faire quand tout va bien dès le départ ?"
- **Moment** : Appel initial de la fonction avec une liste vide

### `defaut`
**Décisions présentées quand la pile des états est dépilée jusqu'à la fin sans rencontrer `arret: true`**

- **Condition** : `p.length === 0` (après traitement récursif)
- **Signification** : "Que faire après avoir traité tous les problèmes sans décision d'arrêt ?"
- **Moment** : Après avoir parcouru tous les états sans tomber sur un `arret: true`

---

## 🔍 Exemples détaillés

### Exemple 1 : `siRien` - Aucun problème dès le départ

```javascript
// Configuration JSON
{
  "militaire": {
    "siRien": "ne rien changer",
    "defaut": "ne rien changer",
    "selonEtats": { ... }
  }
}

// Appel
militaire([], [], null)

// Traitement :
// 1. p = [], t = [] → c'est le cas siRien
// 2. Retourne [Set("ne rien changer")]
```

**Cas d'usage** : Le joueur n'a aucun problème actif dans son royaume. Tout va bien !

---

### Exemple 2 : `defaut` - Tous les états traités sans arrêt

```javascript
// Configuration JSON
{
  "militaire": {
    "siRien": "ne rien changer",
    "defaut": "ne rien changer",
    "selonEtats": {
      "guerre": { "decisions": ["renforcer armée"], "arret": true },
      "stress": { "arret": false },     // Pas de décision, juste continue
      "prestige": { "arret": false }    // Pas de décision, juste continue
    }
  }
}

// Appel
militaire(['stress', 'prestige'], [], null)

// Traitement :
// 1. Traite 'stress' → pas de règle avec decisions, arret: false → continue
// 2. p = ['prestige'], t = []
// 3. Traite 'prestige' → pas de règle avec decisions, arret: false → continue
// 4. p = [], t = [] → c'est le cas defaut (on a dépilé tous les états)
// 5. Retourne [Set("ne rien changer")]
```

**Cas d'usage** : Le joueur a des problèmes mineurs (stress, prestige) qui ne nécessitent pas d'action militaire spécifique.

---

### Exemple 3 : Arrêt avant le `defaut`

```javascript
// Même configuration

// Appel
militaire(['stress', 'guerre', 'prestige'], [], null)

// Traitement :
// 1. Traite 'stress' → arret: false → continue
// 2. p = ['guerre', 'prestige'], t = []
// 3. Traite 'guerre' → decisions: ["renforcer armée"], arret: true
// 4. t = [Set("renforcer armée")]
// 5. STOP (arret: true) → ne va PAS jusqu'au defaut
// 6. Retourne [Set("renforcer armée")]
```

**Cas d'usage** : Parmi plusieurs problèmes, la guerre est prioritaire et déclenche un arrêt immédiat.

---

### Exemple 4 : Multiple états non-gérés

```javascript
// Configuration JSON
{
  "militaire": {
    "siRien": "tout va bien",
    "defaut": "aucune action militaire nécessaire",
    "selonEtats": {
      "guerre": { "decisions": ["renforcer armée"], "arret": true }
    }
  }
}

// Appel
militaire(['piete', 'enfant', 'cultInnov'], [], null)

// Traitement :
// 1. Traite 'piete' → pas de règle → continue
// 2. Traite 'enfant' → pas de règle → continue
// 3. Traite 'cultInnov' → pas de règle → continue
// 4. p = [], t = [] → cas defaut
// 5. Retourne [Set("aucune action militaire nécessaire")]
```

**Différence avec siRien** :
- **siRien** : `militaire([], [], null)` → "tout va bien" (pas de problèmes du tout)
- **defaut** : `militaire(['piete', 'enfant'], [], null)` → "aucune action militaire nécessaire" (problèmes non-militaires)

---

## 📊 Tableau récapitulatif

| Scénario | Input | Résultat | Cas |
|----------|-------|----------|-----|
| Aucun problème | `p = []` | `siRien` | ✅ siRien |
| Problèmes non gérés | `p = ['stress', 'piete']` | `defaut` | ✅ defaut |
| Problème avec arret | `p = ['guerre']` | `"renforcer armée"` | ⛔ Ni siRien ni defaut |
| Mix avec arret | `p = ['stress', 'guerre']` | `"renforcer armée"` | ⛔ Arrêt avant defaut |
| Liste vide après traitement | `p = ['stress']` (non géré) | `defaut` | ✅ defaut |

---

## 🔧 Implémentation dans le moteur

```javascript
process(p, t = [], o = null) {
    // Cas 1: siRien - pile vide dès le départ
    if (p.length === 0 && t.length === 0) {
        return this.handleRien(t);  // utilise "siRien"
    }

    // Cas 2: defaut - pile dépilée complètement sans arret
    if (p.length === 0) {
        return this.handleDefaut(t);  // utilise "defaut"
    }

    // Cas 3: traiter le problème actuel
    return this.handleProbleme(p, t, o);
}
```

**Pourquoi `t.length === 0` pour siRien ?**

En théorie, on pourrait aussi utiliser un flag pour savoir si c'est l'appel initial. Mais vérifier `t.length === 0` est équivalent car :
- Si `p` est vide dès le départ, `t` sera forcément vide aussi
- Si `p` devient vide après traitement, `t` peut contenir des éléments (ou pas)

---

## 🎯 Cas particuliers

### Cas : `siRien` et `defaut` identiques

```json
{
  "militaire": {
    "siRien": "ne rien changer",
    "defaut": "ne rien changer",
    ...
  }
}
```

**Pourquoi garder les deux ?**
- Permet une évolution future où les deux cas auraient des textes différents
- Plus explicite : on sait exactement quel cas est géré

### Cas : `siRien` null, `defaut` défini

```json
{
  "militaireAuto": {
    "siRien": "Automatisé",
    "defaut": "Automatisé",
    ...
  }
}
```

Si on voulait différencier :
```json
{
  "militaireAuto": {
    "siRien": "Automatisé (aucun problème)",
    "defaut": "Automatisé (problèmes non militaires)",
    ...
  }
}
```

---

## ✅ Validation

Pour vérifier que le moteur respecte bien cette sémantique :

```javascript
// Test siRien
const result1 = militaire([], [], null);
// Attendu : [Set("ne rien changer")] via siRien

// Test defaut
const result2 = militaire(['stress', 'piete'], [], null);
// Attendu : [Set("ne rien changer")] via defaut

// Test arrêt (ni siRien ni defaut)
const result3 = militaire(['guerre'], [], null);
// Attendu : [Set("renforcer armée")] via arret, pas de defaut
```

---

## 📝 Note importante

Cette distinction est cruciale pour la logique métier :
- **siRien** = "conseil par défaut en temps de paix"
- **defaut** = "conseil par défaut quand les problèmes ne sont pas de notre domaine"

Exemple pour un conseiller militaire :
- **siRien** : "En temps de paix, pas besoin de renforcement"
- **defaut** : "Ces problèmes (religieux, culturels...) ne nécessitent pas d'action militaire"

Les deux peuvent avoir le même résultat ("ne rien changer") mais la **raison** est différente !
