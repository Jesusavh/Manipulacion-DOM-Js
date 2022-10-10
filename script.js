
//Leyendo HTML desde JS:

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

 // h1.innerHTML = 'Patito'; // Convierte a HTML

 // h1.innerText = 'Patito'; // Convierte a Texto

// h1.getAttribute('pantalla'); Consigue atributo

 // h1.setAttribute('class', 'rojo'); suma atributo

 // h1.classList.add('rojo'); suma atributo especifico con clase

 // h1.classList.toggle('verde');

 // h1.classList.contains('verde'); devuielve true o false si lo contiene

/* input.value = "123";

 const img = document.createElement('img');

img.setAttribute('src', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/02_¿Qué-puedo-hacer-si-mi-gato-está-triste-.png')
console.log(img);

pid.append(img); */


