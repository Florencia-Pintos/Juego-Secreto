let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //para buenas practicas de programacion colocar siempre el return
}
//declaración y definir la función  
//en HTML ejecutamos la funcion (Encapsulamiento de una accion que queremos que haga) 

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log (intentos)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute ('disabled')
    } else {
        //El ususario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector ('#valorUsuario').value = '';
}

function generaNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista hacemos una operacion
    //console.log (`Numero Gernerado: ${numeroGenerado}`)

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles')

    } else{
        //si el numero generado esta en la lista
       if (listaNumerosSorteados.includes (numeroGenerado)) {
        return generaNumeroSecreto();
       } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
       }
    }
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del número secreto!');
    asignarTextoElemento ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    console.log (numeroSecreto)
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIniciales();
