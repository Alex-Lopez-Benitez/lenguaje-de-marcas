const caja = document.querySelector(".caja");
const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde")
const escudo = document.getElementById("escudo");
const naranja = document.getElementById("naranja");
const amarillo = document.getElementById("amarillo");
const morado = document.getElementById("morado");



caja.addEventListener("click", function() {
    let valorActual = parseInt(rojo.textContent, 10) || 0;
    rojo.textContent = valorActual + 1;
});

caja.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 

    
    let valorActual = parseInt(azul.textContent, 10) || 0;
    azul.textContent = valorActual + 1;
});

escudo.addEventListener("mouseover", function() {
    let valorActual = parseInt(verde.textContent, 10) || 0;
    verde.textContent = valorActual + 1;
});

document.addEventListener("keydown", function() {
    let valorActual = parseInt(naranja.textContent, 10) || 0;
    naranja.textContent = valorActual + 1;
});

document.addEventListener("keydown", function(event) {
    amarillo.textContent = event.key;

    if (event.key.toLowerCase() === "g") {
        let valorActual = parseInt(morado.textContent, 10) || 0;
        morado.textContent = valorActual + 1;
    }
});

let elementCount = 0;

document.getElementById('createBtn').addEventListener('click', function() {
    elementCount++;
    
    const li = document.createElement('li');
    li.className = 'element';
    li.id = 'element' + elementCount;
    li.textContent = 'Este es el elemento ' + elementCount;
    
    document.getElementById('lista').appendChild(li);
});

let user = {
    nombre: "Roberto",
    apellido: "Heras",
    edad: 35,
    aficiones: ["escalada","sushi","papiroflexia"]
};

function createCard(user) {
    const card = `
        <div class="card">
            <div class="name">${user.nombre} ${user.apellido}</div>
            <div class="age">Edad: ${user.edad} años</div>
            <div class="hobbies-title">Aficiones</div>
            <div class="hobbies">
                ${user.aficiones.map(hobby => 
                    `<span class="hobby">${hobby}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('cardContainer').innerHTML = card;
}
createCard(user);

