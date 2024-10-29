/*
function (p, t=new Array()) {
    const  = ["",//0
    ];
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'revenu':
        case 'domaine':
        case 'controle':
        case 'assassinat':
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'dirigeantAInfluencer':
        case 'religieuxAInfluencer':
        case 'aInfluencer':
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan':
        case 'proclame':
        case 'terrJureSinonRevendic':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'piete':
        case 'foiChangemt':
        case 'renommee':
        case 'factionFoi':
        case 'factionCult':
        case 'enfant':
        case 'erudition':
        case 'influence':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        default:
            return (p.slice(1));
    }
}
*/

function militaire(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
        case 'terrJureSinonRevendic':
            let e = new Set().add("Renforcement mensuel");
            e.add("ajouter régiment");
            e.add("augmenter tailles")
            t.push(e);
            return t;
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add("pas Renforcement mensuel"));
            return t;
        case 'prestige':
        case 'religieuxAInfluencer':
        case 'piete':
        case 'renommee':
        case 'domaine':
        case 'factionFoi':
            case 'perteTerresRevoquer':
                case 'stress':
                    case 'enfant':
                        case 'erudition':
                    default:
            return militaire(p.slice(1), t);
    }
  }
function conjoint(p, t=new Array()) {
    const roles = ["S'occuper de chevalerie",//0
    "S'occuper de politique",//1
    "S'occuper des intrigues",//2
    "Patronner",//3
    "Gérer le domaine"//4
];
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
        case 'controle':
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(roles[0]));
            return t;
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'prestige':
            case 'vassalSOppose':
                t.push(new Set().add(roles[1]));
                return t;
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
        case 'aInfluencer':
        case 'hamecon':
        case 'perteTerresRevoquer':
        case 'enfant':
                t.push(new Set().add(roles[2]));
            return t;
        case 'terrJureSinonRevendic':
            t.push(new Set().add(roles[4]+" SI Convaincre le territoire de jure"));
            t.push(new Set().add(roles[3]));
            return t;
        case 'religieuxAInfluencer':
            case 'piete':
                case 'factionFoi':
                    case 'erudition':
                    t.push(new Set().add(roles[3]));
                return t;
        case 'revenu':
        case 'domaine':
            case 'factionCult':
            t.push(new Set().add(roles[4]));
            return t;
            case 'renommee':
                case 'stress':
                    default:
            return conjoint(p.slice(1), t);
    }
  }
