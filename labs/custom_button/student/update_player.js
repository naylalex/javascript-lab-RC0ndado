/* LAB: Asigna a la variable 'para' una referencia al elemento p por medio de document.querySelector() */

/* LAB: Añade un event listener para el evento click asociado a la función updateName */

/* LAB: Implementa la función updateName() considerando:
Presentación de un diálogo por medio de la función prompt()
Asignación del contenido de texto del párrafo por medio del atributo textContent de la variable para
para.textContent = 'Some string'
*/
const nombre = document.querySelector('p');

nombre.addEventListener('click', updateName);

function updateName() {
    console.log("My name is Ricardo Condado");
    //var namelo=document.getElementById(htmlID);
    const nombres = prompt('Nombre: ');             // Este es como un tipo input.
    nombre.textContent = `Nombre 1: ${nombres}`; 
}
