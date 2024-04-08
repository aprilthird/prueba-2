'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

document.addEventListener("DOMContentLoaded", () => {
    let test = document.createElement("ul", { id: "pruebaid" });
    let mainContainer = document.getElementById("main_container");
    mainContainer.appendChild(test);
    to_do.forEach((element, index) => {
        let cbh = GI.createElement("div");
        cbh.appendChild(document.createTextNode("prueba"));
        let cbx = GI.createElement("input");
        cbx.type = "checkbox";
        cbx.name = "cbx" + index;
        cbx.value = element;
        cbx.appendChild(cbh);
        mainContainer.appendChild(cbx);
    });
});