#!/usr/bin/env python3
"""
Script pour intégrer les fichiers JSON dans ck.html
Évite les problèmes CORS en mode file://
"""

import json
import os

# Mapping des fichiers JSON vers leurs IDs de balise script
JSON_FILES = {
    'militaire_conseillers.json': 'json-militaire-conseillers',
    'postes_cour.json': 'json-postes-cour',
    'gestion_prison.json': 'json-gestion-prison',
    'gestion_complots.json': 'json-gestion-complots',
    'gestion_hamecons_secrets.json': 'json-gestion-hamecons-secrets',
    'gestion_decisions.json': 'json-gestion-decisions'
}

def embed_json_in_html():
    """Intègre les JSON dans ck.html"""

    # Lire ck.html
    with open('ck.html', 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Marquer où insérer les scripts JSON (après ck.js)
    insertion_marker = '<script src="ck.js"></script>'

    if insertion_marker not in html_content:
        print("❌ Marqueur <script src=\"ck.js\"></script> non trouvé dans ck.html")
        return False

    # Construire les balises script JSON
    json_scripts = []
    json_scripts.append('\n  <!-- Configurations JSON embarquées (évite CORS) -->')

    for filename, script_id in JSON_FILES.items():
        if not os.path.exists(filename):
            print(f"⚠️  {filename} non trouvé - ignoré")
            continue

        # Lire le fichier JSON
        with open(filename, 'r', encoding='utf-8') as f:
            json_content = f.read()

        # Valider que c'est du JSON valide
        try:
            json.loads(json_content)
        except json.JSONDecodeError as e:
            print(f"❌ Erreur JSON dans {filename}: {e}")
            return False

        # Créer la balise script
        script_tag = f'\n  <script type="application/json" id="{script_id}">\n{json_content}\n  </script>'
        json_scripts.append(script_tag)
        print(f"✅ {filename} → <script id=\"{script_id}\">")

    # Insérer les scripts JSON dans le HTML
    json_scripts_str = ''.join(json_scripts)
    html_content = html_content.replace(
        insertion_marker,
        insertion_marker + json_scripts_str
    )

    # Écrire le nouveau ck.html
    with open('ck.html', 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"\n✅ {len(JSON_FILES)} fichiers JSON intégrés dans ck.html")
    print("🎯 Tu peux maintenant ouvrir ck.html en file:// sans erreur CORS !")
    return True

if __name__ == '__main__':
    print("🔧 Intégration des fichiers JSON dans ck.html...\n")
    success = embed_json_in_html()
    exit(0 if success else 1)
