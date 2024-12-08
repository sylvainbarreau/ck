/*
function (p, t=new Array()) {
    const  = ["",//0
    ];
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'domaine':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'proclame':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'piete':
        case 'foiChangemt':
        case 'denoncer': // Prestige, Renommée 
        case 'factionFoi':
        case 'factionCult':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'erudition':
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        default:
            return (p.slice(1), t);
    }
}
*/
function militaire(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const p2 = p[0].split('\-');
    const lui = p2[1]; console.log(lui);
    const pp = p2[0]; console.log(pp);
    switch(pp) {
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("pas Renforcement mensuel SI adoption/aventurier"));
            return militaire(p.slice(1), t);
        case 'aInfluencer': // opinion, Diplomatie, Or
        case 'religieuxAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
            case 'demande': // Prestige, opinion, Or
                t.push(new Set().add("pas Renforcement mensuel"));
            return t;
        case 'guerre':
        case 'declarationGuerre':
            let e = new Set().add("Renforcement mensuel");
            e.add("ajouter régiment");
            e.add("augmenter tailles")
            t.push(e);
            return t;
        case 'revenu':
            t.push(new Set().add("pas Renforcement mensuel"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
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
    const p2 = p[0].split('-');
    const lui = p2[1]; console.log(lui);
    const pp = p2[0]; console.log(pp);
    switch(pp) {
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(roles[1]+" SI adoption/aventurier"));
            t.push(new Set().add(roles[2]));
            return t;
        case 'guerre':
        case 'declarationGuerre':
        case 'controle':
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(roles[0]));
            return t;
        case 'vassalAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
            case 'prestige':
        case 'vassalSOppose':
        case 'succession':
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(roles[1]));
                return t;
        case 'assassinat':
        case 'influence':
            case 'hamecon':
        case 'perteTerresRevoquer':
            t.push(new Set().add(roles[2]));
            return t;
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(roles[4]));
            return t;
            case 'religieuxAInfluencer': // opinion, Or
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(roles[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
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
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(roles[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t); 
        case 'declarationGuerre':
            t.push(new Set().add(roles[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(roles[3]+' SI '+effets[3][0]));
            return chancelier(p.slice(1), t);
        case 'vassalAInfluencer' :
        case 'vassalSOppose':
            t.push(new Set().add(roles[0]+" LUI"));
            t.push(new Set().add(roles[2]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(roles[0]+" SI Séduire LUI"));
            t.push(new Set().add(roles[2]+" SI Séduire LUI"));
            return chancelier(p.slice(1), t); 
        case 'dirigeantAInfluencer':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(roles[3]));
            return t;
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[2]+" SI "+effets[2][3]));
            t.push(new Set().add(roles[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
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
            t.push(new Set().add(roles[1]));
            t.push(new Set().add(roles[3]));
            return t; 
        case 'controle':
        case 'revenu':
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(roles[1]));
            return marechal(p.slice(1), t);
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(roles[2]));
            return t;
        case 'survie' :
            t.push(new Set().add(roles[0]));
            return marechal(p.slice(1), t);
        case 'religieuxAInfluencer': // opinion, Or
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(roles[1]));
            return marechal(p.slice(1),t);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(roles[1]+" SI "+effets[1][0]+" Séduire LUI"));
            t.push(new Set().add(roles[0]));
            return marechal(p.slice(1),t);
        case 'factionFoi':
        case 'factionCult':
            t.push(new Set().add(roles[1]+" LUI"+" SI "+effets[1][1]));
            return marechal(p.slice(1),t);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
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
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(roles[1]+' SI '+effets[1][1]));
            t.push(new Set().add(roles[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t); 
        case 'declarationGuerre':
                t.push(new Set().add(roles[1]+' SI '+effets[1][1]));
                t.push(new Set().add(roles[1]+' SI '+effets[1][0]));
                return religieux(p.slice(1), t); 
            case 'vassalAInfluencer':
            case 'vassalSOppose':
                t.push(new Set().add(roles[2]+' SI '+effets[2][0]));
                return religieux(p.slice(1), t);
        case 'enfant':
            t.push(new Set().add(roles[2]+' SI Séduire '+effets[2][0]));
            return religieux(p.slice(1), t);
    case 'revenu':
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        t.push(new Set().add(roles[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
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
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[1]+" SI "+effets[1][0]));
            return religieux(p.slice(1), t);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
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
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'declarationGuerre':
              t.push(new Set().add(roles[2]));
            return t; 
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(roles[4]));
            return intendant(p.slice(1), t); 
        case 'revenu':
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
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
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[3]));
            return t;
        case 'prestige':
            t.push(new Set().add(roles[4]+" SI "+effets[4][0]));
            return intendant(p.slice(1), t);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(roles[4]+" SI "+effets[4][0]));
            t.push(new Set().add(roles[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();    
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
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(roles[1]+" SI Fabriquer un hamecon"));
            t.push(new Set().add(roles[0]+" LUI")); 
            return espion(p.slice(1), t);;
        case 'assassinat':
            t.push(new Set().add(roles[1]));
            return t;
        case 'survie':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(roles[2]));
            return t; 
        case 'vassalSOppose':
            case 'perteTerresRevoquer':
                t.push(new Set().add(roles[0]+" LUI"));
            return espion(p.slice(1), t);;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
        case 'prestige':
                case 'domaine':
        case 'piete':
                    case 'factionFoi':
                        case 'stress':
                            case 'erudition': case 'denoncer': // Prestige, Renommée 
                            default:
            return espion(p.slice(1), t);
    }
}
function prison(p, t=new Array(), actions=null) {
    if(actions == null) actions = ["Négocier la libération",//0
        "Rançonner",//1
        "Exécuter",//2
        "Torturer",//3
        "Castrer",//4
        "Aveugler",//5
    ];
    if (p.length === 0) {
        t.push(new Set().add("ne rien faire SAUF proposition SI non vassal"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande':
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI paiement"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI paiement"));
            return prison(p.slice(1), t, actions); 
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
            return prison(p.slice(1), t, actions);
        case 'declarationGuerre':
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            return prison(p.slice(1), t, actions);
        case 'recruterChevalier':
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
            return prison(p.slice(1), t, actions);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            return prison(p.slice(1), t, actions);
        case 'proclame':
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible ET Prouesse&gt;=8"));
            return prison(p.slice(1), t, actions);
        case 'revenu':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI paiement"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI paiement"));
            return prison(p.slice(1), t, actions); 
        case 'vassalAInfluencer':
        case 'hamecon':
        case 'perteTerresRevoquer':
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            return prison(p.slice(1), t, actions); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(actions[0]+" &gt; Bannir SI adoption/aventurier ET Or"));
            t.push(new Set().add(actions[1]+" &gt; Or SI adoption/aventurier"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI adoption/aventurier ET paiement"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI adoption/aventurier ET paiement"));
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            return prison(p.slice(1), t, actions); 
        case 'assassinat':
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            return prison(p.slice(1), t, actions);
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon 
            t.push(new Set().add(actions[0]+" &gt; hameçon SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add(actions[0]+" SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI paiement"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI paiement"));
            return prison(p.slice(1), t, actions);
        case 'religieuxAInfluencer':
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            actions[3] += "SI NON perte Piété";
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI paiement"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI paiement"));
            return prison(p.slice(1), t, actions); 
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(actions[3]+" SI Sombres connaissances"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI paiement"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI paiement"));
            return prison(p.slice(1), t, actions); 
        case 'piete':
            actions[3] += "SI NON perte Piété";
            return prison(p.slice(1), t, actions); 
            case 'denoncer': // Prestige, Renommée 
            default:
            return prison(p.slice(1), t, actions);
    }
}
function secrets(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            let e=new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            t.push(e);
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Faire chanter SI gouvernement administratif"));
            return secrets(p.slice(1), t);
        case 'declarationGuerre':
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire"));
            return secrets(p.slice(1), t);
        case 'recruterChevalier':
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            return secrets(p.slice(1), t);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Faire chanter SI mécène"));
            return secrets(p.slice(1), t);
        case 'proclame':
            t.push(new Set().add("Faire chanter SI chevalier possible ET Prouesse&gt;=8"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible ET Prouesse&gt;=8"));
            return secrets(p.slice(1), t);
        case 'revenu':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("Faire chanter SI paiement hameçon ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'vassalAInfluencer':
        case 'hamecon':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire"));
            return secrets(p.slice(1), t); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET paiement hameçon ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire"));
            return secrets(p.slice(1), t); 
        case 'religieuxAInfluencer':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire ET NON perte Piété"));
            t.push(new Set().add("Faire chanter SI paiement hameçon ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire"));
            t.push(new Set().add("Faire chanter SI paiement hameçon ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'assassinat':
            t.push(new Set().add("Révéler SI emprisonnable ET Sombres connaissances ET NON Aventurier OU Outils du tortionnaire"));
            return secrets(p.slice(1), t); 
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Faire chanter SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("ne rien faire SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            t.push(new Set().add("Faire chanter SI Influence"));
            t.push(new Set().add("Faire chanter SI paiement hameçon ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t);
        case 'succession':
        case 'influence' :
            t.push(new Set().add("Faire chanter")); //Influence
            return t;
        case 'perteTerresRevoquer':
            t.push(new Set().add("Révéler SI motif de révocation LUI"));
            t.push(new Set().add("Révéler SI emprisonnable LUI"));
            return secrets(p.slice(1), t); 
            case 'denoncer': // Prestige, Renommée 
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
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'declarationGuerre':
        case 'recruterChevalier':
            t.push(new Set().add("Recruter SI chevalier possible"));
            return hamec(p.slice(1), t);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add("Recruter SI chevalier possible"));
            t.push(new Set().add("Déplacer camp"));          
            return hamec(p.slice(1), t);
        case 'proclame':
            t.push(new Set().add("Recruter SI chevalier possible ET Prouesse&gt;=8"));
            return hamec(p.slice(1), t);
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("ne rien faire SI vassal direct LUI OU courtisan LUI OU invité LUI"));
            return hamec(p.slice(1), t); 
        case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'demande': // Prestige, opinion, Or
        default:
            return hamec(p.slice(1), t);
    }
}
function influence(p, t=new Array()) {
    const complots = ["InfluenceR",//0
        "Amitié",//1
        "Séduction",//2
        "Mariage clandestin",//3
        "Apprendre la langue",//4
        "Faire la cour",//5
        "Convertir à la sorcellerie",//6
    ];
    if (p.length === 0) {
        let e=new Set().add(complots[0]+" vassal puissant non intimidé non factiable");
        e.add(complots[0]+" vassal puissant intimidé non factiable");
        e.add(complots[0]+" vassal non intimidé non factiable");
        e.add(complots[0]+" vassal intimidé non factiable");
        e.add(complots[0]+" allié");
        e.add(complots[0]+" conseiller religieux");
        e.add(complots[0]+" seigneur lige");
        e.add(complots[0]+" conjoint");
        e.add(complots[0]+" maître-espion");
        e.add(complots[0]+" médecin");
        t.push(e);
        return t;
    } 
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            let eSeigneur=new Set().add(complots[0]+" LUI SI gouvernement administratif");
            eSeigneur.add(complots[1]+" LUI SI gouvernement administratif");
            eSeigneur.add(complots[4]+" LUI SI gouvernement administratif");
            t.push(eSeigneur);
            return influence(p.slice(1), t);
        case 'vassalAInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'aInfluencer': // opinion
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
        case 'demande':
            let eVassal=new Set().add(complots[0]+" LUI");
            eVassal.add(complots[1]+" LUI");
            eVassal.add(complots[4]+" LUI");
            t.push(eVassal);
            return influence(p.slice(1), t);
        /*case 'pertesTerres':*/
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(complots[0]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(complots[1]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(complots[4]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(complots[2]));
            t.push(new Set().add(complots[5]));
            t.push(new Set().add(complots[3]));
            return influence(p.slice(1), t);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add(complots[5]+" amant SI chevalier possible ET hors camp &gt; âme soeur"));
            t.push(new Set().add(complots[0]+" ami SI chevalier possible ET hors camp &gt; meilleur ami"));
            t.push(new Set().add(complots[0]+" amant SI chevalier possible ET hors camp &gt; âme soeur"));
            t.push(new Set().add(complots[2]+" SI AUCUN héritier - chevalier partisan possible"));
            t.push(new Set().add(complots[5]+" SI AUCUN héritier - chevalier partisan possible"));
            t.push(new Set().add(complots[3]+" SI AUCUN héritier - chevalier partisan possible"));
            return influence(p.slice(1), t);
        case 'denoncer': // Prestige, Renommée 
        case 'recruterChevalier':
        default:
            return influence(p.slice(1), t);
    }
}
function contreMesure(p, t=new Array(), mesures=null) {
    if(mesures == null) mesures = ["Primes pour les dénonciations",//0
        "Arrestations arbitraires",//1
        "Sentinelles renforcées",//2
        "Garde doublée",//3
        "Retrait de la vie publique",//4
    ];
    if (p.length === 0) {
        t.push(new Set().add(mesures[4]));
        t.push(new Set().add("Aucune"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            mesures[4]+=" SI NON gouvernement administratif";
            return contreMesure(p.slice(1),t, mesures);
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            mesures[0]=undefined;
            mesures[1]+=" SI LUI";
            mesures[2]+=" SI LUI";
            mesures[3]+=" SI LUI";
            mesures[4]=undefined;
            return contreMesure(p.slice(1),t, mesures);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            mesures[0]=undefined;
            mesures[4]=undefined;
            return contreMesure(p.slice(1),t, mesures);  
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            mesures[2]=undefined;
            mesures[3]=undefined;
            mesures[4]=undefined;
            return contreMesure(p.slice(1),t, mesures);
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Aucune"));
            return t;
        case 'stress':
            mesures[3]=undefined;
            mesures[4]=undefined;
            return contreMesure(p.slice(1),t, mesures);
            case 'religieuxAInfluencer':
            t.push(new Set().add("Aucune"));
            return t;
        case 'survie':
            t.push(new Set().add(mesures[3]));
            return contreMesure(p.slice(1),t, mesures);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            mesures[0]+=" SI NON adoption/aventurier";
            mesures[1]+=" SI NON adoption/aventurier";
            mesures[2]+=" SI NON adoption/aventurier";
            mesures[3]+=" SI NON adoption/aventurier";
            mesures[4]+=" SI NON adoption/aventurier";
            t.push(new Set().add(mesures[3]));
            return contreMesure(p.slice(1),t, mesures);
        case 'revenu':
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
            mesures[0]=undefined;
            return contreMesure(p.slice(1),t, mesures);
        case 'demande': // Prestige, opinion, Or
            mesures[0]=undefined;
            mesures[4]=undefined;
            return contreMesure(p.slice(1),t, mesures);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        default:
            return contreMesure(p.slice(1),t, mesures);
    }
}
function compHostile(p, t=new Array()) {
    const complots = ["Assassinat",//0
        "Enlèvement",//1
        "Revendiquer le trône",//2
        "Fabrication d'un hameçon",//3
        "Voler un artefact",//4
        "Renverser le régent",//5
        "S'emparer du royaume",//6
    ];
    if (p.length === 0) {
        let eDefaut=new Set().add(complots[6]);
        eDefaut.add(complots[2]);
        eDefaut.add(complots[5]);
        eDefaut.add(complots[4]);
        eDefaut.add("Aucun");
        t.push(eDefaut);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            let eSeigneur=new Set().add(complots[2]);
            eSeigneur.add(complots[5]);
            t.push(eSeigneur);
            return compHostile(p.slice(1), t);   
        case 'assassinat':
            let eAssassinat=new Set().add(complots[0]+" LUI SI NON Destituer");
            eAssassinat.add(complots[1]+" LUI");
            t.push(eAssassinat);
            return compHostile(p.slice(1), t);
        case 'hamecon':
        case 'agent':  //opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(complots[3]+" LUI"));
            return compHostile(p.slice(1), t);
            case 'denoncer': // Prestige, Renommée 
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            default:
            return compHostile(p.slice(1),t);
    }
}
function compPolitique(p, t=new Array()) {
    const complots = ["Contester le statut",//0 agent Statut du défi
        "Destitution",//1 agent Déposer
        "Consolider la base du pouvoir",//2 agent Mentor en gouvernance
        "Intégrer le gouvernorat",//3 agent Subsumer la gouvernance
        "Promouvoir",//4 agent Promouvoir
        "Diffamation",//5 agent Calomnier
        "Légitimité des dommages",//6
        "Favoriser la légitimité",//7
        "Pillage de la possession",//8 agent
        "Famille ingrate",//9
        "Dispute frontalière",//10 agent Conflit frontalier
    ];
    if (p.length === 0) {
        let ePol=new Set().add(complots[2]);
        ePol.add(complots[3]);
        ePol.add(complots[10]);
        ePol.add(complots[8]);
        t.push(ePol);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(complots[9]+" LUI SI gouvernement administratif"));
            t.push(new Set().add(complots[2]+" LUI SI gouvernement administratif"));
            return compPolitique(p.slice(1), t);
        case 'succession':
            t.push(new Set().add(complots[4]));
            return t;
        case 'influence' :
            t.push(new Set().add(complots[2]));
            t.push(new Set().add(complots[9]));
            t.push(new Set().add(complots[0]));
            return compPolitique(p.slice(1), t);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(complots[3]));
            t.push(new Set().add(complots[10]));
            return compPolitique(p.slice(1), t);
        //case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(complots[9]+" LUI"));
            t.push(new Set().add(complots[2]+" LUI"));
            t.push(new Set().add(complots[8]));
            return compPolitique(p.slice(1), t);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            let ePol=new Set().add(complots[9]+" LUI");
            ePol.add(complots[2]+" LUI");
            //ePol.add(complots[0]);
            t.push(ePol);
            return t;
        case 'assassinat':
            t.push(new Set().add(complots[1]));
            return compPolitique(p.slice(1), t);
        case 'revenu':
            t.push(new Set().add(complots[8]));
            return compPolitique(p.slice(1), t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
        case 'denoncer': // Prestige, Renommée 
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            default:
            return compPolitique(p.slice(1), t);
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
        e.add("Or");
        e.add("Influence");
        e.add("stress descendre");
        t.push(e);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            let eSeigneur=new Set().add("Erudition");
            eSeigneur.add("Prestige");
            eSeigneur.add("opinion LUI");
            eSeigneur.add("Or");
            eSeigneur.add("contrôle SI &lt;100");
            eSeigneur.add("développement");
            eSeigneur.add("Intendance");
            eSeigneur.add("hameçon SI paiement");
            eSeigneur.add("emprisonner");
            t.push(eSeigneur);
            return decisions(p.slice(1), t);
        case 'controle':
            let e0=new Set().add("contrôle");
            e0.add("Martialité");
            t.push(e0);
            return decisions(p.slice(1), t);
        case 'declarationGuerre':
            let e17=new Set().add("Martialité");
            e17.add("augmenter levées");
            e17.add("Influence");
            e17.add("contrôle SI &lt;100");
            e17.add("développement");
            e17.add("recruter SI chevalier possible");
            e17.add("emprisonner SI chevalier possible");
            e17.add("Prouesse");
            e17.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            t.push(e17);
            return decisions(p.slice(1), t);
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            let e1=new Set().add("Prouesse");
            e1.add("Martialité");
            e1.add("augmenter levées");
            e1.add("Influence");
            e1.add("contrôle SI &lt;100");
            e1.add("développement");
            e1.add("recruter SI chevalier possible");
            e1.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            e1.add("emprisonner SI chevalier possible");
            e1.add("opinion LUI SI gouvernement administratif");
            t.push(e1);
            return decisions(p.slice(1), t);
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            let e2=new Set().add("opinion LUI");
            e2.add("Diplomatie");
            e2.add("Intrigue");
            e2.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            e2.add("Or");
            e2.add("contrôle SI &lt;100");
            e2.add("développement");
            e2.add("Intendance");
            e2.add("hameçon SI paiement");
            e2.add("emprisonner");
            t.push(e2);
            return decisions(p.slice(1), t); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            let e20=new Set().add("Prestige SI adoption/aventurier ET NON mort");
            e20.add("opinion LUI SI adoption/aventurier ET NON mort");
            e20.add("Diplomatie SI adoption/aventurier ET NON mort");
            e20.add("Intrigue SI adoption/aventurier ET NON mort");
            e20.add("emprisonner SI adoption/aventurier ET Sombres connaissances ET Outils du tortionnaire ET NON mort");     
            e20.add("Or SI adoption/aventurier ET NON mort");
            //e20.add("contrôle SI &lt;100 ET adoption/aventurier ET NON mort");
            //e20.add("développement SI adoption/aventurier ET NON mort");
            e20.add("Intendance SI adoption/aventurier ET NON mort");
            e20.add("hameçon SI adoption/aventurier ET paiement ET NON mort");
            e20.add("emprisonner SI adoption/aventurier ET NON mort");
            e20.add("Amant SI NON mort");
            e20.add("coucher SI NON mort");
            e20.add("opinion Séduire LUI SI NON mort");
            e20.add("Intrigue SI NON mort");
            e20.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire ET NON mort");
            e20.add("santé");
            e20.add("provisions");
            e20.add("stress descendre");
                e20.add("opinion maître-espion");
				e20.add("opinion médecin");
                t.push(e20);
                return decisions(p.slice(1), t); 
        case 'hamecon':
            let e4=new Set().add("hameçon LUI");
            e4.add("Intrigue");
            e4.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            t.push(e4);
            return decisions(p.slice(1), t);
        case 'assassinat':
            let e5=new Set().add("Intrigue");
            e5.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            t.push(e5);
            return decisions(p.slice(1), t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            let eAgent=new Set().add("opinion SI vassal direct LUI OU courtisan LUI OU invité LUI");
            eAgent.add("Intrigue");
            eAgent.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            eAgent.add("Influence");
            eAgent.add("Or");
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
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            let eChevalierP=new Set().add("recruter chevalier");
            eChevalierP.add("hameçon SI chevalier possible");
            eChevalierP.add("emprisonner SI chevalier possible");
            eChevalierP.add("conjoint SI chevalier possible");
            eChevalierP.add("héritier - chevalier partisan possible");
            eChevalierP.add("meilleur ami SI chevalier possible ET hors camp");
            eChevalierP.add("âme soeur SI chevalier possible ET hors camp");
            t.push(eChevalierP);
            return decisions(p.slice(1), t);
        case 'demande': // Prestige, opinion, Or
            let eDemande=new Set().add("Prestige");
            eDemande.add("opinion LUI");
            eDemande.add("Diplomatie");
            eDemande.add("Intrigue");
            eDemande.add("emprisonner SI Sombres connaissances ET Outils du tortionnaire");
            eDemande.add("Or");
            eDemande.add("Intendance");
            eDemande.add("hameçon SI paiement");
            eDemande.add("emprisonner");
            t.push(eDemande);
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
            let e9=new Set().add("Or");
            e9.add("contrôle SI &lt;100");
            e9.add("développement");
            e9.add("Intendance");
            e9.add("hameçon SI paiement");
            e9.add("emprisonner");
            t.push(e9);
            return decisions(p.slice(1), t);
        case 'domaine':
            let e10=new Set().add("Intendance");
            t.push(e10);
            return decisions(p.slice(1), t);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            let e11=new Set().add("augmenter magnificence de la Cour");
            e11.add("Intendance");
            e11.add("Diplomatie SI gouvernement administratif");
            e11.add("Erudition");
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
            let e12=new Set().add("opinion LUI");
            e12.add("Piété");
            e12.add("Intrigue");
            e12.add("Erudition");
            e12.add("emprisonner SI Sombres connaissances ET NON Aventurier OU Outils du tortionnaire");
            e12.add("Or");
            e12.add("contrôle SI &lt;100");
            e12.add("développement");
            e12.add("Intendance");
            e12.add("hameçon SI paiement");
            e12.add("emprisonner");
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
            let e13=new Set().add("opinion LUI");
            e13.add("emprisonner LUI");
            e13.add("redoutabilité");
            e13.add("Diplomatie");
            e13.add("Intrigue");
            t.push(e13);
            return decisions(p.slice(1), t);
        case 'denoncer': // Prestige, Renommée 
            let eDenonc=new Set().add("Prestige");
            eDenonc.add("Renommée");
            t.push(eDenonc);
            return decisions(p.slice(1), t);
        case 'succession':
            t.push(new Set().add("Influence"));
            t.push(new Set().add("Diplomatie"));
            return decisions(p.slice(1), t);
        case 'influence' :
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(cours[4]));
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
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
        case 'vassalSOppose':
        case 'religieuxAInfluencer': // opinion, Or
            t.push(new Set().add(cours[0]));
                t.push(new Set().add(cours[4]));
                t.push(new Set().add(cours[3]));
                t.push(new Set().add(cours[2]));
            return typeCour(p.slice(1), t);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(cours[4]));
            t.push(new Set().add(cours[3]));
            t.push(new Set().add(cours[0]));
            t.push(new Set().add(cours[2]));
            return typeCour(p.slice(1), t);
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
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
        case 'controle':
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(cours[4]));
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(cours[3]+" SI gouvernement administratif"));
            t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'succession':
            case 'influence' :
                t.push(new Set().add(cours[4]));
            return typeCour(p.slice(1), t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
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
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("monter"));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
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
                case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("monter"));
            return t;
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
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
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add("monter SI gouvernement administratif"));
            return commoditesHebergement(p.slice(1), t);
        case 'revenu':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("monter"));
            return t;
        case 'domaine':
                t.push(new Set().add("VERIF heb"));
                return t;
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("monter"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
                case 'denoncer': // Prestige, Renommée 
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'vassalAInfluencer':
        case 'survie':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'recruterChevalier':
        case 'proclame':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("monter"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
                case 'denoncer': // Prestige, Renommée 
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(intentions[1]));
            t.push(new Set().add(intentions[5]+" LUI"));
            return activTournoi(p.slice(1),t);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[1]+" SI adoption/aventurier"));
            t.push(new Set().add(intentions[5]+" LUI SI adoption/aventurier"));
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
        case 'vassalSOppose':
                t.push(new Set().add(intentions[5]+" LUI"));
                return activTournoi(p.slice(1),t);
            case 'proclame':
                case 'guerre':
        case 'declarationGuerre':
        case 'recruterChevalier':
            t.push(new Set().add(intentions[2]));
            return activTournoi(p.slice(1),t);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(intentions[1]));
            return activTournoi(p.slice(1),t);
        case 'revenu':
        case 'controle':
        case 'hamecon':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'factionFoi':
                    case 'factionCult':
                        case 'erudition':
        case 'demande': // Prestige, opinion, Or
                    t.push(new Set().add(intentions[1]));
                return activTournoi(p.slice(1),t);
        case 'survie':
            case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'religieuxAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(intentions[5]+" LUI"));
            t.push(new Set().add(intentions[1]));
            return activTournoi(p.slice(1),t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
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
        case 'assassinat':
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
                case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
                case 'declarationGuerre':
                    case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
                    case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
                    case 'denoncer': // Prestige, Renommée 
                        t.push(new Set().add("Tentes délabrées")); // evt négatif
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Tentes délabrées SI adoption/aventurier"));
            t.push(new Set().add("Campements luxueux"));
            t.push(new Set().add("Pavillons simples"));
            t.push(new Set().add("Tentes délabrées"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
        case 'recruterChevalier':
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
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(tabPrix[4]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(tabPrix[3]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(tabPrix[2]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(tabPrix[1]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(tabPrix[0]+" SI adoption/aventurier"));
            return prix(p.slice(1),t);
        case 'revenu':
            t.push(new Set().add(tabPrix[0]));
            return t;
        // objectifs artefact
        case 'controle':
        case 'hamecon':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
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
            t.push(new Set().add(tabPrix[0])); // Or
            return t;
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(tabPrix[4]+" SI Triompher"));
            t.push(new Set().add(tabPrix[3]+" SI Triompher"));
            t.push(new Set().add(tabPrix[2]+" SI Triompher"));
            t.push(new Set().add(tabPrix[1]+" SI Triompher"));
            t.push(new Set().add(tabPrix[0]));
            return t;
        case 'recruterChevalier':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
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
        "Légitimation",//6
        "Faiseur de mariages"//7
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[2]));
            t.push(new Set().add(intentions[7]));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(intentions[1]+" LUI"));
            return activMariage(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" LUI"));
            return activMariage(p.slice(1),t);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion
            case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(intentions[3]+" LUI"));
            return activMariage(p.slice(1),t);
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
                t.push(new Set().add(intentions[2]+" SI AUCUN héritier - chevalier partisan possible"));
            return activMariage(p.slice(1),t);
        case 'guerre':
        case 'declarationGuerre':
            t.push(new Set().add(intentions[7]));
            return activMariage(p.slice(1),t);
        case 'recruterChevalier':
        default:
            return activMariage(p.slice(1),t);
    }
}
function activMariageDiverti(p, t=new Array()) {
    const divertis = ["Divertissements privés",//0
        "Acrobates et musiciens",//1
        "Troubadours et monstres exotiques",//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(divertis[2]));
        t.push(new Set().add(divertis[1]));
        t.push(new Set().add(divertis[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            t.push(new Set().add(divertis[0]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(divertis[2]+" SI LUI"));
            t.push(new Set().add(divertis[1]+" SI LUI"));
            return activMariageDiverti(p.slice(1),t);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'recruterChevalier':
                case 'chevalierPartisan': // recruterChevalier sans Martialité
                case 'demande': // Prestige, opinion, Or
                 case 'proclame':
            t.push(new Set().add(divertis[2]));
            t.push(new Set().add(divertis[1]));
            t.push(new Set().add(divertis[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(divertis[2]+" SI adoption/aventurier"));
            t.push(new Set().add(divertis[1]+" SI adoption/aventurier"));
            t.push(new Set().add(divertis[0]+" SI adoption/aventurier"));
            return activMariageDiverti(p.slice(1),t);    
            case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(divertis[2]));
            t.push(new Set().add(divertis[1]));
            t.push(new Set().add(divertis[0]));
            return t;
        default:
            return activMariageDiverti(p.slice(1),t);
    }
}
function activMariageNourr(p, t=new Array()) {
    const nourrBoissons = ["Fête modeste",//0
        "Festin généreux",//1
        "Repas gargantuesque",//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(nourrBoissons[2]));
        t.push(new Set().add(nourrBoissons[1]));
        t.push(new Set().add(nourrBoissons[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(nourrBoissons[2]+" SI LUI invité"));
            t.push(new Set().add(nourrBoissons[1]+" SI LUI invité"));
            return activMariageNourr(p.slice(1),t);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            t.push(new Set().add(nourrBoissons[0]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(nourrBoissons[2]));
            t.push(new Set().add(nourrBoissons[1]));
            t.push(new Set().add(nourrBoissons[0]));
            return t;
        case 'religieuxAInfluencer':
            t.push(new Set().add(nourrBoissons[2]+" SI LUI invité"));
            t.push(new Set().add(nourrBoissons[1]+" SI LUI invité"));
            t.push(new Set().add(nourrBoissons[0])); // Or
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
                t.push(new Set().add(nourrBoissons[2]+" SI ami ou amant invité ET pas d'héritier chevalier partisan possible"));
            t.push(new Set().add(nourrBoissons[1]+" SI ami ou amant invité ET pas d'héritier chevalier partisan possible"));
            t.push(new Set().add(nourrBoissons[0]+" SI ami ou amant invité ET pas d'héritier chevalier partisan possible"));
            return activMariageNourr(p.slice(1),t);
        case 'survie':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(nourrBoissons[2]));
            t.push(new Set().add(nourrBoissons[1]));
            t.push(new Set().add(nourrBoissons[0]));
            return t;
        case 'stress':
            t.push(new Set().add(nourrBoissons[2]));
            return activMariageNourr(p.slice(1),t);
            case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            default:
            return activMariageNourr(p.slice(1), t);
    }
}
function activMariageLieu(p, t=new Array()) {
    const lieux = ["Fleurs sauvages",//0
        "Guirlandes et torches",//1
        "Argent et or",//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(lieux[2]));
        t.push(new Set().add(lieux[1]));
        t.push(new Set().add(lieux[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            t.push(new Set().add(lieux[0]));
            return t;
        case 'domaine':
            t.push(new Set().add(lieux[2]));
            return activMariageLieu(p.slice(1),t);
        case 'succession':
            case 'influence' :
                t.push(new Set().add(lieux[2]));
            return activMariageLieu(p.slice(1),t);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(lieux[2]+" SI LUI"));
            t.push(new Set().add(lieux[1]+" SI LUI"));
            t.push(new Set().add(lieux[0]+" SI LUI"));
            t.push(new Set().add(lieux[2]));
            return activMariageLieu(p.slice(1),t);
        case 'recruterChevalier':
        case 'proclame':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(lieux[2]));
            t.push(new Set().add(lieux[1]));
            return activMariageLieu(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(lieux[2]));
            t.push(new Set().add(lieux[1]));
            t.push(new Set().add(lieux[0]));
            return t;
        default:
            return activMariageLieu(p.slice(1), t);
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
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(intentions[3]+" LUI SI gouvernement administratif"));
            return activFestin(p.slice(1),t);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[2]));
            t.push(new Set().add(intentions[3]+" LUI"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(intentions[1]+" LUI"));
            return activFestin(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFestin(p.slice(1),t);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'vassalAInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFestin(p.slice(1),t);
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier - chevalier partisan possible"));
            return activFestin(p.slice(1),t);
        case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
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
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(intentions[3]+" LUI SI gouvernement administratif"));
            return activFun(p.slice(1),t);
        case 'assassinat':
            t.push(new Set().add(intentions[1]+" LUI"));
            return activFun(p.slice(1),t);
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFun(p.slice(1),t);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFun(p.slice(1),t);
        case 'piete':
        case 'foiChangemt':
        case 'factionFoi':
            t.push(new Set().add(intentions[0]));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[2]));
            return activFun(p.slice(1),t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier - chevalier partisan possible"));
            return activFun(p.slice(1),t);
        case 'religieuxAInfluencer':
            t.push(new Set().add(intentions[3]+" LUI"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
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
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(intentions[4]+" LUI SI gouvernement administratif"));
            return activChasse(p.slice(1),t);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[1]+" SI adoption/aventurier"));
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
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer':
            case 'vassalSOppose':
        case 'demande': // Prestige, opinion, Or
                t.push(new Set().add(intentions[4]+" LUI"));
                return activChasse(p.slice(1),t);
            case 'survie':
                case 'stress':
                    t.push(new Set().add(intentions[0]));
                return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add(intentions[1]));
            return activChasse(p.slice(1),t);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
                t.push(new Set().add(intentions[3]+" SI AUCUN héritier - chevalier partisan possible"));
            return activChasse(p.slice(1),t);
        case 'recruterChevalier':
        default:
            return activChasse(p.slice(1),t);
    }
}
function participChasse(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Groupes de gardes-chasse")); // artefact, Prestige
        t.push(new Set().add("Groupes de chasse")); // artefact, Prestige
        t.push(new Set().add("Gardes-chasse locaux"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add("Gardes-chasse locaux"));
            return t;
        // pour artefact :
        case 'assassinat':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Groupes de gardes-chasse"));
            t.push(new Set().add("Groupes de chasse"));
            t.push(new Set().add("Gardes-chasse locaux"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Groupes de gardes-chasse SI adoption/aventurier"));
            t.push(new Set().add("Groupes de chasse SI adoption/aventurier"));
            t.push(new Set().add("Gardes-chasse locaux SI adoption/aventurier"));
            return participChasse(p.slice(1),t);   
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
            return new Array();
        default:
            return participChasse(p.slice(1),t);
    }
}
function grpeChasse(p, t=new Array()) {
    if (p.length === 0) {
        t.push(new Set().add("Grand groupe")); // Prestige
        t.push(new Set().add("Groupe raisonnable")); // Prestige
        t.push(new Set().add("Petit groupe"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("Petit groupe"));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("Grand groupe"));
            t.push(new Set().add("Groupe raisonnable"));
            t.push(new Set().add("Petit groupe"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Grand groupe SI adoption/aventurier"));
            t.push(new Set().add("Groupe raisonnable SI adoption/aventurier"));
            t.push(new Set().add("Petit groupe SI adoption/aventurier"));
            return grpeChasse(p.slice(1),t);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();    
            case 'assassinat':
                case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
                case 'declarationGuerre':
                    case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
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
            t.push(new Set().add("Ne participe pas"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Participe SI adoption/aventurier"));
            t.push(new Set().add("Ne participe pas"));
            return t;          
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer':
        case 'recruterChevalier':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'declarationGuerre':
        case 'controle':
        case 'revenu':
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'aInfluencer': // opinion
        case 'hamecon':
        case 'proclame':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            case 'prestige':
                    case 'domaine':
        case 'religieuxAInfluencer':
            case 'piete':
                case 'vassalSOppose':
                    case 'factionFoi':
                        case 'factionCult':
                            case 'perteTerresRevoquer':
                                case 'denoncer': // Prestige, Renommée 
        case 'succession':
            case 'influence' :
                case 'chevalierPartisan': // recruterChevalier sans Martialité
                case 'demande': // Prestige, opinion, Or
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
                case 'denoncer': // Prestige, Renommée 
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                case 'vassalSOppose':
                    t.push(new Set().add(types[0]));
                    return t;
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(types[2]));
            return t;
            case 'factionFoi':
                case 'factionCult':
                    t.push(new Set().add(types[1]));
                    return t;
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(types[2]));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
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
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[1]));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'survie':
            case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'revenu':
        case 'controle':
        case 'declarationGuerre':
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
       case 'denoncer': // Prestige, Renommée 
            case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Suite nombreuse"));
            t.push(new Set().add("Entourage modeste"));
            return suite(p.slice(1),t);
        case 'revenu':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add("Suite modeste"));
            return t;    
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
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
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Mobilier en excès"));
            t.push(new Set().add("Mobilier luxueux"));
            t.push(new Set().add("Luxe extravagant"));
            t.push(new Set().add("Biens de luxe essentiels"));
            return luxe(p.slice(1),t);
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
                return new Array();
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
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'declarationGuerre':
                t.push(new Set().add(roles[1]));
                return t;
        case 'revenu':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(roles[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(roles[0]+" SI adoption/aventurier"));
            return regence(p.slice(1), t);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            return new Array();
        case 'denoncer': // Prestige, Renommée 
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
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'domaine':
                case 'controle':
                    case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'succession':
            case 'influence' :
                case 'vassalAInfluencer':
                case 'vassalSOppose':
                    case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
                    case 'religieuxAInfluencer':
        case 'aInfluencer': // opinion
                    case 'hamecon':
                case 'recruterChevalier':
                case 'proclame':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
                    case 'declarationGuerre':
                    case 'prestige':
        case 'seigneur': //Revendiquer trône (Erudition), Faction indépendance, Faction dissolution, Me faire déclarer régent (Prestige, opinion)
        case 'denoncer': // Prestige, Renommée 
                case 'factionFoi':
                    case 'factionCult':
                        case 'perteTerresRevoquer':
                            case 'erudition':
                                case 'chevalierPartisan': // recruterChevalier sans Martialité
                                case 'demande': // Prestige, opinion, Or
                                        t.push(new Set().add(fonctions[2]));
            return t;        
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(fonctions[2]+" SI adoption/aventurier"));
            t.push(new Set().add(fonctions[1]));
            return t
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
            case 'denoncer': // Prestige, Renommée 
            case 'piete':
                case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'demande': // Prestige, opinion, Or
                t.push(new Set().add(obj[0]));
            return t;
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
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
        case 'religieuxAInfluencer':
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'hamecon':
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'assassinat':
        case 'agent':  //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(obj[2]));
            return t;
        case 'recruterChevalier':
            return new Array();
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
    // Parcourir chaque élément et récupérer la clé
    for (let item of dropItemsChildren) {
        const i = item.getAttribute('data-key');
        p.push(i);
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
    const contreResult = contreMesure(p);
    const hostileResult = compHostile(p);
    const influenceResult = influence(p);
    const politiqueResult = compPolitique(p);
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
    const mariageDivertiResult = activMariageDiverti(p);
    const mariageNourrResult = activMariageNourr(p);
    const mariageLieuResult = activMariageLieu(p);
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
    evidence('contreResult', sansDoublon(contreResult, "SINON"));
    evidence('hostileResult', sansDoublon(hostileResult, "SINON"));
    evidence('influenceResult', sansDoublon(influenceResult, "SINON"));
    evidence('politiqueResult', sansDoublon(politiqueResult, "SINON"));
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
    evidence('mariageDiverti', sansDoublon(mariageDivertiResult, "SINON"));
    evidence('mariageNourr', sansDoublon(mariageNourrResult, "SINON"));
    evidence('mariageLieu', sansDoublon(mariageLieuResult, "SINON"));
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