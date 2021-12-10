////////////////////////////////////Randomisation du contenu principal///////////////////////////////////
let poolimpair = [1,3,5,7];   //Enfants Impair
let poolpair = [2,4,6,8];     //Enfants Pair

function randomimpair() {
      for (let j = 2; j < 9; j+=2) {
                  let index =  Math.floor(Math.random() * poolimpair.length);
                  document.querySelector("#droite").children[j].style.order = poolimpair[index];
                  poolimpair.splice(index, 1);
      }
}

function randompair() {
      for (let j = 3; j < 10; j+=2) {
            let index =  Math.floor(Math.random() * poolpair.length);
            document.querySelector("#droite").children[j].style.order = poolpair[index];
            poolpair.splice(index, 1);
      }
}

randomimpair();
randompair();
/////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////Changement de Personnes/////////////////////////////////////////
let moi = { 
      name : "moi",
      img : "file:///Users/gauthier/Documents/Codes/bahcestmoi.jpeg",
      info1 : "4Ter Avenue Victor Le Gorgeu",
      info2 : "gauthierantoine42@gmail.com",
      info3 : "06 02 50 83 42"
};

let chouettes = { 
      name : "chouettes",
      img : "file:///Users/gauthier/Documents/Codes/encoreunechouette.png",
      info1 : "Fotherdale, Angleterre",
      info2 : "Chouettes Effraies",
      info3 : "Finn à gauche, Gylfie à droite"
};

let anakin = { 
      name : "anakin",
      img : "file:///Users/gauthier/Documents/Codes/index.jpg",
      info1 : "Résidence Principale : Temple Jedi de Coruscant",
      info2 : "Maître Jedi Officiel",
      info3 : "Tueur du Compte Doku"
};

let balance = 0;
let personnes = [chouettes, anakin, moi];

function changepersonne() {
      let i = 2;  //Les éléments que je veux changer sont le 2, 3 et 4 ième enfant donc i va de 2 à 4
      document.querySelector("#moi").src = personnes[balance].img;
      document.querySelector("#coordonnées").children[i].innerText = personnes[balance].info1;
      i+=1;
      document.querySelector("#coordonnées").children[i].innerText = personnes[balance].info2;
      i+=1;
      document.querySelector("#coordonnées").children[i].innerText = personnes[balance].info3;
      balance = (balance+1) % personnes.length;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////Affichage\Disparition des descriptions///////////////////////////////////
function indexeuler() {
      document.querySelector("#eulerdesc").style.display = "inherit";
}

function indexccna1() {
      document.querySelector("#ccna1desc").style.display = "inherit";
}

function fermerdescription() {
      for (let i = 0; i < document.getElementsByClassName('description').length; i++) {
            document.getElementsByClassName('description')[i].style.display = "none";
      }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////ECOUTEUR D'EVENEMENT////////////////////////////////////////////
document.querySelector("#moi").addEventListener('click',changepersonne);
document.querySelector("#euler").addEventListener('click',indexeuler);
document.querySelector("#ccna1").addEventListener('click',indexccna1);
for (let i = 0; i < document.getElementsByClassName('description').length; i++) {
      document.getElementsByClassName('description')[i].addEventListener('click',fermerdescription);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////