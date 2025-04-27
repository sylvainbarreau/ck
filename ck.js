/*
function (p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["",//0
    ]; }
    if (rien) {
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
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'foiChangemt':
        case 'factionFoi':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'erudition': *
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return (p.slice(1), t, o);
    }
}
*/
function militaire(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o=true; }
    if (rien) {
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
            return militaire(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
            case 'demande': // Prestige, opinion, Or
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
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
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return militaire(p.slice(1), t, o);
    }
}
function militaireAuto(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o=true; }
    if (rien) {
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
            case 'conseiller': // recruter
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'factionPop': // Opinion populaire
default:
            return militaireAuto(p.slice(1), t, o);
    }
}
function conjoint(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o = ["S'occuper de chevalerie",//0
        "S'occuper de politique",//1
        "S'occuper des intrigues",//2
        "Patronner",//3
        "Gérer le domaine"//4
    ];
     }
    if (rien) { }
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const p2 = p[0].split('-');
    const lui = p2[1]; console.log(lui);
    const pp = p2[0]; console.log(pp);
    switch(pp) {
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]));
            return t;
        case 'guerre':
        case 'declarationGuerre':
        case 'controle':
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
            case 'prestige':
        case 'vassalSOppose':
        case 'succession':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            case 'denoncer': // Prestige, Renommée 
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]));
                return t;
        case 'assassinat':
        case 'influence':
            case 'hamecon':
                case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
                t.push(new Set().add(o[2]));
            return t;
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'rancon': // Or, hameçon
        case 'revenu':
        case 'domaine':
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[4]));
            return t;
            case 'religieuxAInfluencer': // opinion, Or
            case 'piete': // Piété, Erudition
            case 'factionFoi':
                    case 'erudition':
                    t.push(new Set().add(o[3]));
                return t;
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'conseiller': // recruter
            default:
            return conjoint(p.slice(1), t, o);
    }
  }
