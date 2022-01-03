let cartes = ['1clubs.svg','1hearts.svg','5diamonds.svg','7hearts.svg','Jackdiamonds.svg','Kingclubs.svg','Kingspades.svg','Queenspades.svg','1clubs.svg','1hearts.svg','5diamonds.svg','7hearts.svg','Jackdiamonds.svg','Kingclubs.svg','Kingspades.svg','Queenspades.svg'];
let cartesmelange = [];

let memoire = 1;

while (cartes.length > 0) {
    let random = Math.floor(Math.random()*cartes.length);
    cartesmelange.push(cartes.splice(random, 1));
}

for(let i = 0 ; i < 16 ; i++){
    document.getElementsByClassName('doscarte')[i].src = "cartes/"+cartesmelange[i];
}

document.querySelector('#commencer').addEventListener("click",debutpartie);

function debutpartie(){
    for(let i = 0 ; i < 16 ; i++){
        document.getElementsByClassName('doscarte')[i].src = "cartes/cardback.svg";
        document.getElementsByClassName('doscarte')[i].addEventListener('click',chose);
    }
}

function chose(e){
    e.target.src = "cartes/"+cartesmelange[e.target.attributes.value.value];
    setTimeout(function() {
        console.log('Attend');
        console.log(e.target.src);
        console.log("memoire : "+memoire.src);
        if (memoire == 1) {
            memoire = e.target;
            console.log(memoire);
        }
        
        if (memoire !== 1) {
            if(memoire.src !== e.target.src){
                memoire.src = "cartes/cardback.svg";
                e.target.src = "cartes/cardback.svg";
                return;
            }
            memoire = 1;
        }
    
       }, 3000);
}