/*
function (p, t=new Array(), o=null) {
    if(o==null) { o= ["",//0
    ]; }
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(""));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        // A REVOIR :
        case 'domaine':
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'foiChangemt':
        case 'factionFoi':
        case 'factionCult':
        case 'erudition': *
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
        default:
            return (p.slice(1), t, o);
    }
}
*/
function militaire(p, t=new Array()) {
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("pas Renforcement mensuel"));
        return t;
    }
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
            case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
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
        case 'demande2':
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        default:
            return militaire(p.slice(1), t);
    }
}
function militaireAuto(p, t=new Array()) {
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Automatisé"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("Automatisé"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add("Automatisé"));
            return t;
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'declarationGuerre':
            t.push(new Set().add("Manuel"));
            return t;
        case 'survie':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Limité"));
            return t;
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'stress':
        case 'prestige':
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
        default:
            return militaireAuto(p.slice(1), t);
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
            t.push(new Set().add(roles[1]));
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
            case 'denoncer': // Prestige, Renommée 
            case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
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
            case 'piete': // Piété, Erudition
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
        case 'demande2':
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
            case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(roles[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
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
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(roles[1]+" vassal direct CIBLE SI "+effets[1][0]));
            t.push(new Set().add(roles[1]));
            return marechal(p.slice(1),t);
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
            case 'denoncer': // Prestige, Renommée 
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
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
        t.push(new Set().add(roles[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(roles[0]));
            return t;
        case 'religieuxAInfluencer':
            case 'piete': // Piété, Erudition
            t.push(new Set().add(roles[2]));
                return t;
        case 'factionFoi':
            t.push(new Set().add(roles[1]));
            return religieux(p.slice(1), t);
        case 'factionCult':
                t.push(new Set().add(roles[1]+" LUI"+' SI '+effets[1][2]));
                return religieux(p.slice(1), t);                
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'denoncer': // Prestige, Renommée 
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
            case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(roles[0]+" SI "+effets[0][2]));
            t.push(new Set().add(roles[4]+" SI "+effets[4][0]));
            t.push(new Set().add(roles[3]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add(roles[4]+" SI "+effets[4][0]));
            return intendant(p.slice(1), t);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(roles[4]+" SI "+effets[4][0]));
            t.push(new Set().add(roles[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();    
            case 'piete': // Piété, Erudition
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
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(roles[1]+" SI Fabriquer un hamecon"));
            t.push(new Set().add(roles[0]+" AGENT")); 
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
        case 'demande2':
            return new Array();
        case 'prestige':
                case 'domaine':
                    case 'piete': // Piété, Erudition
                    case 'factionFoi':
                        case 'stress':
                            case 'erudition':
        case 'denoncer': // Prestige, Renommée 
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
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot;"));
        t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
        t.push(new Set().add(actions[1]+" &gt; Or"));
        t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
        t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
        t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot;"));
        t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
    }
    if (p.length === 0) {
        t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
        t.push(new Set().add("ne rien faire SAUF proposition SI non vassal"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande':
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            return prison(p.slice(1), t, actions); 
        case 'demande2':
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            return prison(p.slice(1), t, actions); 
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            return prison(p.slice(1), t, actions);
        case 'declarationGuerre':
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(actions[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot;"));
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
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            return prison(p.slice(1), t, actions); 
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            return prison(p.slice(1), t, actions); 
        case 'vassalAInfluencer':
        case 'hamecon':
        case 'perteTerresRevoquer':
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            return prison(p.slice(1), t, actions); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI adoption/aventurier ET Or"));
            t.push(new Set().add(actions[1]+" &gt; Or SI adoption/aventurier"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI adoption/aventurier ET Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI adoption/aventurier ET Atout &quot;Obligations en or&quot;"));
            return prison(p.slice(1), t, actions); 
        case 'assassinat':
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            return prison(p.slice(1), t, actions);
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(actions[3]+" SI NON vassal direct ou courtisan ou invité CIBLE ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(actions[0]+" SI vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI MECENE"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI MECENE"));           
            return prison(p.slice(1), t, actions);
        case 'religieuxAInfluencer':
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot;"));
            actions[3] += "SI NON perte Piété";
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            return prison(p.slice(1), t, actions); 
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(actions[3]+" SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(actions[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(actions[1]+" &gt; Or"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(actions[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(actions[1]+" &gt; hameçon SI mécène"));           
            return prison(p.slice(1), t, actions); 
            case 'piete': // Piété, Erudition
            actions[3] += "SI NON perte Piété";
            return prison(p.slice(1), t, actions); 
        case 'denoncer': // Prestige, Renommée 
        default:
            return prison(p.slice(1), t, actions);
    }
}
function secrets(p, t=new Array()) {
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Révéler SI Atout &quot;Je suis bien en comparaison&quot;"));
        t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
        t.push(new Set().add("Faire chanter SI Atout &quot;Obligations en or&quot; ET Or"));
        t.push(new Set().add("Faire chanter SI mécène"));
        t.push(new Set().add("Révéler SI emprisonnable"));
        t.push(new Set().add("Faire chanter SI chevalier possible"));
    }
    if (p.length === 0) {
        t.push(new Set().add("Faire chanter SI mécène"));
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            let e=new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
            t.push(e);
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Faire chanter SI gouvernement administratif"));
            return secrets(p.slice(1), t);
        case 'declarationGuerre':
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot;"));
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
            t.push(new Set().add("Faire chanter SI Atout &quot;Obligations en or&quot; ET Or"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("Révéler SI Atout &quot;Je suis bien en comparaison&quot;"));
            t.push(new Set().add("Faire chanter SI Atout &quot;Obligations en or&quot; ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'vassalAInfluencer':
        case 'hamecon':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Révéler SI adoption/aventurier ET Atout &quot;Je suis bien en comparaison&quot; ET Prestige &lt; 150"));
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET Atout &quot;Obligations en or&quot; ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET Atout &quot;Je suis bien en comparaison&quot;"));
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET Atout &quot;Obligations en or&quot; ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t); 
        case 'religieuxAInfluencer':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET NON perte Piété"));
            t.push(new Set().add("Faire chanter SI Atout &quot;Obligations en or&quot; ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire"));
            t.push(new Set().add("Faire chanter SI Atout &quot;Obligations en or&quot; ET Or"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t); 
        case 'demande2':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire"));
            t.push(new Set().add("Faire chanter SI mécène"));
            return secrets(p.slice(1), t); 
        case 'assassinat':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t); 
        case 'succession':
        case 'influence' :
            t.push(new Set().add("Faire chanter")); //Influence
            return t;
        case 'perteTerresRevoquer':
            t.push(new Set().add("Révéler SI motif de révocation LUI"));
            t.push(new Set().add("Révéler SI emprisonnable LUI"));
            return secrets(p.slice(1), t);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Révéler SI Atout &quot;Je suis bien en comparaison&quot;"));
            return secrets(p.slice(1), t);
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("Révéler SI emprisonnable ET Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire) ET NON vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add("Faire chanter SI Atout &quot;Obligations en or&quot; ET Or ET NON vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add("Révéler SI emprisonnable ET NON vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add("Révéler SI Atout &quot;Je suis bien en comparaison&quot; ET NON vassal direct ou courtisan ou invité CIBLE"));
            return secrets(p.slice(1), t);
            case 'piete': // Piété, Erudition
            default:
            return secrets(p.slice(1), t);
    }
}
function hamec(p, t=new Array()) {
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Recruter SI chevalier possible"));
    }
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
        case 'agent': // opinion SI vassal direct LUI OU courtisan LUI OU invité LUI, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("ne rien faire SI NON vassal direct ou courtisan ou invité CIBLE"));
            return hamec(p.slice(1), t); 
        case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            default:
            return hamec(p.slice(1), t);
    }
}
function influence(p, t=new Array()) {
    const complots = ["Influencer",//0
        "Nouer une amitié",//1
        "Séduire",//2
        "Marier clandestinement",//3
        "Apprendre la langue",//4
        "Faire la cour",//5
        "Convertir à la sorcellerie",//6
    ];
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(complots[4]+" LUI SI Aventurier"));
        t.push(new Set().add(complots[0]+" LUI SI Aventurier"));
        t.push(new Set().add(complots[1]+" LUI SI Aventurier"));
        t.push(new Set().add(complots[2]+" LUI SI Aventurier"));
    }
    if (p.length === 0) {
        let e=new Set().add(complots[0]+" vassal puissant non intimidé non factiable");
        e.add(complots[0]+" vassal puissant intimidé non factiable");
        e.add(complots[0]+" vassal non intimidé non factiable");
        e.add(complots[0]+" vassal intimidé non factiable");
        e.add(complots[0]+" conseiller religieux");
        e.add(complots[0]+" allié");
        e.add(complots[0]+" seigneur lige");
        e.add(complots[0]+" Médecin");
        e.add(complots[0]+" Garde du corps");
        e.add(complots[0]+" conjoint");
        e.add(complots[0]+" Maître-espion");
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
        case 'demande2':
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
            t.push(new Set().add(complots[2]+" SI AUCUN héritier-chevalier partisan possible"));
            t.push(new Set().add(complots[5]+" SI AUCUN héritier-chevalier partisan possible"));
            t.push(new Set().add(complots[3]+" SI AUCUN héritier-chevalier partisan possible"));
            return influence(p.slice(1), t);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(complots[0]+" AGENT"));
            t.push(new Set().add(complots[1]+" AGENT"));
            t.push(new Set().add(complots[4]+" AGENT"));
            return influence(p.slice(1), t);
        case 'denoncer': // Prestige, Renommée 
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            default:
            return influence(p.slice(1), t);
    }
}
function contreMesure(p, t=new Array(), mesures=null) {
    if(mesures == null) mesures = ["Primes pour les dénonciations",//0 revenu - prestige -
        "Arrestations arbitraires",//1 opinion -
        "Sentinelles renforcées",//2 
        "Garde doublée",//3
        "Retrait de la vie publique",//4 opinion -
    ];
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Aucune"));
        return t;
    }
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
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
        case 'demande2':
            mesures[0]=undefined;
            mesures[4]=undefined;
            return contreMesure(p.slice(1),t, mesures);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'piete': // Piété, Erudition
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
        "Saisie du pays",//6
    ];
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre/Acquérir une possession (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(complots[6]));
        t.push(new Set().add(complots[3]+" POUR Acheter une terre ou Acquérir une possession"));
    }
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
            t.push(new Set().add(complots[3]+" LUI"));
            return compHostile(p.slice(1), t);
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(complots[3]+" LUI"));
            return compHostile(p.slice(1), t);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(complots[4]+" SI adoption/aventurier"));
            return compHostile(p.slice(1), t);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
        case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'piete': // Piété, Erudition
        default:
            return compHostile(p.slice(1),t);
    }
}
function compPolitique(p, t=new Array()) {
    const complots = ["Contester le statut",//0 +Influence agent Statut du défi
        "Destitution",//1 agent Déposer
        "Consolider la base du pouvoir",//2 +Influence,opinion agent Mentor en gouvernance
        "Intégrer le gouvernorat",//3 agent Subsumer la gouvernance
        "Promouvoir",//4 +succession agent Promouvoir
        "Diffamation",//5 -succession agent Calomnier
        "Légitimité des dommages",//6 -légitimité
        "Favoriser la légitimité",//7 +légitimité, hameçon
        "Pillage de la possession",//8 +Or agent
        "Famille ingrate",//9 +Influence, opinion, amitié
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
        case 'demande2':
            return new Array();
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(complots[9]+" AGENT"));
            t.push(new Set().add(complots[2]+" AGENT"));
            t.push(new Set().add(complots[8]));
            t.push(new Set().add(complots[7]+" AGENT"));
            return compPolitique(p.slice(1), t);
        case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        default:
            return compPolitique(p.slice(1), t);
    }
}
function decisions(p, t=new Array()) {
    let rien=false;
    if (p.length === 0 && t.length === 0) {
        rien=true;
    }
    if (t.length === 0) {
        let e00=new Set().add("stress éviter niveau+");
        t.push(e00);
    }
    if(rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        let eRienAvent=new Set().add("Prestige (complot Saisie du pays)");
        eRienAvent.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
        eRienAvent.add("Diplomatie");
        eRienAvent.add("Intrigue");
        eRienAvent.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire");
        eRienAvent.add("éviter Gibier de potence");
        eRienAvent.add("éviter Baroudeur");
        eRienAvent.add("hameçon LUI");
        eRienAvent.add("Or");
        eRienAvent.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
        eRienAvent.add("Intendance");
        eRienAvent.add("emprisonner");
        eRienAvent.add("Erudition");
        eRienAvent.add("opinion LUI");
        eRienAvent.add("Martialité");
        eRienAvent.add("recruter SI chevalier possible");
        eRienAvent.add("emprisonner SI chevalier possible");
        eRienAvent.add("Prouesse");
        // Or pour batiment non aventurier
        eRienAvent.add("contrôle SI &lt;100");
        eRienAvent.add("développement");
        t.push(eRienAvent);
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
        e.add("hameçon OU secret");
        e.add("recruter");
        e.add("développement");
        e.add("emprisonner");
        e.add("Piété");
        e.add("Prestige");
        e.add("provisions");
        e.add("Or");
        e.add("influence");
        e.add("stress diminuer");
        t.push(e);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            let eSeigneur=new Set().add("Erudition");
            eSeigneur.add("Prestige");
            eSeigneur.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
            eSeigneur.add("opinion LUI");
            eSeigneur.add("Or");
            eSeigneur.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
            eSeigneur.add("contrôle SI &lt;100");
            eSeigneur.add("développement");
            eSeigneur.add("Intendance");
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
            e17.add("emprisonner SI Atout &quot;Sombres connaissances&quot;");
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
            e1.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
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
            e2.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
            e2.add("Or");
            e2.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
            e2.add("contrôle SI &lt;100");
            e2.add("développement");
            e2.add("Intendance");
            e2.add("emprisonner");
            t.push(e2);
            return decisions(p.slice(1), t); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            let e20=new Set().add("Prestige SI adoption/aventurier ET NON mort ET Prestige &lt; 150");
            e20.add("secret SI adoption/aventurier ET NON mort ET Atout &quot;Je suis bien en comparaison&quot; ET Prestige &lt; 150");
            e20.add("Diplomatie SI adoption/aventurier ET NON mort ET Prestige &lt; 150");
            e20.add("opinion LUI SI adoption/aventurier ET NON mort ET NON perte Prestige");
            e20.add("Intrigue SI adoption/aventurier ET NON mort ET NON perte Prestige");
            e20.add("emprisonner SI adoption/aventurier ET Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire ET NON mort ET NON perte Prestige");     
            e20.add("Or SI adoption/aventurier ET NON mort ET NON perte Prestige");
            e20.add("hameçon OU secret SI adoption/aventurier ET Atout &quot;Obligations en or&quot; ET NON mort ET NON perte Prestige");
            e20.add("Intendance SI adoption/aventurier ET NON mort ET NON perte Prestige");
            e20.add("emprisonner SI adoption/aventurier ET NON mort ET NON perte Prestige");
            e20.add("Prestige SI adoption/aventurier ET NON mort");
            e20.add("secret SI adoption/aventurier ET NON mort ET Atout &quot;Je suis bien en comparaison&quot;");
            e20.add("Diplomatie SI adoption/aventurier ET NON mort");
            e20.add("opinion LUI SI adoption/aventurier ET NON mort");
            e20.add("Intrigue SI adoption/aventurier ET NON mort");
            e20.add("emprisonner SI adoption/aventurier ET Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire ET NON mort");     
            e20.add("Or SI adoption/aventurier ET NON mort");
            e20.add("hameçon OU secret SI adoption/aventurier ET Atout &quot;Obligations en or&quot; ET NON mort");
            e20.add("Intendance SI adoption/aventurier ET NON mort");
            e20.add("emprisonner SI adoption/aventurier ET NON mort");
            e20.add("Amant SI NON mort");
            e20.add("coucher SI NON mort");
            e20.add("opinion Séduire LUI SI NON mort");
            e20.add("Intrigue SI NON mort");
            e20.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
            e20.add("santé");
            e20.add("provisions");
            e20.add("stress diminuer");
            e20.add("opinion Médecin");
            e20.add("opinion Garde du corps");
            e20.add("opinion conjoint");
			e20.add("opinion Maître-espion");
            t.push(e20);
            return decisions(p.slice(1), t); 
        case 'hamecon':
            let e4=new Set().add("hameçon OU secret LUI");
            e4.add("Intrigue");
            e4.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
            t.push(e4);
            return decisions(p.slice(1), t);
        case 'assassinat':
            let e5=new Set().add("Intrigue");
            e5.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
            t.push(e5);
            return decisions(p.slice(1), t);
        case 'recruterChevalier':
            let e6=new Set().add("recruter chevalier");
            e6.add("hameçon OU secret SI chevalier possible");
            e6.add("Martialité");
            e6.add("emprisonner SI chevalier possible");
            e6.add("Prestige");
            e6.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
            t.push(e6);
            return decisions(p.slice(1), t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            let eChevalierP=new Set().add("recruter chevalier");
            eChevalierP.add("emprisonner SI chevalier possible");
            eChevalierP.add("conjoint SI chevalier possible");
            eChevalierP.add("meilleur ami SI chevalier possible ET hors camp");
            eChevalierP.add("âme soeur SI chevalier possible ET hors camp");
            eChevalierP.add("héritier-chevalier partisan possible");
            t.push(eChevalierP);
            return decisions(p.slice(1), t);
        case 'demande': // Prestige, opinion, Or
            let eDemande=new Set().add("Prestige");
            eDemande.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
            eDemande.add("opinion LUI");
            eDemande.add("Diplomatie");
            eDemande.add("Intrigue");
            eDemande.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire");
            eDemande.add("Or");
            eDemande.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
            eDemande.add("Intendance");
            eDemande.add("emprisonner");
            t.push(eDemande);
            return decisions(p.slice(1), t); 
        case 'demande2':
            let eDem=new Set().add("Prestige");
            eDem.add('secret SI Atout &quot;Je suis bien en comparaison&quot;');
            eDem.add("opinion LUI");
            eDem.add("Diplomatie");
            eDem.add("Intrigue");
            eDem.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET Outils du tortionnaire");
            t.push(eDem);
            return decisions(p.slice(1), t); 
        case 'proclame':
            let e7=new Set().add("recruter chevalier SI Prouesse&gt;=8");
            e7.add("Martialité");
            e7.add("emprisonner SI chevalier possible ET Prouesse&gt;=8");
            e7.add("Prestige");
            e7.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
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
            e9.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
            e9.add("contrôle SI &lt;100");
            e9.add("développement");
            e9.add("Intendance");
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
            e14.add("stress diminuer");
			e14.add("opinion maître-espion");
			e14.add("opinion médecin");
            t.push(e14);
            return decisions(p.slice(1), t);
        case 'stress':
            t.push(new Set().add("stress diminuer"));
            return decisions(p.slice(1), t);
        case 'prestige':
            let ePrestige=new Set().add("Prestige");
            ePrestige.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
            ePrestige.add("Diplomatie");
            t.push(ePrestige);
            return decisions(p.slice(1), t);
        case 'denoncer': // Prestige, Renommée 
            let eDenonc=new Set().add("Prestige");
            eDenonc.add("Renommée");
            eDenonc.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
            eDenonc.add("Diplomatie");
            t.push(eDenonc);
            return decisions(p.slice(1), t);
        case 'erudition':
                t.push(new Set().add("Erudition"));
                return decisions(p.slice(1), t);
        case 'religieuxAInfluencer':
            let e12=new Set().add("opinion LUI");
            e12.add("Piété");
            e12.add("Intrigue");
            e12.add("Erudition");
            e12.add("emprisonner SI Atout &quot;Sombres connaissances&quot;");
            e12.add("Or");
            e12.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
            e12.add("contrôle SI &lt;100");
            e12.add("développement");
            e12.add("Intendance");
            e12.add("emprisonner");
            t.push(e12);
            return decisions(p.slice(1), t);
        case 'piete': // Piété, Erudition
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
        case 'succession':
            t.push(new Set().add("Influence"));
            t.push(new Set().add("Diplomatie"));
            return decisions(p.slice(1), t);
        case 'influence' :
            t.push(new Set().add("Influence"));
            return decisions(p.slice(1), t);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            let eAgent=new Set().add("opinion vassal direct ou courtisan ou invité CIBLE");
            eAgent.add("Intrigue");
            eAgent.add("emprisonner SI Atout &quot;Sombres connaissances&quot; ET (NON Aventurier OU Outils du tortionnaire)");
            eAgent.add("Diplomatie");
            eAgent.add("Or");
            eAgent.add("hameçon OU secret SI Atout &quot;Obligations en or&quot;");
            eAgent.add("contrôle SI &lt;100");
            eAgent.add("développement");
            eAgent.add("Intendance");
            eAgent.add("emprisonner");
            eAgent.add("Prestige");
            eAgent.add("secret SI Atout &quot;Je suis bien en comparaison&quot;");
            eAgent.add("hameçon vassal direct ou courtisan ou invité CIBLE");
            t.push(eAgent);
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(cours[3]));
            t.push(new Set().add(cours[0]));
            t.push(new Set().add(cours[4]));
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
            case 'piete': // Piété, Erudition
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
        case 'demande2':
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
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
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'piete': // Piété, Erudition
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("monter"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'denoncer': // Prestige, Renommée 
                case 'piete': // Piété, Erudition
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            case 'recruterChevalier':
        case 'proclame':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("monter"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'denoncer': // Prestige, Renommée 
                case 'piete': // Piété, Erudition
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
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(intentions[1]));
        t.push(new Set().add(intentions[5]+" LUI"));
        t.push(new Set().add(intentions[2]));
    }
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
            t.push(new Set().add(intentions[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(intentions[5]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(intentions[5]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(intentions[1]+" SI adoption/aventurier"));
            t.push(new Set().add(intentions[4]));
            t.push(new Set().add(intentions[5]+" LUI Séduire"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activTournoi(p.slice(1),t);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[5]+" AGENT"));
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
        case 'demande2':
            case 'piete': // Piété, Erudition
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
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
            case 'demande2':
                return new Array();
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
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
        case 'piete': // Piété, Erudition
            t.push(new Set().add(tabPrix[4]+" SI Triompher"));
            t.push(new Set().add(tabPrix[3]+" SI Triompher"));
            t.push(new Set().add(tabPrix[2]+" SI Triompher"));
            t.push(new Set().add(tabPrix[1]+" SI Triompher"));
            t.push(new Set().add(tabPrix[0]));
            return t;
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
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
            case 'demande2':
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
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)

    }
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" AGENT"));
            return activMariage(p.slice(1),t);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                t.push(new Set().add(intentions[3]+" LUI"));
            return activMariage(p.slice(1),t);
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
                t.push(new Set().add(intentions[2]+" SI AUCUN héritier-chevalier partisan possible"));
            return activMariage(p.slice(1),t);
        case 'guerre':
        case 'declarationGuerre':
            t.push(new Set().add(intentions[7]));
            return activMariage(p.slice(1),t);
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
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
                case 'demande2':
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(divertis[2]));
            t.push(new Set().add(divertis[1]));
            t.push(new Set().add(divertis[0]));
            return t;
            case 'piete': // Piété, Erudition
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
        case 'demande2':
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(nourrBoissons[2]));
            t.push(new Set().add(nourrBoissons[1]));
            t.push(new Set().add(nourrBoissons[0]));
            return t;
        case 'stress':
            t.push(new Set().add(nourrBoissons[2]));
            return activMariageNourr(p.slice(1),t);
            case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
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
        case 'demande2':
            t.push(new Set().add(lieux[2]));
            t.push(new Set().add(lieux[1]));
            return activMariageLieu(p.slice(1),t);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(lieux[2]));
            t.push(new Set().add(lieux[1]));
            t.push(new Set().add(lieux[0]));
            return t;
            case 'piete': // Piété, Erudition
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
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(intentions[3]+" LUI"));
    }
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" AGENT"));
            return activFestin(p.slice(1),t);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'vassalAInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFestin(p.slice(1),t);
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier-chevalier partisan possible"));
            return activFestin(p.slice(1),t);
        case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            default:
            return activFestin(p.slice(1),t);
    }
}
function activFete(p, t=new Array()) {
    const intentions = [
        "Se détendre",//0
        "Nouer une amitié",//1
        "Conversation au coin du feu"//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[2]));
        t.push(new Set().add(intentions[0]));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(intentions[1]+" LUI"));
            return activFete(p.slice(1),t);
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            t.push(new Set().add(intentions[2]));
            return activFete(p.slice(1),t);
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[1]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[1]+" AGENT"));
            return activFete(p.slice(1),t);
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'piete': // Piété, Erudition
            default:
            return activFete(p.slice(1), t);
    }
}
function activFeteNourr(p, t=new Array()) {
    const options = ["Maigres repas",//0
        "Repas simples",//1 -provisions
        "Banquet somptueux"//2 +recruter -provisions
    ];
    if (p.length === 0) {
        t.push(new Set().add(options[2]));
        t.push(new Set().add(options[1]));
        t.push(new Set().add(options[0]));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            t.push(new Set().add(options[2]));
            return activFeteNourr(p.slice(1),t);
        case 'revenu':
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'demande': // Prestige, opinion, Or
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(options[0]));
            return t;
        case 'survie':
            t.push(new Set().add(options[2]));
            t.push(new Set().add(options[1]));
            return activFeteNourr(p.slice(1),t);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(options[0]+" SI adoption/aventurier"));
            t.push(new Set().add(options[2]));
            t.push(new Set().add(options[1]));
            return activFeteNourr(p.slice(1),t);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'stress':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'piete': // Piété, Erudition
            default:
            return activFeteNourr(p.slice(1), t);
    }
}
function activFeteBoiss(p, t=new Array()) {
    const options = ["Rares boissons",//0
        "Boissons adéquates",//1 +opinion,diplo,intrigue,
        "Boissons abondantes"//2 +opinion,diplo,intrigue,prestige,stress,provisions
    ];
    if (p.length === 0) {
        t.push(new Set().add(options[2]));
        t.push(new Set().add(options[0]));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add(options[0]));
            return t;
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(options[2]+" SI LUI invité"));
            t.push(new Set().add(options[1]+" SI LUI invité"));
            t.push(new Set().add(options[0]));
            return t;
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(options[2]));
            t.push(new Set().add(options[1]+" SI LUI invité"));
            t.push(new Set().add(options[0]));
            return t;
            case 'survie':
                t.push(new Set().add(options[2]));
                return activFeteBoiss(p.slice(1),t);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(options[2]+" SI adoption/aventurier"));
            t.push(new Set().add(options[1]+" SI LUI invité ET adoption/aventurier"));
            t.push(new Set().add(options[0]+" SI adoption/aventurier"));
            return activFeteBoiss(p.slice(1),t);
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            t.push(new Set().add(options[2]));
            t.push(new Set().add(options[1]+" SI LUI invité"));
            return activFeteBoiss(p.slice(1),t);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add(options[2]));
            return activFeteBoiss(p.slice(1),t);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(options[1]));
            t.push(new Set().add(options[0]));
            return t;
            case 'recruterChevalier':
            case 'religieuxAInfluencer': // opinion, Or
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'controle':
                return new Array();
                case 'chevalierPartisan': // comme recruterChevalier sans Martialité
                case 'proclame':
                case 'declarationGuerre':
                case 'assassinat': // Faire démissionner ou Assassiner
                case 'hamecon':
                case 'stress':
                case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
                case 'piete': // Piété, Erudition
                default:
            return activFeteBoiss(p.slice(1), t);
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
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(intentions[3]+" LUI"));
    }
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[3]+" AGENT"));
            return activFun(p.slice(1),t);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(intentions[3]+" LUI"));
            return activFun(p.slice(1),t);
            case 'piete': // Piété, Erudition
            case 'foiChangemt':
        case 'factionFoi':
            t.push(new Set().add(intentions[0]));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[2]));
            return activFun(p.slice(1),t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            t.push(new Set().add(intentions[2]+" SI AUCUN héritier-chevalier partisan possible"));
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
function activMonum(p, t=new Array(), intentions=null) {
    if(intentions == null) intentions = ["Amassage de savoirs",//0
        "Curiosité",//1
        "Répandre la légende"
    ];
    if (p.length === 0) {
        t.push(new Set().add(intentions[2]));
        t.push(new Set().add(intentions[0]));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
       case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
       case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                        t.push(new Set().add(intentions[0]));
            return t;
        case 'revenu':
            case 'religieuxAInfluencer': // opinion, Or
            t.push(new Set().add(intentions[1]+" SI Atout &quot;Obligations en or&quot;"));
            t.push(new Set().add(intentions[0]));
            return t;
        case 'survie':
        case 'stress':
            intentions[0] = undefined;
            return activMonum(p.slice(1),t,intentions);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[0]+" SI adoption/aventurier"));
            intentions[0] = undefined;
            return activMonum(p.slice(1),t,intentions);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'piete': // Piété, Erudition
            default:
            return activMonum(p.slice(1), t);
    }
}
function activMonumScribe(p, t=new Array()) {
    const options = ["Pas de scribes",//0
        "Recruter des scribes compétents"//1
    ];
    if (p.length === 0) {
        t.push(new Set().add(options[1]));
        t.push(new Set().add(options[0]));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                        t.push(new Set().add(options[1]));
          t.push(new Set().add(options[0]));
            return t;
        case 'revenu':
            t.push(new Set().add(options[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(options[1]+" SI adoption/aventurier"));
            return activMonumScribe(p.slice(1),t);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'survie':
        case 'stress':
            case 'piete': // Piété, Erudition
            default:
            return activMonumScribe(p.slice(1), t);
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
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(intentions[1]));
        t.push(new Set().add(intentions[4]+" LUI"));
    }
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[4]+" AGENT"));
            t.push(new Set().add(intentions[1]));
            return activChasse(p.slice(1),t);
        case 'vassalAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer':
            case 'vassalSOppose':
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
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
                t.push(new Set().add(intentions[3]+" SI AUCUN héritier-chevalier partisan possible"));
            return activChasse(p.slice(1),t);
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            default:
            return activChasse(p.slice(1),t);
    }
}
function participChasse(p, t=new Array()) {
    const options = ["Gardes-chasse locaux", //0
        "Groupes de chasse",//1 artefact, Prestige
        "Groupes de gardes-chasse", //2 artefact, Prestige
    ];
    if (p.length === 0) {
        t.push(new Set().add(options[2])); // artefact, Prestige
        t.push(new Set().add(options[1])); // artefact, Prestige
        t.push(new Set().add(options[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add(options[0]));
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
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(options[2]));
            t.push(new Set().add(options[1]));
            t.push(new Set().add(options[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(options[2]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(options[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(options[0]+" SI adoption/aventurier"));
            return participChasse(p.slice(1),t);
        default:
            return participChasse(p.slice(1),t);
    }
}
function grpeChasse(p, t=new Array()) {
    const options = ["Petit groupe",//0
        "Groupe raisonnable",//1 Prestige
        "Grand groupe"//2 Prestige
    ];
    if (p.length === 0) {
        t.push(new Set().add(options[2]));
        t.push(new Set().add(options[1]));
        t.push(new Set().add(options[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(options[0]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(options[2]));
            t.push(new Set().add(options[1]));
            t.push(new Set().add(options[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(options[2]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(options[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(options[0]+" SI adoption/aventurier"));
            return grpeChasse(p.slice(1),t);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'assassinat':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'piete': // Piété, Erudition
        default:
            return grpeChasse(p.slice(1),t);
    }
}
function activRando(p, t=new Array()) {
    const intentions = ["Se détendre",//0
        "Conteur",//1 gloire
        "Amitié",//2 opinion
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(intentions[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(intentions[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(intentions[2]+" LUI SI gouvernement administratif"));
            return activRando(p.slice(1),t);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(intentions[2]+" LUI"));
            t.push(new Set().add(intentions[1]));
            return t;
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(intentions[1]));
            return t;
        case 'survie':
        case 'stress':
            t.push(new Set().add(intentions[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(intentions[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(intentions[2]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(intentions[0]));
            return t;
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(intentions[2]+" AGENT"));
            t.push(new Set().add(intentions[1]));
            return activRando(p.slice(1),t);
            case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            case 'piete': // Piété, Erudition
            default:
            return activRando(p.slice(1), t);
    }
}
function activRandoLong(p, t=new Array()) {
    const long = ["Randonnée courte",//0 
        "Longue randonnée",//1
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(long[1]));
        t.push(new Set().add(long[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
        default:
            return activRandoLong(p.slice(1), t);
    }
}
function activUniv(p, t=new Array(), actions=null) {
    if(actions==null) { actions= ["Etudier durement",//0
        "Mener une vie goliardique",//1 vie étu
    ]; }
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(actions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'prestige':
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(actions[0]));
            return t;
        case 'survie':
        case 'stress':
            t.push(new Set().add(actions[1]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(actions[0]+" SI adoption/aventurier"));
            t.push(new Set().add(actions[1]));
            return t;
        default:
            return activUniv(p.slice(1), t, actions);
    }
}
function activUnivMat(p, t=new Array(), actions=null) {
    if(actions==null) { actions= ["Bouts de parchemin",//0 +or
        "Livres et notes",//1 +diplo,martial,intendance,intrigue,eru -or
        "Bibliothèque",//2 +artefact,diplo,martial,intendance,intrigue,eru -or
    ]; }
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(actions[2]));
        t.push(new Set().add(actions[1]));
        t.push(new Set().add(actions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(actions[2]));
            t.push(new Set().add(actions[1]));
            t.push(new Set().add(actions[0]));
            return t;
        case 'revenu':
            t.push(new Set().add(actions[0]));
            return t;
        default:
            return (p.slice(1), t);
    }
}
function particip(p, t=new Array()) {
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Participe"));
    }
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
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
                case 'demande2':
                    case 'piete': // Piété, Erudition
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
                    case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
                    t.push(new Set().add(types[2]));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
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
            case 'piete': // Piété, Erudition
            case 'factionFoi':
                    case 'factionCult':
                        t.push(new Set().add(intentions[2]));
                return t;
       case 'denoncer': // Prestige, Renommée 
            case 'assassinat':
                case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
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
            case 'piete': // Piété, Erudition
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Suite nombreuse"));
            t.push(new Set().add("Entourage modeste"));
            return suite(p.slice(1),t);
        case 'revenu':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("Suite modeste"));
            return t;    
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (complots) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("A DEFINIR"));
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
            case 'demande2':
                return new Array();
        case 'denoncer': // Prestige, Renommée 
        case 'piete': // Piété, Erudition
            default:
            return regence(p.slice(1), t);
    }
}
function epidemies(p, t=new Array(), fonctions=null) {
    if (fonctions==null) { fonctions =
        ["Atténuer les épidémies", //0 +santé -or
        "Faire de la recherche avancée",//1 +exp -or
        "Améliorer les aptitudes",//2 +santé -prestige
    ]; }
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            fonctions[0]=undefined;
            fonctions[1]=undefined;
            return epidemies(p.slice(1),t,fonctions);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(fonctions[1]));
            fonctions[0]=undefined;
            fonctions[1]=undefined;
            return epidemies(p.slice(1),t,fonctions);
        case 'survie':
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add(fonctions[2]));
            return epidemies(p.slice(1),t,fonctions);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'demande': // Prestige, opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'prestige':
            fonctions[2]=undefined;
            t.push(new Set().add(fonctions[1]));
            return epidemies(p.slice(1),t,fonctions);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(fonctions[1]+" SI adoption/aventurier"));
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add(fonctions[2]));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
            case 'piete': // Piété, Erudition
            t.push(new Set().add(fonctions[1]));
            return epidemies(p.slice(1),t,fonctions);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add("aucune fonction"));
            return t
            default:
            return epidemies(p.slice(1),t,fonctions);
    }
}
function posteCaravanier(p, t=new Array(), fonctions=null) {
    if (fonctions==null) { fonctions =
        ["Faire des réserves pour les voyages",//0 +sécurité -or
        "Préparer les armées",//1 +appro guerre -or
        "Améliorer les aptitudes",//2 +chevalier -prestige
    ]; }
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
                fonctions[0]=undefined;
            fonctions[1]=undefined;
            return posteCaravanier(p.slice(1),t,fonctions);
        case 'survie':
            t.push(new Set().add(fonctions[0]));
            return posteCaravanier(p.slice(1),t,fonctions);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'demande': // Prestige, opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'prestige':
            fonctions[2]=undefined;
            return posteCaravanier(p.slice(1),t,fonctions);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("aucune fonction SI adoption/aventurier"));
            t.push(new Set().add(fonctions[0]));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add(fonctions[2]));
            return posteCaravanier(p.slice(1),t,fonctions);
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            t.push(new Set().add(fonctions[2]));
            return posteCaravanier(p.slice(1),t,fonctions);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'stress':
            case 'piete': // Piété, Erudition
            default:
            return posteCaravanier(p.slice(1),t,fonctions);
    }
}
function posteAntiq(p, t=new Array(), fonctions=null) {
    if (fonctions==null) fonctions = ["Améliorer les artefacts",//0 +artefact -or
        "Exposer les objets illustres",//1 +intendance, légende -prestige
        "Rechercher des artefacts rares",//2 +artefact -prestige
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction SI aventurier"));
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[1]));
        t.push(new Set().add(fonctions[0]));
        t.push(new Set().add(fonctions[2]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(fonctions[1]));
            return posteAntiq(p.slice(1),t, fonctions);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            fonctions[1]=undefined;
            fonctions[2]=undefined;
            return posteAntiq(p.slice(1),t, fonctions);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            case 'controle':
            case 'assassinat': // Faire démissionner ou Assassiner
            case 'hamecon':
            case 'recruterChevalier':
            case 'proclame':
            case 'declarationGuerre':
            case 'survie':
            case 'stress':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add(fonctions[2]));
            return posteAntiq(p.slice(1),t, fonctions);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(fonctions[2]));
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        default:
            return posteAntiq(p.slice(1), t, fonctions);
    }
}
function posteSenech(p, t=new Array(), fonctions=null) {
    if (fonctions == null) fonctions = ["Organiser la Cour",//0 -prestige
        "Gérer le domaine",//1 +controle -or
        "Gérer la possession",//2 +Influence,construction -or, prestige
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(fonctions[2]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
                fonctions[1]=undefined;
            fonctions[2]=undefined;
            return posteSenech(p.slice(1),t, fonctions);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(fonctions[2]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            fonctions[0]=undefined;
            fonctions[2]=undefined;
            return posteSenech(p.slice(1),t, fonctions);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(fonctions[2]+" SI gouvernement administratif"));
            return posteSenech(p.slice(1),t, fonctions);
        case 'controle':
            t.push(new Set().add(fonctions[1]));
            return posteSenech(p.slice(1),t, fonctions);
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        default:
            return posteSenech(p.slice(1), t, fonctions);
    }
}
function posteProf(p, t=new Array(), fonctions=null) {
    if (fonctions == null) fonctions = ["Faire de la recherche avancée",//0 +exp -or
        "Enseigner à la Cour",//1 +diplo,intendance,eru,martialite -prestige
        "Eduquer les enfants",//2 -prestige
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction SI aventurier"));
     }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[0]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            t.push(new Set().add(fonctions[1]));
            fonctions[0]=undefined;
            return posteProf(p.slice(1),t, fonctions);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
            case 'piete': // Piété, Erudition
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add(fonctions[0]));
            return posteProf(p.slice(1),t, fonctions);
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add(fonctions[1]));
            return posteProf(p.slice(1),t, fonctions);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            fonctions[1]=undefined;
            fonctions[2]=undefined;
            t.push(new Set().add(fonctions[0]));
            return posteProf(p.slice(1),t, fonctions);
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
                            case 'stress':
                case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                case 'survie':
                    t.push(new Set().add(fonctions[0]));
            return posteProf(p.slice(1),t, fonctions);
        default:
            return posteProf(p.slice(1), t, fonctions);
    }
}
function posteNour(p, t=new Array()) {
    const fonctions = ["Enseigner la vertu",//0 -prestige
        "Promouvoir l'amitié",//1 -prestige
        "Encourager la compétition",//2 -prestige
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
                return new Array();    
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        default:
            return posteNour(p.slice(1), t);
    }
}
function posteEcuyer(p, t=new Array(), fonctions=null) {
    if(fonctions==null) fonctions = ["Supervise la reproduction",//0 +guerre -or
        "Toilettage des chevaux de guerre",//1 +guerre SI commande -or
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(fonctions[1]));
            t.push(new Set().add(fonctions[0]));
            return posteEcuyer(p.slice(1),t, fonctions);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'survie':
            fonctions[1]=undefined;
            return posteEcuyer(p.slice(1),t, fonctions);   
        case 'prestige':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
            case 'piete': // Piété, Erudition
            default:
            return posteEcuyer(p.slice(1), t, fonctions);
    }
}
function posteChasse(p, t=new Array()) {
    const fonctions = ["Traquer une bête ordinaire",//0 -or
        "Traquer une bête dangereuse",//1 -or
        "Traquer une bête légendaire",//2 -or
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        default:
            return posteChasse(p.slice(1), t);
    }
}
function posteChroni(p, t=new Array()) {
    const fonctions = ["Rechercher des légendes",//0 +légende -or
        "Exalter la légende dans le pays",//1 +légende -or
        "Répandre la légende à l'étranger",//2 +légende -or
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[1]+" SI légende"));
        t.push(new Set().add(fonctions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        default:
            return posteChroni(p.slice(1), t);
    }
}
function posteChamp(p, t=new Array(), fonctions=null) {
    if(fonctions==null) fonctions = ["Concourir en son nom",//0 +prestige -or
        "Entraîner le dirigeant",//1 +prouesse -prestige, stress
        "Améliorer les aptitudes",//2 +prouesse -prestige
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[0]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
                fonctions[0]=undefined;
            return posteChamp(p.slice(1),t,fonctions);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(fonctions[0]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(fonctions[2]));
            t.push(new Set().add(fonctions[1]));
            return posteChamp(p.slice(1),t,fonctions);
            case 'survie':
                case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            fonctions[1]=undefined;
            return posteChamp(p.slice(1),t,fonctions);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
            case 'piete': // Piété, Erudition
            default:
            return posteChamp(p.slice(1), t, fonctions);
    }
}
function posteBouffon(p, t=new Array(), fonctions=null) {
    if(fonctions==null) fonctions = ["Divertir les courtisans",//0 +stress -prestige
        "Alimenter la rumeur",//1 +complot ennemi -prestige
        "Abuser du bouffon",//2 +redoutabilité -prestige
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[2]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
                return new Array();
                case 'survie':
                    case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                    t.push(new Set().add(fonctions[1]));
            return posteBouffon(p.slice(1),t,fonctions);
        case 'stress':
            t.push(new Set().add(fonctions[0]));
            return posteBouffon(p.slice(1),t,fonctions);
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
            case 'piete': // Piété, Erudition
            default:
            return posteBouffon(p.slice(1), t, fonctions);
    }
}
function posteGarde(p, t=new Array(), fonctions=null) {
    if(fonctions==null) fonctions = ["Terrifier la Cour",//0 +redout -prestige, opinion cour
    ];
    if (p.length === 0 && t.length === 0) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(fonctions[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'religieuxAInfluencer': // opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'prestige':
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("aucune fonction SI LUI courtisan"));
            return posteGarde(p.slice(1),t,fonctions);
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
                return new Array();
            case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        default:
            return posteGarde(p.slice(1), t, fonctions);
    }
}
function campObjectif(p, t=new Array()) {
    const obj = ["Nous sommes Vagabonds!",//0 +tout -prestige
        "Devenir lames à louer",//1 +guerre,or -prestige
        "Devenir érudits",//2 +exp -prestige
        "Devenir explorateurs",//3 +santé -prestige
        "Devenir écumeurs",//4 +or -gibier de potence,prestige
        "Devenir légitimistes",//5 +guerre -prestige
        ];
    if (p.length === 0 && t.length === 0) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(obj[5]+" SI aucun coût"));
        t.push(new Set().add(obj[0]+" SI aucun coût"));
        t.push(new Set().add("ne rien faire"));
        return t;        
    }
    if (p.length === 0) {
        t.push(new Set().add(obj[5]));
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(obj[0]+" SI aucun coût"));
            t.push(new Set().add("ne rien faire"));
            return t;
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(obj[1]));
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
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
            t.push(new Set().add(obj[2]));
            return t;
        case 'survie':
            t.push(new Set().add(obj[3]));
            return t;
        case 'revenu':
            t.push(new Set().add(obj[4]));
            return t;
        case 'recruterChevalier':
            return new Array();
        default:
            return campObjectif(p.slice(1));
    }
}
function decisionOuNon(res, setOui, setNon) {
    // rechercher dans res si au moins 1 setOui est avant tout setNon
    // parcours de res (tableau de Set) :
    for (let r of res) {
        for (let e of r) {
            // parcourir setOui
            if (setOui) {
            for (let o of setOui) {
                // recherche de o dans chaîne e :
                console.log(e.toLowerCase(), o.toLowerCase());
                if (e.toLowerCase().includes(o.toLowerCase())) {
                    return true;
                }
            }}
            if (setNon) {
            for (let n of setNon) {
                // recherche de n dans chaîne e :
                if (e.toLowerCase().includes(n.toLowerCase())) {
                    return false;
                }
            }}
        }
    }
    return true;
}
function liDec(listeDecisions, libDecision, id, ouiNon) {
    // si id n'existe pas, le créer :
    if (!document.getElementById(id)) {
        const d = document.createElement('li');
        // ajout attribut id :
        d.setAttribute('id', id);
        listeDecisions.appendChild(d);
    }
    evidence(id, libDecision+" : "+ouiNon);   
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
    const armeesResult = militaireAuto(p);
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
    const festinResult = activFestin(p);
    const feteResult = activFete(p);
    const feteNourrResult = activFeteNourr(p);
    const feteBoissResult = activFeteBoiss(p);
    const monumResult = activMonum(p);
    const monumScribeResult = activMonumScribe(p);
    const funResult = activFun(p);
    const campObjectifResult = campObjectif(p);
    // Afficher les résultats dans la section des résultats sur la page
    evidence('militaireResult', sansDoublon(militaireResult));
    evidence('comm', sansDoublon(armeesResult));
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
    evidence('activRando', sansDoublon(activRando(p), "SINON"));
    evidence('randoOption', sansDoublon(activRandoLong(p), "SINON"));
    evidence('activUniv', sansDoublon(activUniv(p), "SINON"));
    evidence('univMat', sansDoublon(activUnivMat(p), "SINON"));
    evidence('tourneeType', sansDoublon(tourneeResult));
    evidence('tourneeIntention', sansDoublon(tourneeIntentionResult, "SINON"));
    evidence('suite', sansDoublon(suiteResult, "SINON"));
    evidence('luxe', sansDoublon(luxeResult, "SINON"));
    evidence('tournoiHeberg', sansDoublon(hebergResult, "SINON"));
    evidence('prix', sansDoublon(prixResult, "SINON"));
    evidence('fete', sansDoublon(feteResult, "SINON"));
    evidence('feteNourr', sansDoublon(feteNourrResult, "SINON"));
    evidence('monum', sansDoublon(monumResult, "SINON"));
    evidence('monumScribe', sansDoublon(monumScribeResult, "SINON"));
    evidence('feteBoiss', sansDoublon(feteBoissResult, "SINON"));
    evidence('fun', sansDoublon(funResult, "SINON"));
    evidence('campObjectif', sansDoublon(campObjectifResult, "SINON"));
    let listePostes = document.getElementById('epidResult');
    liDec(listePostes, "Médecin", 'poste-0', sansDoublon(epidemies(p), "SINON"));
    liDec(listePostes, "Maître-caravanier", 'poste-1', sansDoublon(posteCaravanier(p), "SINON"));
    liDec(listePostes, "Antiquaire", 'poste-2', sansDoublon(posteAntiq(p), "SINON"));
    liDec(listePostes, "Sénéchal", 'poste-3', sansDoublon(posteSenech(p), "SINON"));
    liDec(listePostes, "Professeur", 'poste-4', sansDoublon(posteProf(p), "SINON"));
    liDec(listePostes, "Nourrice", 'poste-5', sansDoublon(posteNour(p), "SINON"));
    liDec(listePostes, "Grand écuyer", 'poste-6', sansDoublon(posteEcuyer(p), "SINON"));
    liDec(listePostes, "Maître de chasse", 'poste-7', sansDoublon(posteChasse(p), "SINON"));
    liDec(listePostes, "Chroniqueur de la Cour", 'poste-8', sansDoublon(posteChroni(p), "SINON"));
    liDec(listePostes, "Champion personnel", 'poste-9', sansDoublon(posteChamp(p), "SINON"));
    liDec(listePostes, "Bouffon de la Cour", 'poste-10', sansDoublon(posteBouffon(p), "SINON"));
    liDec(listePostes, "Garde du corps", 'poste-11', sansDoublon(posteGarde(p), "SINON"));
    // création de <li> dans id 'dec'
    // Décisions pays
    let listeDecisions = document.getElementById('decPays');
    liDec(listeDecisions, 'Agrandir le duché', 'dec-pays-1', decisionOuNon(decisionsResult,
        new Set(["Renommée"]),
        new Set(["Prestige"])));
    liDec(listeDecisions, 'Déplacer la capitale de jure', 'dec-pays-0', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)"]),
        new Set(["Prestige"])));
    // décisions importantes Aventurier
    listeDecisions = document.getElementById('decImp');
    liDec(listeDecisions, 'Devenir un grand conquérant', 'dec-maj-av-0', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)", "augmenter levées", "légende"]),
        new Set(["Prestige"])));
    liDec(listeDecisions, 'Défendre la culture ...', 'dec-maj-av-1', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)"]),
        new Set(["Or", "Prestige"])));
    liDec(listeDecisions, 'Devenir le ...', 'dec-maj-av-2', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)", "Prouesse", "artefact", "légende"]),
        new Set(["Prestige"])));
    liDec(listeDecisions, 'Les voyages de ...', 'dec-maj-av-3', decisionOuNon(decisionsResult,
            new Set(["points d'expérience", "artefact"]),
            new Set(["Or", "Prestige"])));
    /*liDec(listeDecisions, 'Le chemin de la foi ...', 'dec-maj-av-4', decisionOuNon(decisionsResult,
        null,
        null));*/
    liDec(listeDecisions, "La voie ... - l'ascension", 'dec-maj-av-8', decisionOuNon(decisionsResult,
            new Set(["Martialité", "Prouesse"]),
            new Set(["Piété", "stress diminuer"])));
    liDec(listeDecisions, 'Fonder une propriété', 'dec-maj-av-5', decisionOuNon(decisionsResult,
            new Set(["contrôle SI ", "Prestige (complot Saisie du pays)"]),
            new Set(["Or"])));
    liDec(listeDecisions, 'Enrôler les exclus', 'dec-maj-av-6', decisionOuNon(decisionsResult,
        new Set(["Martialité", "Intrigue", "augmenter levées"]),
        new Set(["Or", "Prestige"])));
    liDec(listeDecisions, 'Mesures désespérées - Abattage des animaux', 'dec-maj-av-7', decisionOuNon(decisionsResult,
            new Set(["provisions"]),
            new Set(["Prestige"])));
    // Décisions aventurier
    listeDecisions = document.getElementById('decAv');
    liDec(listeDecisions, 'Visiter la propriété ...', 'dec-av-0', decisionOuNon(decisionsResult,
            new Set(["provisions", "Prestige (complot Saisie du pays)"]),
            null));
    liDec(listeDecisions, 'Rassembler les provisions', 'dec-av-1', decisionOuNon(decisionsResult,
                new Set(["provisions"]),
                null));
    liDec(listeDecisions, 'Humilier le larbin', 'dec-av-2', decisionOuNon(decisionsResult,
                    new Set(["stress diminuer", "redoutabilité"]),
                    new Set(["Prestige"])));
    liDec(listeDecisions, 'A la pêche', 'dec-av-3', decisionOuNon(decisionsResult,
                        new Set(["stress diminuer", "provisions"]),
                        null));
    liDec(listeDecisions, 'Faire table rase du passé', 'dec-av-4', decisionOuNon(decisionsResult,
        new Set(["éviter Gibier de potence", "Prestige (complot Saisie du pays)"]),
        new Set(["Or", "Prestige", "Piété"])));
    liDec(listeDecisions, "Renoncer à l'héritage", 'dec-av-5', decisionOuNon(decisionsResult,
            new Set(["stress diminuer"]),
            new Set(["Prestige SI adoption/aventurier ET NON mort", "Prestige"])));
    // Décisions de l'unité de la Maison decMaison
    listeDecisions = document.getElementById('decMaison');
    liDec(listeDecisions, "Orienter l'unité de la Maison", 'dec-maison-0', decisionOuNon(decisionsResult,
        new Set(["points d'expérience", "opinion LUI"]),
        new Set(["Piété", "redoutabilité", "opinion LUI"])));
    liDec(listeDecisions, "Chercher des percepteurs d'impôts", 'dec-maison-1', decisionOuNon(decisionsResult,
        new Set(["Or"]),
        new Set(["Or", "Piété"])));
    // Décisions mineures
    listeDecisions = document.getElementById('dec');
    liDec(listeDecisions, "Être diverti par le bouffon de la Cour", 'dec-14', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        null));
    liDec(listeDecisions, "Commander un artefact", 'dec-6', decisionOuNon(decisionsResult,
        new Set(["artefact"]),
        new Set(["Or"])));
    liDec(listeDecisions, "S'entraîner pour un tournoi", 'dec-0', decisionOuNon(decisionsResult,
            new Set(["Or" /*"prouesse"*/]),
            new Set(["Prestige"])));
    liDec(listeDecisions, "Devenir un aventurier", 'dec-7', decisionOuNon(decisionsResult,
        new Set(["Prestige"]),
        new Set(["Renommée"])));
    liDec(listeDecisions, "Accélérer les complots", 'dec-8', decisionOuNon(decisionsResult,
            null,
            null));
    liDec(listeDecisions, "Créer un itinéraire de voyage", 'dec-1', decisionOuNon(decisionsResult,
            new Set(["Prestige", "artefact"]),
            new Set(["Or"])));
    liDec(listeDecisions, "Adopter la culture locale", 'dec-2', decisionOuNon(decisionsResult,
        null,
        new Set(["Prestige"])));
    liDec(listeDecisions, "Faites-vous plaisir en buvant", 'dec-3', decisionOuNon(decisionsResult,
            new Set(["stress diminuer"]),
            new Set(["Prestige"])));
    liDec(listeDecisions, "Méditer dans l'isolement", 'dec-9', decisionOuNon(decisionsResult,
            new Set(["stress diminuer", "Erudition"]),
            new Set(["Diplomatie", "Martialité", "Intendance", "Intrigue", ])));
    liDec(listeDecisions, "Perdre du poids", 'dec-10', decisionOuNon(decisionsResult,
        new Set(["santé"]),
        new Set(["stress diminuer"])));
    liDec(listeDecisions, "Arrêter de perdre du poids", 'dec-11', decisionOuNon(decisionsResult,
            new Set(["stress diminuer"]),
            null));
    liDec(listeDecisions, "Faire la charité", 'dec-5', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Or"])));
    liDec(listeDecisions, "Faire voeu de pauvreté", 'dec-12', decisionOuNon(decisionsResult,
        new Set(["Piété"]),
        new Set(["Or"])));
    liDec(listeDecisions, "Tenter de se suicider", 'dec-4', decisionOuNon(decisionsResult,
        null,
        new Set(["Piété"])));
    liDec(listeDecisions, "Demander audience au Roi", 'dec-13', decisionOuNon(decisionsResult,
        null,
        null));
    liDec(listeDecisions, "Aller dans un lupanar", 'dec-15', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Or"])));
    // Décisions de courtisans decCour
    listeDecisions = document.getElementById('decCour');
    liDec(listeDecisions, "Favoriser les experts étrangers", 'dec-cour-0', decisionOuNon(decisionsResult,
        new Set(["recruter"]),
        new Set(["Prestige", "opinion LUI"])));
    liDec(listeDecisions, "Recruter un spécialiste du terrain", 'dec-cour-1', decisionOuNon(decisionsResult,
            new Set(["recruter"]),
            new Set(["Or", "Prestige"])));
    liDec(listeDecisions, "Recruter à un poste de la Cour", 'dec-cour-2', decisionOuNon(decisionsResult,
        new Set(["recruter", "santé", "points d'expérience"]),
        new Set(["Or", "Prestige"])));
    liDec(listeDecisions, "Inviter des chevaliers", 'dec-cour-3', decisionOuNon(decisionsResult,
        new Set(["recruter chevalier"]),
        new Set(["Prestige"])));
    liDec(listeDecisions, "Inviter des prétendants", 'dec-cour-4', decisionOuNon(decisionsResult,
        new Set(["recruter"]),
        new Set(["Prestige"])));
    // Activités
    let listeActiv = document.getElementById('activitesGrand');
    liDec(listeActiv, "Grande tournée", 'act-g-1', decisionOuNon(decisionsResult,
        new Set(["contrôle SI &lt;100", "opinion comtale", "légitimité", "stress diminuer", "Prestige"]),
        new Set(["Or"])));
    liDec(listeActiv, "Grand tournoi", 'act-g-0', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Légitimation", "stress diminuer"]),
        new Set(["Or"])));
    listeActiv = document.getElementById('activites');
    liDec(listeActiv, "Séjour universitaire", 'act-1', decisionOuNon(decisionsResult,
        new Set(["Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "points d'expérience", "artefact", "recruter"]),
        new Set(["Or"])));
    liDec(listeActiv, "Festin", 'act-0', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Légitimation", "stress diminuer", "Intrigue"]),
        new Set(["Or"])));
    liDec(listeActiv, "Funérailles", 'act-7', decisionOuNon(decisionsResult,
        new Set(["stress diminuer", "Piété", "Légitimation"]),
        new Set(["Or"])));
    liDec(listeActiv, "Fête de camp", 'act-2', decisionOuNon(decisionsResult,
            new Set(["stress diminuer", "provisions", "Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "Prestige (complot Saisie du pays)", "artefact", "recruter"]),
            new Set(["Or"])));
    liDec(listeActiv, "Randonnée", 'act-3', decisionOuNon(decisionsResult,
                new Set(["stress diminuer", "Prestige", "Erudition"]),
                new Set(["Or"])));
    liDec(listeActiv, "Chasse", 'act-4', decisionOuNon(decisionsResult,
        new Set(["Prestige", "provisions", "artefact", "légende", "légitimité", "stress diminuer", "Prouesse"]),
        new Set(["Or"])));
    liDec(listeActiv, "Expédition vers un monument", 'act-5', decisionOuNon(decisionsResult,
        new Set(["Intrigue", "Diplomatie", "Martialité", "Erudition", "Intendance", "recruter", "Prestige"]),
        new Set(["Or"])));
    liDec(listeActiv, "Pélerinage", 'act-6', decisionOuNon(decisionsResult,
            new Set(["Piété", "légitimité", "stress diminuer", "éviter Gibier de potence", "Prestige (complot Saisie du pays)"]),
            new Set(["Or"])));
    }
function sansDoublon(tab, liaison="") {
    let texte = "";
    let faits = new Set();
    for(let l=0; l<tab.length; l++) {
        let premierMot = true;
        console.log(tab[l]);
        tab[l].forEach(function motTexte(mot) {
            if(mot !== undefined && mot !== null && mot !== "") {
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
            }
        });
    }
    return texte;
}