
let selectHuesoColoresImg = document.querySelector(".imgProducto")

let selectLeftArrowHuesoColores = document.querySelector(".left-arrow1")
let selectRightArrowHuesoColores = document.querySelector(".right-arrow1")


let selectLeftArrowHeroes = document.querySelector(".left-arrow2")
let selectRightArrowHeroes = document.querySelector(".right-arrow2")


let selectLeftArrowMedallones= document.querySelector(".left-arrow3")
let selectRightArrowMedallones= document.querySelector(".right-arrow3")


let huesosColoresIndex = 0;
let huesosHeroesIndex = 0;
let medallonesIndex = 0;





document.addEventListener("DOMContentLoaded" ,()=>
{
    guardarHuesitosDeColoresEnlocalStorage();
    guardarHuesitosDeSuperHeroesEnlocalStorage();
    guardarMedallones ();

    let arrayHuesosColoresJSON = localStorage.getItem("HuesitosDeColores");
    let arrayHuesosColores = JSON.parse(arrayHuesosColoresJSON); 

    let arrayHuesosHeroesJSON = localStorage.getItem("HuesitosDeSuperHeroe");
    let arrayHuesosHeroes = JSON.parse(arrayHuesosHeroesJSON); 

    let arraymedallonesJSON = localStorage.getItem("medallones");
    let arraymedallones = JSON.parse(arraymedallonesJSON); 

    
selectLeftArrowHuesoColores.addEventListener("click", () => slideShowImageDisplay(arrayHuesosColores, "left", "huesosColores"));
selectRightArrowHuesoColores.addEventListener("click",() => slideShowImageDisplay(arrayHuesosColores, "right", "huesosColores"));

selectLeftArrowHeroes.addEventListener("click", () => slideShowImageDisplay(arrayHuesosHeroes, "left", "huesosHeroes"));
selectRightArrowHeroes.addEventListener("click",() => slideShowImageDisplay(arrayHuesosHeroes, "right", "huesosHeroes"));

selectLeftArrowMedallones.addEventListener("click",() => slideShowImageDisplay(arraymedallones, "left", "medallones"));
selectRightArrowMedallones.addEventListener("click",() => slideShowImageDisplay(arraymedallones, "right", "medallones"));


})


////////////////////////////////////////
///////////////////local storage////////////////////
///////////////////////////////////////
function guardarHuesitosDeSuperHeroesEnlocalStorage()
{
    let huesitosDeSuperHeroes =
    [
        {
          id: 1,
          name: 'hueso-batman',
          description: 'placa en forma de huesito de batman',
          price: 22000.00,
          image: './imagenesProductos/huesosSuperHeroes/batman-removebg-preview.png'
        },
        {
          id: 2,
          name: 'hueso-superMan',
          description: 'placa en forma de huesito de superMan',
          price: 65000.00,
          image: './imagenesProductos/huesosSuperHeroes/superman-removebg-preview.png'
        },
        {
          id: 3,
          name: 'hueso-wonderWoman',
          description: 'placa en forma de huesito de wonderWoman',
          price: 35000.00,
          image: './imagenesProductos/huesosSuperHeroes/wonderwoman-removebg-preview.png'
        },
        {
          id: 4,
          name: 'hueso-hulk',
          description: 'placa en forma de huesito de hulk',
          price: 26000.00,
          image: './imagenesProductos/huesosSuperHeroes/hulck-removebg-preview.png'
        },
        {
          id: 5,
          name: 'medallon-captainAmerica  ',
          description: 'placa en forma de huesito de capitan america',
          price: 25000.00,
          image: './imagenesProductos/huesosSuperHeroes/capitanAmericaRedondo-removebg-preview.png'
        },
        {
          id: 6,
          name: 'collarMuestraHuesitoColores',
          description: 'muestra de collar con placa',
          price: 25000.00,
          image: './imagenesProductos/huesosSuperHeroes/collarMuestra4-removebg-preview.png'
        }
    
    ];
    localStorage.setItem("HuesitosDeSuperHeroe", JSON.stringify(huesitosDeSuperHeroes));
}

