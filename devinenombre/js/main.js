console.log("main.js - Chargé");

let target = getRandomInt(0,100) //Numéro entre 0 et 100 exclu
console.log(target);

function getRandomInt(min, max) {
      return Math.floor(((max-min) * Math.random())+min); //On génére un nombre entre 0 et Max-Min et on rajoute min à la fin pour avoir notre minimum

}

function showInputValue() {
      let input = document.querySelector("#deviner");
      console.log(input.value);
}