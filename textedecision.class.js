class TexteDecision {
    texteId;
    cible = null;
    dirigeant = null;
    conditions = [];
    leviers = [];

    constructor(texteStr) {
        if (texteStr) {
            this.parseTexte(texteStr);
        }
        if (this.texteId == 'Augmenter levées') {
            this.leviers.push(new TexteDecision(this._appendParentConditions('Troupeau')));
        }
        if (this.texteId == 'prestige') {
            this.leviers.push(new TexteDecision(this._appendParentConditions('Secret SI Atout "Je suis bien en comparaison"')));
        }
        if (this.texteId == 'Domination') {
            this.leviers.push(new TexteDecision(this._appendParentConditions('Troupeau')));
        }
        if (this.texteId == 'Or') {
            this.leviers.push(new TexteDecision(this._appendParentConditions('Trésor')));
            this.leviers.push(new TexteDecision(this._appendParentConditions('Hameçon SI Atout "Obligations en or"')));
            this.leviers.push(new TexteDecision(this._appendParentConditions('Troupeau')));
            this.leviers.push(new TexteDecision(this._appendParentConditions('emprisonner')));
        }
        if (this.texteId == 'gloire') {
            this.leviers.push(new TexteDecision(this._appendParentConditions('prestige')));
            this.leviers.push(new TexteDecision(this._appendParentConditions('Secret SI Atout "Je suis bien en comparaison"')));
        }

    }

    _appendParentConditions(levierTexte) {
        const parentParts = [];
        if (this.dirigeant) parentParts.push(this.dirigeant);
        parentParts.push(...this.conditions);
        if (parentParts.length === 0) return levierTexte;

        const suffix = parentParts.join(' ET ');
        return levierTexte.includes(' SI ')
            ? levierTexte + ' ET ' + suffix
            : levierTexte + ' SI ' + suffix;
    }

    parseTexte(texte) {
        // Séparer la partie avant et après SI
        const siIndex = texte.indexOf(' SI ');
        const partieAvantSi = siIndex !== -1 ? texte.substring(0, siIndex) : texte;
        const partieApresSi = siIndex !== -1 ? texte.substring(siIndex + 4) : '';

        // Extraire la cible (mots en MAJUSCULES consécutifs)
        const cibleMatch = partieAvantSi.match(/\b[A-Z][A-Z\s]+(?=\s*$|\s*SI)/);
        this.cible = cibleMatch ? cibleMatch[0].trim() : null;

        // Extraire le texteId (tout avant la cible)
        if (this.cible) {
            this.texteId = partieAvantSi.replace(this.cible, '').trim();
        } else {
            this.texteId = partieAvantSi.trim();
        }

        // Parser les conditions après SI
        if (partieApresSi) {
            this.parseConditionsEtDirigeant(partieApresSi);
        }
    }

    parseConditionsEtDirigeant(texteConditions) {
        const dirigeantsConnus = [
            'Aventurier',
            'Gouvernement administratif',
            'NON Aventurier',
            'NON aventurier',
            'Dirigeant indépendant',
            'Vassal',
            'Nomade'
        ];

        // Séparer les conditions multiples avec ET
        const conditionsSeparees = texteConditions.split(/\s+ET\s+/);

        for (const condition of conditionsSeparees) {
            const conditionTrim = condition.trim();

            // Vérifier si c'est un dirigeant connu
            const estDirigeant = dirigeantsConnus.some(d =>
                conditionTrim.toLowerCase() === d.toLowerCase()
            );

            if (estDirigeant && !this.dirigeant) {
                // Normaliser la casse
                this.dirigeant = dirigeantsConnus.find(d =>
                    conditionTrim.toLowerCase() === d.toLowerCase()
                );
            } else {
                // C'est une condition normale
                this.conditions.push(conditionTrim);
            }
        }
    }

    /**
     * Reconstruit le texte de décision original à partir des propriétés
     * @returns {string} Le texte de décision formaté
     */
    toString() {
        let texte = this.texteId;

        // Ajouter la cible si présente
        if (this.cible) {
            texte += ' ' + this.cible;
        }

        // Construire la partie après SI si nécessaire
        const partiesApresSi = [];

        // Ajouter le dirigeant en premier
        if (this.dirigeant) {
            partiesApresSi.push(this.dirigeant);
        }

        // Ajouter les autres conditions
        if (this.conditions.length > 0) {
            partiesApresSi.push(...this.conditions);
        }

        // Joindre avec SI si des conditions existent
        if (partiesApresSi.length > 0) {
            texte += ' SI ' + partiesApresSi.join(' ET ');
        }

        return texte;
    }
}