function chancelier(p, t=new Array()) {
    const roles =
    ["Accorder une faveur royale",//0
    "Intégrer le titre",//1
    "Gérer les affaires intérieures",//2
    "Gérer les affaires étrangères"];//3
    const effets = [
        ["Fin de la guerre interne","Augmentation de l'opinion vassale"],
        ["Boost de tâches"],
        ["Fin de la guerre interne","Force la partition pour le vassal",
        "Contrat vassalique amélioré","Augmentation de l'opinion vassale"],
        ["Période de trêve diminué"]
    ];
    if (p.length === 0) {
        t.push(new Set().add(roles[2]));
        return t;
        }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'revenu':
        case 'terrJureSinonRevendic':
            t.push(new Set().add(roles[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t); 
        case 'declarationGuerre':
            t.push(new Set().add(roles[2]+' SI '+effets[2][2]));
            t.push(new Set().add(roles[3]+' SI '+effets[3][0]));
            return chancelier(p.slice(1), t);
        case 'vassalAInfluencer' :
        case 'vassalSOppose':
            t.push(new Set().add(roles[0]+" LUI"));
            t.push(new Set().add(roles[2]));
            return t;
        case 'enfant':
            t.push(new Set().add(roles[0]+" SI Séduire LUI"));
            t.push(new Set().add(roles[2]+" SI Séduire LUI"));
            return chancelier(p.slice(1), t); 
        case 'dirigeantAInfluencer':
        case 'prestige':
            t.push(new Set().add(roles[3]));
            return t;
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[2]+" SI "+effets[2][3]));
            t.push(new Set().add(roles[3]));
            return t;
        default:
            return chancelier(p.slice(1), t);
    }
}
function marechal(p, t=new Array()) {
    const roles = ["Gérer la garde royale", //0
    "Augmenter le contrôle comtal", //1
    "Former les commandants",//2
    "Organiser l'armée"];//3
    const effets = [ 
        ["Chevalier amélioré", "Complot hostile arrêté"],
        ["Augmentation de l'opinion du baron", "Augmentation de l'opinion comtale"],
        ["Trait de commandant", "Chevalier amélioré"],
        ["Présence militaire accrue", "Service bien organisé"]
       ];
    if (p.length === 0) {
        t.push(new Set().add(roles[1]+' SI '+effets[1][0]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
        case 'terrJureSinonRevendic':
            t.push(new Set().add(roles[1]));
            t.push(new Set().add(roles[3]));
            return t; 
        case 'controle':
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[1]));
            return marechal(p.slice(1), t);
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(roles[2]));
            return t;
        case 'survie' :
            t.push(new Set().add(roles[0]));
            return marechal(p.slice(1), t);
        case 'religieuxAInfluencer':
            case 'vassalAInfluencer':
            case 'vassalSOppose':
                t.push(new Set().add(roles[1]+" SI "+effets[1][0]+" LUI"));
                return marechal(p.slice(1),t);
        case 'enfant':
            t.push(new Set().add(roles[1]+" SI "+effets[1][0]+" Séduire LUI"));
            t.push(new Set().add(roles[0]));
            return marechal(p.slice(1),t);
    case 'factionFoi':
        case 'factionCult':
            t.push(new Set().add(roles[1]+" LUI"+" SI "+effets[1][1]));
            return marechal(p.slice(1),t);
    default:
            return marechal(p.slice(1), t);
    }
}
function religieux(p, t=new Array()) {
    const roles = ["Fabriquer une revendication comtale", //0
    "Convertir le comté", //1
    "Améliorer les relations religieuses"];//2
    const effets = [ 
        ["Revendication ducale"],
        ["Augmentation du développement comtal","Augmentation des levées comtales","Augmentation de l'opinion comtale"],
        ["Augmentation de l'opinion vassale"]
       ];
    if (p.length === 0) {
        t.push(new Set().add(roles[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
            t.push(new Set().add(roles[1]+' SI '+effets[1][1]));
            return religieux(p.slice(1), t); 
        case 'declarationGuerre':
                t.push(new Set().add(roles[1]+' SI '+effets[1][1]));
                t.push(new Set().add(roles[0]));
                return religieux(p.slice(1), t); 
            case 'vassalAInfluencer':
            case 'vassalSOppose':
                t.push(new Set().add(roles[2]+' SI '+effets[2][0]));
                return religieux(p.slice(1), t);
        case 'enfant':
            t.push(new Set().add(roles[2]+' SI Séduire '+effets[2][0]));
            return religieux(p.slice(1), t);
    case 'revenu':
        t.push(new Set().add(roles[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t);
        case 'terrJureSinonRevendic':
            t.push(new Set().add(roles[0]));
            return t;
        case 'religieuxAInfluencer':
            case 'piete':
                t.push(new Set().add(roles[2]));
                return t;
        case 'factionFoi':
            t.push(new Set().add(roles[1]));
            return religieux(p.slice(1), t);
        case 'factionCult':
                t.push(new Set().add(roles[1]+" LUI"+' SI '+effets[1][2]));
                return religieux(p.slice(1), t);                
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[1]+" SI "+effets[1][0]));
            return religieux(p.slice(1), t);
        default:
            return religieux(p.slice(1), t);
    }
}
function intendant(p, t=new Array()) {
    const roles = ["Promouvoir l'acceptation culturelle", //0
    "Promouvoir la culture", //1
    "Augmenter le développement comtal",//2
    "Collecter les impôts",//3
    "Convaincre le territoire de jure"];//4
    const effets = [ 
        ["Augmentation de l'acceptation culturelle","Augmentation de la croissance du développement","Opinion améliorée"],
        ["Augmentation de l'opinion comtale","Augmentation des levées","Augmentation des impôts"],
        ["Imposition efficace","Contrôle accru"],
        ["Impôts supplémentaires"],
        ["Gain de prestige"]
               ];
    if (p.length === 0) {
        t.push(new Set().add(roles[4]));
        t.push(new Set().add(roles[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'controle':
            t.push(new Set().add(roles[2]+' SI '+effets[2][1]));
            return intendant(p.slice(1), t); 
        case 'guerre':
        case 'declarationGuerre':
              t.push(new Set().add(roles[2]));
            return t; 
        case 'terrJureSinonRevendic':
            t.push(new Set().add(roles[4]));
            t.push(new Set().add(roles[2]));
            return t; 
        case 'revenu':
            t.push(new Set().add(roles[3]));
            return t;
        case 'vassalSOppose':
        case 'vassalAInfluencer':
            t.push(new Set().add(roles[0]+" LUI SI "+effets[0][2]));
            return intendant(p.slice(1), t);
        case 'enfant':
                t.push(new Set().add(roles[0]+" LUI SI Séduire "+effets[0][2]));
                return intendant(p.slice(1), t);
        case 'factionFoi':
            t.push(new Set().add(roles[1]+" LUI"+" SI "+effets[1][0]));
            return intendant(p.slice(1), t);
        case 'factionCult':
            t.push(new Set().add(roles[0]+" LUI"));
            t.push(new Set().add(roles[1]+" LUI"));
            return intendant(p.slice(1), t);           
        case 'perteTerresRevoquer':
            t.push(new Set().add(roles[4]));
            return intendant(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[3]));
            return t;
        case 'prestige':
            t.push(new Set().add(roles[4]+" SI "+effets[4][0]));
            return intendant(p.slice(1), t);
        default:
            return intendant(p.slice(1), t);
    }
}
function espion(p, t=new Array()) {
    const roles = ["Chercher des secrets", //0
    "Soutenir les complots", //1
    "Interrompre les complots"];//2
    const effets = [
        [],
        ["Secret découvert"],
        ["Complot hostile interrompu"],
    ];
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'hamecon':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[1]+" SI Fabriquer un hamecon"));
            t.push(new Set().add(roles[0]+" LUI")); 
            return espion(p.slice(1), t);;
        case 'assassinat':
            t.push(new Set().add(roles[1]));
            return t;
        case 'survie':
        case 'enfant':
            t.push(new Set().add(roles[2]));
            return t; 
        case 'vassalSOppose':
            case 'perteTerresRevoquer':
                t.push(new Set().add(roles[0]+" LUI"));
            return espion(p.slice(1), t);;
        case 'aInfluencer':
        case 'terrJureSinonRevendic':
            case 'prestige':
                case 'domaine':
        case 'religieuxAInfluencer':
            case 'piete':
                case 'renommee':
                    case 'factionFoi':
                        case 'stress':
                            case 'erudition':
                            default:
            return espion(p.slice(1), t);
    }
}
function prison(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("ne rien faire SAUF proposition SI non vassal"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
        case 'terrJureSinonRevendic':
            t.push(new Set().add("Torturer SI Sombres connaissances"));
            t.push(new Set().add("Négocier la libération &gt; Recruter SI chevalier possible"));
            return prison(p.slice(1), t);
        case 'recruterChevalier':
            t.push(new Set().add("Négocier la libération &gt; Recruter SI chevalier possible"));
            return prison(p.slice(1), t);
        case 'proclame':
            t.push(new Set().add("Négocier la libération &gt; Recruter SI chevalier possible ET Prouesse&gt;=8"));
            return prison(p.slice(1), t);
        case 'revenu':
            t.push(new Set().add("Négocier la libération &gt; Bannir SI or"));
            t.push(new Set().add("Rançonner &gt; or"));
            t.push(new Set().add("Négocier la libération &gt; hameçon SI paiement"));
            t.push(new Set().add("Rançonner &gt; hameçon SI paiement"));
            return prison(p.slice(1), t); 
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
        case 'hamecon':
        case 'perteTerresRevoquer':
        case 'enfant':
                t.push(new Set().add("Torturer SI Sombres connaissances"));
            return prison(p.slice(1), t); 
        case 'assassinat':
            t.push(new Set().add("Torturer SI Sombres connaissances"));
            return prison(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add("Négocier la libération &gt; hameçon SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("Rançonner &gt; hameçon SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("Négocier la libération SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("Négocier la libération &gt; Bannir SI or"));
            t.push(new Set().add("Rançonner &gt; or"));
            t.push(new Set().add("Négocier la libération &gt; hameçon SI paiement"));
            t.push(new Set().add("Rançonner &gt; hameçon SI paiement"));
            return prison(p.slice(1), t); 
        case 'religieuxAInfluencer':
            t.push(new Set().add("Torturer SI Sombres connaissances ET NON perte Piété"));
            return prison(p.slice(1), t); 
        case 'piete':
            t.push(new Set().add("NE PAS Torturer SI perte Piété"));
            return prison(p.slice(1), t); 
        case 'chevalierPartisan':
            t.push(new Set().add("Négocier la libération &gt; Recruter SI chevalier possible"));
            t.push(new Set().add("Négocier la libération &gt; hameçon SI mécène"));
            t.push(new Set().add("Rançonner &gt; hameçon SI mécène"));
            return prison(p.slice(1), t); 
        default:
            return prison(p.slice(1), t);
    }
}
function secrets(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
        case 'terrJureSinonRevendic':
            let e=new Set().add("Révéler SI emprisonnable ET Sombres connaissances");
            t.push(e);
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            return secrets(p.slice(1), t);
        case 'recruterChevalier':
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            return secrets(p.slice(1), t);
        case 'proclame':
            t.push(new Set().add("Faire chanter SI chevalier possible ET Prouesse&gt;=8"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible ET Prouesse&gt;=8"));
            return secrets(p.slice(1), t);
         case 'revenu':
            t.push(new Set().add("Faire chanter SI paiement hameçon ET or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
        case 'hamecon':
        case 'enfant':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances"));
            return secrets(p.slice(1), t); 
        case 'religieuxAInfluencer':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON perte Piété"));
            return secrets(p.slice(1), t); 
        case 'assassinat':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances"));
            return secrets(p.slice(1), t); 
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Faire chanter SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("ne rien faire SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("Faire chanter SI paiement hameçon ET or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'perteTerresRevoquer':
            t.push(new Set().add("Révéler SI motif de révocation LUI"));
            t.push(new Set().add("Révéler SI emprisonnable LUI"));
            return secrets(p.slice(1), t); 
        case 'chevalierPartisan':
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Faire chanter SI mécène"));
            return secrets(p.slice(1), t); 
        default:
            return secrets(p.slice(1), t);
    }
}
function hamec(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
        case 'terrJureSinonRevendic':
            t.push(new Set().add("Recruter SI chevalier possible"));
            return hamec(p.slice(1), t);
        case 'recruterChevalier':
            t.push(new Set().add("Recruter SI chevalier possible"));
            return hamec(p.slice(1), t);
        case 'proclame':
            t.push(new Set().add("Recruter SI chevalier possible ET Prouesse&gt;=8"));
            return hamec(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("ne rien faire SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            return hamec(p.slice(1), t); 
        case 'chevalierPartisan':
            t.push(new Set().add("Recruter SI chevalier possible"));
            t.push(new Set().add("Déplacer camp"));
            return hamec(p.slice(1), t);
        default:
            return hamec(p.slice(1), t);
    }
}
function influence(p, t=new Array()) {
    if (p.length === 0) {
        let e=new Set().add("Influencer vassal puissant non intimidé non factiable");
        e.add("Influencer vassal puissant intimidé non factiable");
        e.add("Influencer vassal non intimidé non factiable");
        e.add("Influencer vassal intimidé non factiable");
        e.add("Influencer allié");
        e.add("Influencer conseiller religieux");
        e.add("Influencer seigneur lige");
        e.add("Influencer conjoint");
        e.add("Influencer maître-espion");
        e.add("Influencer médecin");
        t.push(e);
        return t;
    } 
    const pp = p[0];
    switch(pp) {
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add("Influencer LUI"));
            return influence(p.slice(1), t);
        /*case 'pertesTerres':*/
        case 'enfant':
            t.push(new Set().add("Influencer L'UN SI adoption/aventurier"));
            t.push(new Set().add("Séduire"));
            return influence(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Influencer LUI"));
            return influence(p.slice(1), t);
        case 'chevalierPartisan':
            t.push(new Set().add("Influencer ami SI chevalier possible ET hors camp &gt; meilleur ami"));
            t.push(new Set().add("Influencer amant SI chevalier possible ET hors camp &gt; âme soeur"));
            t.push(new Set().add("Séduire SI AUCUN héritier - chevalier possible"));
            return influence(p.slice(1), t);
        default:
            return influence(p.slice(1), t);
    }
}
function decisions(p, t=new Array()) {
    if (t.length === 0) {
        let e00=new Set().add("stress éviter niveau+");
        t.push(e00);
    }
    if (p.length === 0) {
        let e=new Set().add("points d'expérience");
        e.add("Renommée");
        e.add("Légitimation");
        e.add("légende");
        e.add("artefact");
        e.add("stress descendre niveau 0");
        e.add("mission");
        e.add("redoutabilité");
        e.add("vassal non factiable");
        e.add("éviter rivalité");
        e.add("Piété");
        e.add("Prestige");
        e.add("hameçon");
        e.add("recruter");
        e.add("développement");
        e.add("provisions");
        e.add("revenu");
        e.add("Influence");
        e.add("stress descendre");
        t.push(e);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'controle':
            let e0=new Set().add("contrôle");
            e0.add("Martialité");
            t.push(e0);
            return decisions(p.slice(1), t);
        case 'declarationGuerre':
            let e17=new Set().add("Martialité");
            e17.add("augmenter levées");
            e17.add("contrôle SI &lt;100");
            e17.add("développement");
            e17.add("Prouesse");
            e17.add("recruter SI chevalier possible");
            e17.add("emprisonner SI Sombres connaissances");
            e17.add("emprisonner SI chevalier possible");
            t.push(e17);
            return decisions(p.slice(1), t);
        case 'guerre':
            let e1=new Set().add("Prouesse");
            e1.add("Martialité");
            e1.add("augmenter levées");
            e1.add("contrôle SI &lt;100");
            e1.add("développement");
            e1.add("recruter SI chevalier possible");
            e1.add("emprisonner SI Sombres connaissances");
            e1.add("emprisonner SI chevalier possible");
            t.push(e1);
            return decisions(p.slice(1), t);
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
            let e2=new Set().add("influence LUI");
            e2.add("Diplomatie");
            e2.add("Intrigue");
            e2.add("emprisonner SI Sombres connaissances");
            t.push(e2);
            return decisions(p.slice(1), t); 
        case 'enfant':
                let e20=new Set().add("Prestige SI adoption/aventurier");
                e20.add("influence L'UN SI adoption/aventurier");
                e20.add("Amant");
                e20.add("coucher");
                e20.add("influence Séduire LUI");
                e20.add("Intrigue");
                e20.add("emprisonner SI Sombres connaissances");
                e20.add("stress descendre");
                e20.add("santé");
				e20.add("provisions");
                e20.add("opinion maître-espion");
				e20.add("opinion médecin");
                t.push(e20);
                return decisions(p.slice(1), t); 
        case 'aInfluencer':
            let e3=new Set().add("influence LUI");
            e3.add("Intrigue");
            e3.add("emprisonner SI Sombres connaissances");
            t.push(e3);
            return decisions(p.slice(1), t); 
        case 'hamecon':
            let e4=new Set().add("hameçon LUI");
            e4.add("Intrigue");
            e4.add("emprisonner SI Sombres connaissances");
            t.push(e4);
            return decisions(p.slice(1), t);
        case 'assassinat':
            let e5=new Set().add("Intrigue");
            e5.add("emprisonner SI Sombres connaissances");
            t.push(e5);
            return decisions(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            let eAgent=new Set().add("influence SI vassal direct LUI OU courtisan LUI OU invité LUI");
            eAgent.add("Intrigue");
            eAgent.add("emprisonner SI Sombres connaissances");
            eAgent.add("Influence");
            eAgent.add("revenu");
            eAgent.add("contrôle SI &lt;100");
            eAgent.add("développement");
            eAgent.add("Intendance");
            eAgent.add("emprisonner");
            eAgent.add("hameçon SI paiement");
            eAgent.add("Prestige");
            eAgent.add("hameçon SI vassal direct LUI OU courtisan LUI OU invité LUI");
            t.push(eAgent);
            return decisions(p.slice(1), t);
        case 'recruterChevalier':
            let e6=new Set().add("recruter chevalier");
            e6.add("hameçon SI chevalier possible");
            e6.add("Martialité");
            e6.add("emprisonner SI chevalier possible");
            e6.add("Prestige");
            t.push(e6);
            return decisions(p.slice(1), t);
        case 'proclame':
            let e7=new Set().add("recruter chevalier SI Prouesse&gt;=8");
            e7.add("Martialité");
            e7.add("emprisonner SI chevalier possible ET Prouesse&gt;=8");
            e7.add("Prestige");
            t.push(e7);
            return decisions(p.slice(1), t);
        case 'perteTerresRevoquer':
            let e8=new Set().add("Intrigue");
            /* perteTerres pas enfant e8.add("Erudition");
            e8.add("ait enfant"); */
            t.push(e8);
            return decisions(p.slice(1), t);
        case 'revenu':
            let e9=new Set().add("revenu");
            e9.add("contrôle SI &lt;100");
            e9.add("développement");
            e9.add("Intendance");
            e9.add("emprisonner");
            e9.add("hameçon SI paiement");
            t.push(e9);
            return decisions(p.slice(1), t);
        case 'domaine':
            let e10=new Set().add("Intendance");
            t.push(e10);
            return decisions(p.slice(1), t);
        case 'terrJureSinonRevendic':
            let e11=new Set().add("augmenter magnificence de la Cour");
            e11.add("Intendance");
            e11.add("Erudition");
            e11.add("Piété");
            e11.add("Prouesse");
            e11.add("Martialité");
            e11.add("augmenter levées");
            e11.add("contrôle SI &lt;100");
            e11.add("développement");
            e11.add("recruter SI chevalier possible");
            e11.add("emprisonner SI Sombres connaissances");
            e11.add("emprisonner SI chevalier possible");
            t.push(e11);
            return decisions(p.slice(1), t);
        case 'survie':
            let e14=new Set().add("santé");
            e14.add("provisions");
            e14.add("stress descendre");
			e14.add("opinion maître-espion");
			e14.add("opinion médecin");
            t.push(e14);
            return decisions(p.slice(1), t);
        case 'stress':
            t.push(new Set().add("stress descendre"));
            return decisions(p.slice(1), t);
        case 'prestige':
            t.push(new Set().add("Prestige"));
            return decisions(p.slice(1), t);
        case 'erudition':
                t.push(new Set().add("Erudition"));
                return decisions(p.slice(1), t);
        case 'religieuxAInfluencer':
            let e12=new Set().add("influence LUI");
            e12.add("Piété");
            e12.add("Intrigue");
            e12.add("Erudition");
            e12.add("emprisonner SI Sombres connaissances");
            t.push(e12);
            return decisions(p.slice(1), t);
        case 'piete':
            let e16=new Set().add("Piété");
            e16.add("Erudition");
            t.push(e16);
            return decisions(p.slice(1), t);
        case 'factionFoi':
            let e15=new Set().add("opinion comtale LUI");
            e15.add("Piété");
            e15.add("Erudition");
            t.push(e15);
            return decisions(p.slice(1), t);
        case 'factionCult':
            let e152=new Set().add("opinion comtale LUI");
            e152.add("Erudition");
            t.push(e152);
            return decisions(p.slice(1), t);
        case 'vassalSOppose':
            let e13=new Set().add("influence LUI");
            e13.add("emprisonner LUI");
            e13.add("redoutabilité");
            e13.add("Diplomatie");
            e13.add("Intrigue");
            t.push(e13);
            return decisions(p.slice(1), t);
        case 'renommee':
            t.push(new Set().add("Renommée"));
            return decisions(p.slice(1), t);
        case 'chevalierPartisan':
            let e_champ=new Set().add("recruter chevalier");
            e_champ.add("hameçon SI chevalier possible");
            e_champ.add("emprisonner SI chevalier possible");
            e_champ.add("améliorer le camp &gt; Recherche de talents");
            e_champ.add("conjoint SI chevalier possible");
            e_champ.add("héritier - chevalier possible");
            e_champ.add("meilleur ami SI chevalier possible ET hors camp");
            e_champ.add("âme soeur SI chevalier possible ET hors camp");
            t.push(e_champ);
            return decisions(p.slice(1), t);    
        case 'influence':
            t.push(new Set().add("Influence"));
            return decisions(p.slice(1), t);
        default:
            return decisions(p.slice(1), t);
    }
}
function typeCour(p, t=new Array()) {
    const cours = ["Cour diplomatique", //0
    "Cour guerrière", //1
    "Cour administrative",//2
    "Cour d'intrigue", //3
    "Cour érudite"]; //4
    if (p.length === 0) {
        t.push(new Set().add(cours[4]));
        t.push(new Set().add(cours[0]));
        t.push(new Set().add(cours[2]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'prestige':
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'enfant':
            t.push(new Set().add(cours[3]));
            t.push(new Set().add(cours[0]));
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'assassinat':
            t.push(new Set().add(cours[3]));
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(cours[3]));
            t.push(new Set().add(cours[4]));
            t.push(new Set().add(cours[0]));
            t.push(new Set().add(cours[2]));
            return typeCour(p.slice(1), t);
        case 'hamecon':
            t.push(new Set().add(cours[3]));
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        //case 'perteTerresRevoquer':
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
                t.push(new Set().add(cours[0]));
                t.push(new Set().add(cours[3]));
                t.push(new Set().add(cours[4]));
                return typeCour(p.slice(1), t);
        case 'guerre':
        case 'declarationGuerre':
            t.push(new Set().add(cours[1]));
            t.push(new Set().add(cours[2]));
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'domaine':
        case 'piete':
        case 'erudition':
        case 'factionFoi':
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'factionCult':
        case 'revenu':
            t.push(new Set().add(cours[2]));
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'renommee':
        case 'controle':
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(cours[4]));
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'terrJureSinonRevendic':
            t.push(new Set().add(cours[0]));
            t.push(new Set().add(cours[4]));
            t.push(new Set().add(cours[1]));
            return typeCour(p.slice(1), t);
        default:
            return typeCour(p.slice(1), t);
    }
}
function commoditesMode(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("laisser"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'prestige':
        case 'terrJureSinonRevendic':
            t.push(new Set().add("monter"));
            return t;
        default:
            return commoditesMode(p.slice(1), t);
    }
}
function commoditesNourriture(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("laisser"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'survie':
            case 'stress':
                case 'enfant':
        case 'prestige':
        case 'terrJureSinonRevendic':
            t.push(new Set().add("monter"));
            return t;
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        default:
            return commoditesNourriture(p.slice(1), t);
    }
}
function commoditesHebergement(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("monter au moins jusqu'à 2"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'enfant':
        case 'terrJureSinonRevendic':
            t.push(new Set().add("monter"));
            return t;
        case 'domaine':
                t.push(new Set().add("VERIF heb"));
                return t;
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("monter"));
            return t;
        default:
            return commoditesHebergement(p.slice(1), t);
    }
}
function commoditesDomestiques(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("laisser"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'survie':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'aInfluencer':
        case 'recruterChevalier':
        case 'proclame':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'enfant':
        case 'terrJureSinonRevendic':
            t.push(new Set().add("monter"));
            return t;
        default:
            return commoditesDomestiques(p.slice(1), t);
    }
}
function activTournoi(p, t=new Array()) {
    const intentions = [
        "Se détendre",//0
        "Triompher",//1
        "Recruter",//2
        "Tuer",//3
        "Séduire",//4
        "Nouer une amitié"//5
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[5]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(intentions[5]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(intentions[5]+" vassal non intimidé non factiable"));
        t.push(new Set().add(intentions[5]+" vassal intimidé non factiable"));
        t.push(new Set().add(intentions[1]));
        t.push(new Set().add(intentions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /* case 'perteTerres':*/
        case 'enfant':
            t.push(new Set().add(intentions[4]));
            t.push(new Set().add(intentions[5]+" LUI Séduire"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activTournoi(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[5]+" LUI"));
            t.push(new Set().add(intentions[1]));
            return activTournoi(p.slice(1),t);
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
            case 'vassalSOppose':
                t.push(new Set().add(intentions[5]+" LUI"));
                return activTournoi(p.slice(1),t);
        case 'recruterChevalier':
            case 'proclame':
                case 'guerre':
        case 'declarationGuerre':
              t.push(new Set().add(intentions[2]));
            return t;
        case 'terrJureSinonRevendic':
            t.push(new Set().add(intentions[1]));
            t.push(new Set().add(intentions[2]));
            return t;
        case 'revenu':
        case 'controle':
        case 'hamecon':
            case 'prestige':
                case 'factionFoi':
                    case 'factionCult':
                        case 'erudition':
                    t.push(new Set().add(intentions[1]));
                return activTournoi(p.slice(1),t);
        case 'survie':
            case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'religieuxAInfluencer':
            t.push(new Set().add(intentions[5]+" LUI"));
            t.push(new Set().add(intentions[1]));
            return activTournoi(p.slice(1),t);
       case 'chevalierPartisan':
            t.push(new Set().add(intentions[2]));
            t.push(new Set().add(intentions[4]+" SI AUCUN héritier - chevalier possible"));
            return activTournoi(p.slice(1),t);
        default:
            return activTournoi(p.slice(1),t);
    }
}
function tournoiHeb(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Campements luxueux"));
        t.push(new Set().add("Pavillons simples"));
        t.push(new Set().add("Tentes délabrées"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Tentes délabrées"));
            return t;
        case 'chevalierPartisan':
            t.push(new Set().add("A DEFINIR"));
            return t;
        default:
            return tournoiHeb(p.slice(1),t);
    }
}
function prix(p, t=new Array()) {
    const tabPrix = [
        "Prix quelconques",//0
        "Prix décents",//1
        "Prix corrects",//2
        "Bons prix",//3
        "Prix magnifiques"//4
    ];
    if (p.length === 0) {
        t.push(new Set().add(tabPrix[3]));
        t.push(new Set().add(tabPrix[2]));
        t.push(new Set().add(tabPrix[1]));
        t.push(new Set().add(tabPrix[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add(tabPrix[0]));
            return t;
        // objectifs artefact
        case 'controle':
        case 'hamecon':
        case 'prestige':
        case 'factionFoi':
            case 'factionCult':
                case 'religieuxAInfluencer':
        case 'erudition':
        case 'vassalSOppose':
        case 'vassalAInfluencer':
        case 'assassinat':
            t.push(new Set().add(tabPrix[4]+" SI Triompher"));
            t.push(new Set().add(tabPrix[3]+" SI Triompher"));
            t.push(new Set().add(tabPrix[2]+" SI Triompher"));
            t.push(new Set().add(tabPrix[1]+" SI Triompher"));
            t.push(new Set().add(tabPrix[0]+" SI Triompher"));
            return prix(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(tabPrix[4]+" SI Triompher"));
            t.push(new Set().add(tabPrix[3]+" SI Triompher"));
            t.push(new Set().add(tabPrix[2]+" SI Triompher"));
            t.push(new Set().add(tabPrix[1]+" SI Triompher"));
            t.push(new Set().add(tabPrix[0]));
            return t;
        case 'chevalierPartisan':
            t.push(new Set().add("A DEFINIR"));
            return t;
        default:
            return prix(p.slice(1),t);
    }
}
function activMariage(p, t=new Array()) {
    const intentions = [
        "Se détendre",//0
        "Tuer",//1
        "Séduire",//2
        "Diplomatie",//3
        "Semer le chaos",//4
        "Répandre la légende",//5
        "Légitimation"//6
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[6]));
        t.push(new Set().add(intentions[5]));
        t.push(new Set().add(intentions[4]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /*case 'perteTerres':*/
        case 'enfant':
            t.push(new Set().add(intentions[2]));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':  //Intrigue+influence,hameçon,Prestige,Or
            t.push(new Set().add(intentions[1]+" LUI"));
            return activMariage(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" LUI"));
            return activMariage(p.slice(1),t);
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activMariage(p.slice(1),t);
        case 'survie':
            case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'chevalierPartisan':
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier - chevalier possible"));
            return activMariage(p.slice(1),t);
        default:
            return activMariage(p.slice(1),t);
    }
}
function activFestin(p, t=new Array()) {
    const intentions = [
        "Se détendre",//0
        "Tuer",//1
        "Séduire",//2
        "Nouer une amitié",//3
        "Semer le chaos",//4
        "Répandre la légende",//5
        "Légitimation"//6
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[6]));
        t.push(new Set().add(intentions[5]));
        t.push(new Set().add(intentions[3]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(intentions[3]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(intentions[3]+" vassal non intimidé non factiable"));
        t.push(new Set().add(intentions[3]+" vassal intimidé non factiable"));
        t.push(new Set().add(intentions[4]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /*case 'perteTerres':*/
        case 'enfant':
            t.push(new Set().add(intentions[2]));
            t.push(new Set().add(intentions[3]+" LUI"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':  //Intrigue+influence,hameçon,Prestige,Or
            t.push(new Set().add(intentions[1]+" LUI"));
            return activFestin(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFestin(p.slice(1),t);
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
        case 'vassalAInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFestin(p.slice(1),t);
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'chevalierPartisan':
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier - chevalier possible"));
            return activFestin(p.slice(1),t);
         default:
            return activFestin(p.slice(1),t);
    }
}
function activFun(p, t=new Array()) {
    const intentions = [
        "Pleurer la perte",//0
        "Tuer",//1
        "Séduire",//2
        "Nouer une amitié",//3
        "Légitimation"//4
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[4]));
        t.push(new Set().add(intentions[3]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(intentions[3]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(intentions[3]+" vassal non intimidé non factiable"));
        t.push(new Set().add(intentions[3]+" vassal intimidé non factiable"));
        t.push(new Set().add(intentions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'assassinat':
            t.push(new Set().add(intentions[1]+" LUI"));
            return activFun(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFun(p.slice(1),t);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'dirigeantAInfluencer':
        case 'religieuxAInfluencer':
        case 'aInfluencer':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFun(p.slice(1),t);
        case 'terrJureSinonRevendic':
            t.push(new Set().add(intentions[0]+" SI Revendication comtale"));
            return activFun(p.slice(1),t);
        case 'piete':
        case 'foiChangemt':
        case 'factionFoi':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'enfant':
            t.push(new Set().add(intentions[2]));
            return activFun(p.slice(1),t);
        case 'chevalierPartisan':
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier - chevalier possible"));
            return activFun(p.slice(1),t);
        default:
            return activFun(p.slice(1),t);
    }
}
function activChasse(p, t=new Array()) {
    const intentions = [
        "Se détendre",//0
        "Abattre une bête",//1
        "Tuer",//2
        "Séduire",//3
        "Nouer une amitié",//4
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[4]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(intentions[4]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(intentions[4]+" vassal non intimidé non factiable"));
        t.push(new Set().add(intentions[4]+" vassal intimidé non factiable"));
        t.push(new Set().add(intentions[1]));
        t.push(new Set().add(intentions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /*case 'perteTerres':*/
        case 'enfant':
            t.push(new Set().add(intentions[3]));
            t.push(new Set().add(intentions[4]+" LUI"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(intentions[2]+" LUI"));
            return activChasse(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[4]+" LUI"));
            t.push(new Set().add(intentions[1]));
            return activChasse(p.slice(1),t);
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'aInfluencer':
        case 'religieuxAInfluencer':
            case 'vassalSOppose':
                t.push(new Set().add(intentions[4]+" LUI"));
                return activChasse(p.slice(1),t);
            case 'survie':
                case 'stress':
                    t.push(new Set().add(intentions[0]));
                return t;
        case 'prestige':
            t.push(new Set().add(intentions[1]));
            return activChasse(p.slice(1),t);
        case 'chevalierPartisan':
            t.push(new Set().add(intentions[3]+" SI AUCUN héritier - chevalier possible"));
            return activChasse(p.slice(1),t);
        default:
            return activChasse(p.slice(1),t);
    }
}
function participChasse(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Groupes de gardes-chasse"));
        t.push(new Set().add("Groupes de chasse"));
        t.push(new Set().add("Gardes-chasse locaux"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add("Gardes-chasse locaux"));
            return t;
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
            return t;
        default:
            return participChasse(p.slice(1),t);
    }
}
function grpeChasse(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Grand groupe"));
        t.push(new Set().add("Groupe raisonnable"));
        t.push(new Set().add("Petit groupe"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add("Petit groupe"));
            return t;
        case 'prestige':
            t.push(new Set().add("Grand groupe"));
            t.push(new Set().add("Groupe raisonnable"));
            return grpeChasse(p.slice(1),t);
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
            return t;
        default:
            return grpeChasse(p.slice(1),t);
    }
}
function particip(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Participe"));
        return t;
    }
    const pp = p[0];
    switch(p, t=new Array()) {
        //case 'perteTerres':
        case 'survie':
        case 'enfant':
            t.push(new Set().add("Ne participe pas"));
            return t;
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'recruterChevalier':
        case 'guerre':
        case 'declarationGuerre':
        case 'controle':
        case 'revenu':
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'aInfluencer':
        case 'hamecon':
        case 'proclame':
            case 'terrJureSinonRevendic':
                case 'prestige':
                    case 'domaine':
        case 'religieuxAInfluencer':
            case 'piete':
                case 'vassalSOppose':
                    case 'factionFoi':
                        case 'factionCult':
                            case 'perteTerresRevoquer':
                            case 'renommee':
        case 'chevalierPartisan':
            t.push(new Set().add("Participe"));
            return t;
        default:
            return particip(p.slice(1),t);
    }
}
function activTournee(p, t=new Array()) {
    const types = ["de Sa Majesté",//0
        "d'intimidation",//1
        "d'imposition"//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(types[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'vassalAInfluencer':
            case 'prestige':
                case 'vassalSOppose':
                    t.push(new Set().add(types[0]));
                    return t;
        case 'revenu':
            t.push(new Set().add(types[2]));
            return t;
            case 'factionFoi':
                case 'factionCult':
                    t.push(new Set().add(types[1]));
                    return t;
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(types[2]));
            return t;
        default:
            return activTournee(p.slice(1),t);
    }
}
function intentionTournee(p, t=new Array()) {
    const intentions = ["Se détendre",//0
        "S'adonner à la luxure",//1
        "Faire preuve d'altruisme",//2
        "Rendre justice",//3
        "Répandre la légende",//4
        "Légitimation"//5
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[5]));
        t.push(new Set().add(intentions[4]));
        t.push(new Set().add(intentions[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'enfant':
            t.push(new Set().add(intentions[1]));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'survie':
            case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'guerre':
        case 'revenu':
        case 'controle':
        case 'declarationGuerre':
            case 'terrJureSinonRevendic':
                case 'perteTerresRevoquer':
                    case 'vassalSOppose':

                    t.push(new Set().add(intentions[3]));
                return t;
        case 'religieuxAInfluencer':
            case 'piete':
                case 'factionFoi':
                    case 'factionCult':
                        t.push(new Set().add(intentions[2]));
                return t;
        case 'renommee':
            t.push(new Set().add("VERIF"));
            return intentionTournee(p.slice(1),t);
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
            return t;
        default:
            return intentionTournee(p.slice(1),t);
    }
}
function suite(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Suite nombreuse"));
        t.push(new Set().add("Entourage modeste"));
        t.push(new Set().add("Suite modeste"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'prestige':
            t.push(new Set().add("Suite nombreuse"));
            t.push(new Set().add("Entourage modeste"));
            return suite(p.slice(1),t);
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Suite modeste"));
            return t;    
        default:
            return suite(p.slice(1),t);
    }
}
function luxe(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Mobilier en excès"));
        t.push(new Set().add("Mobilier luxueux"));
        t.push(new Set().add("Aucun luxe"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add("Aucun luxe"));
            return t;
        // objectif de la tournée
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'factionFoi':
        case 'prestige':
            t.push(new Set().add("Mobilier en excès"));
            t.push(new Set().add("Mobilier luxueux"));
            t.push(new Set().add("Luxe extravagant"));
            t.push(new Set().add("Biens de luxe essentiels"));
            return luxe(p.slice(1),t);
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
            return t;
        default:
            return luxe(p.slice(1),t);
    }
}
function regence(p, t=new Array()) {
    const roles = ["Remplir les coffres", //0
    "Gonfler les rangs", //1
    "Promouvoir l'autorité"];//2
    if (p.length === 0) {
        t.push(new Set().add(roles[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        //case 'perteTerres':
        case 'vassalAInfluencer':
        case 'domaine':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'factionFoi':
        case 'factionCult':
            t.push(new Set().add(roles[2]));
            return t;
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(roles[0]));
            return t;
        case 'recruterChevalier':
        case 'proclame':
        case 'guerre':
        case 'declarationGuerre':
            case 'terrJureSinonRevendic':
                t.push(new Set().add(roles[1]));
                return t;
        case 'revenu':
            t.push(new Set().add(roles[0]));
            return t;
        default:
                                 return regence(p.slice(1), t);
    }
}
function epidemies(p, t=new Array()) {
    const fonctions = ["Fonctions habituelles",//0
    "Atténuer les épidémies",
    "Faire de la recherche avancée",
    "Exercer la charité"
    ];
    if (t.length === 0) { t.push(new Set().add(fonctions[1]+" SI Epidémies du pays")); }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add(fonctions[2]+" SI Aucun coût"));
            t.push(new Set().add(fonctions[0]+" SI Médecin"));
            t.push(new Set().add("ne rien faire"));
            return t;
        case 'survie':
               t.push(new Set().add(fonctions[1]));
            return t;
        case 'piete':
            t.push(new Set().add(fonctions[3]));
            return t;
        case 'guerre':
            case 'domaine':
                case 'controle':
                    case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'vassalAInfluencer':
                case 'vassalSOppose':
                case 'dirigeantAInfluencer':
                case 'religieuxAInfluencer':
                case 'aInfluencer':
                case 'hamecon':
                case 'recruterChevalier':
                case 'proclame':
                case 'terrJureSinonRevendic':
                case 'declarationGuerre':
                    case 'prestige':
                case 'renommee':
                case 'factionFoi':
                    case 'factionCult':
                        case 'perteTerresRevoquer':
                        case 'enfant':
                            case 'erudition':
            case 'chevalierPartisan':
                t.push(new Set().add(fonctions[2]));
            return t;        
        //case 'perteTerres':
        case 'stress':
            default:
            return epidemies(p.slice(1));
    }
}

function campObjectif(p, t=new Array()) {
    const obj = ["Nous sommes Vagabonds!",//0
        "Devenir lames à louer",//1
        "Devenir érudits",//2
        "Devenir explorateurs",//3
        "Devenir écumeurs",//4
        "Devenir légitimistes",//5
        ];
    if (p.length === 0) {
        t.push(new Set().add(obj[5]));
        t.push(new Set().add(obj[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'prestige':
        case 'piete':
            t.push(new Set().add(obj[0]));
            return t;
        case 'guerre':
            t.push(new Set().add(obj[1]));
            return t;
        case 'survie':
            t.push(new Set().add(obj[3]));
            return t;
        case 'revenu':
            t.push(new Set().add(obj[4]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'dirigeantAInfluencer':
        case 'religieuxAInfluencer':
        case 'aInfluencer':
        case 'hamecon':
        case 'chevalierPartisan':
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(obj[2]));
            return t;
         default:
            return campObjectif(p.slice(1));
    }
}

function evidence(id, texte, ttLeTps=false) {
    let e=document.getElementById(id);
    console.log(e.innerHTML);
    console.log(texte);
    if(ttLeTps || (e.innerHTML != texte) && (e.innerHTML != '<strong>'+texte+'</strong>')) {
        texte = '<strong>'+texte+'</strong>';
    }
    e.innerHTML=texte;
}
  // Maintenant, la fonction pour mettre à jour l'interface utilisateur et afficher les résultats :
  function calculate() {
    //const domainePictoOuGuerre = document.getElementById('domainePictoOuGuerre').value;
    // Récupération des éléments enfants de la div dropItems
    const dropItemsChildren = document.getElementById('dropItems').getElementsByClassName('dropped-item');
    // Initialisation d'un tableau pour stocker les valeurs
    let p = [];
    // Parcours des éléments enfants pour extraire leurs valeurs
            for (let i = 0; i < dropItemsChildren.length; i++) {
            let value = dropItemsChildren[i].innerHTML;
            p.push(value);
        }
    // Affichage du tableau des valeurs dans la console à titre d'exemple
    console.log(p);
    //const successions = document.getElementById('successions').valueAsNumber;
  
    //const p = prios([domainePictoOuGuerre], domaineSituation, successions);
    const militaireResult = militaire(p);
    const conseilConjointResult = conjoint(p);
    // Vous pouvez appeler les autres fonctions de la même manière ici
    const conseilChancelierResult = chancelier(p);
    const conseilMarechalResult = marechal(p);
    const religieuxResult = religieux(p);
    const intendantResult = intendant(p);
    const espionResult = espion(p);
    const prisonResult = prison(p);
    const secretsResult = secrets(p);
    const hamecResult = hamec(p);
    const influenceResult = influence(p);
    const decisionsResult = decisions(p);
    const courResult = typeCour(p);
    const commoditesModeResult = commoditesMode(p);
    const commoditesNourritureResult = commoditesNourriture(p);
    const commoditesHebergResult = commoditesHebergement(p);
    const commoditesDomestiquesResult = commoditesDomestiques(p);
    const activTournoiResult = activTournoi(p);
    const participResult = particip(p);
    const regenceResult=regence(p);
    const activMariageResult = activMariage(p);
    const activChasseResult = activChasse(p);
    const participChasseResult = participChasse(p);
    const grpeChasseResult = grpeChasse(p);
    const tourneeResult = activTournee(p);
    const hebergResult = tournoiHeb(p);
    const prixResult = prix(p);
    const suiteResult = suite(p);
    const luxeResult = luxe(p);
    const tourneeIntentionResult = intentionTournee(p);
    const epidResult = epidemies(p);
    const festinResult = activFestin(p);
    const funResult = activFun(p);
    const campObjectifResult = campObjectif(p);
    // Afficher les résultats dans la section des résultats sur la page
    //console.log(epidResult);
    evidence('militaireResult', sansDoublon(militaireResult));
    evidence('conseilConjointResult', sansDoublon(conseilConjointResult));
    evidence('conseilChancelierResult', sansDoublon(conseilChancelierResult, "SINON"));
    evidence('conseilMarechalResult', sansDoublon(conseilMarechalResult, "SINON"));
    evidence('religieuxResult', sansDoublon(religieuxResult, "SINON"));
    evidence('intendantResult', sansDoublon(intendantResult, "SINON"));
    evidence('espionResult', sansDoublon(espionResult, "SINON"));
    evidence('prisonResult', sansDoublon(prisonResult, "SINON"));
    evidence('influenceResult', sansDoublon(influenceResult, "SINON"));
    evidence('secretsResult', sansDoublon(secretsResult, "SINON"));
    evidence('hamecResult', sansDoublon(hamecResult, "SINON"));
    evidence('decisions', sansDoublon(decisionsResult, "PUIS"));
    evidence('cour', sansDoublon(courResult, "SINON"), true);
    evidence('mode', sansDoublon(commoditesModeResult), true);
    evidence('nourriture', sansDoublon(commoditesNourritureResult), true);
    evidence('heberg', sansDoublon(commoditesHebergResult), true);
    evidence('domestiques', sansDoublon(commoditesDomestiquesResult), true);
    evidence('activite', sansDoublon(activTournoiResult, "SINON"));
    evidence('particip', sansDoublon(participResult));
    evidence('regence', sansDoublon(regenceResult, ""));
    evidence('activite2', sansDoublon(activMariageResult, "SINON"));
    evidence('activite3', sansDoublon(activChasseResult, "SINON"));
    evidence('participChasse', sansDoublon(participChasseResult, "SINON"));
    evidence('grpeChasse', sansDoublon(grpeChasseResult, "SINON"));
    evidence('tourneeType', sansDoublon(tourneeResult));
    evidence('tourneeIntention', sansDoublon(tourneeIntentionResult, "SINON"));
    evidence('suite', sansDoublon(suiteResult, "SINON"));
    evidence('luxe', sansDoublon(luxeResult, "SINON"));
    evidence('epidResult', sansDoublon(epidResult, "SINON"));
    evidence('tournoiHeberg', sansDoublon(hebergResult, "SINON"));
    evidence('prix', sansDoublon(prixResult, "SINON"));
    evidence('festin', sansDoublon(festinResult, "SINON"));
    evidence('fun', sansDoublon(funResult, "SINON"));
    evidence('campObjectif', sansDoublon(campObjectifResult, "SINON"));
  }

function sansDoublon(tab, liaison="") {
    let texte = "";
    let faits = new Set();
    for(let l=0; l<tab.length; l++) {
        let premierMot = true;
        console.log(tab[l]);
        tab[l].forEach(function motTexte(mot) {
            if(!faits.has(mot)) {
                // nouvelle ligne ?
                if((l>0) && (premierMot)) {
                    texte = texte
                        +'<br>'+liaison+" "+mot;
                    premierMot = false;
                } else if(!premierMot) {
                    texte = texte+" PUIS "+mot;
                } else {
                    texte = texte+mot;
                    premierMot = false;
                }
                faits.add(mot);
            }
        });
    }
    return texte;
}