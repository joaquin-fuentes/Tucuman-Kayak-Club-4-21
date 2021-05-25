let animado = document.querySelectorAll(".animado")
let animadoHeaderIzquierda = document.querySelectorAll(".animadoHeaderIzquierda")
let animadoHeaderDerecha = document.querySelectorAll(".animadoHeaderDerecha")
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
    for(let i = 0; i < animadoHeaderIzquierda.length; i++){
        if(animadoHeaderIzquierda[i]){
            animadoHeaderIzquierda[i].style.opacity= 1
        }
    }
}
function mostrarHeaderh2(){
    for(let i = 0; i < animadoHeaderDerecha.length; i++){
        if(animadoHeaderDerecha[i]){
            animadoHeaderDerecha[i].style.opacity= 1
        }
    }
}

window.addEventListener("scroll", mostrarScroll)
window.addEventListener("load", mostrarHeader)
window.addEventListener("load", mostrarHeaderh1)
window.addEventListener("load", mostrarHeaderh2)