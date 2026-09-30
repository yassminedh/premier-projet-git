const prompt =require("prompt-sync")();
const candidats = [
    {
    Cin : "JY52309",
    Nom : "Derham",
    Prenom : "Yassmine",
    PartiPolitique : "fleur",
    Age: 20,
    Electeurs: []
},
  {
    Cin : "ABC123",
    Nom : "Adar",
    Prenom : "Ahlam",
    PartiPolitique : "lio",
    Age: 27,
    Electeurs: []
},
  {
    Cin : "AAA111",
    Nom : "Halafat",
    Prenom : "Ikram",
    PartiPolitique : "palme",
    Age: 35,
    Electeurs: []
},
  {
    Cin : "BBB222",
    Nom : "Bouy",
    Prenom : "Karima",
    PartiPolitique : "Null",
    Age: 53,
    Electeurs: []
},
];
function AjouterNc(){
    const cin = prompt("Entrer CIN : ");
    for (let i = 0; i <candidats.length; i++){
        if (candidats[i].Cin === cin){
            console.log("Cette CIN deja exist!");
            return;
        }
    }
    let nom = prompt("Entrer le NOM : ");
    let prenom = prompt("Entrer le PRENOM : ");
    let partiPolitique = prompt("Entrer le PartiPlitique : ");
    let age = Number(prompt("Entrer l` AGE : "));
    let candidat = {
    Cin : cin,
    Nom : nom,
    Prenom : prenom,
    PartiPolitique : partiPolitique,
    Age: age,
    Electeurs: []
    }
    candidats.push(candidat);
    console.log("-----------------------------------");
    console.log("-----------------------------------");
    console.log("Le candidat est ajouter et succèe!");
    console.log("-----------------------------------");  
};
function AjouterPc (){
    const NouveauC = Number(prompt("Entrer le nombre de candidat : "));
    for(let i = 0; i < NouveauC; i++){
        const CIN= prompt("Entrer CIN : ");
        let trouve = false;
        for (let j = 0; j< candidats.length; j++){
            if (candidats[j].Cin === CIN){
                trouve = true;
                break;
            }
        }    
            if (trouve === true){
            console.log("Cette CIN deja exist!");
            i--;
        console.log("-----------------------------------");
            continue;
            }
        let nom = prompt("Entrer le NOM : ");
        let prenom = prompt("Entrer le PRENOM : ");
        let partiPolitique = prompt("Entrer le PartiPlitique : ");
        let age = Number(prompt("Entrer l` AGE : "));
        let candidat = {
        Cin : CIN,
        Nom : nom,
        Prenom : prenom,
        PartiPolitique : partiPolitique,
        Age: age,
        Electeurs: []
        }
        console.log("-----------------------------------");
        candidats.push(candidat);
        console.log("-----------------------------------");
        console.log("Le candidat est ajouter et succèe!");
        console.log("-----------------------------------"); 
        }
    return;
};
function AfficherInfoC(candidat) {
    console.log("CIN :"+ candidat.Cin);
    console.log("Nom :"+ candidat.Nom);
    console.log("Prenom :"+ candidat.Prenom );
    console.log("Parti Politique :"+ candidat.PartiPolitique);
    console.log("Age :"+ candidat.Age);
    console.log("Nombre de Votes :"+ candidat.Electeurs.length);
    return;
}
function AfficherLc() {
    if (candidats.length === 0){
        console.log("Aucun candidat!");
    }
    for (let i = 0; i< candidats.length; i++){
    console.log("-----------------------------------");      
    AfficherInfoC(candidats[i]);
    console.log("-----------------------------------");
    }
    console.log("1- Trier les candidats par nombre de votes " );
    console.log("2- Filtrer les condidats par le parti politique");           
    const choix = Number(prompt("Entrer votre choix : "));
    if (choix ===1){
        for (let i = 0; i<candidats.length;i++) {
            for(let j=0;j<candidats.length-i-1;j++){ 
            if (candidats[j].Electeurs.length < candidats[j + 1].Electeurs.length) {
            let nelecteur = candidats[j];
            candidats[j] = candidats[j + 1];
            candidats[j + 1] = nelecteur;
            }       
            }
            console.log("--------------------------------------------");
            AfficherInfoC(candidats[i]);
        } 
        
    } else if(choix === 2) {
    const  partiPOLI = prompt("Entrer le nom de partie polititque : ")
    let trouve = false;
    for (i = 0; i < candidats.length; i++){
        if(candidats[i].PartiPolitique === partiPOLI){
            console.log("----------------------------------------------");
            AfficherInfoC(candidats[i]);
            console.log("----------------------------------------------");
            trouve = true;
        }         
        }
        if (!trouve){
            console.log("Le parti politique n`exist pas!");
        }
    }
};
function Voter() {

    
    const CinElecteur = prompt("Entrer la CIN electeur : ");


    for (i = 0; i < candidats.length; i++){
        for(j = 0; j < candidats[i].Electeurs.length; j++){
        if (candidats[i].Electeurs[j] === CinElecteur){
            console.log("deja vote!");
            return;
        }
        }
    }


    const CinCandidat = prompt("Entrer la CIN candidat : ");

        let trouve = false;
        for (let i = 0; i< candidats.length; i++){
        if (candidats[i].Cin === CinCandidat){
            candidats[i].Electeurs.push(CinElecteur);
            trouve = true;
            break;
        } 
        } 
        if (trouve === true){
            console.log("-----------------------------------------------------------");
            console.log("Votre vote est enregistrer!");
            console.log("-----------------------------------------------------------");
        } else {
            console.log("-----------------------------------------------------------");
            console.log("Le candidat n exist pas!");
            console.log("-----------------------------------------------------------");
        }             
}
function ModifierIc() {
    const Cin=prompt("Entrer le CIN : ");
    let trouve = false;
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].Cin === Cin){
            trouve = true;
    console.log("1- Modifier le parti politique d'un candidat. " );
    console.log("2- Modifier l'âge d'un candidat.");           
    const choix = Number(prompt("Entrer votre choix : "));
    
    if (choix === 1){
    candidats[i].PartiPolitique = prompt("Entrer nouveau parti politique : ");
    console.log("Parti politique modifie!");

    } else if (choix === 2){
    candidats[i].Age = Number(prompt("Entrer nouveau age : "));
    console.log("Age modifie!");
    } else {
        console.log("choix invalide! ");
    }
        break;
    } 
    }
    if (trouve === false){
     console.log("le candidats est introuvable "); 
    }
}
function SupprimerC() {
    let trouve = false;
    const CinSupprimer = prompt("Entrer CIN de candidat supprimer : ");
    for (let i = 0; i < candidats.length; i++){
    if (candidats[i].Cin === CinSupprimer){
        candidats.splice(i,1);
        trouve = true;
        console.log("Le candidat est supprimer");
    } 
    }
    if(trouve === false){
       console.log("candida introuvable!");
    }

}
function RechercherC() {
    const NomR = prompt("Entrer le nom de candidat : ");
    let trouve = false;
    for (let i = 0; i< candidats.length; i++){
        if (candidats[i].Nom === NomR){
        AfficherInfoC(candidats[i]);
        trouve = true;
        } 
        }if (!trouve){
         console.log("Le candidat non introuvable!");
    }
    
}
function Statistique() {
    console.log("-----------------------------------------------------------");
    console.log("---------------Statistiques de l'élection :----------------");
    console.log("-----------------------------------------------------------");
        console.log("Le nombre total de candidats : " + candidats.length);

        let TotalVotes = 0;
        for(let i = 0; i< candidats.length; i++){
        TotalVotes += candidats[i].Electeurs.length;
        } 
        console.log("Le nombre total de votes : " + TotalVotes);

        console.log("Le Top 3 des candidats ayant le plus de votes : "); 
        for (let i = 0; i< 3; i++){
            for (let j = 0; j<candidats.length-i-1; j++ ){
                if (candidats[j].Electeurs.length < candidats[j + 1].Electeurs.length) {
                    let Top3 = candidats[j].Electeurs.length;
                    candidats[j].Electeurs.length = candidats[j + 1].Electeurs.length;
                    candidats[j + 1].Electeurs.length = Top3;
                } 
            }   
        console.log(candidats[i].Nom + " " + candidats[i].Prenom + " " + "->" + " " + candidats[i].Electeurs.length + "votes");
        }


        console.log("Nombre de candidats par parti politique : ");  
        let obj = [];
        for (let i = 0; i < candidats.length; i++) {
        if(obj[candidats[i].PartiPolitique])
        {
        obj[candidats[i].PartiPolitique]++   
        } else {
        obj[candidats[i].PartiPolitique]=1   
        }
    }   
        console.log(obj);
}

    function menu(){
    let choix;
    do {
        console.log(" HELLO! ");
        console.log("1. Ajouter un nouveau candidat ");
        console.log("2. Ajouter plusieurs candidats à la fois ");
        console.log("3. Afficher la liste des candidats ");
        console.log("4. Voter pour un candidat ");
        console.log("5. Modifier les informations d'un candidat ");
        console.log("6. Supprimer un candidat ");
        console.log("7. Rechercher des candidats ");
        console.log("8. Statistiques de l'élection ");
        console.log("0. Quitter");   
    choix = Number(prompt("Entrer votre choix : "));
    switch(choix){
            case 1:
                AjouterNc();
                break;
            case 2:
                AjouterPc();
                break;
            case 3:
                AfficherLc();
                break;
            case 4:
                Voter();
                break;
            case 5:
                ModifierIc();
                break;
            case 6:
                SupprimerC();
                break;
            case 7:
                RechercherC();
                break;
            case 8:
                Statistique();
                break;
            case 0:
                console.log("Quiter!");
                break;
            default:
                console.log("votre choix invalide");
        }
    }while (choix !== 0);
} menu();