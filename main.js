/*------------ ALEATORIEDAD ------------*/
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min)    
}  


/*------------ ARRAY MOKEPONES Y PODERES ------------*/
const mokepones = ['hipodoge', 'capipepo', 'ratigueya']
const poderes = ['fuego', 'agua', 'tierra']


window.addEventListener('load', iniciarJuego)

function iniciarJuego(){

    /*------------ BOTON SELECCIONAR ------------*/
    const botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)

    /*------------ SELECCIONAR ATAQUE ------------*/

    hideSeleccionarAtaque(hide = 'none')

    /*------------ MOSTRAR MENSAJES DE COMBATE------------*/

    hideMensajes(hide = 'none')

    /*------------ BOTONES MOKEPON ALIADO ------------*/
    const botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    const botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    const botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    
    /*------------ BOTON REINICIAR ------------*/
    const seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'

    const reiniciar = document.getElementById('boton-reiniciar')
    reiniciar.addEventListener('click', reset)
}    

function hideSeleccionarAtaque(hide){
    let seleccionarAtaque = document.getElementById('seleccionar-ataque')
    seleccionarAtaque.style.display = hide
}

function hideMensajes (hide){
    let mensajes = document.getElementById('mensajes')
    mensajes.style.display = hide
}

    /*------------ SELECCIONAR MOKEPON ALIADO ------------*/

function seleccionarMascotaJugador(){

    const botonMascota = document.getElementById('seleccionar-mascota')
    botonMascota.style.display = 'none'

    hideSeleccionarAtaque(hide = 'block')

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
        
    let spanMascotaJugador = document.getElementById('mascota-jugador')
        
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'hipodoge'
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'ratigueya'
    } else {
        alert('por favor, selecciona una mascota')
    }        
        
    seleccionarMascotaEnemigo()
}        


     /*------------ ATAQUES MOKEPON ALIADO ------------*/
let ataqueJugador = '';    

function ataqueFuego(){
    ataqueJugador = 'fuego'
    ataqueMokeponEnemy()
}        

function ataqueAgua(){
    ataqueJugador = 'agua'
    ataqueMokeponEnemy()
}        

function ataqueTierra(){
    ataqueJugador = 'tierra'
    ataqueMokeponEnemy()
}    


    /*------------ SELECCIONAR MOKEPON ENEMIGO ------------*/
function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let mascotaEnemigo = aleatorio(0,2);
    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemigo];
    
}    


    /*------------ ATAQUES MOKEPON ENEMIGO ------------*/

let ataqueEnemigo = '';

function ataqueMokeponEnemy(){  
    let poderAleatorio = aleatorio (0,2);
    ataqueEnemigo = poderes[poderAleatorio]
    whoWins()
    
}      

function crearMensaje(resultado){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mokepon atacó con ' + ataqueJugador + ', el mokepon enemigo atacó con ' + ataqueEnemigo + '. ' + resultado + '.'

    let sectionMensajes = document.getElementById('mensajes')
    sectionMensajes.appendChild(parrafo)
}

    /*------------ CONTADOR DE VIDAS ------------*/
let vidaAliado = 3
let vidaEnemigo = 3

    /*------------ ¿QUIEN GANÓ? ------------*/

function whoWins(){
    let spanVidaAliado = document.getElementById('vida-aliado')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')

    hideMensajes(hide = 'block')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('empate')
    } else if (ataqueJugador == 'fuego' && ataqueEnemigo == 'tierra' || ataqueJugador == 'agua' && ataqueEnemigo == 'fuego' || ataqueJugador == 'agua' && ataqueEnemigo == 'tierra' ){
        crearMensaje('ganaste')
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else {
        crearMensaje('perdiste')
        vidaAliado--
        spanVidaAliado.innerHTML = vidaAliado
    }
    revisarVidas()
}

    /*------------ BOTON REINICIAR ------------*/

function crearMensajeFinal(resultadoFinal){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    
    let sectionMensajes = document.getElementById('mensajes')
    sectionMensajes.appendChild(parrafo)

    const botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    const botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    const botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    const seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'block'    
}


    /*------------ REVISAR VIDAS ------------*/

function revisarVidas(){
    if(vidaAliado == 0 ){
       crearMensajeFinal('Lo siento, perdiste 😪')
    } else if (vidaEnemigo == 0){
        crearMensajeFinal('Felicitaciones, ganaste 🎉')
    }   
}

    /*------------ BOTON REINICIAR ------------*/
function reset(){
    location.reload()
}