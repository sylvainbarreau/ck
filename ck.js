/*
function (p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["",//0
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion lige,opinion régent,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'vassalSOppose':
        case 'foiChangemt':
        case 'factionFoi':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'erudition': *
        A SUPPRIMER ? case 'survie':
        case 'perteTerresRevoquer': // accorder titre SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
         *
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'demande2': // (activité, contrat, Or, Provisions, mariage) Prestige, opinion,Diplomatie,Intrigue
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
        default:
            return (p.slice(1), t, o);
    }
}
*/
function militaire(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o=true; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
            }
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
            case 'demande': // Prestige, opinion, Or
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("pas Renforcement mensuel"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
        case 'declarationGuerre':
            let e = new Set().add("Renforcement mensuel");
            e.add("ajouter régiment");
            e.add("augmenter tailles")
            t.push(e);
            return t;
        case 'revenu':
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("pas Renforcement mensuel"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande2':
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
        default:
            return militaire(p.slice(1), t, o);
    }
}
function militaireAuto(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) { o=true; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("Automatisé"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("Automatisé"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("Automatisé"));
            return t;
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'declarationGuerre':
            case 'conseiller': // recruter
        case 'proclame':
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'stress':
        case 'prestige':
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,hameçon,Intrigue (pour révoquer)
        case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[4]));
        return t;
    }
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
        case 'declarationGuerre':
        case 'controle':
        case 'recruterChevalier':
        case 'proclame':
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
            case 'prestige':
        case 'vassalSOppose':
        case 'succession':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            case 'denoncer': // Prestige, Renommée 
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[1]));
                return t;
        case 'assassinat':
        case 'influence':
            case 'hamecon':
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        t.push(new Set().add(o[2]));
            return t;
        case 'rancon': // Or, hameçon
        case 'revenu':
        case 'domaine': //Intendance
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[4]));
            return t;
            case 'religieuxAInfluencer': // opinion, Or
            case 'piete': // Piété, Erudition
            case 'factionFoi':
                    case 'erudition':
                    t.push(new Set().add(o[3]));
                return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[3]+" SI Chef culturel"));
            t.push(new Set().add(o[4]));
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
    "Gérer les affaires intérieures",//2 +Opinion vassal direct
    "Gérer les affaires étrangères"];//3 +Prestige,Opinion pair vassal
    }
    const effets = [
        ["Fin de la guerre interne","Augmentation de l'opinion vassale"],
        ["Boost de tâches"],
        ["Fin de la guerre interne","Force la partition pour le vassal",
        "Contrat vassalique amélioré","Augmentation de l'opinion vassale"],
        ["Période de trêve diminué"]
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[3]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
        }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
        case 'revenu':
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t, o); 
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[0]+" SI "+effets[0][1]+" OU "+effets[2][3]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[2]+" SI "+effets[2][2]));
            return chancelier(p.slice(1), t, o);
            case 'declarationGuerre':
            t.push(new Set().add(o[2]+' SI '+effets[2][2]));
            return chancelier(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]+" FACTIEUX"));
            t.push(new Set().add(o[2]));
            return t;
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]+" VASSAL PUISSANT"));
            t.push(new Set().add(o[2]));
            return t;
        case 'vassalSOppose':
            t.push(new Set().add(o[0]+" LUI"));
            t.push(new Set().add(o[2]));
            return t;
        case 'dirigeantAInfluencer':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]));
            return t;
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[0]+" VASSAL A REVOQUER-S SI "+effets[0][1]));
            t.push(new Set().add(o[2]+" SI "+effets[2][3]));
            t.push(new Set().add(o[2]+" SI "+effets[2][2]));
            return chancelier(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[3]+" SI NON Chef culturel"));
            return chancelier(p.slice(1), t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[1]));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]+' SI '+effets[1][0]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
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
            t.push(new Set().add(o[1]+' SI '+effets[1][0]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
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
        case 'vassalSOppose':
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[1]+" FACTIEUX SI "+effets[1][0]));
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
                t.push(new Set().add(o[1]+" VASSAL PUISSANT SI "+effets[1][0]));
            return marechal(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]));
            return marechal(p.slice(1), t, o);
        case 'factionFoi':
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]+" LUI"+" SI "+effets[1][1]));
            return marechal(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" vassal direct CIBLE-S SI "+effets[1][0]));
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[1]+" VASSAL A REVOQUER-S SI "+effets[1][0]));
            t.push(new Set().add(o[1]));
            return marechal(p.slice(1), t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
            case 'denoncer': // Prestige, Renommée 
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
            t.push(new Set().add(o[1]+' SI '+effets[1][1]));
            t.push(new Set().add(o[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t, o); 
        case 'declarationGuerre':
                t.push(new Set().add(o[1]+' SI '+effets[1][1]));
                t.push(new Set().add(o[1]+' SI '+effets[1][0]));
                return religieux(p.slice(1), t, o); 
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            case 'vassalSOppose':
                case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        t.push(new Set().add(o[2]+' SI '+effets[2][0]));
            t.push(new Set().add(o[1]+' SI '+effets[1][0]));
                return religieux(p.slice(1), t, o);
    case 'revenu':
    case 'rancon': // Or, hameçon
        t.push(new Set().add(o[1]+' SI '+effets[1][0]));
            return religieux(p.slice(1), t, o);
    case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        t.push(new Set().add(o[2]+' SI '+effets[2][0]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
        t.push(new Set().add(o[1]+' SI '+effets[1][0]));
        return religieux(p.slice(1), t, o);
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
    case 'conseiller': // recruter
    case 'domaine': //Intendance
    case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
    case 'enfant':
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[3]));
        return t;
    }
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
        case 'declarationGuerre':
              t.push(new Set().add(o[2]));
            return t; 
        case 'revenu':
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[3]));
            return t;
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
           t.push(new Set().add(o[0]+" SI "+effets[0][2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[3]));
            return t;
            case 'vassalSOppose':
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]+" SI "+effets[0][2]+" FACTIEUX"));
            t.push(new Set().add(o[3]));
            return t;
                case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]+" SI "+effets[0][2]+" VASSAL PUISSANT"));
            return intendant(p.slice(1), t, o);
        case 'factionFoi':
            t.push(new Set().add(o[1]+" LUI"+" SI "+effets[1][0]));
            return intendant(p.slice(1), t, o);
            case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]+" COMTE SI "+effets[1][0]));
            t.push(new Set().add(o[0]+" COMTE SI "+effets[0][2]));
            return intendant(p.slice(1), t, o);           
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            t.push(new Set().add(o[0]+" VASSAL A REVOQUER-S SI "+effets[0][2]));
            t.push(new Set().add(o[3]));
            return t;
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[0]+" SI "+effets[0][2]+" vassal direct ou courtisan ou invité CIBLE-S"));
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            t.push(new Set().add(o[3]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add(o[4]+" SI "+effets[4][0]));
            return intendant(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[1]+" SI NON Chef culturel"));
            return intendant(p.slice(1), t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();    
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
        case 'domaine': //Intendance
        case 'enfant':
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
                    }
    if (p.length === 0) {
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'hamecon':
            t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" A HAMECONNER-S"));
            return espion(p.slice(1), t, o);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" AGENT-S")); 
            return espion(p.slice(1), t, o);
        case 'assassinat':
            t.push(new Set().add(o[1]));
            return t;
        case 'survie':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            return t; 
        case 'vassalSOppose':
            t.push(new Set().add(o[0]+" VASSAL OPPOSANT-S"));
            return espion(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[0]+" VASSAL A REVOQUER-S"));
            return espion(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" GEOLIER"));
            return espion(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]+" FACTIEUX"));
            return t;
                case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
                t.push(new Set().add(o[1]+" SI Atout \"La vérité est relative\""));
            t.push(new Set().add(o[0]+" VASSAL PUISSANT"));
            return espion(p.slice(1), t, o);
                case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
        case 'prestige':
        case 'domaine': //Intendance
        case 'piete': // Piété, Erudition
                    case 'factionFoi':
                        case 'stress':
                            case 'erudition':
        case 'denoncer': // Prestige, Renommée 
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                                default:
            return espion(p.slice(1), t, o);
    }
}
function prison(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o == null) o = ["Négocier la libération",//0
        "Rançonner",//1
        "Exécuter",//2 +redoutabilité -piété
        "Torturer",//3
        "Castrer le prisonnier",//4 +redoutabilité
        "Aveugler",//5
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[3]+" SI Atout \"Je suis bien en comparaison\""));
        t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
        t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
        t.push(new Set().add(o[1]+" &gt; Or"));
        t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
        t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
        t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(o[0]+" &gt; Recruter SI aventurier ET chevalier possible"));
        t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
    }
    if (p.length === 0) {
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[2]+" SI Redoutabilité"));
        t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
        t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
        t.push(new Set().add(o[2]+" SI Atout \"Chair humaine\" ET provisions&lt;max"));
        t.push(new Set().add("ne rien faire SAUF proposition SI NON vassal"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'demande':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'demande2':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'declarationGuerre':
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
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
            t.push(new Set().add(o[0]+" &gt; Recruter SI chevalier possible ET prouesse&gt;=8"));
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
            return t; // attendre rançon
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI GEOLIER"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI GEOLIER"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié,hameçon fort,Intrigue,ami,amant,prisonnier,Intrigue,terrifié,redoutabilité
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[2]+" SI Redoutabilité"));
            return t; // attendre rançon
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("ne rien faire SI VASSAL PUISSANT"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[2]+" SI Redoutabilité"));
            return t;
        case 'hamecon':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o); 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[3]+" SI Atout \"Je suis bien en comparaison\""));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI adoption/aventurier ET Or"));
            t.push(new Set().add(o[1]+" &gt; Or SI adoption/aventurier"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI adoption/aventurier ET Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI adoption/aventurier ET Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            t.push(new Set().add("ne rien faire pour attendre rançon SI adoption/aventurier"));
            o[0] += " SI NON stress";
            o[1] += " SI NON stress";
            o[2] += " SI NON stress";
            o[3] += " SI NON stress";
            o[4] += " SI NON stress";
            o[5] += " SI NON stress";
            return prison(p.slice(1), t, o);
        case 'assassinat':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return prison(p.slice(1), t, o);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[0]+" SI vassal direct ou courtisan ou invité CIBLE-S"));
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI MECENE"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI MECENE"));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'religieuxAInfluencer':
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; hameçon SI mécène"));
            t.push(new Set().add(o[1]+" &gt; hameçon SI mécène"));           
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'piete': // Piété, Erudition
            o[2] += " SI NON perte Piété";
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[3]+" SI Atout \"Sombres connaissances\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI Or"));
            t.push(new Set().add(o[1]+" &gt; Or"));
            t.push(new Set().add(o[0]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[1]+" &gt; hameçon SI Atout \"Obligations en or\""));
            t.push(new Set().add(o[0]+" &gt; Bannir SI artefact"));
            return t; // attendre rançon
        case 'prestige':
            t.push(new Set().add(o[3]+" SI Atout \"Je suis bien en comparaison\""));
            return prison(p.slice(1), t, o);
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            default:
            return prison(p.slice(1), t, o);
    }
}
function secrets(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = true;
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
        t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)"));
        t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
        t.push(new Set().add("Faire chanter SI mécène"));
        t.push(new Set().add("Révéler SI emprisonnable"));
        t.push(new Set().add("Faire chanter SI aventurier ET chevalier possible"));
    }
    if (p.length === 0) {
        t.push(new Set().add("Faire chanter SI mécène"));
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
            let e=new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
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
            t.push(new Set().add("Faire chanter SI chevalier possible ET prouesse&gt;=8"));
            t.push(new Set().add("Révéler SI emprisonnable ET chevalier possible ET prouesse&gt;=8"));
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'hamecon':
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("Faire chanter SI VASSAL PUISSANT"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("Révéler SI adoption/aventurier ET Atout \"Je suis bien en comparaison\" ET Prestige &lt; 150"));
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET Atout \"Je suis bien en comparaison\""));
            t.push(new Set().add("Faire chanter SI adoption/aventurier ET Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI adoption/aventurier ET emprisonnable"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)"));
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
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)"));
            return secrets(p.slice(1), t, o); 
        case 'succession':
        case 'influence' :
            t.push(new Set().add("Faire chanter")); //Influence
            return t;
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            //t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
            t.push(new Set().add("Révéler SI motif de révocation VASSAL A REVOQUER-S"));
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\""));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or"));
            t.push(new Set().add("Révéler SI emprisonnable"));
            return secrets(p.slice(1), t, o);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\""));
            return secrets(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire) ET NON vassal direct ou courtisan ou invité CIBLE-S"));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or ET NON vassal direct ou courtisan ou invité CIBLE-S"));
            t.push(new Set().add("Révéler SI emprisonnable ET NON vassal direct ou courtisan ou invité CIBLE-S"));
            t.push(new Set().add("Révéler SI Atout \"Je suis bien en comparaison\" ET NON vassal direct ou courtisan ou invité CIBLE-S"));
            return secrets(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add("Révéler SI emprisonnable ET Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire) ET NON ALLIE"));
            t.push(new Set().add("Faire chanter SI Atout \"Obligations en or\" ET Or ET NON ALLIE"));
            t.push(new Set().add("Révéler SI emprisonnable ET NON ALLIE"));
                        return secrets(p.slice(1), t, o);
            case 'piete': // Piété, Erudition
            case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                default:
            return secrets(p.slice(1), t, o);
    }
}
function hamec(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o === null) { rien=true; }
    if (o == null) o = true;
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("Recruter SI aventurier ET chevalier possible"));
    }
    if (p.length === 0) {
        t.push(new Set().add("ne rien faire"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
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
            t.push(new Set().add("Recruter SI chevalier possible ET prouesse&gt;=8"));
            return hamec(p.slice(1), t, o);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add("ne rien faire SI NON vassal direct ou courtisan ou invité CIBLE-S"));
            return hamec(p.slice(1), t, o); 
        case 'denoncer': // Prestige, Renommée 
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        let eS=new Set().add(o[0]+" SEIGNEUR LIGE");
        eS.add(o[2]+" SEIGNEUR LIGE");
        eS.add(o[4]+" SEIGNEUR LIGE");
        t.push(eS);
        let eD=new Set().add(o[4]+" DIRIGEANT A QUI ACHETER TERRE");
        eD.add(o[0]+" DIRIGEANT A QUI ACHETER TERRE");
        eD.add(o[2]+" DIRIGEANT A QUI ACHETER TERRE");
        t.push(eD);
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
            let eSeigneur=new Set().add(o[0]+" LUI SI gouvernement administratif");
            eSeigneur.add(o[2]+" LUI SI gouvernement administratif");
            eSeigneur.add(o[4]+" LUI SI gouvernement administratif");
            t.push(eSeigneur);
            return influence(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
          let eFact=new Set().add(o[0]+" FACTIEUX");
          eFact.add(o[1]+" FACTIEUX");
          eFact.add(o[2]+" FACTIEUX");
          eFact.add(o[4]+" FACTIEUX");
          t.push(eFact);
            return influence(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[3]+" VASSAL PUISSANT"));
            let ePuiss=new Set().add(o[1]+" VASSAL PUISSANT");
            ePuiss.add(o[2]+" VASSAL PUISSANT");
            ePuiss.add(o[0]+" VASSAL PUISSANT");
            t.push(ePuiss);
            return influence(p.slice(1), t, o);
        case 'religieuxAInfluencer':
            let eRelig=new Set().add(o[0]+" CONSEILLER RELIGIEUX");
            eRelig.add(o[2]+" CONSEILLER RELIGIEUX");
            eRelig.add(o[4]+" CONSEILLER RELIGIEUX");
            t.push(eRelig);
            return influence(p.slice(1), t, o);
        case 'vassalSOppose':
            let eVassOppo=new Set().add(o[0]+" VASSAL-S");
            eVassOppo.add(o[2]+" VASSAL-S");
            eVassOppo.add(o[4]+" VASSAL-S");
            t.push(eVassOppo);
            return influence(p.slice(1), t, o);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
        case 'demande':
        case 'demande2':
            let eVassal=new Set().add(o[0]+" MECENE-S");
            eVassal.add(o[2]+" MECENE-S");
            eVassal.add(o[4]+" MECENE-S");
            t.push(eVassal);
            return influence(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[0]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[4]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            return influence(p.slice(1), t, o);
            /*case 'pertesTerres':*/
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[2]+" LUI SI adoption/aventurier"));
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
            t.push(new Set().add(o[0]+" AGENT-S"));
            t.push(new Set().add(o[2]+" AGENT-S"));
            t.push(new Set().add(o[4]+" AGENT-S"));
            return influence(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[0]+" VASSAL A REVOQUER-S"));
            t.push(new Set().add(o[2]+" VASSAL A REVOQUER-S"));
            t.push(new Set().add(o[4]+" VASSAL A REVOQUER-S"));
            return influence(p.slice(1), t, o);
            case 'conseiller': // recruter
            case 'denoncer': // Prestige, Renommée 
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
            case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            default:
            return influence(p.slice(1), t, o);
    }
}
function contreMesure(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o == null) o = ["Primes pour les dénonciations",//0 -or,prestige
        "Arrestations arbitraires",//1 -opinion courtisan,invité
        "Sentinelles renforcées",//2 -opinion courtisan,invité,vassal
        "Garde doublée",//3 +survie -opinion courtisan,invité,vassal
        "Retrait de la vie publique",//4 -opinion,stress
    ];
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
            o[4]+=" SI NON gouvernement administratif";
            return contreMesure(p.slice(1),t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            o[0]=undefined;
            o[2]+=" SI ALLIE";
            o[3]+=" SI ALLIE";
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            o[0]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);  
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            o[2]=undefined;
            o[3]=undefined;
            o[4]=undefined;
            o[0]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            o[2]=undefined;
            o[3]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
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
            o[0]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            o[0]=undefined;
            o[4]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            o[0]=undefined;
            o[4]=undefined;
            o[2]=undefined;
            o[3]=undefined;
            return contreMesure(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            o[0]+=" SI Chef culturel";
            return contreMesure(p.slice(1),t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'domaine': //Intendance
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
        "Déposer le régent",//5
        "Saisie du pays",//6
    ];
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        let eSeigneur=new Set().add(o[2]);
        eSeigneur.add(o[5]);
        t.push(eSeigneur);
        let eA=new Set().add(o[6]);
        eA.add(o[3]+" POUR Acheter une terre/Acquérir une possession");
        t.push(eA);
    }
    if (p.length === 0) {
        t.push(new Set().add(o[6]));
        let eDefaut=new Set().add(o[2]);
        eDefaut.add(o[5]);
        t.push(eDefaut);
        t.push(new Set().add(o[4]));
        t.push(new Set().add("Aucun"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'assassinat':
            let eAssassinat=new Set().add(o[0]+" DANS LA SUCCESSION-S SI NON Destituer");
            eAssassinat.add(o[1]+" DANS LA SUCCESSION-S");
            t.push(eAssassinat);
            return compHostile(p.slice(1), t, o);
        case 'hamecon':
            t.push(new Set().add(o[3]+" A HAMECONNER-S"));
            return compHostile(p.slice(1), t, o);
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[3]+" MECENE-S"));
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            let eFact=new Set().add(o[3]+" FACTIEUX");
            eFact.add(o[1]+" FACTIEUX");
            t.push(eFact);
            t.push(new Set().add(o[4]));
            return compHostile(p.slice(1), t, o);
case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
                let ePuiss=new Set().add(o[3]+" VASSAL PUISSANT");
            ePuiss.add(o[1]+" VASSAL PUISSANT");
            t.push(ePuiss);
            return compHostile(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
          let eRevoq=new Set().add(o[4]);
          eRevoq.add(o[3]+" VASSAL A REVOQUER-S");
          t.push(eRevoq);
          return compHostile(p.slice(1), t, o);
case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[4]));
            return compHostile(p.slice(1), t, o);
