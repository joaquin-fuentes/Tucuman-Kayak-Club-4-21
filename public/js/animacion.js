let animado = document.querySelectorAll(".animado")
let animadoHeaderIzquierda = document.querySelector(".animadoHeaderIzquierda")
let animadoHeaderDerecha = document.querySelector(".animadoHeaderDerecha")
let animadoFijo = document.querySelectorAll(".animadoFijo")

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop
    for(let i = 0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity= 1
        }
    }
}
function mostrarHeader(){
    for(let i = 0; i < animadoFijo.length; i++){
        if(animadoFijo[i]){
            animadoFijo[i].style.opacity= 1
        }
    }
}

function mostrarHeaderh1(){
        if(animadoHeaderIzquierda){
            animadoHeaderIzquierda.style.opacity= 1
        }
}
function mostrarHeaderh2(){
        if(animadoHeaderDerecha){
            animadoHeaderDerecha.style.opacity= 1
        }
}

window.addEventListener("scroll", mostrarScroll)
window.addEventListener("load", mostrarHeader)
window.addEventListener("load", mostrarHeaderh1)
window.addEventListener("load", mostrarHeaderh2)