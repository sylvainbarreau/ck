(* Ceci est un éditeur pour OCaml
   Entrez votre programme ici, et envoyez-le au toplevel en utilisant le
   bouton "Évaluer le code" ci-dessous ou [Ctrl-e]. *)

type domainePictoOuGuerre =
  | Guerre
type domaineSituation =
  | PerteTerres
  | Controle 
  | VassalAInfluencer
  | VassalHamecon
  | EtrangerAInfluencer
  | EtrangerHamecon
  | DeclarationGuerre
  | DeclarationGuerreSurvie
  | Chevalier
  | Revenu
type domaine = 
  | P of domainePictoOuGuerre
  | S of domaineSituation
  | Survie

let prios priosPictoOuGuerre priosSituation successions =
  let concatene = List.map (fun guerre -> P guerre) priosPictoOuGuerre
                  @ List.map (fun sit -> S sit) priosSituation in
  if successions>1 then
    concatene @ [Survie]
  else
    concatene

let rec militaire pm =
  match pm with
  | [] -> "ne rien changer"
  | pp :: suite ->
      if pp = P(Guerre) || pp=S(DeclarationGuerre) then "Renforcement mensuel"
      else if pp=S(Revenu) then "pas Renforcement mensuel" 
      else militaire suite
let rec conjoint p =
  match p with
  | [] -> "ne rien changer"
  | pp :: suite ->
      if pp = P(Guerre) || pp=S(DeclarationGuerre) || pp = S(Controle) || pp=S(Chevalier) then "S'occuper de chevalerie"
      else if pp=S(VassalAInfluencer) then "S'occuper de politique"
      else if pp=S(EtrangerHamecon) || pp=S(VassalHamecon) then "S'occuper des intrigues"
      else if pp=S(PerteTerres) then "Patronner"
      else if pp=S(Revenu) then "Gérer le domaine"
      else conjoint suite
let rec conseillerReligieux p =
  match p with
  | [] -> "Améliorer les relations religieuses"
  | pp :: suite ->
      if pp = P(Guerre) || pp=S(DeclarationGuerre) then "Convertir le comté, si Augmentation des levées comtales" ^ " SINON " ^ conseillerReligieux suite 
      else if pp=S(VassalAInfluencer) then "Améliorer les relations religieuses, si Augmentation de l'opinion vassale " ^ conseillerReligieux suite
      else if pp=S(Revenu) then "Convertir le comté, si Augmentation du développement comtal SINON " ^ conseillerReligieux suite
      else conseillerReligieux suite
let rec chancelier p =
  match p with
  | [] -> "Gérer les affaires intérieures"
  | pp :: suite ->
      if pp=P(Guerre) || pp=S(Revenu) then "Gérer les affaires intérieures, si Contrat féodal amélioré SINON " ^ chancelier suite 
      else if pp=S(PerteTerres) then "Gérer les affaires intérieures, si Contrat féodal amélioré ou Force la partition pour le vassal SINON " ^ chancelier suite 
      else if pp=S(DeclarationGuerre) then "Gérer les affaires intérieures, si Contrat féodal amélioré SINON Gérer les affaires étrangères, si Période de trêve diminuée SINON " ^ chancelier suite
      else if pp=S(VassalAInfluencer) then "Accorder une faveur royale SINON Gérer les affaires intérieures"
      else chancelier suite
let rec marechal p =
  match p with
  | [] -> "Augmenter le contrôle comtal, si Augmentation de l'opinion du baron SINON ne rien changer"
  | pp :: suite ->
      if pp = P(Guerre) || pp= S(DeclarationGuerre) then "Organiser l'armée"
      else if pp=S(Controle) || pp=S(Revenu) then "Augmenter le contrôle comtal SINON " ^ marechal suite
      else if pp=S(Chevalier) then "Former les commandants"
      else if pp=Survie then "Gérer la garde royale SINON " ^ marechal suite
      else marechal suite
let rec intendant p =
  match p with
  | [] -> "Augmenter le développement comtal"
  | pp :: suite ->
      if pp=S(Controle) then "Augmenter le développement comtal, si Contrôle accru SINON " ^ intendant suite
      else if pp=P(Guerre) then "Promouvoir la culture, si Augmentation des levées SINON " ^ intendant suite
      else if pp=S(Revenu) then "Collecter les impôts"
      else intendant suite
let rec maitreEspion p =
  match p with
  | [] -> "ne rien changer"
  | pp :: suite ->
      if pp=S(EtrangerHamecon) || pp=S(VassalHamecon) then "Soutenir les complots, si Fabriquer un hamecon OU Chercher des secrets"
      else if pp=S(PerteTerres) || pp=Survie then "Interrompre les complots"
      else maitreEspion suite
let rec intrigue p =
  match p with
  | [] -> "Influencer vassal puissant non intimidé non factiable PUIS vassal puissant intimidé non factiable PUIS vassal non intimidé non factiable PUIS vassal intimidé non factiable PUIS allié PUIS médecin PUIS conseiller religieux"
  | pp :: suite ->
      if pp=S(VassalAInfluencer) then "l'Influencer" 
      else if pp=S(PerteTerres) then "Séduire SINON " ^ intrigue suite
      else intrigue suite

let rec decision p =
  match p with
  | [] -> "points d'expérience PUIS renommée PUIS artefact PUIS redoutabilité PUIS vassal non factiable PUIS éviter rivalité PUIS piété PUIS prestige PUIS hamecon PUIS recruter PUIS revenu"
  | pp :: suite ->
      if pp=S(Controle) then "Martialité PUIS " ^ decision suite
      else if pp=S(DeclarationGuerre) || pp=P(Guerre) then "Prouesse PUIS Martialité PUIS emprisonner si Sombres connaissances PUIS " ^ decision suite
      else if pp=S(VassalAInfluencer) then "influence visée PUIS Politique PUIS Intrigue PUIS emprisonner si Sombres connaissances PUIS " ^ decision suite
      else if pp=S(EtrangerHamecon) || pp=S(VassalHamecon) then "hameçon visé PUIS Intrigue PUIS emprisonner si Sombres connaissances PUIS " ^ decision suite
      else if pp=S(Chevalier) then "recruter PUIS Martialité PUIS emprisonner PUIS " ^ decision suite
      else if pp=S(PerteTerres) then "culture PUIS Erudition PUIS ait enfant PUIS " ^ decision suite
      else if pp=S(Revenu) then "revenu PUIS Intendant PUIS emprisonner PUIS hameçon si paiement PUIS " ^ decision suite 
      else if pp=Survie then "santé PUIS perte stress PUIS " ^ decision suite 
      else decision suite

let p = prios [ Guerre ] [ Revenu ; VassalAInfluencer ; VassalHamecon  ] 1
let militaire = militaire p
let conseilConjoint = conjoint p
let conseilReligieux = conseillerReligieux p
let conseillerChancelier = chancelier p
let conseillerMarechal = marechal p
let conseillerIntendant = intendant p
let conseillerMaitreEspion = maitreEspion p
let intrigue = intrigue p
let decision = decision p