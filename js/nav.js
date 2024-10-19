let botonInicio = document.querySelector(".inicioButton");
let botonServicio = document.querySelector(".serviciosButton");
let productosButton = document.querySelector(".productosButton");
let nostrosButton = document.querySelector(".nosotrosButton");







botonInicio.addEventListener("click",()=>
{
    window.location.href = "index.html";
})

botonServicio.addEventListener("click",()=>
{
    window.location.href = "servicios.html";
})


productosButton.addEventListener("click",()=>
{
    window.location.href = "productos.html";
})


nostrosButton.addEventListener("click",()=>
{
    window.location.href = "inicio.html";
})