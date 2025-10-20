# Instructions pour intégrer les JSON dans ck.html

Pour éviter les problèmes CORS, il faut intégrer les fichiers JSON directement dans le HTML.

## Méthode manuelle (copier-coller)

Ajouter ces balises **APRÈS** la ligne `<script src="ck.js"></script>` dans ck.html :

```html
<script src="ck.js"></script>

<!-- Configurations JSON embarquées (évite CORS) -->
<script type="application/json" id="json-militaire-conseillers">
<!-- COPIER-COLLER ICI tout le contenu de militaire_conseillers.json -->
</script>

<script type="application/json" id="json-postes-cour">
<!-- COPIER-COLLER ICI tout le contenu de postes_cour.json -->
</script>

<script type="application/json" id="json-gestion-prison">
<!-- COPIER-COLLER ICI tout le contenu de gestion_prison.json -->
</script>

<script type="application/json" id="json-gestion-complots">
<!-- COPIER-COLLER ICI tout le contenu de gestion_complots.json -->
</script>

<script type="application/json" id="json-gestion-hamecons-secrets">
<!-- COPIER-COLLER ICI tout le contenu de gestion_hamecons_secrets.json -->
</script>

<script type="application/json" id="json-gestion-decisions">
<!-- COPIER-COLLER ICI tout le contenu de gestion_decisions.json -->
</script>

<!-- Système data-driven -->
<script src="ck-data-engine.js"></script>
<script src="ck-data-loader.js"></script>
```

## Méthode automatique (avec un éditeur)

Dans VSCode ou tout éditeur :

1. Ouvrir militaire_conseillers.json
2. Tout sélectionner (Ctrl+A) et copier (Ctrl+C)
3. Dans ck.html, coller entre les balises `<script type="application/json" id="json-militaire-conseillers">` et `</script>`
4. Répéter pour chaque fichier JSON

## Vérification

Une fois fait, dans la console du navigateur, tu devrais voir :
```
✅ json-militaire-conseillers chargé (8 types)
✅ json-postes-cour chargé (6 types)
...
```