case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'piete': // Piété, Erudition
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        let eRien=new Set().add(o[3]);
        eRien.add(o[10]);
        t.push(eRien);
        let eRien2=new Set().add(o[9]+" SEIGNEUR LIGE");
        eRien2.add(o[2]+" SEIGNEUR LIGE");
        eRien2.add(o[9]+" REGENT SEIGNEUR LIGE");
        eRien2.add(o[2]+" REGENT SEIGNEUR LIGE");
        t.push(eRien2);
        t.push(new Set().add(o[8]));
        return t;
    }
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie SI gouvernmt admin
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
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Or
        t.push(new Set().add(o[9]+" LUI"));
            t.push(new Set().add(o[2]+" LUI"));
            t.push(new Set().add(o[8]));
            return compPolitique(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            let eFact=new Set().add(o[9]+" FACTIEUX");
            eFact.add(o[2]+" FACTIEUX");
            t.push(eFact);
            t.push(new Set().add(o[8]));
            return compPolitique(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            let ePuiss=new Set().add(o[7]+" VASSAL PUISSANT");
            ePuiss.add(o[9]+" VASSAL PUISSANT");
            ePuiss.add(o[2]+" VASSAL PUISSANT");
            t.push(ePuiss);
            return compPolitique(p.slice(1), t, o);
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
            t.push(new Set().add(o[9]+" AGENT-S"));
            t.push(new Set().add(o[2]+" AGENT-S"));
            t.push(new Set().add(o[8]));
            t.push(new Set().add(o[7]+" AGENT-S"));
            return compPolitique(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[9]+" OU "+o[2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[8]));
            t.push(new Set().add(o[7]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            return compPolitique(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
          let eRevoq=new Set().add(o[9]+" VASSAL A REVOQUER-S");
          eRevoq.add(o[2]+" VASSAL A REVOQUER-S");
          eRevoq.add(o[8]);
          eRevoq.add(o[7]+" VASSAL A REVOQUER-S");
          t.push(eRevoq);
          return compPolitique(p.slice(1), t, o);
            case 'denoncer': // Prestige, Renommée
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if(rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,Opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, Opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("Construire"));
        let eRien=new Set().add("Augmenter magnificence de la Cour");
        eRien.add("Intendance SI NON aventurier");
        t.push(eRien);
        t.push(new Set().add("Diplomatie SI gouvernement administratif"));
        let eRien2=new Set().add("Erudition SI NON aventurier");
        eRien2.add("Créer une faction du prétendant SI NON(Convaincre territoire de jure OU Revendication comtale OU Revendiquer trône)");
        eRien2.add("Créer une faction pour l'indépendance SI NON(Convaincre territoire de jure OU Revendication comtale OU Revendiquer trône)");
        eRien2.add("Créer une faction de dissolution SI NON(Convaincre territoire de jure OU Revendication comtale OU Revendiquer trône)");
        eRien2.add("Prestige SI NON aventurier");
        //eRien2.add("Secret SI NON aventurier ET Atout \"Je suis bien en comparaison\"");
        eRien2.add("Me faire déclarer régent SI NON(Convaincre territoire de jure OU Revendication comtale OU Revendiquer trône)");
        eRien2.add("Opinion SEIGNEUR LIGE");
        eRien2.add("Opinion REGENT SEIGNEUR LIGE");
        eRien2.add("Diplomatie SI NON aventurier");
        eRien2.add("Intrigue SI NON aventurier");
        eRien2.add("Emprisonner SI NON aventurier ET Atout \"Sombres connaissances\"");
        eRien2.add("Or SI NON aventurier");
        eRien2.add("Hameçon OU Secret SI NON aventurier ET Atout \"Obligations en or\"");
        eRien2.add("Contrôle SI &lt;100");
        eRien2.add("Développement");
        eRien2.add("Emprisonner SI NON aventurier");
        t.push(eRien2);
        let eRienAvent=new Set().add("Prestige");
        eRienAvent.add("Secret SI Atout \"Je suis bien en comparaison\"");
        //eRienAvent.add("Diplomatie");
        eRienAvent.add("Intrigue");
        eRienAvent.add("Emprisonner SI Atout \"Sombres connaissances\" ET Outils du tortionnaire");
        eRienAvent.add("éviter Gibier de potence");
        eRienAvent.add("éviter Baroudeur");
        eRienAvent.add("hameçon DIRIGEANT A QUI ACHETER TERRE/ACQUERIR POSSESSION");
        eRienAvent.add("Or");
        eRienAvent.add("hameçon OU secret SI Atout \"Obligations en or\"");
        eRienAvent.add("Intendance");
        eRienAvent.add("emprisonner");
        eRienAvent.add("langue DIRIGEANT A QUI ACHETER TERRE/ACQUERIR POSSESSION");
        eRienAvent.add("Erudition");
        eRienAvent.add("Opinion DIRIGEANT A QUI ACHETER TERRE/ACQUERIR POSSESSION");
        eRienAvent.add("Diplomatie");
        //eRienAvent.add("Opinion SOUTIEN invasion");
        eRienAvent.add("Martialité SI aventurier");
        eRienAvent.add("augmenter Hommes d'armes SI aventurier");
        eRienAvent.add("Recruter SI aventurier ET chevalier possible");
        eRienAvent.add("emprisonner SI aventurier ET chevalier possible");
        eRienAvent.add("Prouesse SI aventurier");
        t.push(eRienAvent);
   }
    if (p.length === 0) {
        let e=new Set().add("Points d'expérience");
        e.add("Renommée");
        e.add("Légitimation");
        e.add("légende");
        e.add("Artefact");
        e.add("stress descendre niveau 0");
        e.add("mission");
        e.add("Redoutabilité");
        e.add("emprisonner");
        e.add("vassal non factiable");
        e.add("éviter rivalité/rancune");
        e.add("hameçon OU secret");
        e.add("Recruter");
        e.add("Développement");
        e.add("Piété");
        e.add("Prestige");
        e.add("Or");
        //e.add("influence");
        e.add("Diminuer stress");
        e.add("Provisions");
        t.push(e);
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'controle':
            let e0=new Set().add("contrôle");
            e0.add("Martialité");
            t.push(e0);
            return decisions(p.slice(1), t, o);
        case 'declarationGuerre':
            let e17=new Set().add("Martialité");
            e17.add("Augmenter levées");
            e17.add("Influence");
            e17.add("contrôle SI &lt;100");
            e17.add("Développement");
            e17.add("Recruter chevalier");
            e17.add("emprisonner SI chevalier possible");
            e17.add("Prouesse");
            e17.add("emprisonner SI Atout \"Sombres connaissances\"");
            e17.add("alliance");
            t.push(e17);
            return decisions(p.slice(1), t, o);
        case 'guerre': // guerre, Influence,Opinion,Diplomatie,Intrigue SI gouvernmt admin
            let e1=new Set().add("Prouesse");
            e1.add("Martialité");
            e1.add("Augmenter levées");
            e1.add("Influence");
            e1.add("contrôle SI &lt;100");
            e1.add("Développement");
            e1.add("Recruter chevalier");
            e1.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
            e1.add("emprisonner SI chevalier possible");
            e1.add("Opinion LUI SI gouvernement administratif");
            e1.add("diplomatie SI gouvernement administratif");
            e1.add("Intrigue SI gouvernement administratif");
            t.push(e1);
            return decisions(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) Opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,Redoutabilité
            let eFact=new Set().add("alliance FACTIEUX");
            eFact.add("hameçon fort FACTIEUX");
            eFact.add("amitié FACTIEUX");
            eFact.add("liaison FACTIEUX");
            eFact.add("emprisonner FACTIEUX");
            eFact.add("Opinion FACTIEUX");
            eFact.add("Diplomatie");
            eFact.add("Intrigue");
            eFact.add("emprisonner SI Atout \"Sombres connaissances\"");
            eFact.add("Or");
            eFact.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eFact.add("contrôle SI &lt;100");
            eFact.add("Développement");
            eFact.add("Intendance");
            eFact.add("emprisonner");
            eFact.add("Redoutabilité");
            t.push(eFact);
            return decisions(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,Opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,Redoutabilité
            let ePuiss=new Set().add("alliance VASSAL PUISSANT");
            ePuiss.add("hameçon fort VASSAL PUISSANT");
            ePuiss.add("amitié VASSAL PUISSANT");
            ePuiss.add("liaison VASSAL PUISSANT");
            ePuiss.add("emprisonner VASSAL PUISSANT");
            ePuiss.add("Intrigue");
            ePuiss.add("emprisonner SI Atout \"Sombres connaissances\"");
            ePuiss.add("Opinion VASSAL PUISSANT");
            ePuiss.add("Diplomatie");
            ePuiss.add("Redoutabilité");
            ePuiss.add("emprisonner");
            t.push(ePuiss);
            return decisions(p.slice(1), t, o);
        case 'dirigeantAInfluencer': // Opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) Opinion, Diplomatie, Intrigue, Or
            let e2=new Set();
            e2.add("Opinion ALLIE POTENTIEL OU PARDONNEUR-S");
            e2.add("Diplomatie");
            e2.add("Intrigue");
            e2.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
            e2.add("Or");
            e2.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e2.add("contrôle SI &lt;100");
            e2.add("Développement");
            e2.add("Intendance");
            e2.add("emprisonner");
            t.push(e2);
            return decisions(p.slice(1), t, o); 
        case 'enfant': // SI aventurier : Prestige, Opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
            let e20=new Set().add("Prestige SI adoption/aventurier ET NON mort ET prestige&lt;150");
            e20.add("secret SI adoption/aventurier ET NON mort ET Atout \"Je suis bien en comparaison\" ET prestige&lt;150");
            //e20.add("Diplomatie SI adoption/aventurier ET NON mort ET prestige&lt;150");
            t.push(e20);
            let eHeritier1=new Set().add("Opinion LUI SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("Diplomatie SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("Intrigue SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("emprisonner SI adoption/aventurier ET Atout \"Sombres connaissances\" ET Outils du tortionnaire ET NON mort ET NON perte Prestige");     
            eHeritier1.add("Or SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("hameçon OU secret SI adoption/aventurier ET Atout \"Obligations en or\" ET NON mort ET NON perte Prestige");
            eHeritier1.add("Intendance SI adoption/aventurier ET NON mort ET NON perte Prestige");
            eHeritier1.add("emprisonner SI adoption/aventurier ET NON mort ET NON perte Prestige");
            t.push(eHeritier1);
            let eHeritier2=new Set().add("Prestige SI adoption/aventurier ET NON mort");
            eHeritier2.add("secret SI adoption/aventurier ET NON mort ET Atout \"Je suis bien en comparaison\"");
            //eHeritier2.add("Diplomatie SI adoption/aventurier ET NON mort");
            eHeritier2.add("Opinion LUI SI adoption/aventurier ET NON mort");
            eHeritier2.add("Diplomatie SI adoption/aventurier ET NON mort");
            eHeritier2.add("Intrigue SI adoption/aventurier ET NON mort");
            eHeritier2.add("emprisonner SI adoption/aventurier ET Atout \"Sombres connaissances\" ET Outils du tortionnaire ET NON mort");     
            eHeritier2.add("Or SI adoption/aventurier ET NON mort");
            eHeritier2.add("hameçon OU secret SI adoption/aventurier ET Atout \"Obligations en or\" ET NON mort");
            eHeritier2.add("Intendance SI adoption/aventurier ET NON mort");
            eHeritier2.add("emprisonner SI adoption/aventurier ET NON mort");
            t.push(eHeritier2);
            let eHeritier3=new Set().add("Amant SI NON mort");
            eHeritier3.add("coucher SI NON mort");
            //eHeritier3.add("Diplomatie SI NON mort");
            eHeritier3.add("Intrigue SI NON mort");
            eHeritier3.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
            eHeritier3.add("Santé");
            eHeritier3.add("Provisions");
            eHeritier3.add("Diminuer stress");
            eHeritier3.add("Opinion Médecin");
            eHeritier3.add("Opinion Garde du corps");
            eHeritier3.add("Opinion conjoint");
			eHeritier3.add("Opinion Maître-espion");
            t.push(eHeritier3);
            return decisions(p.slice(1), t, o); 
        case 'hamecon':
            let e4=new Set();
            e4.add("hameçon OU secret A HAMECONNER-S");
            e4.add("Intrigue");
            e4.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
            t.push(e4);
            return decisions(p.slice(1), t, o);
        case 'assassinat':
            let e5=new Set().add("Progression succession");
            e5.add("Intrigue");
            e5.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
            t.push(e5);
            return decisions(p.slice(1), t, o);
        case 'recruterChevalier':
            let e6=new Set().add("Recruter chevalier");
            e6.add("hameçon OU secret SI chevalier possible");
            e6.add("Martialité");
            e6.add("emprisonner SI chevalier possible");
            e6.add("Prestige");
            //e6.add("secret SI Atout \"Je suis bien en comparaison\"");
            t.push(e6);
            return decisions(p.slice(1), t, o);
            case 'conseiller': // Recruter
            let eCons=new Set().add("Recruter");
            eCons.add("hameçon OU secret SI recrutable");
            eCons.add("emprisonner SI recrutable");
            t.push(eCons);
            return decisions(p.slice(1), t, o);
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            let eChevalierP=new Set().add("Recruter chevalier");
            eChevalierP.add("emprisonner SI chevalier possible");
            eChevalierP.add("conjoint SI chevalier possible");
            eChevalierP.add("meilleur ami SI chevalier possible ET hors camp");
            eChevalierP.add("âme soeur SI chevalier possible ET hors camp");
            t.push(eChevalierP);
            return decisions(p.slice(1), t, o);
        case 'demande': // Prestige, Opinion,Diplomatie,Intrigue,Or
            let eDemande=new Set().add("Prestige");
            eDemande.add("secret SI Atout \"Je suis bien en comparaison\"");
            eDemande.add("Opinion MECENE-S");
            eDemande.add("Diplomatie");
            eDemande.add("Intrigue");
            eDemande.add("emprisonner SI Atout \"Sombres connaissances\" ET Outils du tortionnaire");
            eDemande.add("Or");
            eDemande.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eDemande.add("Intendance");
            eDemande.add("emprisonner");
            t.push(eDemande);
            return decisions(p.slice(1), t, o); 
        case 'demande2': // (contrat, activité, Or, Provisions) Prestige, Opinion,Diplomatie,Intrigue
            let eDem=new Set().add("Prestige");
            eDem.add('secret SI Atout \"Je suis bien en comparaison\"');
            eDem.add("Opinion MECENE-S");
            eDem.add("Diplomatie");
            eDem.add("Intrigue");
            eDem.add("emprisonner SI Atout \"Sombres connaissances\" ET Outils du tortionnaire");
            t.push(eDem);
            return decisions(p.slice(1), t, o); 
        case 'proclame':
            let e7=new Set().add("Recruter chevalier SI prouesse&gt;=8");
            e7.add("Martialité");
            e7.add("emprisonner SI chevalier possible ET prouesse&gt;=8");
            e7.add("Prestige");
            //e7.add("secret SI Atout \"Je suis bien en comparaison\"");
            t.push(e7);
            return decisions(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            let e8=new Set().add("accorder titre VASSAL A REVOQUER-S");
            e8.add("Prestige");
            //e8.add("secret SI Atout \"Je suis bien en comparaison\"");
            e8.add("secret VASSAL A REVOQUER-S");
            e8.add("Opinion VASSAL A REVOQUER-S");
            e8.add("Diplomatie");
            e8.add("Intrigue");
            e8.add("emprisonner SI Atout \"Sombres connaissances\"");
            e8.add("secret SI emprisonnable ET Atout \"Sombres connaissances\"");
            e8.add("Or");
            e8.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e8.add("contrôle SI &lt;100");
            e8.add("Développement");
            e8.add("Intendance");
            e8.add("emprisonner");
            e8.add("hameçon VASSAL A REVOQUER-S");
            t.push(e8);
            return decisions(p.slice(1), t, o);
        case 'revenu':
            let e9=new Set().add("Or");
            e9.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e9.add("contrôle SI &lt;100");
            e9.add("Développement");
            e9.add("Intendance");
            e9.add("emprisonner");
            t.push(e9);
            return decisions(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            let eR=new Set().add("Or");
            eR.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eR.add("contrôle SI &lt;100");
            eR.add("Développement");
            eR.add("Intendance");
            eR.add("emprisonner");
            eR.add("hameçon GEOLIER");
            eR.add("Intrigue");
            t.push(eR);
            return decisions(p.slice(1), t, o);
        case 'domaine': //Intendance
            let e10=new Set().add("Intendance");
            t.push(e10);
            return decisions(p.slice(1), t, o);
        case 'survie':
            let e14=new Set().add("Santé");
            e14.add("Provisions");
            e14.add("Diminuer stress");
			e14.add("Opinion maître-espion");
			e14.add("Opinion médecin");
            t.push(e14);
            return decisions(p.slice(1), t, o);
        case 'stress':
            t.push(new Set().add("Diminuer stress"));
            return decisions(p.slice(1), t, o);
        case 'prestige':
            let ePrestige=new Set().add("Prestige");
            ePrestige.add("secret SI Atout \"Je suis bien en comparaison\"");
            //ePrestige.add("Diplomatie");
            t.push(ePrestige);
            return decisions(p.slice(1), t, o);
        case 'denoncer': // Prestige, Renommée 
            let eDenonc=new Set().add("Prestige");
            eDenonc.add("Renommée");
            eDenonc.add("secret SI Atout \"Je suis bien en comparaison\"");
            //eDenonc.add("Diplomatie");
            t.push(eDenonc);
            return decisions(p.slice(1), t, o);
        case 'erudition':
                t.push(new Set().add("Erudition"));
                return decisions(p.slice(1), t, o);
        case 'religieuxAInfluencer': // Opinion,Diplomatie,Intrigue,Or,Piété,Erudition
            let e12=new Set().add("Opinion LUI");
            e12.add("Diplomatie");
            e12.add("Intrigue");
            e12.add("emprisonner SI Atout \"Sombres connaissances\"");
            e12.add("Or");
            e12.add("hameçon OU secret SI Atout \"Obligations en or\"");
            e12.add("contrôle SI &lt;100");
            e12.add("Développement");
            e12.add("Intendance");
            e12.add("emprisonner");
            e12.add("Piété");
            e12.add("Erudition");
            t.push(e12);
            return decisions(p.slice(1), t, o);
        case 'piete': // Piété, Erudition
            let e16=new Set().add("Piété");
            e16.add("Erudition");
            t.push(e16);
            return decisions(p.slice(1), t, o);
        case 'factionFoi':
            let e15=new Set().add("Opinion comtale LUI");
            e15.add("Piété");
            e15.add("Erudition");
            t.push(e15);
            return decisions(p.slice(1), t, o);
            case 'factionPop': // Opinion populaire
            let e152=new Set().add("Opinion comtale COMTE");
            t.push(e152);
            return decisions(p.slice(1), t, o);
        case 'vassalSOppose':
            let e13=new Set().add("Opinion LUI");
            e13.add("emprisonner LUI");
            e13.add("Redoutabilité");
            e13.add("emprisonner");
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
        case 'agent': // Opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
            let eAgent=new Set().add("Opinion vassal direct ou courtisan ou invité CIBLE-S");
            eAgent.add("Diplomatie");
            eAgent.add("Intrigue");
            eAgent.add("emprisonner SI Atout \"Sombres connaissances\" ET (NON aventurier OU Outils du tortionnaire)");
            eAgent.add("Or");
            eAgent.add("hameçon OU secret SI Atout \"Obligations en or\"");
            eAgent.add("contrôle SI &lt;100");
            eAgent.add("Développement");
            eAgent.add("Intendance");
            eAgent.add("emprisonner");
            eAgent.add("Prestige");
            eAgent.add("secret SI Atout \"Je suis bien en comparaison\"");
            eAgent.add("hameçon vassal direct ou courtisan ou invité CIBLE-S");
            eAgent.add("Piété");
            eAgent.add("Erudition");
            t.push(eAgent);
            return decisions(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            let eCult=new Set().add("Erudition SI Chef culturel");
            eCult.add("Intendance SI NON Chef culturel");
            eCult.add("Prestige SI NON Chef culturel");
            eCult.add("Artefact");
            t.push(eCult);
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[3]+" SI gouvernement administratif"));
        t.push(new Set().add(o[4]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[4]));
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[2]));
        t.push(new Set().add("ne rien changer"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,Redoutabilité
        case 'vassalSOppose':
        case 'religieuxAInfluencer': // opinion, Or
            t.push(new Set().add(o[0]));
                t.push(new Set().add(o[4]));
                t.push(new Set().add(o[3]));
                t.push(new Set().add(o[2]));
            return typeCour(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,Redoutabilité
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[4]));
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            return typeCour(p.slice(1), t, o);
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'domaine': //Intendance
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
        case 'succession':
            case 'influence' :
                t.push(new Set().add(o[4]));
            return typeCour(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("monter"));
        return t;
    }
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("monter"));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("monter SI NON Chef culturel"));
            return commoditesMode(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            return new Array();
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        default:
            return commoditesMode(p.slice(1), t, o);
    }
}
function commoditesNourriture(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array(); // +stress,prestige -santé,or
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("monter"));
        return t;
    }
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("monter"));
            return t;
        case 'revenu':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("monter SI NON Chef culturel"));
            return commoditesNourriture(p.slice(1), t, o);    
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'piete': // Piété, Erudition
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        default:
            return commoditesNourriture(p.slice(1), t, o);
    }
}
function commoditesHebergement(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array(); // +agent,artefact,stress -or
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("monter"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("monter au moins jusqu'à 2"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                t.push(new Set().add("monter"));
            return t;
        case 'assassinat':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'domaine': //Intendance
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("monter"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("laisser"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'rancon': // Or, hameçon
            t.push(new Set().add("baisser jusqu'à 1"));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'survie':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'recruterChevalier':
        case 'proclame':
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("monter"));
            return t;
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
                case 'denoncer': // Prestige, Renommée 
                case 'piete': // Piété, Erudition
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[4]+" SEIGNEUR LIGE"));
        t.push(new Set().add(o[4]+" REGENT SEIGNEUR LIGE"));
        t.push(new Set().add(o[4]+" SOUTIEN invasion"));
        t.push(new Set().add(o[2]+" SI aventurier"));
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
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[4]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[4]));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[3]+" DANS LA SUCCESSION-S"));
            return activTournoi(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[4]+" AGENT-S"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[5]+" FACTIEUX"));
            t.push(new Set().add(o[4]+" FACTIEUX"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[5]+" VASSAL PUISSANT"));
            t.push(new Set().add(o[4]+" VASSAL PUISSANT"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'vassalSOppose':
                t.push(new Set().add(o[4]+" LUI"));
                return activTournoi(p.slice(1), t, o);
            case 'proclame':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[4]+" LUI SI gouvernement administratif"));
            t.push(new Set().add(o[1]+" SI gouvernement administratif"));
            return activTournoi(p.slice(1), t, o);
        case 'declarationGuerre':
        case 'recruterChevalier':
            t.push(new Set().add(o[2]));
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
            case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        t.push(new Set().add(o[1]));
                return activTournoi(p.slice(1), t, o);
        case 'survie':
            case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'religieuxAInfluencer':
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[4]+" LUI"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[4]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
            case 'conseiller': // recruter
            t.push(new Set().add(o[2]));
            return activTournoi(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[4]+" VASSAL A REVOQUER"));
            return activTournoi(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[1]));
            return activTournoi(p.slice(1), t, o);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        default:
            return activTournoi(p.slice(1), t, o);
    }
}
function tournoiHeb(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Tentes délabrées",//0 -evt négatif
    "Pavillons simples",//1
    "Campements luxueux",//2
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[0]));
        return t;
    }
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("VERIF heb"));
        return t;
        case 'revenu':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'assassinat':
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'assassinat':
        case 'piete': // Piété, Erudition
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        "Se détendre",//0 +stress
        "Tuer",//1
        "Séduire",//2
        "Diplomatie",//3 +alliance
        "Semer le chaos",//4 +stress
        "Répandre la légende",//5
        "Se légitimer",//6
        "Faiseur de mariages"//7
    ];
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'denoncer': // Prestige, Renommée 
        case 'domaine': //Intendance
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[7]));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[1]+" DANS LA SUCCESSION-S"));
            return activMariage(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]+" AGENT-S"));
            return activMariage(p.slice(1), t, o);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                t.push(new Set().add(o[2]+" MECENE-S"));
            return activMariage(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[3]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            return activMariage(p.slice(1), t, o);
            case 'survie':
        case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[7]));
            t.push(new Set().add(o[2]+" LUI SI gouvernement administratif"));
            return activMariage(p.slice(1), t, o);
        case 'declarationGuerre':
            case 'conseiller': // recruter
            t.push(new Set().add(o[7]));
            return activMariage(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[3]+" FACTIEUX"));
            t.push(new Set().add(o[2]+" FACTIEUX"));
            return activMariage(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[3]+" VASSAL PUISSANT"));
            t.push(new Set().add(o[2]+" VASSAL PUISSANT"));
            return activMariage(p.slice(1), t, o);
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
        //case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'factionPop': // Opinion populaire
            case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
       case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]+" SI FACTIEUX"));
            t.push(new Set().add(o[1]+" SI FACTIEUX"));
            t.push(new Set().add(o[0]));
            return t;
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]+" SI VASSAL PUISSANT"));
            t.push(new Set().add(o[1]+" SI VASSAL PUISSANT"));
            t.push(new Set().add(o[0]));
            return t;
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" SI ALLIE POTENTIEL OU PARDONNEUR-S invité"));
            t.push(new Set().add(o[1]+" SI ALLIE POTENTIEL OU PARDONNEUR-S invité"));
            t.push(new Set().add(o[0]));
            return t;
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassalSOppose':
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'succession':
            case 'influence' :
                t.push(new Set().add(o[2]));
            return activMariageLieu(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassalSOppose':
            t.push(new Set().add(o[2]+" SI FACTIEUX"));
            t.push(new Set().add(o[1]+" SI FACTIEUX"));
            t.push(new Set().add(o[0]+" SI FACTIEUX"));
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
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[2]+" SEIGNEUR LIGE"));
        t.push(new Set().add(o[2]+" REGENT SEIGNEUR LIGE"));
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[2]+" LUI SI gouvernement administratif"));
            return activFestin(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[1]+" DANS LA SUCCESSION-S"));
            return activFestin(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]+" AGENT-S"));
            return activFestin(p.slice(1), t, o);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
           let eFac=new Set().add(o[3]+" FACTIEUX");
           eFac.add(o[2]+" FACTIEUX");
           t.push(eFac);
           return activFestin(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            let ePuiss=new Set().add(o[3]+" VASSAL PUISSANT");
            ePuiss.add(o[2]+" VASSAL PUISSANT");
            t.push(ePuiss);
            return activFestin(p.slice(1), t, o);
        case 'religieuxAInfluencer':
            t.push(new Set().add(o[2]+" CONSEILLER RELIGIEUX"));
            return activFestin(p.slice(1), t, o);
        case 'vassalSOppose':
            t.push(new Set().add(o[2]+" VASSAL-S"));
            return activFestin(p.slice(1), t, o);
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[2]+" MECENE-S"));
            return activFestin(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            return activFestin(p.slice(1), t, o);
            case 'survie':
        case 'stress':
            t.push(new Set().add(o[0]));
            return t;
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]+" VASSAL A REVOQUER-S"));
            return activFestin(p.slice(1), t, o);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'conseiller': // recruter
            case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            return Array();
            case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;    
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[2]+" SI NON Chef culturel"));
            t.push(new Set().add(o[1]+" SI NON Chef culturel"));
            t.push(new Set().add(o[0]+" SI NON Chef culturel"));
            return activFestinRepas(p.slice(1), t, o);
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
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[2]+" SI gouvernement administratif"));
            t.push(new Set().add(o[1]+" SI gouvernement administratif"));
            t.push(new Set().add(o[0]+" SI gouvernement administratif"));
            return activFestinPlats(p.slice(1), t, o);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
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
            case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
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
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        
    }
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
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'religieuxAInfluencer': // opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            return Array();
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'piete': // Piété, Erudition
            case 'rancon': // Or, hameçon
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
         default:
            return activFete(p.slice(1), t, o);
    }
}
function activFeteNourr(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Maigres repas",//0
        "Repas simples",//1 -Provisions
        "Banquet somptueux"//2 +recruter -Provisions
    ];
    if (rien) {
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        
    }
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("A VERIF"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            return Array();
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'stress':
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            case 'piete': // Piété, Erudition
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                default:
            return activFeteNourr(p.slice(1), t, o);
    }
}
function activFeteBoiss(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = ["Rares boissons",//0
        "Boissons adéquates",//1 +opinion,diplo,intrigue,
        "Boissons abondantes"//2 +opinion,diplo,intrigue,prestige,stress,Provisions
    ];
    if (rien) {
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        
    }
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'demande': // Prestige, opinion, Or
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]+" SI MECENE-S invité"));
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]+" SI MECENE-S invité"));
            return activFeteBoiss(p.slice(1), t, o);
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add(o[2]));
            return activFeteBoiss(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[2]+" SI NON Chef culturel"));
            return activFeteBoiss(p.slice(1), t, o);
        case 'recruterChevalier':
            case 'religieuxAInfluencer': // opinion, Or
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'controle':
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
                return new Array();
                case 'chevalierPartisan': // comme recruterChevalier sans Martialité
                case 'proclame':
                case 'declarationGuerre':
                case 'assassinat': // Faire démissionner ou Assassiner
                case 'hamecon':
                case 'stress':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'piete': // Piété, Erudition
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
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
        "Se légitimer"//4
    ];
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[2]+" SEIGNEUR LIGE"));
        t.push(new Set().add(o[2]+" REGENT SEIGNEUR LIGE"));
        t.push(new Set().add(o[2]+" SOUTIEN invasion"));
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[2]+" LUI SI gouvernement administratif"));
            return activFun(p.slice(1), t, o);
        case 'assassinat':
            t.push(new Set().add(o[1]+" DANS LA SUCCESSION-S"));
            return activFun(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[2]+" AGENT-S"));
            t.push(new Set().add(o[0]));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[3]+" FACTIEUX"));
            t.push(new Set().add(o[2]+" FACTIEUX"));
            return activFun(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            let ePuiss=new Set().add(o[3]+" VASSAL PUISSANT");
            ePuiss.add(o[2]+" VASSAL PUISSANT");
            t.push(ePuiss);
            return activFun(p.slice(1), t, o);
        case 'vassalSOppose':
            t.push(new Set().add(o[2]+" VASSAL-S"));
            return activFun(p.slice(1), t, o);
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            t.push(new Set().add(o[2]+" MECENE-S"));
            return activFun(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
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
            t.push(new Set().add(o[2]+" LUI"));
            t.push(new Set().add(o[0]));
            return t;
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]+" VASSAL A REVOQUER-S"));
            return activFun(p.slice(1), t, o);
        case 'denoncer': // Prestige, Renommée
        case 'recruterChevalier':
            case 'rancon': // Or, hameçon
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
            case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            default:
            return activFun(p.slice(1), t, o);
    }
}
function activMonum(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o == null) o = ["Amassage de savoirs",//0
        "Curiosité",//1
        "Répandre la légende"//2
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        t.push(new Set().add(o[0]+" SI NON aventurier"));
    }
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
       case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        t.push(new Set().add(o[1]+" SI NON aventurier"));
        t.push(new Set().add(o[0]+" SI NON aventurier"));
    }
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
                case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        "Se détendre",//0 +stress
        "Abattre une bête",//1
        "Tuer",//2
        "Séduire",//3
        "Nouer une amitié",//4
    ];
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        t.push(new Set().add(o[3]+" SEIGNEUR LIGE"));
        t.push(new Set().add(o[3]+" REGENT SEIGNEUR LIGE"));
        t.push(new Set().add(o[1]+" SI aventurier"));
        t.push(new Set().add(o[3]+" SOUTIEN invasion SI aventurier"));
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[3]+" LUI SI gouvernement administratif"));
            return activChasse(p.slice(1), t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[3]+" LUI SI adoption/aventurier"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[3]));
            t.push(new Set().add(o[0]));
            return t;
        case 'assassinat':
            t.push(new Set().add(o[2]+" DANS LA SUCCESSION-S"));
            return activChasse(p.slice(1), t, o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[3]+" AGENT-S"));
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[4]+" FACTIEUX"));
            t.push(new Set().add(o[3]+" FACTIEUX"));
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            let ePuiss=new Set().add(o[4]+" VASSAL PUISSANT");
            ePuiss.add(o[3]+" VASSAL PUISSANT");
            ePuiss.add(o[1]);
            return activChasse(p.slice(1), t, o);
        case 'religieuxAInfluencer':
            t.push(new Set().add(o[3]+" CONSEILLER RELIGIEUX"));
            return activChasse(p.slice(1), t, o);
      case 'vassalSOppose':
            t.push(new Set().add(o[3]+" VASSAL-S"));
            return activChasse(p.slice(1), t, o);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
                t.push(new Set().add(o[3]+" MECENE-S"));
                return activChasse(p.slice(1), t, o);
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[3]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
                case 'survie':
                case 'stress':
                    t.push(new Set().add(o[0]));
                return t;
        case 'prestige':
            case 'denoncer': // Prestige, Renommée 
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]));
            return activChasse(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[3]+" VASSAL A REVOQUER-S"));
            return activChasse(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[1]+" SI NON Chef culturel"));
            return activChasse(p.slice(1), t, o);
        case 'recruterChevalier':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'domaine': //Intendance
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
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
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
                case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'denoncer': // Prestige, Renommée 
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
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
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'demande': // Prestige, opinion, Or
        case 'demande2':
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[1]+" SI adoption/aventurier ET Prestige &lt; 150"));
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return grpeChasse(p.slice(1), t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[2]+" SI NON Chef culturel"));
            t.push(new Set().add(o[1]+" SI NON Chef culturel"));
            return grpeChasse(p.slice(1), t, o);
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'assassinat':
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[1]+" SI NON aventurier"));
        t.push(new Set().add(o[0]+" SI aventurier"));
        t.push(new Set().add("A VERIFIER"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        t.push(new Set().add(o[2]+" LUI SI gouvernement administratif"));
            return activRando(p.slice(1), t, o);
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" ALLIE POTENTIEL OU PARDONNEUR-S"));
            return activRando(p.slice(1), t, o);
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            t.push(new Set().add(o[2]+" LUI"));
            t.push(new Set().add(o[1]));
            return t;
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'prestige':
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
            t.push(new Set().add(o[2]+" AGENT-S"));
            t.push(new Set().add(o[1]));
            return activRando(p.slice(1), t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]+" FACTIEUX"));
            return activRando(p.slice(1), t, o);
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
                t.push(new Set().add(o[2]+" VASSAL PUISSANT"));
                return activRando(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]+" VASSAL A REVOQUER-S"));
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
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
            }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
            }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'prestige':
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            case 'domaine': //Intendance
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return t;
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
            }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'religieuxAInfluencer': // opinion, Or
        case 'piete': // Piété, Erudition
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
          t.push(new Set().add(o[0]));
          return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
          t.push(new Set().add(o[1]));
          return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'influence' :
        case 'denoncer': // Prestige, Renommée 
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
            }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'denoncer': // Prestige, Renommée 
                case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            o[2] += " SI NON gouvernement administratif";
            o[3] += " SI NON gouvernement administratif";
            return activPelerinApp(p.slice(1), t, o);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            default:
            return activPelerinApp(p.slice(1), t, o);
    }
}
function particip(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) o = new Array();
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("Participe"));
        return t;
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'dirigeantAInfluencer':
        case 'recruterChevalier':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            case 'declarationGuerre':
        case 'controle':
        case 'revenu':
        case 'assassinat':
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'hamecon':
        case 'proclame':
        case 'prestige':
        case 'domaine': //Intendance
        case 'religieuxAInfluencer':
            case 'piete':
                case 'vassalSOppose':
                    case 'factionFoi':
                        case 'factionCult':
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'denoncer': // Prestige, Renommée 
        case 'succession':
            case 'influence' :
                case 'chevalierPartisan': // recruterChevalier sans Martialité
                case 'demande': // Prestige, opinion, Or
                case 'demande2':
                    case 'piete': // Piété, Erudition
                    case 'rancon': // Or, hameçon
                    case 'factionPop': // Opinion populaire
            case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[0]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'domaine': //Intendance
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
                t.push(new Set().add("A DEFINIR"));
            return t;
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            case 'prestige':
                case 'denoncer': // Prestige, Renommée 
        case 'vassalSOppose':
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
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
        "Se légitimer"//5
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            case 'revenu':
        case 'controle':
        case 'declarationGuerre':
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
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'conseiller': // recruter
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
                    t.push(new Set().add("A DEFINIR"));
            return t;
            case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("Suite nombreuse"));
        t.push(new Set().add("Entourage modeste"));
        t.push(new Set().add("Suite modeste"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'aInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
       case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add("A DEFINIR"));
        return t;
    }
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
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
        case 'declarationGuerre':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            case 'piete': // Piété, Erudition
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        t.push(new Set().add(o[0]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'religieuxAInfluencer':
        case 'vassalSOppose':
        case 'factionFoi':
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]));
            return t;
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add(o[2]+" SI ALLIE POTENTIEL OU PARDONNEUR-S conseiller moi"));
            t.push(new Set().add(o[0]));
            return t;
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            //t.push(new Set().add(o[2]+" SI vassal direct ou courtisan ou invité CIBLE-S conseiller moi"));
            t.push(new Set().add(o[0]));
            case 'recruterChevalier':
        case 'proclame':
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'declarationGuerre':
                case 'conseiller': // recruter
                t.push(new Set().add(o[1]));
                return t;
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[0]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[0]+" SI adoption/aventurier"));
            return regence(p.slice(1), t, o);
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[2]));
            return t;
        case 'chevalierPartisan': // recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2':
                return new Array();
        case 'denoncer': // Prestige, Renommée 
        case 'piete': // Piété, Erudition
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
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
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[1]));
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
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
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'prestige':
            o[2]=undefined;
            t.push(new Set().add(o[1]));
            return epidemies(p.slice(1),t,o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[1]+" SI adoption/aventurier"));
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            return epidemies(p.slice(1),t,o);
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return epidemies(p.slice(1),t,o);
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
        case 'domaine': //Intendance
            t.push(new Set().add(o[1]));
            return epidemies(p.slice(1),t,o);
            case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[1]));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[1]));
            o[2]+=" SI Chef culturel";
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
    if (rien) { 
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            o[0]=undefined;
            o[1]=undefined;
            return posteCaravanier(p.slice(1),t,o);
        case 'survie':
            t.push(new Set().add(o[0]));
            return posteCaravanier(p.slice(1),t,o);
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'demande': // Prestige, opinion, Or
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
        case 'prestige':
            o[2]=undefined;
            return posteCaravanier(p.slice(1),t,o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            t.push(new Set().add("aucune fonction SI adoption/aventurier"));
            t.push(new Set().add(o[0]));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[2]));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteCaravanier(p.slice(1),t,o);
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'declarationGuerre':
            t.push(new Set().add(o[2]));
            return posteCaravanier(p.slice(1),t,o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            o[2]+=" SI Chef culturel";
            return posteCaravanier(p.slice(1),t,o);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'stress':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
                case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[0]));
        t.push(new Set().add(o[2]+" SI NON aventurier"));
        t.push(new Set().add(o[1]+" SI NON aventurier"));
        t.push(new Set().add("aucune fonction"));
        return t;
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
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            o[1]=undefined;
            o[2]=undefined;
            return posteAntiq(p.slice(1),t, o);
        case 'guerre': // guerre, Influence,opinion SI gouvernmt admin
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[2]));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteAntiq(p.slice(1),t, o);
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
        case 'domaine': //Intendance
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
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[0]));
            return posteAntiq(p.slice(1),t, o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[0]+" SI Chef culturel"));
            t.push(new Set().add(o[2]+" SI Chef culturel"));
            t.push(new Set().add(o[1]+" SI NON Chef culturel"));
            t.push(new Set().add(o[0]+" SI NON Chef culturel"));
            o[2]+=" SI Chef culturel";
            o[1]+=" SI Chef culturel";
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
        case 'prestige':
            o[0]=undefined;
            o[2]=undefined;
            return posteSenech(p.slice(1),t, o);
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[2]+" SI gouvernement administratif"));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteSenech(p.slice(1),t, o);
        case 'controle':
            t.push(new Set().add(o[1]));
            return posteSenech(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
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
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[0]+" SI NON aventurier"));
        t.push(new Set().add(o[1]+" SI NON aventurier"));
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
        case 'revenu':
            case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteProf(p.slice(1),t, o);
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'controle':
            case 'piete': // Piété, Erudition
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            return posteProf(p.slice(1),t, o);
        case 'religieuxAInfluencer': // opinion, Or
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            return posteProf(p.slice(1),t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
        case 'prestige':
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
        case 'domaine': //Intendance
            t.push(new Set().add(o[1]));
            return posteProf(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[1]+" SI Chef culturel"));
            t.push(new Set().add(o[0]+" SI Chef culturel"));
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteProf(p.slice(1),t, o);   
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        t.push(new Set().add("aucune fonction"));
            return t;
            case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
                return new Array();    
        case 'revenu':
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteNour(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteNour(p.slice(1),t, o);   
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
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
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
            case 'succession': // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
            case 'religieuxAInfluencer': // opinion, Or
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'influence' : // besoin agent //influence SI vassal direct LUI OU courtisan LUI OU invité LUI, Influence, Or, Prestige, hameçon
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'prestige':
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[1]));
            t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteEcuyer(p.slice(1),t, o);
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
        case 'survie':
            o[1]=undefined;
            return posteEcuyer(p.slice(1),t, o);   
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteEcuyer(p.slice(1),t, o);
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
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'prestige':
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteChasse(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteChasse(p.slice(1),t, o);    
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
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
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'prestige':
        t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteChroni(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteChroni(p.slice(1),t, o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion, Or
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
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
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        default:
            return posteChroni(p.slice(1), t, o);
    }
}
function posteChamp(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) o = ["Concourir en son nom",//0 +prestige -or
        "Entraîner le dirigeant",//1 +prouesse -prestige,stress
        "Améliorer les aptitudes",//2 +prouesse -prestige
        // aucune +or
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[0]));
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
        case 'revenu':
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
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
        case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            return new Array();
        case 'prestige':
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
                    t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteChamp(p.slice(1),t, o);
        case 'declarationGuerre':
            t.push(new Set().add(o[2]));
            t.push(new Set().add(o[1]));
            return posteChamp(p.slice(1),t,o);
            case 'survie':
                case 'stress':
        case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
            o[1]=undefined;
            return posteChamp(p.slice(1),t,o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[0]+" SI NON Chef culturel"));
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteChamp(p.slice(1),t, o);
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
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
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'revenu':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
                return new Array();
                case 'survie':
                    case 'enfant': // SI aventurier : Prestige, opinion, Or adopté SINON procréer ; survivre
                    t.push(new Set().add(o[1]));
            return posteBouffon(p.slice(1),t,o);
        case 'stress':
            t.push(new Set().add(o[0]));
            return posteBouffon(p.slice(1),t,o);
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[2]));
            return posteBouffon(p.slice(1),t,o);
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteBouffon(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteBouffon(p.slice(1),t,o);
        case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'religieuxAInfluencer': // opinion, Or
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
            case 'piete': // Piété, Erudition
            case 'conseiller': // recruter
        case 'domaine': //Intendance
        default:
            return posteBouffon(p.slice(1), t, o);
    }
}
function posteGarde(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if(o==null) o = ["Terrifier la Cour",//0 +redout -prestige,opinion cour
        // aucune +or,prestige
    ];
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'rancon': // Or, hameçon
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'demande': // Prestige, opinion, Or
            case 'demande2': // (contrat, Or, Provisions) Prestige, opinion
            case 'revenu':
        case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("aucune fonction"));
            return t;
            case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteGarde(p.slice(1),t, o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteGarde(p.slice(1),t, o);
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
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'domaine': //Intendance
        default:
            return posteGarde(p.slice(1), t, o);
    }
}
function posteMusi(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Exalter la légende dans le pays",//0 +légende -or
        "Répandre la légende à l'étranger",//1 +légende -or
        "Renforcer la légitimité",//2 +légitimité -or
        // aucune +or
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add("aucune fonction SI gouvernement administratif"));
            return posteMusi(p.slice(1),t, o);
        case 'revenu':
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande2': // (contrat, activité, Or, Provisions) Prestige, opinion,Diplomatie,Intrigue
            return new Array();
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'survie':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
        default:
            return posteMusi(p.slice(1), t, o);
    }
}
function posteEunuque(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Alimenter la rumeur",//0 +complot ennemi -prestige
        "Rester à l'écoute du terrain"//1 +découverte complot, intrigue -prestige
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[1]+" SI gouvernement administratif"));
            return posteEunuque(p.slice(1),t, o);
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
          t.push(new Set().add(o[1]));
            return posteEunuque(p.slice(1),t,o);
        case 'recruterChevalier':
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'demande2': // (contrat, activité, Or, Provisions) Prestige, opinion,Diplomatie,Intrigue
        case 'proclame':
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'survie':
            t.push(new Set().add(o[0]));
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]));
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteEunuque(p.slice(1),t,o);
        case 'revenu':
        case 'controle':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'declarationGuerre':
        case 'stress':
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        default:
            return posteEunuque(p.slice(1), t, o);
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
    if (rien) {
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
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
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            return t;
        case 'vassalSOppose':
        case 'religieuxAInfluencer':
            case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or,
            case 'hamecon':
        case 'chevalierPartisan': // recruterChevalier sans Martialité
        case 'assassinat':
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE, (Influence) Or, Prestige, hameçon, Piété (parfois)
            case 'dirigeantAInfluencer': // opinion, Diplomatie, Intrigue, Or
        case 'piete': // Piété, Erudition
            t.push(new Set().add(o[2]));
            return t;
        case 'survie':
            t.push(new Set().add(o[3]));
            return t;
        case 'revenu':
            case 'rancon': // Or, hameçon
            t.push(new Set().add(o[4]));
            return t;
        case 'perteTerresRevoquer': // accorder titre SINON Prestige (pour autorité couronne) SINON chercher secret,Opinion,Diplomatie,Intrigue,Or,hameçon,Intrigue (pour révoquer)
        case 'recruterChevalier':
                case 'conseiller': // recruter
                case 'factionPop': // Opinion populaire
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            return new Array();
        default:
            return campObjectif(p.slice(1));
    }
}
function activCouro(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Être témoin",//0 +piété,légitimité,acceptation culturelle
        "Offrir un soutien",//1 +opinion COURONNE,relation particulière COURONNE,alliance COURONNE
        "Profiter des avantages",//2 +or,prestige,revendication
        "Perturber les loyalistes"//3
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion lige,opinion régent,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add(o[2]));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[2]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            return t;
        case 'revenu':
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'demande2': // (activité, contrat, Or, Provisions, mariage) Prestige, opinion,Diplomatie,Intrigue
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[2]));
            return t;
        case 'assassinat': // Faire démissionner ou Assassiner
            t.push(new Set().add(o[3]+" SI A DEMISSIONER/ASSASSINER couronné"));
            return activCouro(p.slice(1),t,o);
        case 'succession':
            t.push(new Set().add("A DEFINIR"));
            return t;
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
            t.push(new Set().add(o[0]+" SI RELIGIEUX culture différente"));
            t.push(new Set().add(o[2]));
            return t;
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
            t.push(new Set().add(o[1]+" SI ALLIE couronné"));
            t.push(new Set().add(o[0]+" SI ALLIE culture différente"));
            t.push(new Set().add(o[2]));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
            t.push(new Set().add(o[2]+" SI aventurier"));
            return activCouro(p.slice(1),t,o);
        case 'piete': // Piété, Erudition
            t.push(new Set().add(o[0]));
            return t;
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
            t.push(new Set().add(o[1]+" SI vassal direct CIBLE couronné"));
            t.push(new Set().add(o[0]+" SI vassal direct CIBLE culture différente"));
            t.push(new Set().add(o[2]));
            return t;
        case 'factionPop': // Opinion populaire
            t.push(new Set().add(o[0]+" SI FACTIEUX culture différente"));
            return activCouro(p.slice(1),t,o);
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[1]+" SI FACTIEUX couronné"));
            t.push(new Set().add(o[0]+" SI FACTIEUX culture différente"));
            t.push(new Set().add(o[2]));
            return t;
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[1]+" SI VASSAL couronné"));
            t.push(new Set().add(o[0]+" SI VASSAL culture différente"));
            return activCouro(p.slice(1),t,o);
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add(o[2]+" SI NON Chef culturel"));
            return activCouro(p.slice(1),t,o);
        case 'controle':
        case 'hamecon':
        case 'recruterChevalier':
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'proclame':
        case 'stress':
        case 'conseiller': // recruter
        case 'domaine': //Intendance
        default:
            return activCouro(p.slice(1), t, o);
    }
}
function posteDame(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Rester à l'écoute du terrain",//0 +découverte complot,Intrigue -Prestige
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion lige,opinion régent,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[0]+" SI gouvernement administratif"));
            return posteDame(p.slice(1), t, o);
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'hamecon':
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add[0]);
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteDame(p.slice(1),t,o);
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'demande2': // (activité, contrat, Or, Provisions, mariage) Prestige, opinion,Diplomatie,Intrigue
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
            return new Array();
        case 'revenu':
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        default:
            return posteDame(p.slice(1), t, o);
    }
}
function posteArchi(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Fortifier les terres",//0 +garnison -or
        "Travaux publics"//1 +développement -or
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion lige,opinion régent,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add(o[1]));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[0]));
            return t;
        case 'declarationGuerre':
            t.push(new Set().add(o[1]));
            return t;
        case 'revenu':
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'rancon': // Or, hameçon
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'demande2': // (activité, contrat, Or, Provisions, mariage) Prestige, opinion,Diplomatie,Intrigue
            return new Array();
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'stress':
        case 'prestige':
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
        case 'piete': // Piété, Erudition
        case 'denoncer': // Prestige, Renommée 
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'domaine': //Intendance
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
        default:
            return posteArchi(p.slice(1), t, o);
    }
}
function posteEch(p, t=new Array(), o=null) {
    let rien=false; if (p.length === 0 && o == null) { rien=true; }
    if (o == null) { o= ["Flatter les dignitaires",//0 +complot personnel -prestige
        "Collecter des taxes supplémentaires"//1 +or -prestige,opinion vassal
    ]; }
    if (rien) {
        // pas de cb (case terrJureSinonRevendic) : (Convaincre territoire de jure) magnificence,Intendance, Diplomatie (o) SI gouvernmt admin, (Revendication comtale) Erudition
        //   (Revendiquer trône) Erudition, (Factions), (Revendiquer titre seigneur lige) Prestige, (Me faire déclarer régent) Prestige,opinion lige,opinion régent,Diplomatie,Or, (Bâtiment) Or
        // aventurier : complot Saisie du pays (Prestige, Intrigue) SINON Acheter terre (éviter Gibier de potence, éviter Baroudeur, hameçon, Or, langue, opinion,Diplomatie) SINON Demander soutien invasion (Prestige), (Bâtiment) Or
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    if (p.length === 0) {
        t.push(new Set().add("aucune fonction"));
        return t;
    }
    const pp = p[0];
    switch(pp) {
        case 'guerre': // guerre, Influence,opinion,Diplomatie,Intrigue,Or SI gouvernmt admin
            t.push(new Set().add(o[0]+" SI gouvernement administratif"));
            return posteEch(p.slice(1), t, o);
        case 'revenu':
        case 'rancon': // Or, hameçon
            t.push(new Set().add(o[1]));
            return t;
        case 'religieuxAInfluencer': // opinion,Diplomatie,Intrigue,Or,Piété,Erudition
        case 'aInfluencer': // (alliance) opinion, Diplomatie, Intrigue, Or
        case 'agent': // opinion SI vassal direct ou courtisan ou invité CIBLE,Diplomatie,Intrigue (Influence) Or, Prestige, hameçon, Piété (parfois)
        case 'vassalAInfluencer': //(Faction) opinion,Diplomatie,Intrigue,Or, allié, hameçon fort,Intrigue ami, amant, prisonnier,Intrigue, terrifié,redoutabilité
        case 'vassal': //allié, hameçon fort,Intrigue, ami,opinion,Diplomatie,Intrigue amant, prisonnier,Intrigue, terrifié,redoutabilité
            t.push(new Set().add(o[0]));
            return t;
        case 'prestige':
        case 'denoncer': // Prestige, Renommée 
            t.push(new Set().add("aucune fonction"));
            return t;
        case 'enfant': // SI aventurier : Prestige, opinion,Diplomatie,Intrigue,Or adopté SINON procréer ; survivre
            t.push(new Set().add("aucune fonction SI aventurier"));
            t.push(new Set().add(o[0]));
            return t;
        case 'cultInnov': //SI Chef culturel : Erudition SINON Promouvoir la culture Intendance, Faire diverger la culture Prestige
            t.push(new Set().add("aucune fonction SI NON Chef culturel"));
            return posteEch(p.slice(1),t,o);
        case 'chevalierPartisan': // comme recruterChevalier sans Martialité
        case 'demande': // Prestige, opinion,Diplomatie,Intrigue,Or
        case 'demande2': // (activité, contrat, Or, Provisions, mariage) Prestige, opinion,Diplomatie,Intrigue
            return new Array();
        case 'controle':
        case 'assassinat': // Faire démissionner ou Assassiner
        case 'succession':
        case 'hamecon':
        case 'recruterChevalier':
        case 'proclame':
        case 'declarationGuerre':
        case 'stress':
        case 'piete': // Piété, Erudition
        case 'conseiller': // recruter
        case 'factionPop': // Opinion populaire
        case 'domaine': //Intendance
        default:
            return posteEch(p.slice(1), t, o);
    }
}
function decisionOuNon(res, setOui, setNon) {
    // rechercher dans res si au moins 1 setOui (Mot complet) est avant tout setNon (Mot dans phrase)
    // parcours de res (tableau de Set) :
    for (let r of res) {
        for (let e of r) {
            // parcourir setOui
            if (setOui) {
            for (let o of setOui) {
                // recherche si o = e :
                if (e==o) {
                    console.log("oui ",e,o);
                    return true;//"true grâce à "+o;
                }
            }}
            if (setNon) {
            for (let n of setNon) {
                // recherche de n dans chaîne e :
                if (e.includes(n)) {
                    console.log("non ", e, n);
                    return false;//"false à cause de "+n;
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
    evidence('activCouro', sansDoublon(activCouro(p), "SINON"));
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
    liOuiNon("Dame d'honneur", 'poste-14', sansDoublon(posteDame(p), "SINON"));
    liOuiNon("Bouffon de la Cour", 'poste-10', sansDoublon(posteBouffon(p), "SINON"));
    liOuiNon("Garde du corps", 'poste-11', sansDoublon(posteGarde(p), "SINON"));
    liOuiNon("Musicien de la Cour", 'poste-12', sansDoublon(posteMusi(p), "SINON"));
    liOuiNon("Chef des eunuques", 'poste-13', sansDoublon(posteEunuque(p), "SINON"));
    liOuiNon("Architecte royal", 'poste-15', sansDoublon(posteArchi(p), "SINON"));
    liOuiNon("Echanson", 'poste-16', sansDoublon(posteEch(p), "SINON"));
    liDec('epidResult', 'poste-0');
    liDec('epidResult', 'poste-1');
    liDec('epidResult', 'poste-2'); //Antiquaire
    liDec('epidResult', 'poste-3'); //Sénéchal
    liDec('epidResult', 'poste-4'); //Professeur
    liDec('epidResult', 'poste-5'); //Nourrice
    liDec('epidResult', 'poste-13'); //Chef des eunuques
    liDec('epidResult', 'poste-6'); //Grand écuyer
    liDec('epidResult', 'poste-7'); //Maître de chasse
    liDec('epidResult', 'poste-8'); //Chroniqueur de la Cour
    liDec('epidResult', 'poste-9'); //Champion personnel
    liDec('epidResult', 'poste-14'); //Dame d'honneur
    liDec('epidResult', 'poste-15'); //Architecte royal
    liDec('epidResult', 'poste-12'); //Musicien de la Cour
    liDec('epidResult', 'poste-16'); //Echanson
    liDec('epidResult', 'poste-10'); //Bouffon de la Cour
    liDec('epidResult', 'poste-11'); //Garde du corps
    // Ruler - Décisions mineures
        // Recherche de médecin, Rechercher Caravan Master, Recherche de nourrice
    liOuiNon("Recruter à un poste de la Cour", 'dec-d-min-0', decisionOuNon(decisionsResult,
        new Set(["Recruter", "Santé", "Points d'expérience"]),
        new Set(["Or", "Prestige"])));
    liOuiNon("Chercher des percepteurs d'impôts", 'dec-d-min-4', decisionOuNon(decisionsResult,
            new Set(["Or"]),
            new Set(["Or", "Piété"])));
    liOuiNon("Développer la capitale", 'dec-d-min-5', decisionOuNon(decisionsResult,
            new Set(["Développement"]),
            null));
    liOuiNon("Révoquer la fausse conversion", 'dec-d-min-6', "A DEFINIR");
    liOuiNon("Introduire une nouvelle mode à la Cour", 'dec-d-min-7', decisionOuNon(decisionsResult,
        null,
        new Set(["Or", "Prestige"])));
    liOuiNon("Développer les villes", 'dec-d-min-8', "A DEFINIR");
    liOuiNon("Laissez le royaume embrasser la tradition locale", 'dec-d-min-9', "A DEFINIR");
    liOuiNon("Commander un artefact", 'dec-d-min-10', decisionOuNon(decisionsResult,
        new Set(["Artefact"]),
        new Set(["Or"])));
    liOuiNon("Artefact de légende de commission", 'dec-d-min-11', "A DEFINIR");
    liOuiNon("Célébrer les autres cultures", 'dec-d-min-12', "A DEFINIR");
    liOuiNon("Révoquer le bail de l'ordre sacré", 'dec-d-min-13', decisionOuNon(decisionsResult,
        null,
        new Set(["Piété", "Augmenter levées"])));
    liOuiNon("Soumettez-vous au Grand Khan", 'dec-d-min-14', "A DEFINIR");
    liOuiNon("Retour de la Roma", 'dec-d-min-15', "A DEFINIR");
    liOuiNon("Adopter un chiot", 'dec-d-min-16', "A DEFINIR");
    liOuiNon("Intégrer le duché anglais", 'dec-d-min-17', "A DEFINIR");
    liOuiNon("Amnistier les faux convertis", 'dec-d-min-18', decisionOuNon(decisionsResult,
        null,
        new Set(["Piété"])));
    liOuiNon("Répandez la foi Theravada", 'dec-d-min-19', "A DEFINIR");
    liOuiNon("Favoriser les experts étrangers", 'dec-d-min-20', decisionOuNon(decisionsResult,
        new Set(["Recruter"]),
        new Set(["Prestige", "Opinion"])));
    liOuiNon("S'entraîner pour un tournoi", 'dec-d-min-21', decisionOuNon(decisionsResult,
            new Set(["Prouesse"]),
            new Set(["Prestige"])));
    liOuiNon("Embellir la capitale", 'dec-d-min-22', "A DEFINIR");
    liOuiNon("Orienter l'unité de la Maison", 'dec-d-min-22', decisionOuNon(decisionsResult,
        new Set(["Points d'expérience"]),
        new Set(["Piété", "Redoutabilité", "Opinion"])));
    // Ruler - Décisions mineures - avantages
    liOuiNon("Commander une épopée familiale", 'dec-d-min-av-1', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Artefact"]),
        new Set(["Or"])));
    liOuiNon("Sell Trivial Titles", 'dec-d-min-av-2', "A DEFINIR");
    liOuiNon("Extort Subjects", 'dec-d-min-av-3', "A DEFINIR");
    liOuiNon("Local Arbitration", 'dec-d-min-av-4', "A DEFINIR");
    // Ruler - Décisions mineures - cour royale
    liOuiNon("Find Court Language Linguist", 'dec-d-min-cour-1', "A DEFINIR");
    liOuiNon("Ordonner une expulsion massive", 'dec-d-min-cour-2', decisionOuNon(decisionsResult,
        null,
        new Set(["Prestige"])));
    liOuiNon("Exoticize A Grand Hall", 'dec-d-min-cour-3', "A DEFINIR");
    // Ruler - Décisions mineures - seigneur-lige
    liOuiNon("Demander audience au ...", 'dec-d-min-seign-0', decisionOuNon(decisionsResult,
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
        new Set(["Recruter", "Recruter chevalier", "Recruter chevalier SI prouesse&gt;=8"]),
        new Set(["Prestige"])));
    liOuiNon("Inviter des prétendants", 'dec-d-court-3', decisionOuNon(decisionsResult,
            new Set(["Recruter"]),
            new Set(["Prestige"])));
    liOuiNon("Restaurer les distinctions", 'dec-d-court-4', "A DEFINIR");
    liOuiNon("Faire avec ce qui reste", 'dec-d-court-5', decisionOuNon(decisionsResult,
        new Set(["Recruter"]),
        new Set(["Prestige"])));
    liOuiNon("Recruter un spécialiste du terrain", 'dec-d-court-6', decisionOuNon(decisionsResult,
            new Set(["Recruter"]),
            new Set(["Or", "Prestige"])));
    // Ruler - lutte ibérique
    liOuiNon("Parrainez les Sciences Juives", 'dec-d-ib-1', "A DEFINIR");
    liOuiNon("Construire des routes de pèlerinage", 'dec-d-ib-2', "A DEFINIR");
    liOuiNon("Mettre un pied en Ibérie", 'dec-d-ib-3', decisionOuNon(decisionsResult,
        new Set(["Légende"]),
        null));
    // Character - Décisions mineures
    liOuiNon("Adopter la culture locale", 'dec-p-1', decisionOuNon(decisionsResult,
        null,
        new Set(["Prestige"])));
    liOuiNon("Emprunter de l'or à l'ordre sacré", 'dec-p-2', decisionOuNon(decisionsResult,
        new Set(["Or"]),
        new Set(["Piété"])));
       // chat de compagnie, chien de compagnie
    liOuiNon("Caresser ...", 'dec-p-3', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        null));
    liOuiNon("Renoncer à l'héritage", 'dec-p-5', decisionOuNon(decisionsResult,
            new Set(["Diminuer stress"]),
            new Set(["Construire", "Prestige", "Progression succession"])));
    liOuiNon("Méditer dans l'isolement", 'dec-p-6', decisionOuNon(decisionsResult,
                new Set(["Diminuer stress", "Erudition"]),
                new Set(["Diplomatie", "Martialité", "Intendance", "Intrigue"])));
    liOuiNon("Tenter de se suicider", 'dec-p-7', decisionOuNon(decisionsResult,
                    null,
                    new Set(["Piété"])));
    liOuiNon("Manger votre fromage", 'dec-p-8', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Artefact"])));
    liOuiNon("Manger votre fromage", 'dec-p-8', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Artefact"])));
    liOuiNon("Élever une pierre runique", 'dec-p-9', "A DEFINIR");
    liOuiNon("Offrez à votre ancêtre une sépulture céleste", 'dec-p-10', "A DEFINIR");
    // Character - Décisions mineures - avantages
    liOuiNon("Embrasser le célibat", 'dec-p-av-1', decisionOuNon(decisionsResult,
        new Set(["Piété"]),
        new Set(["coucher SI NON mort", "Opinion"])));
      // Abandonner le célibat
    liOuiNon("Créer un itinéraire de voyage", 'dec-p-av-3', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Artefact"]),
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
    liOuiNon("Vivre la communion mystique", 'dec-p-tr-2', decisionOuNon(decisionsResult,
        new Set(["Erudition", "Martialité", "Diminuer stress"]),
        new Set(["Piété"])));
    liOuiNon("Étudier l'art de l'intrigue", 'dec-p-tr-3', decisionOuNon(decisionsResult,
        new Set(["Opinion vassal direct ou courtisan ou invité CIBLE-S"]),
        null));
    liOuiNon("Assumer ses responsabilités", 'dec-p-tr-4', "A DEFINIR"),
    liOuiNon('Faire table rase du passé', 'dec-p-tr-5', decisionOuNon(decisionsResult,
        new Set(["Eviter Gibier de potence", /* si rien : */ "Construire"]),
        new Set(["Or", "Prestige", "Piété"])));
    liOuiNon("Écrire un poème de Muwashshah", 'dec-p-tr-6', "A DEFINIR");
    liOuiNon("Salon trouvé", 'dec-p-tr-7', "A DEFINIR");
    // Character - Décisions mineures - traits - Coping actions
    liOuiNon("Confesser", 'dec-p-tr-cop-1', "A DEFINIR");
    liOuiNon("Consommer des gâteaux au haschisch", 'dec-p-tr-cop-2', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Intendance", "Erudition"])));
    liOuiNon("Faire la charité", 'dec-p-tr-cop-3', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Or"])));
    liOuiNon("S'adonner à la flagellation", 'dec-p-tr-cop-4', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Martialité", "Intrigue", "Prouesse", "Santé", "Redoutabilité"])));
    liOuiNon("Faites-vous plaisir en buvant", 'dec-p-tr-cop-5', decisionOuNon(decisionsResult,
            new Set(["Diminuer stress"]),
            new Set(["Prestige"])));
    liOuiNon("Faites-vous plaisir avec la nourriture", 'dec-p-tr-cop-6', "A DEFINIR");
    liOuiNon("Déchaînez-vous", 'dec-p-tr-cop-7', "A DEFINIR");
    liOuiNon("S'isoler", 'dec-p-tr-cop-8', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Prestige"])));
    liOuiNon("Eviter la nourriture", 'dec-p-tr-cop-9', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Prouesse", "Santé"]))); //"Shun Food"
    liOuiNon("Aller dans un lupanar", 'dec-p-tr-cop-14', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Or"])));
    liOuiNon("Se confier", 'dec-p-tr-cop-10', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Opinion"])));
    liOuiNon("Visiter le marché", 'dec-p-tr-cop-11', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Or"])));
    liOuiNon("Évacuer le stress", 'dec-p-tr-cop-12', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Opinion"])));
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
    liOuiNon("Commander une icône", 'dec-p-adm-build-4', decisionOuNon(decisionsResult,
        new Set(["Artefact"]),
        new Set(["Or"])));
    liOuiNon("Commande de costumes en soie", 'dec-p-adm-build-5', "A DEFINIR");
    // Character - Nomadic decisions
    liOuiNon("Consultez le ciel", 'dec-p-nom-1', "A DEFINIR");
    liOuiNon("Maîtrisez l'art du commandement", 'dec-p-nom-2', "A DEFINIR");
    liOuiNon("Invoquer des visiteurs fortunés : offres locales", 'dec-p-nom-3', "A DEFINIR");
    liOuiNon("Des temps désespérés", 'dec-p-nom-4', "A DEFINIR");
    liOuiNon("Établir le système Paiza", 'dec-p-nom-5', "A DEFINIR");
    liOuiNon("Paix du Grand Khan", 'dec-p-nom-6', "A DEFINIR");
    // Character - Nomadic decisions - Conversion decisions
    liOuiNon("Adopter les traditions culturelles", 'dec-p-nom-conv-1', "A DEFINIR");
    liOuiNon("Mélanger les traditions", 'dec-p-nom-conv-2', "A DEFINIR");
    liOuiNon("Convertissez-vous à la foi à travers votre peuple", 'dec-p-nom-conv-3', "A DEFINIR");
    liOuiNon("Répandez la foi parmi votre peuple", 'dec-p-nom-conv-4', "A DEFINIR");
    liOuiNon("Adoptez le Tengriisme", 'dec-p-nom-conv-5', "A DEFINIR");
    liOuiNon("Promouvoir les traditions", 'dec-p-nom-conv-6', "A DEFINIR");
    // Adventurer - Major decisions
    liOuiNon('Devenir un grand conquérant', 'dec-a-maj-1', decisionOuNon(decisionsResult,
        new Set(["Construire", "Augmenter levées", "Légende"]),
        new Set(["Prestige"])));
    liOuiNon('Défendre la culture ...', 'dec-a-maj-2', decisionOuNon(decisionsResult,
        new Set(["Construire"]),
        new Set(["Or", "Prestige"])));
    liOuiNon('Devenir le chevalier de ...', 'dec-a-maj-3', decisionOuNon(decisionsResult,
        new Set(["Construire", "Prouesse", "Artefact", "Légende"]),
        new Set(["Prestige"])));
    liOuiNon('Les voyages de ...', 'dec-a-maj-4', decisionOuNon(decisionsResult,
            new Set(["Points d'expérience", "Artefact"]),
            new Set(["Or", "Prestige"])));
    liOuiNon("La voie ... - l'ascension", 'dec-a-maj-5', decisionOuNon(decisionsResult,
            new Set(["Martialité", "Prouesse"]),
            new Set(["Piété", "Diminuer stress"])));
    liOuiNon("La voie ... - le prélude", 'dec-a-maj-6', "A DEFINIR");
    liOuiNon('Fonder une propriété', 'dec-a-maj-7', decisionOuNon(decisionsResult,
            new Set(["Contrôle SI &lt;100", "Construire"]),
            new Set(["Or"])));
    liOuiNon('Enrôler les exclus', 'dec-a-maj-8', decisionOuNon(decisionsResult,
        new Set(["Martialité", "Intrigue", "Augmenter levées"]),
        new Set(["Or", "Prestige"])));
      // Terrain désigné
      // Terrain maître
    liOuiNon('Mesures désespérées - Abattage des animaux', 'dec-a-maj-11', decisionOuNon(decisionsResult,
            new Set(["Provisions"]),
            new Set(["Prestige"])));
    // Adeventurer - Minor decisions
    liOuiNon('Visiter la propriété ...', 'dec-a-min-1', decisionOuNon(decisionsResult,
            new Set(["Provisions", "Construire"]),
            null));
    liOuiNon('Rassembler les provisions', 'dec-a-min-2', decisionOuNon(decisionsResult,
                new Set(["Provisions"]),
                null));
    liOuiNon("Adopter un chien de chenil", 'dec-a-min-3', "A DEFINIR");
    liOuiNon('Humilier le larbin', 'dec-a-min-4', decisionOuNon(decisionsResult,
                    new Set(["Diminuer stress", "Redoutabilité"]),
                    new Set(["Prestige"])));
    liOuiNon("Inviter des poètes", 'dec-a-min-5', "A DEFINIR");
    liOuiNon('A la pêche', 'dec-a-min-6', decisionOuNon(decisionsResult,
                        new Set(["Diminuer stress", "Provisions"]),
                        null));
    // Adventurer - Hasan Story decisions
    liOuiNon("Évangéliser la foi", 'dec-a-h-1', "A DEFINIR");
    liOuiNon("Agiter la population locale", 'dec-a-h-2', "A DEFINIR");
    liOuiNon("Commencer la révolution", 'dec-a-h-3', "A DEFINIR");
    liOuiNon("J'ai trouvé les Assassins", 'dec-a-h-4', "A DEFINIR");
    liOuiNon("Développez les Assassins", 'dec-a-h-5', "A DEFINIR");
    // Ruler - Major decisions
    liOuiNon("Devenir un aventurier", 'dec-d-maj-26', decisionOuNon(decisionsResult,
        null, //Prestige
        null, //Prestige
        new Set(["Renommée"])));
    liOuiNon('Déplacer la capitale de jure', 'dec-d-maj-1', decisionOuNon(decisionsResult,
            new Set(["Construire"]),
            new Set(["Prestige"])));
    liOuiNon('Agrandir le duché', 'dec-d-maj-2', decisionOuNon(decisionsResult,
            new Set(["Renommée"]),
            new Set(["Prestige"])));
    // ?
    liOuiNon("Allumer le feu royal", 'dec-x', decisionOuNon(decisionsResult,
        new Set(["Renommée", "Santé"]),
        null));
    // ?
    liOuiNon("Perdre du poids", 'dec-y', decisionOuNon(decisionsResult,
        new Set(["Santé"]),
        new Set(["Diminuer stress"])));
    liOuiNon("Arrêter de perdre du poids", 'dec-y0', decisionOuNon(decisionsResult,
            new Set(["Diminuer stress"]),
            null));
    // ?
    liOuiNon("Rites de passage", 'dec-z', decisionOuNon(decisionsResult,
        new Set(["Points d'expérience", "Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "Diminuer stress"]),
        new Set(["Or", "Prestige"])));
    // ?
    liOuiNon("Être diverti par le bouffon de la Cour", 'dec-a', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        null));
    liOuiNon("Avouer", 'dec-b', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress"]),
        new Set(["Opinion"])));
    liOuiNon("Adopter le mode de vie nomade", 'dec-c', decisionOuNon(decisionsResult,
        new Set(["Or", "Augmenter Hommes d'armes", "Redoutabilité", /* titre comtal */"Construire", "Recruter"]),
        new Set(["Prestige"])));
    liOuiNon("Perpétuer l'héritage de la Maison ...", 'dec-d', decisionOuNon(decisionsResult,
        new Set(["Légitimation", "Augmenter levées", /*"Prestige",*/ "Provisions"]),
        new Set(["Prestige"])));
    liOuiNon("Révéler la vraie foi", 'dec-e', decisionOuNon(decisionsResult,
        null,
        new Set(["Piété"])));
    liOuiNon("Abandonner la foi secrète", 'dec-f', decisionOuNon(decisionsResult,
        null,
        null));
    liOuiNon("Révéler la vraie foi", 'dec-e', decisionOuNon(decisionsResult,
        null,
        new Set(["Piété"])));
    liOuiNon("Abandonner la foi secrète", 'dec-f', decisionOuNon(decisionsResult,
        null,
        null));
    // Affichage Décisions importantes d'aventurier
    liDec('decImp', 'dec-a-maj-1');
    liDec('decImp', 'dec-a-maj-2');
    liDec('decImp', 'dec-a-maj-3');
    liDec('decImp', 'dec-a-maj-4');
    liDec('decImp', 'dec-a-maj-5');
    liDec('decImp', 'dec-a-maj-7');
    liDec('decImp', 'dec-a-maj-8'); //Enrôler les exclus
    liDec('decImp', 'dec-c'); //Adopter le mode de vie nomade", 'dec-c
    liDec('decImp', 'dec-a-maj-11'); //Mesures désespérées - Abattage des animaux
    liDec('decImp', 'dec-d'); //Perpétuer l'héritage de la Maison ...", 'dec-d
    // Affichage Pays
    liDec('decPays', 'dec-d-maj-2'); //Agrandir le duché
    liDec('decPays', 'dec-d-maj-1'); //Déplacer la capitale de jure
    // Affichage Décisions ibériques
    liDec('decLutte', 'dec-d-ib-3'); //Mettre un pied en Ibérie
    // Affichage Décisions administratives
    liDec('decAdm', 'dec-p-adm-build-4'); //Commander une icône
    // Affichage Décisions d'aventurier
    liDec('decAv', 'dec-a-min-1');
    liDec('decAv', 'dec-a-min-2');
    liDec('decAv', 'dec-a-min-4');
    liDec('decAv', 'dec-a-min-6');
    liDec('decAv', 'dec-p-tr-5');
    liDec('decAv', 'dec-p-5');
    // Affichage Décisions
    liDec('dec', 'dec-d-min-10'); //Commander un artefact", 'dec-d-min-10
    liDec('dec', 'dec-d-min-7'); //Introduire une nouvelle mode à la Cour", 'dec-d-min-7
    liDec('dec', 'dec-d-maj-26'); //Devenir un aventurier", 'dec-d-maj-26
    liDec('dec', 'dec-p-tr-1'); //Accélérer les complots", 'dec-p-tr-1
    liDec('dec', 'dec-p-2'); //Emprunter de l'or à l'Ordre sacré", 'dec-p-2
    liDec('dec', 'dec-e'); //Révéler la vraie foi", 'dec-e
    liDec('dec', 'dec-f'); //Abandonner la foi secrète", 'dec-f
    liDec('dec', 'dec-d-maj-26'); //Devenir un aventurier", 'dec-d-maj-26
    liDec('dec', 'dec-p-tr-1'); //Accélérer les complots", 'dec-p-tr-1
    liDec('dec', 'dec-e'); //Révéler la vraie foi", 'dec-e
    liDec('dec', 'dec-f'); //Abandonner la foi secrète", 'dec-f
    liDec('dec', 'dec-d-min-21'); //S'entraîner pour un tournoi", 'dec-d-min-21
    liDec('dec', 'dec-p-tr-2'); //Vivre la communion mystique", 'dec-p-tr-2
    liDec('dec', 'dec-d-min-cour-2'); //Ordonner une expulsion massive", 'dec-d-min-cour-2
    liDec('dec', 'dec-p-2'); //Emprunter de l'or à l'Ordre sacré", 'dec-p-2
    liDec('dec', 'dec-d-min-13'); //Révoquer le bail de l'ordre sacré 'dec-d-min-13'
    liDec('dec', 'dec-p-av-1') //Embrasser le célibat", 'dec-p-av-1'
    liDec('dec', 'dec-x'); //Allumer le feu royal
    liDec('dec', 'dec-p-tr-3'); //Étudier l'art de l'intrigue
    liDec('dec', 'dec-p-1'); //Adopter la culture locale
    liDec('dec', 'dec-p-tr-cop-5'); //Faites-vous plaisir en buvant 'dec-p-tr-cop-5'
    liDec('dec', 'dec-d-min-18'); //Amnistier les faux convertis 'dec-d-min-18'
    liDec('dec', 'dec-p-6'); //Méditer dans l'isolement
    liDec('dec', 'dec-d-min-seign-0'); //Demander audience au ...", 'dec-d-min-seign-0
    liDec('dec', 'dec-p-tr-cop-14'); //Aller dans un lupanar
    liDec('dec', 'dec-p-tr-cop-3'); //Faire la charité", 'dec-p-tr-cop-3
    liDec('dec', 'dec-p-7'); //Tenter de se suicider
    liDec('dec', 'dec-p-foi-6'); //Faire voeu de pauvreté
    liDec('dec', 'dec-p-tr-cop-2'); //Consommer des gâteaux au haschisch", 'dec-p-tr-cop-2
    liDec('dec', 'dec-p-tr-cop-9'); //Eviter la nourriture, 'dec-p-tr-cop-9
    liDec('dec', 'dec-p-tr-cop-12'); //Evacuez votre stress", 'dec-p-tr-cop-12
    liDec('dec', 'dec-p-tr-cop-8'); //S'isoler", 'dec-p-tr-cop-8'
    liDec('dec', 'dec-p-tr-cop-11'); //Visiter le marché 'dec-p-tr-cop-11'
    liDec('dec', 'dec-p-tr-cop-10'); //Se confier 'dec-p-tr-cop-10'
    liDec('dec', 'dec-p-3'); //Caresser ...
    liDec('dec', 'dec-p-tr-cop-4'); //Se flageller
    liDec('dec', 'dec-b'); //Avouer
    liDec('dec', 'dec-p-8'); //Manger votre fromage 'dec-p-8'
    // Affichage Décisions de courtisan
    liDec('decCour', 'dec-d-min-20'); //Favoriser les experts étrangers", 'dec-d-min-20
    liDec('decCour', 'dec-d-court-5'); //Faire avec ce qui reste
    liDec('decCour', 'dec-d-court-6'); //Recruter un spécialiste du terrain", 'dec-d-court-6
    liDec('decCour', 'dec-d-min-0'); //Recruter à un poste de la Cour", 'dec-d-min-0
    liDec('decCour', 'dec-d-court-2'); //Inviter des chevaliers", 'dec-d-court-2
    liDec('decCour', 'dec-d-court-3'); //Inviter des prétendants", 'dec-d-court-3
    liDec('decCour', 'dec-d-court-3'); //Inviter des prétendants", 'dec-d-court-3
    // Activités
    liOuiNon("Grande tournée", 'act-g-1', decisionOuNon(decisionsResult,
        new Set(["Contrôle SI &lt;100", "Opinion comtale", "Légitimation", "Diminuer stress", "Prestige"]),
        new Set(["Or"])));
    liOuiNon("Grand tournoi", 'act-g-0', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Légitimation", "Diminuer stress"]),
        new Set(["Or"])));
    liOuiNon("Séjour universitaire", 'act-1', decisionOuNon(decisionsResult,
        new Set(["Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "Points d'expérience", "Artefact", "Recruter"]),
        new Set(["Or"])));
    liOuiNon("Festin", 'act-0', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Légitimation", "Diminuer stress", "Intrigue"]),
        new Set(["Or"])));
    liOuiNon("Funérailles", 'act-7', decisionOuNon(decisionsResult,
        new Set(["Diminuer stress", "Piété", "Légitimation"]),
        new Set(["Or"])));
    liOuiNon("Fête de camp", 'act-2', decisionOuNon(decisionsResult,
            new Set(["Diminuer stress", "Provisions", "Diplomatie", "Martialité", "Intendance", "Intrigue", "Erudition", "Construire", "Artefact", "Recruter"]),
            new Set(["Or"])));
    liOuiNon("Randonnée", 'act-3', decisionOuNon(decisionsResult,
                new Set(["Diminuer stress", "Prestige", "Erudition"]),
                new Set(["Or"])));
    liOuiNon("Chasse", 'act-4', decisionOuNon(decisionsResult,
        new Set(["Prestige", "Provisions", "Artefact", "Légende", "Légitimation", "Diminuer stress", "Prouesse"]),
        new Set(["Or"])));
    liOuiNon("Inspection", 'act-8', decisionOuNon(decisionsResult,
        new Set([/*décision si rien*/ "Développement", "Contrôle SI &lt;100", "Augmenter levées", "Opinion"]),
        new Set(["Or"])));
    liOuiNon("Expédition vers un monument", 'act-5', decisionOuNon(decisionsResult,
        new Set(["Intrigue", "Diplomatie", "Martialité", "Erudition", "Intendance", "Recruter", "Prestige"]),
        new Set(["Or"])));
    liOuiNon("Pélerinage", 'act-6', decisionOuNon(decisionsResult,
            new Set(["Piété", "Légitimation", "Diminuer stress", "Eviter Gibier de potence", "Construire"]),
            new Set(["Or"])));
    liOuiNon("Rencontre des pairs", 'act-9', decisionOuNon(decisionsResult,
        new Set(["Opinion"]),
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
        //console.log(tab[l]);
        tab[l].forEach(function motTexte(mot) {
            if (mot !== undefined && mot !== null && mot !== "") {
                if (!faits.has(mot) || (typeof mot === "string" && mot.includes("A HAMECONNER"))) {
                    // nouvelle ligne ?
                    if ((l > 0) && (premierMot)) {
                        texte = texte
                            + '<br>' + liaison + " " + mot;
                        premierMot = false;
                    } else if (!premierMot) {
                        texte = texte + " PUIS " + mot;
                    } else {
                        texte = texte + mot;
                        premierMot = false;
                    }
                    if (!faits.has(mot)) { faits.add(mot); }
                }
            }
        });
    }
    return texte;
}
/*function nbLui(pp, p) {
    // fonction qui compte les éléments redondants pp dans p
    let i = 1;
    while((i < p.length) && (p[i] == pp)) {
        i++;
    }
    return i;
    /*if(i == 1) {
        t.push(new Set().add(chaine));
    } else {
        if(tOuSet) {
            let n = 1;
            while(n <= i) {
                t.push(new Set().add(chaine+String.fromCharCode(64 + n)));
                n++;
            }
        } else {
            let e = new Set();
            let n = 1;
            while(n <= i) {
                e.add(chaine+String.fromCharCode(64 + n));
                n++;
            }
            t.push(e);
        }
    }
}*/
