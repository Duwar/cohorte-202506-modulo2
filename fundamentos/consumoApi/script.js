//Estandar -> ECMAScript6 - ECMAS6 - 2015
//Manejo de errores - try catch

const cargarInformacion = async () => {
    try {
        const respuesta = await fetch('../json/persona.json');
        const persona = await respuesta.json();
        console.log('persona obtenida', persona)
        mostarInfo(persona);
    } catch (error) {
        console.log('Hubo un error inesperado', error);
        alert('Hubo un error inesperado, intente más tarde');
    }

}

const cargarApi = async () => {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemones = await respuesta.json();
        console.log('Pokemones', pokemones)

    } catch (error) {
        console.log('Hubo un error inesperado', error);
        alert('Hubo un error inesperado, intente más tarde');
    }
}

const mostarInfo = (persona) => {
    console.log('Vamos a contruir un HTML')

    const contenedor = document.getElementById('datos');

    contenedor.innerHTML = `
        <h2 class="miNombre">${persona.name}</h2>
        <p class="miEdad">Edad: ${persona.edad}</p>
        <div class="misHobbies">
            <h3>Hobbies</h3>
            <li>${persona.hobbies[0]}</li>
            <li>${persona.hobbies[1]}</li>
            <li>${persona.hobbies[2]}</li>
        </div>
    `

}



/*
const btnInfo = document.getElementById('btn-info')
btnInfo.addEventListener('click',cargarInformacion)
*/