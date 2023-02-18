window.onload = function () {
	document.getElementById("palabra").innerHTML = palabraGuion.join(" ");
	document.getElementById(
		"colgado"
	).innerHTML = `<img src="img/colgado00.jpg" alt="colgado"></img>`;
};
var errorGlobal = 0;

function colgando() {
	document.getElementById(
		"colgado"
	).innerHTML = `<img src="img/colgado0${errorGlobal}.jpg" alt="colgado"></img>`;
}

function adivinar() {
	if (errorGlobal >= 3) {
		document.getElementById("errores").innerHTML = "Has Perdido";
		document.getElementById(
			"colgado"
		).innerHTML = `<img src="img/colgado04.jpg" alt="colgado"></img>`;
	} else {
		let letra = document.getElementById("letra").value;
		letra = letra.toLowerCase();
		document.getElementById("letra").value = "";
		let contador = 0;
		let errores = 0;
		while (contador < palabraArray.length) {
			if (letra == palabraArray[contador]) {
				[(palabraGuion[contador] = letra)];
			} else {
				errores++;
				console.log(errores);
			}
			if (errores == palabraArray.length) {
				errorGlobal++;
				document.getElementById("errores").innerHTML =
					"Llevas " + errorGlobal + " Errores";
				colgando();
			}
			contador++;
		}
		document.getElementById("palabra").innerHTML = palabraGuion.join(" ");
		console.log(palabraGuion, palabraArray);
		if (palabraGuion.join("") === palabraArray.join("")) {
			document.getElementById("errores").innerHTML = "¡Has ganado!";
		}
	}
}

// Elige una palabra al azar y separa las letras para transformarla en un Array con el metodo .split()

function palabraIncognita() {
	let palabras = ["perro", "gato", "raton", "caballo", "paloma", "cerdo"];
	let palabraIncognita = palabras[Math.floor(Math.random() * palabras.length)];
	let palabraArray = palabraIncognita.split("");

	return palabraArray;
}

// construye un Array de solo Guiones bajos del mismo tamaño que la plabra a adivinar.

function palabraConGuion(palabraIncognita) {
	// let guiones = [];
	// let contador = 0;
	// while (contador < palabraIncognita.length) {
	// 	guiones.push("_");
	// 	contador++;
	// }

	let guiones = new Array(palabraIncognita.length).fill("_");
	return guiones;
}

let palabraArray = palabraIncognita();
console.log(palabraArray);

let palabraGuion = palabraConGuion(palabraArray);
console.log(palabraGuion);
