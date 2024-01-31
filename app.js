/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let cadena;
document.getElementById("boton-copiar").style.display = "none";
document.getElementById("texto-mostrar").style.display = "none";
document.getElementById("texto-advertir").style.display = "none";

function validarTexto(textarea) {
    let texto = textarea.value;

    //Remover acentos y convertir a minúsculas
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    textarea.value = texto;
}

//Comportamiento del boton de Encriptar
function encriptar() {
    cadena = document.getElementById("texto-encriptar").value; //Obtener la cadena de texto del textarea

    //Verificar si el textarea esta vacio
    if (cadena.trim() === "") {
        document.getElementById("texto-advertir").style.display = "block";
        return; //Stop
    }

    cadena = cadena.replace(/e/g, 'enter');
    cadena = cadena.replace(/i/g, 'imes');
    cadena = cadena.replace(/a/g, 'ai');
    cadena = cadena.replace(/o/g, 'ober');
    cadena = cadena.replace(/u/g, 'ufat');

    mostrarTexto('#texto-mostrar', cadena); //Mostramos el texto encriptado
}

//Comportamiento del boton de Desencriptar
function desencriptar() {
    cadena = document.getElementById("texto-encriptar").value; //Obtener la cadena de texto del textarea

    //Verificar si el textarea esta vacio
    if (cadena.trim() === "") {
        document.getElementById("texto-advertir").style.display = "block";
        return; //Stop
    }

    cadena = cadena.replace(/enter/g, 'e');
    cadena = cadena.replace(/imes/g, 'i');
    cadena = cadena.replace(/ai/g, 'a');
    cadena = cadena.replace(/ober/g, 'o');
    cadena = cadena.replace(/ufat/g, 'u');

    mostrarTexto('#texto-mostrar', cadena); //Mostramos el texto desencriptado
}

//Comportamiento del boton de Copiar
function copiar() {
    let textarea = document.getElementById("texto-mostrar");
    let textoCopiar = textarea.value;

    navigator.clipboard.writeText(textoCopiar);
    textarea.select();
}

//Muestra el texto encriptado
function mostrarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    mensajeEncontrado();
}

//Oculta la imagen de 'texto no encontrado'
function mensajeEncontrado() {
    document.getElementById("texto-mostrar").style.display = "block";
    document.getElementById("boton-copiar").style.display = "block";

    document.getElementById("texto-advertir").style.display = "none";
    document.getElementById("personaje").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("texto").style.display = "none";
}



