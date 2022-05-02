/*
item=document.images

for (let i of item)
    i.src="sinimagen.jpg"
    */

const encabezado = document.getElementById ("formulario")
console.log(encabezado)
console.log(encabezado.innerHTML)
console.log(encabezado.textContent)

encabezado.innerHTML = "Barra de busqueda"
encabezado.style.color = "grey"

encabezado.classList.add (`item`)
const nav = document.getElementsByClassName (`nav`)
console.log (nav)
const enlace = document.createElement(`a`)
enlace.textContent = "Nuevo"
enlace.href= "/nuevo/enlace.html"
enlace.classList.add(`a`)
nav[0].appendChild (enlace)