let bombRow = Math.floor(4*Math.random());
let bombColumn = Math.floor(4*Math.random());
let bombe = "tile-"+bombRow+"-"+bombColumn;

let essais = 0;

console.log(('ATTENTION ! IL Y A UNE BOMBE DANS LA CASE '+bombRow+"-"+bombColumn));

function doClick(tile){
	let htmlessai = document.querySelector("#essais");
	
	if (tile === bombe) {
		if (htmlessai.innerHTML  !== essais + " Essai") {
			console.log("T'AS LA BOMBE ! SORT ! SORT !");
			ajoutessai();
			htmlessai.innerHTML = essais + " Essai";
			document.querySelector("#"+tile).style.backgroundColor = "green";
		}
	}
	
	if (tile !== bombe) {
		if (htmlessai.innerHTML  !== essais + " Essai" && document.querySelector("#"+tile).style.backgroundColor !== "crimson") {
			console.log("La bombe est dans un autre château");
			ajoutessai();
			document.querySelector("#"+tile).style.backgroundColor = "crimson";
		}
	}
}

function ajoutessai() {
	essais++;
}