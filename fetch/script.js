window.onload = function () {
    descargarDatosPaises();
    descargarUsuarios();
}

async function descargarDatosPaises() {
    let respuesta = await fetch("https://countriesnow.space/api/v0.1/countries/capital");
    console.log(respuesta); 
    let datos = await respuesta.json();
    
    const tabla = document.createElement('table');
    
    const encabezado = document.createElement('thead');
    const filaEncabezado = document.createElement('tr');
    
    const thPais = document.createElement('th');
    thPais.textContent = 'País';
    
    const thCapital = document.createElement('th');
    thCapital.textContent = 'Capital';
    
    filaEncabezado.appendChild(thPais);
    filaEncabezado.appendChild(thCapital);
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
    
    const cuerpoTabla = document.createElement('tbody');
    
    for (let pais of datos.data) {
        console.log(`País: ${pais.name}, capital: ${pais.capital}`);
        
        const fila = document.createElement('tr');
        
        const celdaPais = document.createElement('td');
        celdaPais.textContent = pais.name;
        
        const celdaCapital = document.createElement('td');
        celdaCapital.textContent = pais.capital;
        
        fila.appendChild(celdaPais);
        fila.appendChild(celdaCapital);
        cuerpoTabla.appendChild(fila);
    }
    
    tabla.appendChild(cuerpoTabla);
    document.body.appendChild(tabla);
}

async function descargarUsuarios() {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    let data = await response.json();
    for (let usuario of data) {
        console.log(`Usuario: ${usuario.name}, correo: ${usuario.email}`);
    }
}