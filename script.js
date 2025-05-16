let pantalla = document.getElementById('pantalla');

function agregarValor(valor) {
    pantalla.value += valor;
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = 'Error';
    }
}

function borrar() {
    pantalla.value = '';
}