function chancelier(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if(o==null) { o =
    ["Accorder une faveur royale",//0
    "Intégrer le titre",//1
    "Gérer les affaires intérieures",//2
    "Gérer les affaires étrangères"];//3 
    }
    const effets = [
        ["Fin de la guerre interne","Augmentation de l'opinion vassale"],
        ["Boost de tâches"],
        ["Fin de la guerre interne","Force la partition pour le vassal",
        "Contrat vassalique amélioré","Augmentation de l'opinion vassale"],
        ["Période de trêve diminué"]
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
        }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'revenu':
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t, o); 
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[0]+" SI "+effets[0][1]+" ALLIE"));
            t.push(new Set().add(o[2]+" SI "+effets[2][3]+" ALLIE"));
            t.push(new Set().add(o[2]+" SI "+effets[2][2]));
            return chancelier(p.slice(1), t, o);
            case 'declarationGuerre':
            t.push(new Set().add(o[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t, o);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(o[3]+' SI '+effets[3][0]));
            return chancelier(p.slice(1), t, o);
        case 'vassalAInfluencer' :
        case 'vassalSOppose':
            t.push(new Set().add(o[0]+" LUI"));
            t.push(new Set().add(o[2]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" SI Séduire LUI"));
            t.push(new Set().add(o[2]+" SI Séduire LUI"));
            return chancelier(p.slice(1), t, o); 
        case 'dirigeantAInfluencer':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                default:
            return chancelier(p.slice(1), t, o);
    }
}
function marechal(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if(o==null) { o = ["Gérer la garde royale", //0
    "Augmenter le contrôle comtal", //1
    "Former les commandants",//2
    "Organiser l'armée"];//3
    }
    const effets = [ 
        ["Chevalier amélioré", "Complot hostile arrêté"],
        ["Augmentation de l'opinion du baron", "Augmentation de l'opinion comtale"],
        ["Trait de commandant", "Chevalier amélioré"],
        ["Présence militaire accrue", "Service bien organisé"]
       ];
    if (p.length === 0) {
        t.push(new Set().add(o[1]+' SI '+effets[1][0]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre':
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[3]));
            return t; 
        case 'controle':
        case 'revenu':
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[1]+' SI '+effets[1][0]+" ALLIE"));
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
            case 'recruterChevalier':
        case 'proclame':
            case 'conseiller': // recruter
            t.push(new Set().add(o[2]));
            return t;
        case 'survie' :
            t.push(new Set().add(o[0]));
            return marechal(p.slice(1), t, o);
        case 'religieuxAInfluencer': // opinion, Or
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI "+effets[1][0]+" Séduire LUI"));
            t.push(new Set().add(o[0]));
            return marechal(p.slice(1), t, o);
        case 'factionFoi':
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]+" LUI"+" SI "+effets[1][1]));
            return marechal(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" vassal direct CIBLE SI "+effets[1][0]));
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
            case 'denoncer': // Prestige, Renommée 
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            default:
            return marechal(p.slice(1), t, o);
    }
}
function religieux(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if(o==null) o = ["Fabriquer une revendication comtale", //0
    "Convertir le comté", //1
    "Améliorer les relations religieuses"];//2
    const effets = [ 
        ["Revendication ducale"],
        ["Augmentation du développement comtal","Augmentation des levées comtales","Augmentation de l'opinion comtale"],
        ["Augmentation de l'opinion vassale"]
       ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(o[1]+' SI '+effets[1][1]));
            t.push(new Set().add(o[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t, o); 
        case 'declarationGuerre':
                t.push(new Set().add(o[1]+' SI '+effets[1][1]));
                t.push(new Set().add(o[1]+' SI '+effets[1][0]));
                return religieux(p.slice(1), t, o); 
            case 'vassalAInfluencer':
            case 'vassalSOppose':
                t.push(new Set().add(o[2]+' SI '+effets[2][0]));
                return religieux(p.slice(1), t, o);
        case 'enfant':
            t.push(new Set().add(o[2]+' SI Séduire '+effets[2][0]));
            return religieux(p.slice(1), t, o);
    case 'revenu':
    case 'rancon': // Or, hameçon
        t.push(new Set().add(o[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[2]+' SI '+effets[2][0]+" ALLIE"));
        t.push(new Set().add(o[1]+' SI '+effets[1][0]));
        return religieux(p.slice(1), t, o);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(o[0]));
            return t;
        case 'religieuxAInfluencer':
            case 'piete': // Piété, Erudition
            t.push(new Set().add(o[2]));
                return t;
        case 'factionFoi':
            t.push(new Set().add(o[1]));
            return religieux(p.slice(1), t, o);
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]+" LUI"+' SI '+effets[1][2]));
                return religieux(p.slice(1), t, o);                
                case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" SI "+effets[1][0]));
            t.push(new Set().add(o[2]));
            return t;
                case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'denoncer': // Prestige, Renommée 
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            default:
            return religieux(p.slice(1), t, o);
    }
}
function intendant(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = ["Promouvoir l'acceptation culturelle", //0
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
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'controle':
            t.push(new Set().add(o[2]+' SI '+effets[2][1]));
            return intendant(p.slice(1), t, o); 
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'declarationGuerre':
              t.push(new Set().add(o[2]));
            return t; 
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(o[4]));
            return intendant(p.slice(1), t, o); 
        case 'revenu':
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[3]));
            return t;
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[0]+" SI "+effets[0][2]));
            t.push(new Set().add(o[3]));
            return t;
            case 'vassalSOppose':
        case 'vassalAInfluencer':
            t.push(new Set().add(o[0]+" LUI SI "+effets[0][2]));
            return intendant(p.slice(1), t, o);
        case 'enfant':
                t.push(new Set().add(o[0]+" LUI SI Séduire "+effets[0][2]));
                return intendant(p.slice(1), t, o);
        case 'factionFoi':
            t.push(new Set().add(o[1]+" LUI"+" SI "+effets[1][0]));
            return intendant(p.slice(1), t, o);
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]+" COMTE SI "+effets[1][0]));
            t.push(new Set().add(o[0]+" COMTE SI "+effets[0][2]));
            return intendant(p.slice(1), t, o);           
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            return intendant(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[0]+" SI "+effets[0][2]));
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            t.push(new Set().add(o[3]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            return intendant(p.slice(1), t, o);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            t.push(new Set().add(o[3]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();    
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            default:
            return intendant(p.slice(1), t, o);
    }
}
function espion(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = ["Chercher des secrets", //0
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
            t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" LUI"));
            return espion(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" AGENT")); 
            return espion(p.slice(1), t, o);
        case 'assassinat':
            t.push(new Set().add(o[1]));
            return t;
        case 'survie':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            return t; 
        case 'vassalSOppose':
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[0]+" VASSAL"));
            return espion(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" GEOLIER"));
            return espion(p.slice(1), t, o);
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
                            default:
            return espion(p.slice(1), t, o);
    }
}
function prison(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o == null) o = ["Négocier la libération",//0
        "Rançonner",//1
        "Exécuter",//2
        "Torturer",//3
        "Castrer",//4
        "Aveugler",//5
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
        t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
        t.push(new Set().add(o[1]+" &gt; Or"));
        t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
        t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
        t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
        t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
        t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
        t.push(new Set().add("ne rien faire SAUF proposition SI NON vassal"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
                    t.push(new Set().add(o[0]+" SI ALLIE"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'demande':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET Outils du tortionnaire"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'demande2':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET Outils du tortionnaire"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'declarationGuerre':
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'recruterChevalier':
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'proclame':
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible ET Prouesse&gt;=8"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'revenu':
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI GEOLIER"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI GEOLIER"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'vassalAInfluencer':
        case 'hamecon':
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI adoption/aventurier ET Or"));
            t.push(new Set().add(o[1]+" &gt; Or SI adoption/aventurier"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI adoption/aventurier ET Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI adoption/aventurier ET Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'assassinat':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[0]+" SI vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI MECENE"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI MECENE"));
            o[3] += " SI NON perte Piété";      
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'religieuxAInfluencer':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            o[3] += " SI NON perte Piété";
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'piete': // Piété, Erudition
            o[3] += " SI NON perte Piété";
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'denoncer': // Prestige, Renommée 
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
            case 'conseiller': // recruter
            t.push(new Set().add(o[0]+" &gt; Recruter"));
            return prison(p.slice(1), t, o);
            default:
            return prison(p.slice(1), t, o);
    }
}
function secrets(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = true;
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
        t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
        t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
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
            let e=new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            t.push(e);
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Faire chanter SI gouvernement administratif"));
            return secrets(p.slice(1), t, o);
        case 'declarationGuerre':
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\""));
            return secrets(p.slice(1), t, o);
        case 'recruterChevalier':
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            return secrets(p.slice(1), t, o);
            case 'conseiller': // recruter
            t.push(new Set().add("Faire chanter SI recrutable"));
            t.push(new Set().add("Révéler SI emprisonnable ET recrutable"));
            return secrets(p.slice(1), t, o);
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add("Faire chanter SI chevalier possible"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible"));
            t.push(new Set().add("Faire chanter SI mécène"));
            return secrets(p.slice(1), t, o);
        case 'proclame':
            t.push(new Set().add("Faire chanter SI chevalier possible ET Prouesse&gt;=8"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible ET Prouesse&gt;=8"));
            return secrets(p.slice(1), t, o);
        case 'revenu':
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t, o); 
            case 'rancon': // Or, hameçon
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            t.push(new Set().add("Faire chanter SI GEOLIER"));
            return secrets(p.slice(1), t, o);
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t, o); 
        case 'vassalAInfluencer':
        case 'hamecon':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t, o); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Révéler SI adoption/aventurier ET Atout \"Je suis bien en comparaison\" ET Prestige &lt; 150"));
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET Atout \"Je suis bien en comparaison\""));
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t, o); 
        case 'religieuxAInfluencer':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET NON perte Piété"));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t, o); 
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET Outils du tortionnaire"));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Faire chanter SI mécène"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t, o); 
        case 'demande2':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET Outils du tortionnaire"));
            t.push(new Set().add("Faire chanter SI mécène"));
            return secrets(p.slice(1), t, o); 
        case 'assassinat':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t, o); 
        case 'succession':
        case 'influence' :
            t.push(new Set().add("Faire chanter")); //Influence
            return t;
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add("Révéler SI motif de révocation VASSAL"));
            t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
            return secrets(p.slice(1), t, o);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
            return secrets(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire) ET NON vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or ET NON vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add("Révéler SI emprisonnable ET NON vassal direct ou courtisan ou invité CIBLE"));
            t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\" ET NON vassal direct ou courtisan ou invité CIBLE"));
            return secrets(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire) ET NON ALLIE"));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or ET NON ALLIE"));
            t.push(new Set().add("Révéler SI emprisonnable ET NON ALLIE"));
                        return secrets(p.slice(1), t, o);
            case 'piete': // Piété, Erudition
            case 'factionPop': // Opinion populaire
            default:
            return secrets(p.slice(1), t, o);
    }
}
function hamec(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = true;
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
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
            return hamec(p.slice(1), t, o);
            case 'conseiller': // recruter
            t.push(new Set().add("Recruter"));
            return hamec(p.slice(1), t, o);
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add("Recruter SI chevalier possible"));
            t.push(new Set().add("Déplacer camp"));          
            return hamec(p.slice(1), t, o);
        case 'proclame':
            t.push(new Set().add("Recruter SI chevalier possible ET Prouesse&gt;=8"));
            return hamec(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add("ne rien faire SI NON vassal direct ou courtisan ou invité CIBLE"));
            return hamec(p.slice(1), t, o); 
        case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            default:
            return hamec(p.slice(1), t, o);
    }
}
function influence(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = ["Influencer",//0
        "Nouer une amitié",//1
        "Séduire",//2
        "Marier clandestinement",//3
        "Apprendre la langue",//4
        "Faire la cour",//5
        "Convertir à la sorcellerie",//6
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[4]+" LUI SI Aventurier"));
        t.push(new Set().add(o[0]+" LUI SI Aventurier"));
        t.push(new Set().add(o[1]+" LUI SI Aventurier"));
        t.push(new Set().add(o[2]+" LUI SI Aventurier"));
    }
    if (p.length === 0) {
        let e=new Set().add(o[0]+" vassal puissant non intimidé non factiable");
        e.add(o[0]+" vassal puissant intimidé non factiable");
        e.add(o[0]+" vassal non intimidé non factiable");
        e.add(o[0]+" vassal intimidé non factiable");
        e.add(o[0]+" conseiller religieux");
        e.add(o[0]+" allié");
        e.add(o[0]+" seigneur lige");
        e.add(o[0]+" Médecin");
        e.add(o[0]+" Garde du corps");
        e.add(o[0]+" conjoint");
        e.add(o[0]+" Maître-espion");
        t.push(e);
        return t;
    } 
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            let eSeigneur=new Set().add(o[0]+" LUI SI gouvernement administratif");
            eSeigneur.add(o[1]+" LUI SI gouvernement administratif");
            eSeigneur.add(o[4]+" LUI SI gouvernement administratif");
            t.push(eSeigneur);
            return influence(p.slice(1), t, o);
        case 'vassalAInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
        case 'demande':
        case 'demande2':
            let eVassal=new Set().add(o[0]+" LUI");
            eVassal.add(o[1]+" LUI");
            eVassal.add(o[4]+" LUI");
            t.push(eVassal);
            return influence(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[0]+" ALLIE"));
            t.push(new Set().add(o[1]+" ALLIE"));
            t.push(new Set().add(o[4]+" ALLIE"));
            return influence(p.slice(1), t, o);
            /*case 'pertesTerres':*/
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[1]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[4]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[5]));
            t.push(new Set().add(o[3]));
            return influence(p.slice(1), t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            t.push(new Set().add(o[5]+" amant SI chevalier possible ET hors camp &gt; âme soeur"));
            t.push(new Set().add(o[0]+" ami SI chevalier possible ET hors camp &gt; meilleur ami"));
            t.push(new Set().add(o[0]+" amant SI chevalier possible ET hors camp &gt; âme soeur"));
            return influence(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[0]+" AGENT"));
            t.push(new Set().add(o[1]+" AGENT"));
            t.push(new Set().add(o[4]+" AGENT"));
            return influence(p.slice(1), t, o);
            case 'conseiller': // recruter
            case 'denoncer': // Prestige, Renommée 
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            default:
            return influence(p.slice(1), t, o);
    }
}
function contreMesure(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o == null) o = ["Primes pour les dénonciations",//0 -revenu,prestige
        "Arrestations arbitraires",//1 -opinion courtisan,invité
        "Sentinelles renforcées",//2 -opinion,courtisan,invité,vassal
        "Garde doublée",//3 +survie -opinion courtisan,invité,vassal
        "Retrait de la vie publique",//4 -opinion,stress
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Aucune"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[4]));
        t.push(new Set().add("Aucune"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            o[4]+=" SI NON gouvernement administratif";
            return contreMesure(p.slice(1),t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            o[0]=undefined;
            o[2]+=" SI ALLIE";
            o[3]+=" SI ALLIE";
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            o[0]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);  
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            o[2]=undefined;
            o[3]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'factionPop': // Opinion populaire
            case 'religieuxAInfluencer':
            t.push(new Set().add("Aucune"));
            return t;
        case 'stress':
            o[3]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'survie':
            t.push(new Set().add(o[3]));
            return contreMesure(p.slice(1),t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            o[0]+=" SI NON adoption/aventurier";
            o[1]+=" SI NON adoption/aventurier";
            o[2]+=" SI NON adoption/aventurier";
            o[3]+=" SI NON adoption/aventurier";
            o[4]+=" SI NON adoption/aventurier";
            t.push(new Set().add(o[3]));
            return contreMesure(p.slice(1),t, o);
        case 'revenu':
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    o[0]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            o[0]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        default:
            return contreMesure(p.slice(1),t, o);
    }
}
function compHostile(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Assassinat",//0
        "Enlèvement",//1
        "Revendiquer le trône",//2
        "Fabrication d'un hameçon",//3
        "Voler un artefact",//4
        "Renverser le régent",//5
        "Saisie du pays",//6
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre/Acquérir une possession (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[6]));
        t.push(new Set().add(o[3]+" POUR Acheter une terre ou Acquérir une possession"));
    }
    if (p.length === 0) {
        let eDefaut=new Set().add(o[6]);
        eDefaut.add(o[2]);
        eDefaut.add(o[5]);
        eDefaut.add(o[4]);
        eDefaut.add("Aucun");
        t.push(eDefaut);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            let eSeigneur=new Set().add(o[2]);
            eSeigneur.add(o[5]);
            t.push(eSeigneur);
            return compHostile(p.slice(1), t, o);   
        case 'assassinat':
            let eAssassinat=new Set().add(o[0]+" LUI SI NON Destituer");
            eAssassinat.add(o[1]+" LUI");
            t.push(eAssassinat);
            return compHostile(p.slice(1), t, o);
        case 'hamecon':
            t.push(new Set().add(o[3]+" LUI"));
            return compHostile(p.slice(1), t, o);
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[3]+" LUI"));
            return compHostile(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[4]+" SI adoption/aventurier"));
            return compHostile(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[3]+" GEOLIER"));
            return compHostile(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
                        t.push(new Set().add(o[4]));
            return compHostile(p.slice(1), t, o);
            case 'conseiller': // recruter
            t.push(new Set().add(o[1]));
            return compHostile(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'piete': // Piété, Erudition
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'factionPop': // Opinion populaire
        default:
            return compHostile(p.slice(1), t, o);
    }
}
function compPolitique(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Contester le statut",//0 (agents) +Influence "Statut du défi"
        "Destitution",//1 (agents) "Déposer"
        "Consolider la base du pouvoir",//2 (agents) +Influence,opinion "Mentor en gouvernance"
        "Intégrer le gouvernorat",//3 (agents) Subsumer la gouvernance
        "Promouvoir",//4 (agents) +succession "Promouvoir"
        "Diffamation",//5 (agents) -succession "Calomnier"
        "Légitimité des dommages",//6 -légitimité
        "Favoriser la légitimité",//7 +légitimité,hameçon
        "Pillage de la possession",//8 (agents) +Or
        "Famille ingrate",//9 +Influence,opinion,amitié
        "Dispute frontalière",//10 (agents) "Conflit frontalier"
    ];
    if (p.length === 0) {
        let ePol=new Set().add(o[2]);
        ePol.add(o[3]);
        ePol.add(o[10]);
        ePol.add(o[8]);
        t.push(ePol);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(o[9]+" LUI SI gouvernement administratif"));
            t.push(new Set().add(o[2]+" LUI SI gouvernement administratif"));
            return compPolitique(p.slice(1), t, o);
        case 'succession':
            t.push(new Set().add(o[4]));
            return t;
        case 'influence' :
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[9]));
            t.push(new Set().add(o[0]));
            return compPolitique(p.slice(1), t, o);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[10]));
            return compPolitique(p.slice(1), t, o);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
        t.push(new Set().add(o[9]+" LUI"));
            t.push(new Set().add(o[2]+" LUI"));
            t.push(new Set().add(o[8]));
            return compPolitique(p.slice(1), t, o);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            let ePol=new Set().add(o[9]+" LUI");
            ePol.add(o[2]+" LUI");
            //ePol.add(o[0]);
            t.push(ePol);
            return t;
        case 'assassinat':
            t.push(new Set().add(o[1]));
            return compPolitique(p.slice(1), t, o);
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[8]));
            return compPolitique(p.slice(1), t, o);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[9]+" AGENT"));
            t.push(new Set().add(o[2]+" AGENT"));
            t.push(new Set().add(o[8]));
            t.push(new Set().add(o[7]+" AGENT"));
            return compPolitique(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[9]+" ALLIE"));
            t.push(new Set().add(o[2]+" ALLIE"));
            t.push(new Set().add(o[8]));
            t.push(new Set().add(o[7]+" ALLIE"));
            return compPolitique(p.slice(1), t, o);
            case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return compPolitique(p.slice(1), t, o);
    }
}
function decisions(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = true;
    if (t.length === 0) {
        let e00=new Set().add("stress éviter niveau+");
        t.push(e00);
    }
    if(rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        let eRienAvent=new Set().add("Prestige (complot Saisie du pays)");
        eRienAvent.add("secret SI Atout \"Je suis bien en comparaison\"");
        eRienAvent.add("Diplomatie");
        eRienAvent.add("Intrigue");
        eRienAvent.add("emprisonner SI Atout \"Sombres connaissances\" ET Outils du tortionnaire");
        eRienAvent.add("éviter Gibier de potence");
        eRienAvent.add("éviter Baroudeur");
        eRienAvent.add("hameçon LUI");
        eRienAvent.add("Or");
        eRienAvent.add("hameçon OU secret SI Atout \"Obligations en or\"");
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
        e.add("éviter rivalité/rancune");
        e.add("hameçon OU secret");
        e.add("recruter");
        e.add("développement");
        e.add("emprisonner");
        e.add("Piété");
        e.add("Prestige");
        e.add("Or");
        e.add("provisions");
        //e.add("influence");
        e.add("stress diminuer");
        t.push(e);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            let eSeigneur=new Set().add("Erudition");
            eSeigneur.add("Prestige");
            eSeigneur.add("secret SI Atout \"Je suis bien en comparaison\"");
            eSeigneur.add("opinion LUI");
            eSeigneur.add("Or");
            eSeigneur.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eSeigneur.add("contrôle SI &lt;100");
            eSeigneur.add("développement");
            eSeigneur.add("Intendance");
            eSeigneur.add("emprisonner");
            t.push(eSeigneur);
            return decisions(p.slice(1), t, o);
        case 'controle':
            let e0=new Set().add("contrôle");
            e0.add("Martialité");
            t.push(e0);
            return decisions(p.slice(1), t, o);
        case 'declarationGuerre':
            let e17=new Set().add("Martialité");
            e17.add("augmenter levées");
            e17.add("Influence");
            e17.add("contrôle SI &lt;100");
            e17.add("développement");
            e17.add("recruter SI chevalier possible");
            e17.add("emprisonner SI chevalier possible");
            e17.add("Prouesse");
            e17.add("emprisonner SI Atout \"Sombres connaissances\"");
            t.push(e17);
            return decisions(p.slice(1), t, o);
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            let e1=new Set().add("Prouesse");
            e1.add("Martialité");
            e1.add("augmenter levées");
            e1.add("Influence");
            e1.add("contrôle SI &lt;100");
            e1.add("développement");
            e1.add("recruter SI chevalier possible");
            e1.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            e1.add("emprisonner SI chevalier possible");
            e1.add("opinion LUI SI gouvernement administratif");
            t.push(e1);
            return decisions(p.slice(1), t, o);
        case 'vassalAInfluencer':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
                    let e2=new Set().add("opinion ALLIE");
            e2.add("Diplomatie");
            e2.add("Intrigue");
            e2.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            e2.add("Or");
            e2.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e2.add("contrôle SI &lt;100");
            e2.add("développement");
            e2.add("Intendance");
            e2.add("emprisonner");
            t.push(e2);
            return decisions(p.slice(1), t, o); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            let e20=new Set().add("Prestige SI adoption/aventurier ET NON mort ET Prestige &lt; 150");
            e20.add("secret SI adoption/aventurier ET NON mort ET Atout \"Je suis bien en comparaison\" ET Prestige &lt; 150");
            e20.add("Diplomatie SI adoption/aventurier ET NON mort ET Prestige &lt; 150");
            t.push(e20);
            let eHeritier1=new Set().add("opinion LUI SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("Intrigue SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("emprisonner SI adoption/aventurier ET Atout \"Sombres connaissances\" ET Outils du tortionnaire ET NON mort ET NON perte Prestige");     
            eHeritier1.add("Or SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("hameçon OU secret SI adoption/aventurier ET Atout \"Obligations en or\" ET NON mort ET NON perte Prestige");
            eHeritier1.add("Intendance SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("emprisonner SI adoption/aventurier ET NON mort ET NON perte Prestige");
            t.push(eHeritier1);
            let eHeritier2=new Set().add("Prestige SI adoption/aventurier ET NON mort");
            eHeritier2.add("secret SI adoption/aventurier ET NON mort ET Atout \"Je suis bien en comparaison\"");
            eHeritier2.add("Diplomatie SI adoption/aventurier ET NON mort");
            eHeritier2.add("opinion LUI SI adoption/aventurier ET NON mort");
            eHeritier2.add("Intrigue SI adoption/aventurier ET NON mort");
            eHeritier2.add("emprisonner SI adoption/aventurier ET Atout \"Sombres connaissances\" ET Outils du tortionnaire ET NON mort");     
            eHeritier2.add("Or SI adoption/aventurier ET NON mort");
            eHeritier2.add("hameçon OU secret SI adoption/aventurier ET Atout \"Obligations en or\" ET NON mort");
            eHeritier2.add("Intendance SI adoption/aventurier ET NON mort");
            eHeritier2.add("emprisonner SI adoption/aventurier ET NON mort");
            t.push(eHeritier2);
            let eHeritier3=new Set().add("Amant SI NON mort");
            eHeritier3.add("coucher SI NON mort");
            eHeritier3.add("opinion Séduire LUI SI NON mort");
            eHeritier3.add("Intrigue SI NON mort");
            eHeritier3.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            eHeritier3.add("santé");
            eHeritier3.add("provisions");
            eHeritier3.add("stress diminuer");
            eHeritier3.add("opinion Médecin");
            eHeritier3.add("opinion Garde du corps");
            eHeritier3.add("opinion conjoint");
			eHeritier3.add("opinion Maître-espion");
            t.push(eHeritier3);
            return decisions(p.slice(1), t, o); 
        case 'hamecon':
            let e4=new Set().add("hameçon OU secret LUI");
            e4.add("Intrigue");
            e4.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            t.push(e4);
            return decisions(p.slice(1), t, o);
        case 'assassinat':
            let e5=new Set().add("progression succession");
            e5.add("Intrigue");
            e5.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            t.push(e5);
            return decisions(p.slice(1), t, o);
        case 'recruterChevalier':
            let e6=new Set().add("recruter chevalier");
            e6.add("hameçon OU secret SI chevalier possible");
            e6.add("Martialité");
            e6.add("emprisonner SI chevalier possible");
            e6.add("Prestige");
            e6.add("secret SI Atout \"Je suis bien en comparaison\"");
            t.push(e6);
            return decisions(p.slice(1), t, o);
            case 'conseiller': // recruter
            let eCons=new Set().add("recruter");
            eCons.add("hameçon OU secret SI recrutable");
            eCons.add("emprisonner SI recrutable");
            t.push(eCons);
            return decisions(p.slice(1), t, o);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            let eChevalierP=new Set().add("recruter chevalier");
            eChevalierP.add("emprisonner SI chevalier possible");
            eChevalierP.add("conjoint SI chevalier possible");
            eChevalierP.add("meilleur ami SI chevalier possible ET hors camp");
            eChevalierP.add("âme soeur SI chevalier possible ET hors camp");
            t.push(eChevalierP);
            return decisions(p.slice(1), t, o);
        case 'demande': // Prestige, opinion, Or
            let eDemande=new Set().add("Prestige");
            eDemande.add("secret SI Atout \"Je suis bien en comparaison\"");
            eDemande.add("opinion LUI");
            eDemande.add("Diplomatie");
            eDemande.add("Intrigue");
            eDemande.add("emprisonner SI Atout \"Sombres connaissances\" ET Outils du tortionnaire");
            eDemande.add("Or");
            eDemande.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eDemande.add("Intendance");
            eDemande.add("emprisonner");
            t.push(eDemande);
            return decisions(p.slice(1), t, o); 
        case 'demande2':
            let eDem=new Set().add("Prestige");
            eDem.add('secret SI Atout \"Je suis bien en comparaison\"');
            eDem.add("opinion LUI");
            eDem.add("Diplomatie");
            eDem.add("Intrigue");
            eDem.add("emprisonner SI Atout \"Sombres connaissances\" ET Outils du tortionnaire");
            t.push(eDem);
            return decisions(p.slice(1), t, o); 
        case 'proclame':
            let e7=new Set().add("recruter chevalier SI Prouesse&gt;=8");
            e7.add("Martialité");
            e7.add("emprisonner SI chevalier possible ET Prouesse&gt;=8");
            e7.add("Prestige");
            e7.add("secret SI Atout \"Je suis bien en comparaison\"");
            t.push(e7);
            return decisions(p.slice(1), t, o);
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            let e8=new Set().add("secret VASSAL");
            e8.add("Intrigue");
            e8.add("emprisonner SI Atout \"Sombres connaissances\" ET (Outils du tortionnaire OU NON Aventurier)");
            e8.add("secret SI emprisonnable ET Atout \"Sombres connaissances\" ET (Outils du tortionnaire OU NON Aventurier)");
            e8.add("Prestige");
            e8.add("secret SI Atout \"Je suis bien en comparaison\"");
            t.push(e8);
            return decisions(p.slice(1), t, o);
        case 'revenu':
            let e9=new Set().add("Or");
            e9.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e9.add("contrôle SI &lt;100");
            e9.add("développement");
            e9.add("Intendance");
            e9.add("emprisonner");
            t.push(e9);
            return decisions(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            let eR=new Set().add("Or");
            eR.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eR.add("contrôle SI &lt;100");
            eR.add("développement");
            eR.add("Intendance");
            eR.add("emprisonner");
            eR.add("hameçon GEOLIER");
            eR.add("Intrigue");
            t.push(eR);
            return decisions(p.slice(1), t, o);
        case 'domaine':
            let e10=new Set().add("Intendance");
            t.push(e10);
            return decisions(p.slice(1), t, o);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            let e11=new Set().add("augmenter magnificence de la Cour");
            e11.add("Intendance");
            e11.add("Diplomatie SI gouvernement administratif");
            e11.add("Erudition");
            t.push(e11);
            return decisions(p.slice(1), t, o);
        case 'survie':
            let e14=new Set().add("santé");
            e14.add("provisions");
            e14.add("stress diminuer");
			e14.add("opinion maître-espion");
			e14.add("opinion médecin");
            t.push(e14);
            return decisions(p.slice(1), t, o);
        case 'stress':
            t.push(new Set().add("stress diminuer"));
            return decisions(p.slice(1), t, o);
        case 'prestige':
            let ePrestige=new Set().add("Prestige");
            ePrestige.add("secret SI Atout \"Je suis bien en comparaison\"");
            ePrestige.add("Diplomatie");
            t.push(ePrestige);
            return decisions(p.slice(1), t, o);
        case 'denoncer': // Prestige, Renommée 
            let eDenonc=new Set().add("Prestige");
            eDenonc.add("Renommée");
            eDenonc.add("secret SI Atout \"Je suis bien en comparaison\"");
            eDenonc.add("Diplomatie");
            t.push(eDenonc);
            return decisions(p.slice(1), t, o);
        case 'erudition':
                t.push(new Set().add("Erudition"));
                return decisions(p.slice(1), t, o);
        case 'religieuxAInfluencer':
            let e12=new Set().add("opinion LUI");
            e12.add("Piété");
            e12.add("Intrigue");
            e12.add("Erudition");
            e12.add("emprisonner SI Atout \"Sombres connaissances\"");
            e12.add("Or");
            e12.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e12.add("contrôle SI &lt;100");
            e12.add("développement");
            e12.add("Intendance");
            e12.add("emprisonner");
            t.push(e12);
            return decisions(p.slice(1), t, o);
        case 'piete': // Piété, Erudition
            let e16=new Set().add("Piété");
            e16.add("Erudition");
            t.push(e16);
            return decisions(p.slice(1), t, o);
        case 'factionFoi':
            let e15=new Set().add("opinion comtale LUI");
            e15.add("Piété");
            e15.add("Erudition");
            t.push(e15);
            return decisions(p.slice(1), t, o);
            case 'factionPop': // Opinion populaire
            let e152=new Set().add("opinion comtale COMTE");
            t.push(e152);
            return decisions(p.slice(1), t, o);
        case 'vassalSOppose':
            let e13=new Set().add("opinion LUI");
            e13.add("emprisonner LUI");
            e13.add("redoutabilité");
            e13.add("Diplomatie");
            e13.add("Intrigue");
            t.push(e13);
            return decisions(p.slice(1), t, o);
        case 'succession':
            t.push(new Set().add("Influence"));
            t.push(new Set().add("Diplomatie"));
            return decisions(p.slice(1), t, o);
        case 'influence' :
            t.push(new Set().add("Influence"));
            return decisions(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            let eAgent=new Set().add("opinion vassal direct ou courtisan ou invité CIBLE");
            eAgent.add("Intrigue");
            eAgent.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON Aventurier OU Outils du tortionnaire)");
            eAgent.add("Diplomatie");
            eAgent.add("Or");
            eAgent.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eAgent.add("contrôle SI &lt;100");
            eAgent.add("développement");
            eAgent.add("Intendance");
            eAgent.add("emprisonner");
            eAgent.add("Prestige");
            eAgent.add("secret SI Atout \"Je suis bien en comparaison\"");
            eAgent.add("hameçon vassal direct ou courtisan ou invité CIBLE");
            eAgent.add("Piété");
            eAgent.add("Erudition");
            t.push(eAgent);
            return decisions(p.slice(1), t, o);
        default:
            return decisions(p.slice(1), t, o);
    }
}
function typeCour(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Cour diplomatique", //0 +opinion conseiller,complot personnel,vassalité -prestige
    "Cour guerrière", //1 +guerre -prestige
    "Cour administrative",//2 +acceptation culturelle,or -prestige
    "Cour d'intrigue", //3 +complot hostile -Prestige
    "Cour érudite"]; //4 +artefact,opinion courtisan,invité,exp,Erudition -Prestige
    if (p.length === 0) {
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[2]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[4]));
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    t.push(new Set().add("ne rien changer"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'assassinat':
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[2]));
            return typeCour(p.slice(1), t, o);
        case 'hamecon':
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'religieuxAInfluencer': // opinion, Or
            t.push(new Set().add(o[0]));
                t.push(new Set().add(o[4]));
                t.push(new Set().add(o[3]));
                t.push(new Set().add(o[2]));
            return typeCour(p.slice(1), t, o);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            return typeCour(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[2]));
            return typeCour(p.slice(1), t, o);
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'domaine':
            case 'piete': // Piété, Erudition
            case 'erudition':
        case 'factionFoi':
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'revenu':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[3]));
            return typeCour(p.slice(1), t, o);
        case 'controle':
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(o[4]));
            t.push(new Set().add("ne rien changer"));
            return t;
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(o[3]+" SI gouvernement administratif"));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'succession':
            case 'influence' :
                t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
        case 'conseiller': // recruter
        default:
            return typeCour(p.slice(1), t, o);
    }
}
function commoditesMode(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array(); // +prestige -or
    if (p.length === 0) {
        t.push(new Set().add("laisser"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'rancon': // Or, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add("monter"));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                default:
            return commoditesMode(p.slice(1), t, o);
    }
}
function commoditesNourriture(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array(); // +stress,prestige -santé,or
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
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add("monter"));
            return t;
        case 'revenu':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'rancon': // Or, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'piete': // Piété, Erudition
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
                        default:
            return commoditesNourriture(p.slice(1), t, o);
    }
}
function commoditesHebergement(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array(); // +agent,artefact,stress -or
    if (p.length === 0) {
        t.push(new Set().add("monter au moins jusqu'à 2"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add("monter SI gouvernement administratif"));
            return commoditesHebergement(p.slice(1), t, o);
        case 'revenu':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'rancon': // Or, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            t.push(new Set().add("monter"));
            return t;
        case 'domaine':
                        t.push(new Set().add("VERIF heb"));
                return t;
        case 'assassinat':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("monter"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'denoncer': // Prestige, Renommée 
                case 'piete': // Piété, Erudition
                case 'conseiller': // recruter
                default:
            return commoditesHebergement(p.slice(1), t, o);
    }
}
function commoditesDomestiques(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array(); // +complot personnel,complot ennemi -or
    if (p.length === 0) {
        t.push(new Set().add("laisser"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'rancon': // Or, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'vassalAInfluencer':
        case 'survie':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'recruterChevalier':
        case 'proclame':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("monter"));
            return t;
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'denoncer': // Prestige, Renommée 
                case 'piete': // Piété, Erudition
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
                        default:
            return commoditesDomestiques(p.slice(1), t, o);
    }
}
function activTournoi(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Se détendre",//0
        "Triompher",//1
        "Recruter",//2
        "Tuer",//3
        "Séduire",//4
        "Nouer une amitié"//5
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[5]+" LUI"));
        t.push(new Set().add(o[2]));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[5]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(o[5]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(o[5]+" vassal non intimidé non factiable"));
        t.push(new Set().add(o[5]+" vassal intimidé non factiable"));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /* case 'perteTerres':*/
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[5]+" LUI"));
            return activTournoi(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[5]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[5]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[5]+" LUI Séduire"));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[3]+" LUI"));
            return activTournoi(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[5]+" AGENT"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
                t.push(new Set().add(o[5]+" LUI"));
                return activTournoi(p.slice(1), t, o);
            case 'proclame':
                case 'guerre':
        case 'declarationGuerre':
        case 'recruterChevalier':
            t.push(new Set().add(o[2]));
            return activTournoi(p.slice(1), t, o);
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'revenu':
        case 'controle':
        case 'hamecon':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'factionFoi':
                        case 'erudition':
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]));
                return activTournoi(p.slice(1), t, o);
        case 'survie':
            case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'religieuxAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[5]+" LUI"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[5]+" ALLIE"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
            case 'conseiller': // recruter
            t.push(new Set().add(o[2]));
            return activTournoi(p.slice(1), t, o);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
        default:
            return activTournoi(p.slice(1), t, o);
    }
}
function tournoiHeb(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array();
    if (p.length === 0) {
        t.push(new Set().add("Campements luxueux"));
        t.push(new Set().add("Pavillons simples"));
        t.push(new Set().add("Tentes délabrées")); // -evt négatif
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        t.push(new Set().add("VERIF heb"));
        return t;
        case 'revenu':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'assassinat':
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
                case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
                    case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
                    case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
                    case 'denoncer': // Prestige, Renommée 
                    case 'rancon': // Or, hameçon
                    t.push(new Set().add("Tentes délabrées"));
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
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            default:
            return tournoiHeb(p.slice(1), t, o);
    }
}
function prix(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Prix quelconques",//0
        "Prix décents",//1
        "Prix corrects",//2
        "Bons prix",//3
        "Prix magnifiques"//4
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[3]));
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[4]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(o[3]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(o[2]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Triompher"));
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return prix(p.slice(1), t, o);
        case 'revenu':
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[0]));
            return t;
        // objectifs artefact
        case 'controle':
        case 'hamecon':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'factionFoi':
                case 'factionPop': // Opinion populaire
                case 'religieuxAInfluencer':
        case 'erudition':
        case 'vassalSOppose':
        case 'vassalAInfluencer':
        case 'assassinat':
        case 'piete': // Piété, Erudition
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    t.push(new Set().add(o[4]+" SI Triompher"));
            t.push(new Set().add(o[3]+" SI Triompher"));
            t.push(new Set().add(o[2]+" SI Triompher"));
            t.push(new Set().add(o[1]+" SI Triompher"));
            t.push(new Set().add(o[0]));
            return t;
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[4]+" SI Triompher"));
            t.push(new Set().add(o[3]+" SI Triompher"));
            t.push(new Set().add(o[2]+" SI Triompher"));
            t.push(new Set().add(o[1]+" SI Triompher"));
            t.push(new Set().add(o[0]));
            return t;
        case 'recruterChevalier':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'conseiller': // recruter
            t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
            default:
            return prix(p.slice(1), t, o);
    }
}
function activMariage(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Se détendre",//0
        "Tuer",//1
        "Séduire",//2
        "Diplomatie",//3
        "Semer le chaos",//4
        "Répandre la légende",//5
        "Légitimation",//6
        "Faiseur de mariages"//7
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)

    }
    if (p.length === 0) {
        t.push(new Set().add(o[6]));
        t.push(new Set().add(o[5]));
        t.push(new Set().add(o[4]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /*case 'perteTerres':*/
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[7]));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[1]+" LUI"));
            return activMariage(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]+" AGENT"));
            return activMariage(p.slice(1), t, o);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                t.push(new Set().add(o[3]+" LUI"));
            return activMariage(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[3]+" ALLIE"));
            return activMariage(p.slice(1), t, o);
            case 'survie':
        case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'guerre':
        case 'declarationGuerre':
            case 'conseiller': // recruter
            t.push(new Set().add(o[7]));
            return activMariage(p.slice(1), t, o);
            case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            default:
            return activMariage(p.slice(1), t, o);
    }
}
function activMariageDiverti(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Divertissements privés",//0
        "Acrobates et musiciens",//1
        "Troubadours et monstres exotiques",//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(o[2]+" SI LUI"));
            t.push(new Set().add(o[1]+" SI LUI"));
            return activMariageDiverti(p.slice(1), t, o);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'recruterChevalier':
                case 'chevalierPartisan': // recruterChevalier sans Martialité
                case 'demande': // Prestige, opinion, Or
                case 'demande2':
                    case 'proclame':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]+" SI adoption/aventurier"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return activMariageDiverti(p.slice(1), t, o);    
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
            case 'piete': // Piété, Erudition
            default:
            return activMariageDiverti(p.slice(1), t, o);
    }
}
function activMariageNourr(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Fête modeste",//0
        "Festin généreux",//1
        "Repas gargantuesque",//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" SI ALLIE invité"));
            t.push(new Set().add(o[1]+" SI ALLIE invité"));
            t.push(new Set().add(o[0]));
            return t;
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'religieuxAInfluencer':
            t.push(new Set().add(o[2]+" SI LUI invité"));
            t.push(new Set().add(o[1]+" SI LUI invité"));
            t.push(new Set().add(o[0])); // Or
            return t;
        case 'survie':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'stress':
            t.push(new Set().add(o[2]));
            return activMariageNourr(p.slice(1), t, o);
            case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            default:
            return activMariageNourr(p.slice(1), t, o);
    }
}
function activMariageLieu(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Fleurs sauvages",//0
        "Guirlandes et torches",//1
        "Argent et or",//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'domaine':
            t.push(new Set().add(o[2]));
            return activMariageLieu(p.slice(1), t, o);
        case 'succession':
            case 'influence' :
                t.push(new Set().add(o[2]));
            return activMariageLieu(p.slice(1), t, o);
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            t.push(new Set().add(o[2]+" SI LUI"));
            t.push(new Set().add(o[1]+" SI LUI"));
            t.push(new Set().add(o[0]+" SI LUI"));
            t.push(new Set().add(o[2]));
            return activMariageLieu(p.slice(1), t, o);
        case 'recruterChevalier':
        case 'proclame':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return activMariageLieu(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
            case 'piete': // Piété, Erudition
            default:
            return activMariageLieu(p.slice(1), t, o);
    }
}
function activFestin(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Se détendre",//0 +stress
        "Tuer",//1 
        "Séduire",//2
        "Nouer une amitié",//3
        "Semer le chaos",//4
        "Répandre la légende",//5
        "Se légitimer"//6
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[3]+" LUI"));
        t.push(new Set().add(o[6]));
        t.push(new Set().add(o[5]));
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[6]));
        t.push(new Set().add(o[5]));
        t.push(new Set().add(o[3]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(o[3]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(o[3]+" vassal non intimidé non factiable"));
        t.push(new Set().add(o[3]+" vassal intimidé non factiable"));
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /*case 'perteTerres':*/
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(o[3]+" LUI SI gouvernement administratif"));
            return activFestin(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[3]+" LUI"));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[1]+" LUI"));
            return activFestin(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]+" AGENT"));
            return activFestin(p.slice(1), t, o);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'vassalAInfluencer':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[3]+" LUI"));
            return activFestin(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[3]+" ALLIE"));
            return activFestin(p.slice(1), t, o);
            case 'survie':
        case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'conseiller': // recruter
            case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            default:
            return activFestin(p.slice(1), t, o);
    }
}
function activFestinRepas(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o= ["Simples tranchoirs",//0 +prestige
        "Mets exotiques",//1 +prestige
        "Oeuvres d'art culinaires",//2 +prestige
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            return Array();
            case 'prestige':
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                case 'denoncer': // Prestige, Renommée 
                case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
                t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;    
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
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return activFestinRepas(p.slice(1), t, o);
    }
}
function activFestinPlats(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o= ["Acceptable",//0 +opinion
        "Approprié",//1 +opinion
        "Exorbitant"//2 +opinion
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return Array();
            case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return activFestinPlats(p.slice(1), t, o);
    }
}
function activFete(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Se détendre",//0
        "Nouer une amitié",//1
        "Conversation au coin du feu"//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[0]));
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
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[1]+" LUI"));
            return activFete(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[1]+" ALLIE"));
            return activFete(p.slice(1), t, o);
            case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            t.push(new Set().add(o[2]));
            return activFete(p.slice(1), t, o);
        case 'survie':
        case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[0]));
            return t;
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" AGENT"));
            return activFete(p.slice(1), t, o);
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                 default:
            return activFete(p.slice(1), t, o);
    }
}
function activFeteNourr(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Maigres repas",//0
        "Repas simples",//1 -provisions
        "Banquet somptueux"//2 +recruter -provisions
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
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
            case 'conseiller': // recruter
            t.push(new Set().add(o[2]));
            return activFeteNourr(p.slice(1), t, o);
        case 'revenu':
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'demande': // Prestige, opinion, Or
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'survie':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return activFeteNourr(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return activFeteNourr(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'stress':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'piete': // Piété, Erudition
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            default:
            return activFeteNourr(p.slice(1), t, o);
    }
}
function activFeteBoiss(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Rares boissons",//0
        "Boissons adéquates",//1 +opinion,diplo,intrigue,
        "Boissons abondantes"//2 +opinion,diplo,intrigue,prestige,stress,provisions
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[0]));
        return t;
    }
    // garder avant -
    const p2 = p[0].split('-');
    const lui = p2[1];
    const pp = p2[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]+" SI LUI invité"));
            t.push(new Set().add(o[0]));
            return t;
            case 'survie':
                t.push(new Set().add(o[2]));
                return activFeteBoiss(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]+" SI adoption/aventurier"));
            t.push(new Set().add(o[1]+" SI LUI invité ET adoption/aventurier"));
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return activFeteBoiss(p.slice(1), t, o);
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]+" SI LUI invité"));
            return activFeteBoiss(p.slice(1), t, o);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[2]));
            return activFeteBoiss(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
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
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
                        default:
            return activFeteBoiss(p.slice(1), t, o);
    }
}
function activFun(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Pleurer la perte",//0
        "Tuer",//1
        "Séduire",//2
        "Nouer une amitié",//3
        "Légitimation"//4
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[3]+" LUI"));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[3]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(o[3]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(o[3]+" vassal non intimidé non factiable"));
        t.push(new Set().add(o[3]+" vassal intimidé non factiable"));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(o[3]+" LUI SI gouvernement administratif"));
            return activFun(p.slice(1), t, o);
        case 'assassinat':
            t.push(new Set().add(o[1]+" LUI"));
            return activFun(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]+" AGENT"));
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[3]+" LUI"));
            return activFun(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[3]+" ALLIE"));
            return activFun(p.slice(1), t, o);
            case 'piete': // Piété, Erudition
            case 'foiChangemt':
        case 'factionFoi':
            t.push(new Set().add(o[0]));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            return activFun(p.slice(1), t, o);
        case 'religieuxAInfluencer':
            t.push(new Set().add(o[3]+" LUI"));
            t.push(new Set().add(o[0]));
            return t;
        case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            default:
            return activFun(p.slice(1), t, o);
    }
}
function activMonum(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o == null) o = ["Amassage de savoirs",//0
        "Curiosité",//1
        "Répandre la légende"
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[0]));
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
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
                        t.push(new Set().add(o[0]));
            return t;
        case 'revenu':
            case 'religieuxAInfluencer': // opinion, Or
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]+" SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]));
            return t;
        case 'survie':
        case 'stress':
            o[0] = undefined;
            return activMonum(p.slice(1),t,o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            o[0] = undefined;
            return activMonum(p.slice(1),t,o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
            case 'piete': // Piété, Erudition
            default:
            return activMonum(p.slice(1), t, o);
    }
}
function activMonumScribe(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Pas de scribes",//0
        "Recruter des scribes compétents"//1
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
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
                        t.push(new Set().add(o[1]));
          t.push(new Set().add(o[0]));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            return activMonumScribe(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
            case 'survie':
        case 'stress':
            case 'piete': // Piété, Erudition
            default:
            return activMonumScribe(p.slice(1), t, o);
    }
}
function activChasse(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = [
        "Se détendre",//0
        "Abattre une bête",//1
        "Tuer",//2
        "Séduire",//3
        "Nouer une amitié",//4
    ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[4]+" LUI"));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[4]+" vassal puissant non intimidé non factiable"));
        t.push(new Set().add(o[4]+" vassal puissant intimidé non factiable"));
        t.push(new Set().add(o[4]+" vassal non intimidé non factiable"));
        t.push(new Set().add(o[4]+" vassal intimidé non factiable"));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        /*case 'perteTerres':*/
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            t.push(new Set().add(o[4]+" LUI SI gouvernement administratif"));
            return activChasse(p.slice(1), t, o);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[4]+" LUI"));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[2]+" LUI"));
            return activChasse(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[4]+" AGENT"));
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
        case 'vassalAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer':
            case 'vassalSOppose':
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
                t.push(new Set().add(o[4]+" LUI"));
                return activChasse(p.slice(1), t, o);
                case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[4]+" ALLIE"));
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
                case 'survie':
                case 'stress':
                    t.push(new Set().add(o[0]));
                return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
            case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            default:
            return activChasse(p.slice(1), t, o);
    }
}
function participChasse(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Gardes-chasse locaux", //0
        "Groupes de chasse",//1 artefact, Prestige
        "Groupes de gardes-chasse", //2 artefact, Prestige
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2])); // artefact, Prestige
        t.push(new Set().add(o[1])); // artefact, Prestige
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        // pour artefact :
        case 'assassinat':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return participChasse(p.slice(1), t, o);
            case 'conseiller': // recruter
            default:
            return participChasse(p.slice(1), t, o);
    }
}
function grpeChasse(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Petit groupe",//0
        "Groupe raisonnable",//1 Prestige
        "Grand groupe"//2 Prestige
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return grpeChasse(p.slice(1), t, o);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'assassinat':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return grpeChasse(p.slice(1), t, o);
    }
}
function activRando(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Se détendre",//0
        "Conteur",//1 gloire
        "Amitié",//2 opinion
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        t.push(new Set().add(o[2]+" LUI SI gouvernement administratif"));
            return activRando(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" ALLIE"));
            return activRando(p.slice(1), t, o);
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(o[2]+" LUI"));
            t.push(new Set().add(o[1]));
            return t;
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    t.push(new Set().add(o[1]));
            return t;
        case 'survie':
        case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[2]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[0]));
            return t;
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]+" AGENT"));
            t.push(new Set().add(o[1]));
            return activRando(p.slice(1), t, o);
            case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                default:
            return activRando(p.slice(1), t, o);
    }
}
function activRandoLong(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Randonnée courte",//0 
        "Longue randonnée",//1
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return activRandoLong(p.slice(1), t, o);
    }
}
function activUniv(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o= ["Etudier durement",//0
        "Mener une vie goliardique",//1 vie étu
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[0]));
            return t;
        case 'survie':
        case 'stress':
            case 'conseiller': // recruter
            t.push(new Set().add(o[1]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            t.push(new Set().add(o[1]));
            return t;
        default:
            return activUniv(p.slice(1), t, o);
    }
}
function activUnivMat(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o= ["Bouts de parchemin",//0 +or
        "Livres et notes",//1 +diplo,martial,intendance,intrigue,eru -or
        "Bibliothèque",//2 +artefact,diplo,martial,intendance,intrigue,eru -or
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[2]));
            return activUnivMat(p.slice(1), t, o);
            case 'conseiller': // recruter
            default:
            return activUnivMat(p.slice(1), t, o);
    }
}
function activPelerin(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Pèlerinage pieux",//0 +piété
        "Pèlerinage mondain"//1 +culture
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'religieuxAInfluencer': // opinion, Or
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
          t.push(new Set().add(o[0]));
          return t;
          case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
          case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
          t.push(new Set().add(o[1]));
          return t;
          case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
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
        case 'influence' :
        case 'denoncer': // Prestige, Renommée 
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return activPelerin(p.slice(1), t, o);
    }
}
function activPelerinIntent(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Réflexion",//0 +stress
        "Faire preuve d'altruisme",//1 +opinion populaire,piété,stress
        "Fanatisme"//2
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'religieuxAInfluencer': // opinion, Or
            t.push(new Set().add(o[2]));
            return t;
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                    t.push(new Set().add(o[0]));
            return t;
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'denoncer': // Prestige, Renommée 
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        default:
            return activPelerinIntent(p.slice(1), t, o);
    }
}
function activPelerinFidel(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Obligatoire",//0 +vitesse -piété
        "Pèlerin",//1 +piété
        "Contemplatif"//2 ++piété -vitesse
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            return t;
            case 'religieuxAInfluencer': // opinion, Or
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return t;
            case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
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
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'denoncer': // Prestige, Renommée 
                case 'rancon': // Or, hameçon
                case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
                        default:
            return activPelerinFidel(p.slice(1), t, o);
    }
}
function activPelerinApp(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Humble",//0 +piété,or -santé
        "Approprié",//1 +or
        "Cérémoniel",//2 +piété -or
        "En nombre"//3 ++piété -or
    ]; }
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[1]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[3]));
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'rancon': // Or, hameçon
            o[2] = undefined;
            o[3] = undefined;
            return activPelerinApp(p.slice(1), t, o);
        case 'survie':
            o[0] = undefined;
            return activPelerinApp(p.slice(1), t, o);    
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            o[0] = undefined;
            return activPelerinApp(p.slice(1), t, o);
        case 'piete': // Piété, Erudition
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return t;
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return activPelerinApp(p.slice(1), t, o);
    }
}
function particip(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array();
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("Participe"));
    }
    if (p.length === 0) {
        t.push(new Set().add("Participe"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
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
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'hamecon':
        case 'proclame':
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
            case 'prestige':
                    case 'domaine':
        case 'religieuxAInfluencer':
            case 'piete':
                case 'vassalSOppose':
                    case 'factionFoi':
                        case 'factionCult':
                            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
                            case 'denoncer': // Prestige, Renommée 
        case 'succession':
            case 'influence' :
                case 'chevalierPartisan': // recruterChevalier sans Martialité
                case 'demande': // Prestige, opinion, Or
                case 'demande2':
                    case 'piete': // Piété, Erudition
                    case 'rancon': // Or, hameçon
                    case 'factionPop': // Opinion populaire
                    t.push(new Set().add("Participe"));
            return t;
            case 'conseiller': // recruter
            default:
            return particip(p.slice(1), t, o);
    }
}
function activTournee(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["de Sa Majesté",//0
        "d'intimidation",//1
        "d'imposition"//2
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'vassalAInfluencer':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
                case 'vassalSOppose':
                    case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
                    t.push(new Set().add(o[0]));
                    return t;
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'rancon': // Or, hameçon
            t.push(new Set().add(o[2]));
            return t;
            case 'factionFoi':
                case 'factionPop': // Opinion populaire
                t.push(new Set().add(o[1]));
                    return t;
                    case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
                    t.push(new Set().add(o[2]));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            default:
            return activTournee(p.slice(1), t, o);
    }
}
function intentionTournee(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Se détendre",//0
        "S'adonner à la luxure",//1
        "Faire preuve d'altruisme",//2
        "Rendre justice",//3
        "Répandre la légende",//4
        "Légitimation"//5
    ];
    if (p.length === 0) {
        t.push(new Set().add(o[5]));
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'survie':
            case 'stress':
            t.push(new Set().add(o[0]));
            return t;
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'revenu':
        case 'controle':
        case 'declarationGuerre':
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'vassalSOppose':
                        case 'rancon': // Or, hameçon
                        t.push(new Set().add(o[3]));
                return t;
        case 'religieuxAInfluencer':
            case 'piete': // Piété, Erudition
            case 'factionFoi':
                case 'factionPop': // Opinion populaire
                t.push(new Set().add(o[2]));
                return t;
       case 'denoncer': // Prestige, Renommée 
            case 'assassinat':
                case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
                case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'conseiller': // recruter
                    t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
            default:
            return intentionTournee(p.slice(1), t, o);
    }
}
function suite(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Suite nombreuse",//0
        "Entourage modeste",//1
        "Suite modeste"//2
    ];
    if (p.length === 0) {
        t.push(new Set().add("Suite nombreuse"));
        t.push(new Set().add("Entourage modeste"));
        t.push(new Set().add("Suite modeste"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Suite nombreuse"));
            t.push(new Set().add("Entourage modeste"));
            return suite(p.slice(1), t, o);
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add("Suite modeste"));
            return t;    
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
            default:
            return suite(p.slice(1), t, o);
    }
}
function luxe(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Mobilier en excès",//0
        "Mobilier luxueux",//1
        "Luxe extravagant",//2
        "Biens de luxe essentiels"//3
    ];
    if (p.length === 0) {
        t.push(new Set().add("Mobilier en excès"));
        t.push(new Set().add("Mobilier luxueux"));
        t.push(new Set().add("Aucun luxe"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
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
            return luxe(p.slice(1), t, o);
        case 'assassinat':
             case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'terrJureSinonRevendic': // Intendance (Convaincre territoire de jure), Diplomatie (o) SI gouvernmt admin, Erudition (Revendication comtale)
        case 'declarationGuerre':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
        default:
            return luxe(p.slice(1), t, o);
    }
}
function regence(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Remplir les coffres", //0 +or,développement,levées
    "Gonfler les rangs", //1 +chevalier,recruter
    "Promouvoir l'autorité"];//2 +faction,opinion conseiller
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
case 'vassalAInfluencer':
        case 'domaine':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'factionFoi':
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[2]));
            return t;
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" SI ALLIE conseiller moi"));
            t.push(new Set().add(o[0]));
            return t;
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]+" SI AGENT conseiller moi"));
            t.push(new Set().add(o[0]));
            case 'recruterChevalier':
        case 'proclame':
            case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
            case 'declarationGuerre':
                case 'conseiller': // recruter
                t.push(new Set().add(o[1]));
                return t;
        case 'revenu':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return regence(p.slice(1), t, o);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
        case 'denoncer': // Prestige, Renommée 
        case 'piete': // Piété, Erudition
            default:
            return regence(p.slice(1), t, o);
    }
}
function epidemies(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o==null) { o =
        ["Atténuer les épidémies", //0 +santé -or
        "Faire de la recherche avancée",//1 +exp -or
        "Améliorer les aptitudes",//2 +santé -prestige
    ]; }
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
            o[0]=undefined;
            o[1]=undefined;
            return epidemies(p.slice(1),t,o);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[1]));
            o[0]=undefined;
            o[1]=undefined;
            return epidemies(p.slice(1),t,o);
        case 'survie':
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            return epidemies(p.slice(1),t,o);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'demande': // Prestige, opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'prestige':
            o[2]=undefined;
            t.push(new Set().add(o[1]));
            return epidemies(p.slice(1),t,o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            return epidemies(p.slice(1),t,o);
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
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]));
            return epidemies(p.slice(1),t,o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[1]));
            o[2]=undefined;
            return epidemies(p.slice(1),t,o);    
            case 'conseiller': // recruter
            default:
            return epidemies(p.slice(1),t,o);
    }
}
function posteCaravanier(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o==null) { o =
        ["Faire des réserves pour les voyages",//0 +sécurité -or
        "Préparer les armées",//1 +appro guerre -or
        "Améliorer les aptitudes",//2 +chevalier -prestige
    ]; }
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
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
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'rancon': // Or, hameçon
            o[0]=undefined;
            o[1]=undefined;
            return posteCaravanier(p.slice(1),t,o);
        case 'survie':
            t.push(new Set().add(o[0]));
            return posteCaravanier(p.slice(1),t,o);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'demande': // Prestige, opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
        case 'prestige':
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            o[2]=undefined;
            return posteCaravanier(p.slice(1),t,o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("aucune fonction SI adoption/aventurier"));
            t.push(new Set().add(o[0]));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[2]));
            return posteCaravanier(p.slice(1),t,o);
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            t.push(new Set().add(o[2]));
            return posteCaravanier(p.slice(1),t,o);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'stress':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                default:
            return posteCaravanier(p.slice(1),t,o);
    }
}
function posteAntiq(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o==null) o = ["Améliorer les artefacts",//0 +artefact -or
        "Exposer les objets illustres",//1 +intendance,légende -prestige
        "Rechercher des artefacts rares",//2 +artefact -prestige
        // aucune +or
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction SI aventurier"));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[2]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(o[1]));
            return posteAntiq(p.slice(1),t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            o[1]=undefined;
            o[2]=undefined;
            return posteAntiq(p.slice(1),t, o);
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
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            return posteAntiq(p.slice(1),t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]));
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[0]));
            return posteAntiq(p.slice(1),t, o);
            case 'conseiller': // recruter
            default:
            return posteAntiq(p.slice(1), t, o);
    }
}
function posteSenech(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Organiser la Cour",//0 -prestige
        "Gérer le domaine",//1 +controle -or
        "Gérer la possession",//2 +Influence,construction -or, prestige
        // aucune +or,prestige
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[2]));
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
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
                o[1]=undefined;
            o[2]=undefined;
            return posteSenech(p.slice(1),t, o);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(o[2]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            o[0]=undefined;
            o[2]=undefined;
            return posteSenech(p.slice(1),t, o);
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(o[2]+" SI gouvernement administratif"));
            return posteSenech(p.slice(1),t, o);
        case 'controle':
            t.push(new Set().add(o[1]));
            return posteSenech(p.slice(1),t, o);
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return posteSenech(p.slice(1), t, o);
    }
}
function posteProf(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Faire de la recherche avancée",//0 +exp -or
        "Enseigner à la Cour",//1 +diplo,intendance,eru,martialite -prestige
        "Eduquer les enfants",//2 -prestige
        // aucune +or,prestige
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction SI aventurier"));
     }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
            case 'piete': // Piété, Erudition
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return posteProf(p.slice(1),t, o);
        case 'religieuxAInfluencer': // opinion, Or
        t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            return posteProf(p.slice(1),t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            o[1]=undefined;
            o[2]=undefined;
            t.push(new Set().add(o[0]));
            return posteProf(p.slice(1),t, o);
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
                            case 'stress':
                case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                case 'survie':
                    case 'factionPop': // Opinion populaire
                    t.push(new Set().add(o[0]));
            return posteProf(p.slice(1),t, o);
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'conseiller': // recruter
            default:
            return posteProf(p.slice(1), t, o);
    }
}
function posteNour(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Enseigner la vertu",//0 -prestige
        "Promouvoir l'amitié",//1 -prestige
        "Encourager la compétition",//2 -prestige
        // aucune +or,prestige
    ];
    if (rien) {
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
    t.push(new Set().add("aucune fonction"));
            return t;
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
                return new Array();    
        case 'revenu':
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add("aucune fonction"));
            return t;
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
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return posteNour(p.slice(1), t, o);
    }
}
function posteEcuyer(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) o = ["Supervise la reproduction",//0 +guerre -or
        "Toilettage des chevaux de guerre",//1 +guerre SI commande -or
        // aucune +or,prestige
    ];
    if (rien) {
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
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return posteEcuyer(p.slice(1),t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'survie':
            o[1]=undefined;
            return posteEcuyer(p.slice(1),t, o);   
        case 'prestige':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                default:
            return posteEcuyer(p.slice(1), t, o);
    }
}
function posteChasse(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Traquer une bête ordinaire",//0 -or
        "Traquer une bête dangereuse",//1 -or
        "Traquer une bête légendaire",//2 -or
        // aucune +or,prestige
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
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
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return posteChasse(p.slice(1), t, o);
    }
}
function posteChroni(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Rechercher des légendes",//0 +légende -or
        "Exalter la légende dans le pays",//1 +légende -or
        "Répandre la légende à l'étranger",//2 +légende -or
        // aucune +or,prestige
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]+" SI légende"));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
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
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        default:
            return posteChroni(p.slice(1), t, o);
    }
}
function posteChamp(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) o = ["Concourir en son nom",//0 +prestige -or
        "Entraîner le dirigeant",//1 +prouesse -prestige, stress
        "Améliorer les aptitudes",//2 +prouesse -prestige
        // aucune +or
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
                o[0]=undefined;
            return posteChamp(p.slice(1),t,o);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return posteChamp(p.slice(1),t,o);
            case 'survie':
                case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            o[1]=undefined;
            return posteChamp(p.slice(1),t,o);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                default:
            return posteChamp(p.slice(1), t, o);
    }
}
function posteBouffon(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) o = ["Divertir les courtisans",//0 +stress -prestige
        "Alimenter la rumeur",//1 +complot ennemi -prestige
        "Abuser du bouffon",//2 +redoutabilité -prestige
        // aucune +or,prestige
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'prestige':
        case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'revenu':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
                return new Array();
                case 'survie':
                    case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                    t.push(new Set().add(o[1]));
            return posteBouffon(p.slice(1),t,o);
        case 'stress':
            t.push(new Set().add(o[0]));
            return posteBouffon(p.slice(1),t,o);
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[2]));
            return posteBouffon(p.slice(1),t,o);
            case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            default:
            return posteBouffon(p.slice(1), t, o);
    }
}
function posteGarde(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) o = ["Terrifier la Cour",//0 +redout -prestige, opinion cour
        // aucune +or,prestige
    ];
    if (rien) {
        // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'religieuxAInfluencer': // opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'prestige':
            case 'seigneur': // Erudition (Revendiquer trône), (Factions), Prestige,opinion,Or (Me faire déclarer régent)
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, provisions) Prestige, opinion
                return new Array();
            case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[0]));
            return posteGarde(p.slice(1),t,o);
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
        case 'conseiller': // recruter
        default:
            return posteGarde(p.slice(1), t, o);
    }
}
function campObjectif(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Nous sommes Vagabonds!",//0 +tout -prestige
        "Devenir lames à louer",//1 +guerre,or -prestige
        "Devenir érudits",//2 +exp -prestige
        "Devenir explorateurs",//3 +santé -prestige
        "Devenir écumeurs",//4 +or -gibier de potence,prestige
        "Devenir légitimistes",//5 +guerre -prestige
        ];
    if (rien) { // Aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion) SINON Demander soutien invasion (Prestige)
        t.push(new Set().add(o[5]+" SI aucun coût"));
        t.push(new Set().add(o[0]+" SI aucun coût"));
        t.push(new Set().add("ne rien faire"));
        return t;        
    }
    if (p.length === 0) {
        t.push(new Set().add(o[5]));
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
            t.push(new Set().add(o[0]+" SI aucun coût"));
            t.push(new Set().add("ne rien faire"));
            return t;
        case 'guerre': // guerre, Influence,opinion seigneur SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            return t;
        case 'vassalAInfluencer':
        case 'vassalSOppose':
        case 'religieuxAInfluencer':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'hamecon':
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'assassinat':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]));
            return t;
        case 'survie':
            t.push(new Set().add(o[3]));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[4]));
            return t;
            case 'perteTerresRevoquer': // accorder titre SINON chercher secret, Prestige (pour autorité couronne)
            case 'recruterChevalier':
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
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
function liDec(idPage, id) {
    // Récupérer la valeur associée à la clé depuis le localStorage
    const value = localStorage.getItem(id);
    const jsonData = JSON.parse(value);
    let listeDecisions = document.getElementById(idPage);
    let li = document.getElementById(id); console.log(li);
    // si élément html id n'existe pas, le créer :
    if (!li) {
        li = document.createElement('li');
        li.setAttribute('id', id);
        listeDecisions.appendChild(li);
    }
    evidence(id, jsonData.lib+":"+jsonData.ouiNon);
}
function liOuiNon(lib, id, ouiNon) {
    const data = {
        lib: lib,
        ouiNon: ouiNon
    };
    const jsonData = JSON.stringify(data);
        // Stocker les données dans le localStorage avec l'identifiant comme clé
        localStorage.setItem(id, jsonData);
}
function evidence(id, texte, ttLeTps=false) {
    let e=document.getElementById(id);
    if(ttLeTps || (e.innerHTML != texte) && (e.innerHTML != '<strong>'+texte+'</strong>')) {
        console.log(e.innerHTML," diff ",texte);
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
    // Vous pouvez appeler les autres o de la même manière ici
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
    evidence('activPelerin', sansDoublon(activPelerin(p), "SINON"));
    evidence('pelerinIntent', sansDoublon(activPelerinIntent(p), "SINON"));
    evidence('pelerinFidel', sansDoublon(activPelerinFidel(p), "SINON"));
    evidence('pelerinApp', sansDoublon(activPelerinApp(p), "SINON"));
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
    evidence('festin', sansDoublon(festinResult, "SINON"));
    evidence('festinRepas', sansDoublon(activFestinRepas(p), "SINON"));
    evidence('festinPlats', sansDoublon(activFestinPlats(p), "SINON"));
    evidence('campObjectif', sansDoublon(campObjectifResult, "SINON"));
    liOuiNon("Médecin", 'poste-0', sansDoublon(epidemies(p), "SINON"));
    liOuiNon("Maître-caravanier", 'poste-1', sansDoublon(posteCaravanier(p), "SINON"));
    liOuiNon("Antiquaire", 'poste-2', sansDoublon(posteAntiq(p), "SINON"));
    liOuiNon("Sénéchal", 'poste-3', sansDoublon(posteSenech(p), "SINON"));
    liOuiNon("Professeur", 'poste-4', sansDoublon(posteProf(p), "SINON"));
    liOuiNon("Nourrice", 'poste-5', sansDoublon(posteNour(p), "SINON"));
    liOuiNon("Grand écuyer", 'poste-6', sansDoublon(posteEcuyer(p), "SINON"));
    liOuiNon("Maître de chasse", 'poste-7', sansDoublon(posteChasse(p), "SINON"));
    liOuiNon("Chroniqueur de la Cour", 'poste-8', sansDoublon(posteChroni(p), "SINON"));
    liOuiNon("Champion personnel", 'poste-9', sansDoublon(posteChamp(p), "SINON"));
    liOuiNon("Bouffon de la Cour", 'poste-10', sansDoublon(posteBouffon(p), "SINON"));
    liOuiNon("Garde du corps", 'poste-11', sansDoublon(posteGarde(p), "SINON"));
    liDec('epidResult', 'poste-0');
    liDec('epidResult', 'poste-1');
    liDec('epidResult', 'poste-2'); //Antiquaire
    liDec('epidResult', 'poste-3'); //Sénéchal
    liDec('epidResult', 'poste-4'); //Professeur
    liDec('epidResult', 'poste-5'); //Nourrice
    liDec('epidResult', 'poste-7'); //Maître de chasse
    liDec('epidResult', 'poste-8'); //Chroniqueur de la Cour
    liDec('epidResult', 'poste-9'); //Champion personnel
    liDec('epidResult', 'poste-11'); //Garde du corps
    // Ruler - Décisions mineures
        // Recherche de médecin, Rechercher Caravan Master, Recherche de nourrice
    liOuiNon("Recruter à un poste de la Cour", 'dec-d-min-0', decisionOuNon(decisionsResult,
        new Set(["recruter", "santé", "points d'expérience"]),
        new Set(["Or", "Prestige"])));
    liOuiNon("Chercher des percepteurs d'impôts", 'dec-d-min-4', decisionOuNon(decisionsResult,
            new Set(["Or"]),
            new Set(["Or", "Piété"])));
    liOuiNon("Développer la capitale", 'dec-d-min-5', decisionOuNon(decisionsResult,
            new Set(["développement"]),
            null));
    liOuiNon("Révoquer la fausse conversion", 'dec-d-min-6', "A DEFINIR");
    liOuiNon("Introduire une nouvelle mode à la Cour", 'dec-d-min-7', "A DEFINIR");
    liOuiNon("Développer les villes", 'dec-d-min-8', "A DEFINIR");
    liOuiNon("Laissez le royaume embrasser la tradition locale", 'dec-d-min-9', "A DEFINIR");
    liOuiNon("Commander un artefact", 'dec-d-min-10', decisionOuNon(decisionsResult,
        new Set(["artefact"]),
        new Set(["Or"])));
    liOuiNon("Artefact de légende de commission", 'dec-d-min-11', "A DEFINIR");
    liOuiNon("Célébrer les autres cultures", 'dec-d-min-12', "A DEFINIR");
    liOuiNon("Révoquer le bail du Saint Ordre", 'dec-d-min-13', "A DEFINIR");
    liOuiNon("Soumettez-vous au Grand Khan", 'dec-d-min-14', "A DEFINIR");
    liOuiNon("Retour de la Roma", 'dec-d-min-15', "A DEFINIR");
    liOuiNon("Adopter un chiot", 'dec-d-min-16', "A DEFINIR");
    liOuiNon("Intégrer le duché anglais", 'dec-d-min-17', "A DEFINIR");
    liOuiNon("Amnistie pour les fausses conversions", 'dec-d-min-18', "A DEFINIR");
    liOuiNon("Répandez la foi Theravada", 'dec-d-min-19', "A DEFINIR");
    liOuiNon("Favoriser les experts étrangers", 'dec-d-min-20', decisionOuNon(decisionsResult,
        new Set(["recruter"]),
        new Set(["Prestige", "opinion LUI"])));
    liOuiNon("S'entraîner pour un tournoi", 'dec-d-min-21', decisionOuNon(decisionsResult,
            new Set(["Or" /*"prouesse"*/]),
            new Set(["Prestige"])));
    liOuiNon("Embellir la capitale", 'dec-d-min-22', "A DEFINIR");
    liOuiNon("Orienter l'unité de la Maison", 'dec-d-min-22', decisionOuNon(decisionsResult,
        new Set(["points d'expérience", "opinion LUI"]),
        new Set(["Piété", "redoutabilité", "opinion LUI"])));
    // Ruler - Décisions mineures - avantages
    liOuiNon("Commander une épopée familiale", 'dec-d-min-av-1', decisionOuNon(decisionsResult,
        new Set(["Prestige", "artefact"]),
        new Set(["Or"])));
    liOuiNon("Sell Trivial Titles", 'dec-d-min-av-2', "A DEFINIR");
    liOuiNon("Extort Subjects", 'dec-d-min-av-3', "A DEFINIR");
    liOuiNon("Local Arbitration", 'dec-d-min-av-4', "A DEFINIR");
    // Ruler - Décisions mineures - cour royale
    liOuiNon("Find Court Language Linguist", 'dec-d-min-cour-1', "A DEFINIR");
    liOuiNon("Order Mass Eviction", 'dec-d-min-cour-2', "A DEFINIR");
    liOuiNon("Exoticize A Grand Hall", 'dec-d-min-cour-3', "A DEFINIR");
    // Ruler - Décisions mineures - seigneur-lige
    liOuiNon("Demander audience au Roi", 'dec-d-min-seign-0', decisionOuNon(decisionsResult,
        null,
        null));
    // Ruler - Décisions romaines
    liOuiNon("Démanteler les prétendants allemands", 'dec-d-rom-1', "A DEFINIR");
    liOuiNon("Restaurer l'Empire romain", 'dec-d-rom-2', "A DEFINIR");
    liOuiNon("Rétablir les frontières théodosiennes", 'dec-d-rom-3', "A DEFINIR");
    liOuiNon("Tenir un triomphe", 'dec-d-rom-4', "A DEFINIR");
    liOuiNon("Évangéliser les païens", 'dec-d-rom-5', "A DEFINIR");
    liOuiNon("Reconfirmer l'allocation céréalière", 'dec-d-rom-6', "A DEFINIR");
    // Ruler - Décisions de courtisans
    liOuiNon("Recruter pour un poste au tribunal", 'dec-d-court-1', "A DEFINIR");
    liOuiNon("Inviter des chevaliers", 'dec-d-court-2', decisionOuNon(decisionsResult,
        new Set(["recruter chevalier"]),
        new Set(["Prestige"])));
    liOuiNon("Inviter des prétendants", 'dec-d-court-3', decisionOuNon(decisionsResult,
            new Set(["recruter"]),
            new Set(["Prestige"])));
    liOuiNon("Restaurer les distinctions", 'dec-d-court-4', "A DEFINIR");
    liOuiNon("Gratter le baril", 'dec-d-court-5', "A DEFINIR");
    liOuiNon("Recruter un spécialiste du terrain", 'dec-d-court-6', decisionOuNon(decisionsResult,
            new Set(["recruter"]),
            new Set(["Or", "Prestige"])));
    // Ruler - lutte ibérique
    liOuiNon("Parrainez les Sciences Juives", 'dec-d-ib-1', "A DEFINIR");
    liOuiNon("Construire des routes de pèlerinage", 'dec-d-ib-2', "A DEFINIR");
    liOuiNon("Pied ibérique", 'dec-d-ib-3', "A DEFINIR");
    // Character - Décisions mineures
    liOuiNon("Adopter la culture locale", 'dec-p-1', decisionOuNon(decisionsResult,
        null,
        new Set(["Prestige"])));
    liOuiNon("Emprunter de l'or à l'Ordre sacré", 'dec-p-2', "A DEFINIR");
       // chat de compagnie, chien de compagnie
    liOuiNon("Caresser ...", 'dec-p-3', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        null));
    liOuiNon("Renoncer à l'héritage", 'dec-p-5', decisionOuNon(decisionsResult,
            new Set(["stress diminuer"]),
            new Set(["Prestige SI adoption/aventurier ET NON mort", "Prestige", "progression succession"])));
    liOuiNon("Méditer dans l'isolement", 'dec-p-6', decisionOuNon(decisionsResult,
                new Set(["stress diminuer", "Erudition"]),
                new Set(["Diplomatie", "Martialité", "Intendance", "Intrigue", ])));
    liOuiNon("Tenter de se suicider", 'dec-p-7', decisionOuNon(decisionsResult,
                    null,
                    new Set(["Piété"])));
    liOuiNon("Mange ton fromage", 'dec-p-8', "A DEFINIR");
    liOuiNon("Élever une pierre runique", 'dec-p-9', "A DEFINIR");
    liOuiNon("Offrez à votre ancêtre une sépulture céleste", 'dec-p-10', "A DEFINIR");
    // Character - Décisions mineures - avantages
    liOuiNon("Accepter le célibat", 'dec-p-av-1', "A DEFINIR");
      // Abandonner le célibat
    liOuiNon("Créer un itinéraire de voyage", 'dec-p-av-3', decisionOuNon(decisionsResult,
        new Set(["Prestige", "artefact"]),
        new Set(["Or"])));
    // Character - Décisions mineures - Tenet
    liOuiNon("Déterminer Bhakti", 'dec-p-foi-1', "A DEFINIR");
    liOuiNon("Déterminer la divinité personnelle", 'dec-p-foi-2', "A DEFINIR");
    liOuiNon("Devinez les étoiles", 'dec-p-foi-3', "A DEFINIR");
    liOuiNon("Procéder au suicide rituel", 'dec-p-foi-4', "A DEFINIR");
    liOuiNon("Cherchez l'aide des esprits", 'dec-p-foi-5', "A DEFINIR");
    liOuiNon("Faire voeu de pauvreté", 'dec-p-foi-6', decisionOuNon(decisionsResult,
        new Set(["Piété"]),
        new Set(["Or"])));
      // Renoncer au vœu de pauvreté
    // Character - Décisions mineures - traits
    liOuiNon("Accélérer les complots", 'dec-p-tr-1', decisionOuNon(decisionsResult,
        null,
        null));
    liOuiNon("Tenir la communion mystique", 'dec-p-tr-2', "A DEFINIR");
    liOuiNon("Étudier l'art de l'intrigue", 'dec-p-tr-3', decisionOuNon(decisionsResult,
        new Set(["AGENT"]),
        null));
    liOuiNon("Assumer ses responsabilités", 'dec-p-tr-4', "A DEFINIR"),
    liOuiNon('Faire table rase du passé', 'dec-p-tr-5', decisionOuNon(decisionsResult,
        new Set(["éviter Gibier de potence", "Prestige (complot Saisie du pays)"]),
        new Set(["Or", "Prestige", "Piété"])));
    liOuiNon("Écrire un poème de Muwashshah", 'dec-p-tr-6', "A DEFINIR");
    liOuiNon("Salon trouvé", 'dec-p-tr-7', "A DEFINIR");
    // Character - Décisions mineures - traits - Coping actions
    liOuiNon("Confesser", 'dec-p-tr-cop-1', "A DEFINIR");
    liOuiNon("Consommer des gâteaux au haschisch", 'dec-p-tr-cop-2', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Intendance", "Erudition"])));
    liOuiNon("Faire la charité", 'dec-p-tr-cop-3', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Or"])));
    liOuiNon("Se flageller", 'dec-p-tr-cop-4', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Martialité", "Intrigue", "Prouesse", "santé", "Redoutabilité"])));
    liOuiNon("Faites-vous plaisir en buvant", 'dec-p-tr-cop-5', decisionOuNon(decisionsResult,
            new Set(["stress diminuer"]),
            new Set(["Prestige"])));
    liOuiNon("Faites-vous plaisir avec la nourriture", 'dec-p-tr-cop-6', "A DEFINIR");
    liOuiNon("Déchaînez-vous", 'dec-p-tr-cop-7', "A DEFINIR");
    liOuiNon("S'isoler", 'dec-p-tr-cop-8', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Prestige"])));
    liOuiNon("Shun Food", 'dec-p-tr-cop-9', "A DEFINIR");
    liOuiNon("Aller dans un lupanar", 'dec-p-tr-cop-10', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["Or"])));
    liOuiNon("Parlez à un confident", 'dec-p-tr-cop-10', "A DEFINIR");
    liOuiNon("Visitez le marché", 'dec-p-tr-cop-11', "A DEFINIR");
    liOuiNon("Évacuez votre stress", 'dec-p-tr-cop-12', "A DEFINIR");
    liOuiNon("Écrivez vos pensées", 'dec-p-tr-cop-13', "A DEFINIR");
    // Character - Struggle decisions
    liOuiNon("Announce Opposition to Caliphate", 'dec-p-s-1', "A DEFINIR");
    liOuiNon("Become Caliphal Supporter", 'dec-p-s-2', "A DEFINIR");
    liOuiNon("Déclarer sa position dans l'intermezzo iranien", 'dec-p-s-3', "A DEFINIR");
    // Character - Administrative decisions
    liOuiNon("Changer les aspirations impériales", 'dec-p-adm-1', "A DEFINIR");
    liOuiNon("Rassembler le soutien des factions", 'dec-p-adm-2', "A DEFINIR");
    liOuiNon("Adopter la foi de l'État", 'dec-p-adm-3', "A DEFINIR");
    liOuiNon("Favoriser l'intégration", 'dec-p-adm-4', "A DEFINIR");
    liOuiNon("Embrasser l'hérésie", 'dec-p-adm-5', "A DEFINIR");
    liOuiNon("Encourager le changement de foi dans l'État", 'dec-p-adm-6', "A DEFINIR");
    liOuiNon("Établir la production de soie", 'dec-p-adm-7', "A DEFINIR");
    // Character - Administrative decisions - Estate building decisions
    liOuiNon("Manipulate Grain Market", 'dec-p-adm-build-1', "A DEFINIR");
    liOuiNon("Agents de location", 'dec-p-adm-build-2', "A DEFINIR");
    liOuiNon("Renforcer la sécurité du patrimoine", 'dec-p-adm-build-3', "A DEFINIR");
    liOuiNon("Icône de commission", 'dec-p-adm-build-4', "A DEFINIR");
    liOuiNon("Commande de costumes en soie", 'dec-p-adm-build-5', "A DEFINIR");
    // Adventurer - Major decisions
    liOuiNon('Devenir un grand conquérant', 'dec-a-maj-1', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)", "augmenter levées", "légende"]),
        new Set(["Prestige"])));
    liOuiNon('Défendre la culture ...', 'dec-a-maj-2', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)"]),
        new Set(["Or", "Prestige"])));
    liOuiNon('Devenir le ...', 'dec-a-maj-3', decisionOuNon(decisionsResult,
        new Set(["Prestige (complot Saisie du pays)", "Prouesse", "artefact", "légende"]),
        new Set(["Prestige"])));
    liOuiNon('Les voyages de ...', 'dec-a-maj-4', decisionOuNon(decisionsResult,
            new Set(["points d'expérience", "artefact"]),
            new Set(["Or", "Prestige"])));
    liOuiNon("La voie ... - l'ascension", 'dec-a-maj-5', decisionOuNon(decisionsResult,
            new Set(["Martialité", "Prouesse"]),
            new Set(["Piété", "stress diminuer"])));
    liOuiNon("La voie ... - le prélude", 'dec-a-maj-6', "A DEFINIR");
    liOuiNon('Fonder une propriété', 'dec-a-maj-7', decisionOuNon(decisionsResult,
            new Set(["contrôle SI ", "Prestige (complot Saisie du pays)"]),
            new Set(["Or"])));
    liOuiNon('Enrôler les exclus', 'dec-a-maj-8', decisionOuNon(decisionsResult,
        new Set(["Martialité", "Intrigue", "augmenter levées"]),
        new Set(["Or", "Prestige"])));
      // Terrain désigné
      // Terrain maître
    liOuiNon('Mesures désespérées - Abattage des animaux', 'dec-a-maj-11', decisionOuNon(decisionsResult,
            new Set(["provisions"]),
            new Set(["Prestige"])));
    // Adeventurer - Minor decisions
    liOuiNon('Visiter la propriété ...', 'dec-a-min-1', decisionOuNon(decisionsResult,
            new Set(["provisions", "Prestige (complot Saisie du pays)"]),
            null));
    liOuiNon('Rassembler les provisions', 'dec-a-min-2', decisionOuNon(decisionsResult,
                new Set(["provisions"]),
                null));
    liOuiNon("Adopter un chien de chenil", 'dec-a-min-3', "A DEFINIR");
    liOuiNon('Humilier le larbin', 'dec-a-min-4', decisionOuNon(decisionsResult,
                    new Set(["stress diminuer", "redoutabilité"]),
                    new Set(["Prestige"])));
    liOuiNon("Inviter des poètes", 'dec-a-min-5', "A DEFINIR");
    liOuiNon('A la pêche', 'dec-a-min-6', decisionOuNon(decisionsResult,
                        new Set(["stress diminuer", "provisions"]),
                        null));
    // Adventurer - Hasan Story decisions
    liOuiNon("Évangéliser la foi", 'dec-a-h-1', "A DEFINIR");
    liOuiNon("Agiter la population locale", 'dec-a-h-2', "A DEFINIR");
    liOuiNon("Commencer la révolution", 'dec-a-h-3', "A DEFINIR");
    liOuiNon("J'ai trouvé les Assassins", 'dec-a-h-4', "A DEFINIR");
    liOuiNon("Développez les Assassins", 'dec-a-h-5', "A DEFINIR");
    // Ruler - Major decisions
    liOuiNon("Devenir un aventurier", 'dec-d-maj-26', decisionOuNon(decisionsResult,
        new Set(["Prestige"]),
        new Set(["Renommée"])));
    liOuiNon('Déplacer la capitale de jure', 'dec-d-maj-1', decisionOuNon(decisionsResult,
            new Set(["Prestige (complot Saisie du pays)"]),
            new Set(["Prestige"])));
    liOuiNon('Agrandir le duché', 'dec-d-maj-2', decisionOuNon(decisionsResult,
            new Set(["Renommée"]),
            new Set(["Prestige"])));
    // ?
    liOuiNon("Allumer le feu royal", 'dec-x', decisionOuNon(decisionsResult,
        new Set(["Renommée", "santé"]),
        null));
    // ?
    liOuiNon("Perdre du poids", 'dec-y', decisionOuNon(decisionsResult,
        new Set(["santé"]),
        new Set(["stress diminuer"])));
    liOuiNon("Arrêter de perdre du poids", 'dec-y0', decisionOuNon(decisionsResult,
            new Set(["stress diminuer"]),
            null));
    // ?
    liOuiNon("Rites de passage", 'dec-z', decisionOuNon(decisionsResult,
        new Set(["points d'expérience", "Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "stress diminuer"]),
        new Set(["Or", "Prestige"])));
    // ?
    liOuiNon("Être diverti par le bouffon de la Cour", 'dec-a', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        null));
    liOuiNon("Avouer", 'dec-b', decisionOuNon(decisionsResult,
        new Set(["stress diminuer"]),
        new Set(["opinion"])));
    // Affichage Décisions importantes d'aventurier
    liDec('decImp', 'dec-a-maj-1');
    liDec('decImp', 'dec-a-maj-2');
    liDec('decImp', 'dec-a-maj-3');
    liDec('decImp', 'dec-a-maj-4');
    liDec('decImp', 'dec-a-maj-5');
    liDec('decImp', 'dec-a-maj-7');
    liDec('decImp', 'dec-a-maj-8');
    liDec('decImp', 'dec-a-maj-11'); //Mesures désespérées - Abattage des animaux
    // Affichage Pays
    liDec('decPays', 'dec-d-maj-1'); //Déplacer la capitale de jure
    // Affichage Décisions d'aventurier
    liDec('decAv', 'dec-a-min-1');
    liDec('decAv', 'dec-a-min-2');
    liDec('decAv', 'dec-a-min-4');
    liDec('decAv', 'dec-a-min-6');
    liDec('decAv', 'dec-p-tr-5');
    liDec('decAv', 'dec-p-5');
    // Affichage Décisions
    liDec('dec', 'dec-d-min-10'); //Commander un artefact", 'dec-d-min-10
    liDec('dec', 'dec-d-min-21'); //S'entraîner pour un tournoi", 'dec-d-min-21
    liDec('dec', 'dec-x'); //Allumer le feu royal
    liDec('dec', 'dec-p-tr-3'); //Étudier l'art de l'intrigue
    liDec('dec', 'dec-p-1'); //Adopter la culture locale
    liDec('dec', 'dec-p-6'); //Méditer dans l'isolement
    liDec('dec', 'dec-p-7'); //Tenter de se suicider
    liDec('dec', 'dec-p-3'); //Caresser ...
    liDec('dec', 'dec-p-tr-cop-4'); //Se flageller
    liDec('dec', 'dec-b'); //Avouer
    // Affichage Décisions de courtisan
    liDec('decCour', 'dec-d-min-20'); //Favoriser les experts étrangers", 'dec-d-min-20
    liDec('decCour', 'dec-d-court-6'); //Recruter un spécialiste du terrain", 'dec-d-court-6
    liDec('decCour', 'dec-d-min-0'); //Recruter à un poste de la Cour", 'dec-d-min-0
    liDec('decCour', 'dec-d-court-2'); //Inviter des chevaliers", 'dec-d-court-2
    // Activités
    liOuiNon("Grande tournée", 'act-g-1', decisionOuNon(decisionsResult,
        new Set(["contrôle SI &lt;100", "opinion comtale", "légitimité", "stress diminuer", "Prestige"]),
        new Set(["Or"])));
    liOuiNon("Grand tournoi", 'act-g-0', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Légitimation", "stress diminuer"]),
        new Set(["Or"])));
    liOuiNon("Séjour universitaire", 'act-1', decisionOuNon(decisionsResult,
        new Set(["Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "points d'expérience", "artefact", "recruter"]),
        new Set(["Or"])));
    liOuiNon("Festin", 'act-0', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Légitimation", "stress diminuer", "Intrigue"]),
        new Set(["Or"])));
    liOuiNon("Funérailles", 'act-7', decisionOuNon(decisionsResult,
        new Set(["stress diminuer", "Piété", "Légitimation"]),
        new Set(["Or"])));
    liOuiNon("Fête de camp", 'act-2', decisionOuNon(decisionsResult,
            new Set(["stress diminuer", "provisions", "Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "Prestige (complot Saisie du pays)", "artefact", "recruter"]),
            new Set(["Or"])));
    liOuiNon("Randonnée", 'act-3', decisionOuNon(decisionsResult,
                new Set(["stress diminuer", "Prestige", "Erudition"]),
                new Set(["Or"])));
    liOuiNon("Chasse", 'act-4', decisionOuNon(decisionsResult,
        new Set(["Prestige", "provisions", "artefact", "légende", "légitimité", "stress diminuer", "Prouesse"]),
        new Set(["Or"])));
    liOuiNon("Inspection", 'act-8', decisionOuNon(decisionsResult,
        new Set([/*décision si rien*/ "développement", "contrôle", "levées", "opinion"]),
        new Set(["Or"])));
    liOuiNon("Expédition vers un monument", 'act-5', decisionOuNon(decisionsResult,
        new Set(["Intrigue", "Diplomatie", "Martialité", "Erudition", "Intendance", "recruter", "Prestige"]),
        new Set(["Or"])));
    liOuiNon("Pélerinage", 'act-6', decisionOuNon(decisionsResult,
            new Set(["Piété", "légitimité", "stress diminuer", "éviter Gibier de potence", "Prestige (complot Saisie du pays)"]),
            new Set(["Or"])));
    liOuiNon("Rencontre des pairs", 'act-9', decisionOuNon(decisionsResult,
        new Set(["opinion"]),
        new Set(["Or"])));
    liDec('activitesGrand', 'act-g-1'); //Grande tournée
    liDec('activitesGrand', 'act-g-0'); //Grand tournoi
    liDec('activites', 'act-9'); //Rencontre des pairs
    liDec('activites', 'act-1'); //Séjour universitaire
    liDec('activites', 'act-0'); //Festin
    liDec('activites', 'act-2'); //Fête de camp
    liDec('activites', 'act-7'); //Funérailles
    liDec('activites', 'act-3'); //Randonnée
    liDec('activites', 'act-4'); //Chasse
    liDec('activites', 'act-8'); //Inspection
    liDec('activites', 'act-5'); //Expédition vers un monument
    liDec('activites', 'act-6'); //Pélerinage
    }
function sansDoublon(tab, liaison="") {
    let texte = "";
    let faits = new Set();
    for(let l=0; l<tab.length; l++) {
        let premierMot = true;
        console.log(tab[l]);
        tab[l].forEach(function motTexte(mot) {
            if(mot != undefined && mot != null && mot != "") {
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