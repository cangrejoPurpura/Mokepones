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

    /*------------ BOTONES MOKEPON ALIADO ------------*/
    const botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    const botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    const botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    
}    


    /*------------ SELECCIONAR MOKEPON ALIADO ------------*/
function seleccionarMascotaJugador(){
    
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
    crearMensaje()
}      

function crearMensaje(){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mokepon atacó con ' + ataqueJugador + ', el mokepon enemigo atacó con ' + ataqueEnemigo + '. PENDIENTE.'
    
    let sectionMensajes = document.getElementById('mensajes')
    sectionMensajes.appendChild(parrafo)
}