function guardarHuesitosDeColoresEnlocalStorage ()
{
    let huesitosDeColores= 
    [
        {
            id: 1,
            name: 'hueso-huella-azul',
            description: 'placa en forma de hueso azul con huella',
            price: 22000.00,
            image: './imagenesProductos/huesosColores/huellaazul-removebg-preview.png'
        },
        {
            id: 2,
            name: 'hueso-huella-dorado',
            description: 'nada',
            price: 65000.00,
            image: './imagenesProductos/huesosColores/huelladorado-removebg-preview.png'
        },
        {
            id: 3,
            name: 'hueso-huella-fucsia',
            description: 'con mucha papa',
            price: 35000.00,
            image: './imagenesProductos/huesosColores/huellafucisa-removebg-preview.png'
        },
        {
            id: 4,
            name: 'hueso-huella-rojo',
            description: 'mixto',
            price: 26000.00,
            image: './imagenesProductos/huesosColores/huellarojo-removebg-preview.png'
        },
        {
            id: 5,
            name: 'hueso-huella-rosa',
            description: 'mixto',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/huellarosada__2_-removebg-preview.png'
        },

        {
            id: 6,
            name: 'hueso-huella-azul',
            description: 'mixto',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/huesoNegro-removebg-preview.png'
        },

        {
            id: 7,
            name: 'hueso-huesito-colores',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/hueso-colores-removebg-preview.png'
        },

        {
            id: 8,
            name: 'hueso-huesito-dorado',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/huesoDorado-removebg-preview.png'
        },

        {
            id: 9,
            name: 'hueso-huesito-rosa',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/huesoDoradoRosa-removebg-preview.png'
        },

        {
            id: 10,
            name: 'hueso-huesito-fucsia',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/huesoFucia-removebg-preview.png'
        },

        {
            id: 11,
            name: 'hueso-huesito-morado',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/placa-de-identificacion-hueso-morada-removebg-preview.png'
        },

        {
            id: 12,
            name: 'collar-muestra-rosa',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/collarMuestra1-removebg-preview.png'
        },


        {
            id: 13,
            name: 'collar-muestra-negro',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/collarMuestra2-removebg-preview.png'
        },

        {
            id: 14,
            name: 'collar-muestra-dorado',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/huesosColores/collarMuestra3-removebg-preview.png'
        }
    
       
    ];

    localStorage.setItem("HuesitosDeColores", JSON.stringify(huesitosDeColores));

}


function guardarMedallones ()
{
    let medallones= 
    [
        {
            id: 1,
            name: 'medallon-corazon',
            description: 'placa en forma de huesito de batman',
            price: 22000.00,
            image: './imagenesProductos/medallones/corazonPlata-removebg-preview.png'
        },

        {
            id: 2,
            name: 'medallon-gatoRojo',
            description: 'nada',
            price: 65000.00,
            image: './imagenesProductos/medallones/gatoOrejasRojo-removebg-preview.png'
        },
        {
            id: 3,
            name: 'medallon-gatoNegroGato',
            description: 'con mucha papa',
            price: 35000.00,
            image: './imagenesProductos/medallones/gatoRendondoNegro-removebg-preview.png'
        },
        {
            id: 4,
            name: 'medallon-gatoFucsia',
            description: 'mixto',
            price: 26000.00,
            image: './imagenesProductos/medallones/gatoRendondoRosa-removebg-preview.png'
        },
        {
            id: 5,
            name: 'medallon-gatoPez',
            description: 'mixto',
            price: 25000.00,
            image: './imagenesProductos/medallones/pezPesacado-removebg-preview.png'
        },

        {
            id: 6,
            name: 'medallon-gatoNegroCorona',
            description: 'mixto',
            price: 25000.00,
            image: './imagenesProductos/medallones/redondaCoronaNegro-removebg-preview.png'
        },

        {
            id: 7,
            name: 'medallon-gatoRosa',
            description: 'carbonara',
            price: 25000.00,
            image: './imagenesProductos/medallones/gatoRendondoRosa-removebg-preview.png'
        }

       
    ];
    localStorage.setItem("medallones", JSON.stringify(medallones));
}





///////////////////////////////////////
//mostrar imagenes//////////////////////
////////////////////////////////////////


function slideShowImageDisplay(array, direction, type) {
    let currentIndex;
    let imgElement;

    // Determine current index based on the type
    if (type === "huesosColores") 
    {
        currentIndex = huesosColoresIndex;
        imgElement = document.getElementById("huesosColoresImg");
    } 
    else if (type === "huesosHeroes") 
    {
        currentIndex = huesosHeroesIndex;
        imgElement = document.getElementById("huesosHeroesImg");
    } 
    else if (type === "medallones") 
    {
        currentIndex = medallonesIndex;
        imgElement = document.getElementById("medallonesImg");    
    }

    // Update the index based on the direction
    if (direction === "left") 
    {
    currentIndex = currentIndex === 0 ? array.length - 1 : currentIndex - 1;
    
    } else if (direction === "right") 
    {
    currentIndex = currentIndex === array.length - 1 ? 0 : currentIndex + 1;
    }

    // Update the image display
    let newImage = array[currentIndex].image;
    imgElement.src = newImage;

    // Update the current index based on the type
    if (type === "huesosColores") 
    {
    huesosColoresIndex = currentIndex;
    } 
    else if (type === "huesosHeroes") 
    {
    huesosHeroesIndex = currentIndex;
    } 
    else if (type === "medallones") 
    {
        medallonesIndex = currentIndex;
    }
}