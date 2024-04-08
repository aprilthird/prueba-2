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
        let parent = GI.createElement("div");
        let cbx = GI.createElement("input");
        cbx.type = "checkbox";
        cbx.name = "cbx" + index;
        cbx.value = element;
        parent.appendChild(cbx);
        parent.appendChild(document.createTextNode(element));
        cbx.addEventListener("change", (value) => {
            if(value.target.checked) {
                parent.style["text-decoration"] = "line-through";
                parent.style["color"] = "gray";
            } else {
                parent.style["text-decoration"] = "none";
                parent.style["color"] = "black";
            }
        });
        mainContainer.appendChild(parent);
    });
});