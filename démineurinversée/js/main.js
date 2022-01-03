let bombRow = Math.floor(4*Math.random());
let bombColumn = Math.floor(4*Math.random());
let bombe = "tile-"+bombRow+"-"+bombColumn;

let essais = 0;

console.log(('ATTENTION ! IL Y A UNE BOMBE DANS LA CASE '+bombRow+"-"+bombColumn));

function doClick(tile){
	ajoutessai();

	if (tile === bombe) {
		console.log("T'AS LA BOMBE ! SORT ! SORT !");
		
		let htmlessai = document.querySelector("#essais");
		
		htmlessai.innerHTML = essais + " Essai";
	}

	if (tile !== bombe) {
		console.log("La bombe est dans un autre château");
	}
}

function ajoutessai() {
	essais++;
}	