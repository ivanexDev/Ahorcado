const botonEnviar = document.getElementById("enviar");
const imagen = document.getElementById("colgado");
let mensaje = document.getElementById("errores");
let winLose = document.getElementById("win-lose");
let palabraPantalla = document.getElementById("palabra");
let errores = 0;
let winner = false;

botonEnviar.addEventListener("click", adivinar);

let palabraIncognita = palabraAlAzar();
let palabraGuion = palabraConGuiones(palabraIncognita);
console.log(palabraIncognita);
console.log(palabraGuion);

window.onload = function () {
	palabraPantalla.innerHTML = palabraGuion.join(" ");
	imagen.innerHTML = `<img src="img/colgado00.jpg" alt="colgado"></img>`;
};

function palabraAlAzar() {
	const palabras = ["perro", "gato", "raton", "caballo", "paloma", "cerdo"];
	let palabraIncognita = palabras[Math.floor(Math.random() * palabras.length)];
	let palabraArray = palabraIncognita.split("");
	return palabraArray;
}

function palabraConGuiones(a) {
	let guiones = new Array(a.length).fill("_");
	return guiones;
}

function adivinar() {
	let letra = document.getElementById("letra").value;
	console.log(errores);

	// si no se ingresa una letra
	if (letra == "") {
		mensaje.innerHTML = "Debes ingresar una letra";
	}
	// si se ingresa algo.. comparar
	if (letra != "") {
		// mensaje.innerHTML = "";
		comparar(letra);
		document.getElementById("letra").value = "";
	} else {
		return;
	}
}

function comparar(letra) {
	let error = 0;
	for (let i = 0; i < palabraIncognita.length; i++) {
		if (letra.toLowerCase() === palabraIncognita[i]) {
			palabraGuion[i] = letra.toLowerCase();
			console.log(palabraGuion);
		} else {
			error++;
			if (error == palabraIncognita.length && !winner) {
				errores++;
				if (errores >= 4) {
					imagen.innerHTML = `<img src="img/colgado04.jpg" alt="colgado"></img>`;
					mensaje.innerHTML = `llevas 4 errores`;
					winLose.innerHTML = `Has perdido`;
					console.log("has perdido");
				} else {
					mensaje.innerHTML = `llevas ${errores} errores`;
					imagen.innerHTML = `<img src="img/colgado0${errores}.jpg" alt="colgado"></img>`;
				}
			}
		}
	}
	palabraPantalla.innerHTML = palabraGuion.join(" ");

	if (palabraGuion.join() === palabraIncognita.join()) {
		winner = true;
		winLose.innerHTML = "Has Ganado!";
	}
}
