document.addEventListener('DOMContentLoaded', function() {
  const contenedorChiste = document.getElementById('contenedorChiste');
  const botonGenerarChiste = document.getElementById('botonGenerarChiste');
  const botonMostrarRemate = document.getElementById('botonMostrarRemate');

  botonMostrarRemate.style.display = 'none';

  const url = 'https://v2.jokeapi.dev/joke/Programming?lang=es';

function obtenerChiste() {
    contenedorChiste.innerHTML = '<p class="cargando">Cargando chiste...</p>';
      
    botonMostrarRemate.style.display = 'none';
      
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            contenedorChiste.innerHTML = '';
            
            if (datos.type === 'single') {
                const elementoChiste = document.createElement('p');
                elementoChiste.className = 'chiste';
                elementoChiste.textContent = datos.joke;
                contenedorChiste.appendChild(elementoChiste);
            } 
            else if (datos.type === 'twopart') {
                const elementoPreparacion = document.createElement('p');
                elementoPreparacion.className = 'preparacion';
                elementoPreparacion.textContent = datos.setup;
                contenedorChiste.appendChild(elementoPreparacion);

                const elementoRemate = document.createElement('p');
                elementoRemate.className = 'remate';
                elementoRemate.textContent = datos.delivery;
                elementoRemate.id = 'textoRemate';
                contenedorChiste.appendChild(elementoRemate);
                
                botonMostrarRemate.style.display = 'block';
            }
        })
}

function mostrarRemate() {
    const textoRemate = document.getElementById('textoRemate');
    if (textoRemate) {
        textoRemate.style.display = 'block';
        botonMostrarRemate.style.display = 'none';
    }
}

botonGenerarChiste.addEventListener('click', obtenerChiste);
botonMostrarRemate.addEventListener('click', mostrarRemate);
});