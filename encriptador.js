// Descripción: Archivo JS que contiene las funciones necesarias para encriptar y desencriptar un texto.
document.addEventListener('DOMContentLoaded', function(){
    actualizarResultado('');
});
function encriptador(texto){ //Función que encripta el texto
    // Usar marcadores temporales
    texto = texto.replace(/a/g, 'tmpA');
    texto = texto.replace(/i/g, 'tmpI');
    // Realizar los reemplazos que no causan conflictos
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    // Reemplazar los marcadores temporales por los valores finales
    texto = texto.replace(/tmpA/g, 'ai');
    texto = texto.replace(/tmpI/g, 'imes');
    return texto;
}

function desencriptador(texto){ //Función que desencripta el texto
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}

function encriptarTexto(){
    let texto = document.getElementById('campoTexto').value;
    if(validadorIntento() === false){
        return;
    }else{
        document.getElementById('resultadoTexto').textContent = ""; // Limpia el resultado al inicio
        if(texto.trim() === "") { // Verifica si el texto está vacío o solo tiene espacios
            document.getElementById('imagenVacia').style.display = 'block';
            document.getElementById('textoAdicional1').style.display = 'block';
            document.getElementById('textoAdicional2').style.display = 'block';
            document.getElementById('resultadoTexto').textContent = ""; // Limpia el resultado anterior
        } else {
            texto = encriptador(texto);
            document.getElementById('resultadoTexto').textContent = texto;
            document.getElementById('imagenVacia').style.display = 'none';
            document.getElementById('textoAdicional1').style.display = 'none';
            document.getElementById('textoAdicional2').style.display = 'none';
        }
        actualizarResultado(texto); // Asegúrate de que esta función maneje correctamente el caso de texto vacío
    }
}

function desencriptarTexto(){
    let texto = document.getElementById('campoTexto').value;
    if(validadorIntento() === false){
        return;
    }else{
        if(texto.trim() === "") { // Verifica si el texto está vacío o solo tiene espacios
            document.getElementById('imagenVacia').style.display = 'block';
            document.getElementById('textoAdicional1').style.display = 'block';
            document.getElementById('textoAdicional2').style.display = 'block';
            document.getElementById('resultadoTexto').textContent = ""; // Limpia el resultado anterior
        } else {
            texto = desencriptador(texto);
            document.getElementById('resultadoTexto').textContent = texto;
            document.getElementById('imagenVacia').style.display = 'none';
            document.getElementById('textoAdicional1').style.display = 'none';
            document.getElementById('textoAdicional2').style.display = 'none';
        }
        actualizarResultado(texto); 
    }
}

function validadorIntento(){ //Función que se asegura de que el texto introducido sea válido
    let texto = document.getElementById('campoTexto').value;
    let expresion = /^[a-z0-9\s!\"$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; //Expresión regular que permite letras minúsculas, números y caracteres especiales, más no permite mayúsculas 
    //ni acentos
    if(!expresion.test(texto)){
        //Si el texto no es válido, muestra un mensaje de alerta
        alert('Por favor, introduce solo letras minúsculas y espacios.');
    }
    return expresion.test(texto);
}

function copiarResultado(){
    if(document.getElementById('resultadoTexto').textContent === ""){ // Verifica si el resultado está vacío
        alert('No hay texto para copiar.');
        return;
    } else {
        let resultado = document.getElementById('resultadoTexto').textContent;
        navigator.clipboard.writeText(resultado);
        alert('Texto copiado al portapapeles.');
    }
}

function actualizarResultado(texto) {
    const resultado = document.getElementById('resultadoTexto');
    const imagenVacia = document.getElementById('imagenVacia');
    const textoAdicional1 = document.getElementById('textoAdicional1');
    const textoAdicional2 = document.getElementById('textoAdicional2');
    if (texto === "") {
        // Si no hay texto, muestra la imagen y los textos adicionales, y oculta el botón de copiar
        imagenVacia.style.display = 'block';
        textoAdicional1.style.display = 'block';
        textoAdicional2.style.display = 'block';
        document.getElementById('botonCopiar').style.display = 'none';
    } else {
        // Si hay texto, oculta la imagen y los textos adicionales, y muestra el botón de copiar
        imagenVacia.style.display = 'none';
        textoAdicional1.style.display = 'none';
        textoAdicional2.style.display = 'none';
        document.getElementById('botonCopiar').style.display = 'block';
        // Asegúrate de actualizar el contenido de 'resultado' con el texto proporcionado
        resultado.textContent = texto;
    }
}
