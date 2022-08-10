//DOM
class Adornos {
        constructor(modelo, medidas, imgSrc, precio,id) {
             this.modelo = modelo
             this.medidas = medidas
             this.imgSrc = imgSrc
             this.precio = precio
             this.id = id
         }
    }
    
     const adorno1 = new Adornos ('Arco Iris', `5 unidades-15cm x 10cm.`, 'src="./img/arcoiris.jpeg"' , 3500,'Arco Iris')
     const adorno2 = new Adornos ('Espejos', `40cm x 40cm.`, 'src="./img/espejo.jpeg"', 5500,'Espejos')
     const adorno3 = new Adornos ('Llaveros', `5 unidades-15cm. `, 'src="./img/llavero.jpeg"', 2500,'Llaveros')
     const productos = [adorno1, adorno2, adorno3]

     const cardContainerQuery = document.querySelector('#cardContainer')
const renderizarProductos = () => {

     productos.forEach ((producto) => {
const cardProducto = document.createElement('div')
cardProducto.innerHTML = 
`<h3 class="cardTitulo"> ${producto.modelo} </h3>
<img ${producto.imgSrc} class="cardImg">
<p class="cardDescri"> ${producto.medidas}</p>
<span class="cardPrecio"> $${producto.precio} </span>
<button class="agregarCarrito" ${producto.id}> Agregar al Carrito </button>`

cardProducto.className = 'card ' 
cardContainerQuery.append(cardProducto)


     })
 }
 
//EVENTOS

const botonAdornos = document.querySelector('#botonAdornos')
botonAdornos.addEventListener('click', renderizarProductos)


let carrito = []

const botonesAgregarCarrito = document.querySelectorAll('.agregarCarrito')

const mostrarEvento = (datosDelEvento) => {
    const producto = datosDelEvento.target.getAttribute('id')
    carrito.push(producto)
    console.log(carrito);
}

botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener('click', mostrarEvento)
})



// BUSCADOR

const searchBar = document.querySelector('#search')

const search = () => {
    const query = searchBar.value
    const searchResult = productos.filter((producto) => producto.modelo.toLowerCase().includes(query))
    console.log(searchResult);
    // y si en ves de mostrarlo por consola imprimimos los productos dentro de searchResult??
}

searchBar.addEventListener('input', search)














/*

//array vacio (carrito)
let carrito = []

// productos
class Adorno {
    constructor(id, modelo, tamaños, colores, precio) {
        this.id = id
        this.modelo = modelo
        this.tamaños = tamaños
        this.colores = colores
        this.precio = precio
    }
}

const adorno1 = new Adorno(50, 'Arco Iris', ['10cm x 15cm', '12cm x 18cm'], ['amarillo', 'verde', 'azul','multicolor'], 3500)
const adorno2 = new Adorno(55, 'Espejos', ['35cm','40cm'], ['marrón', 'beige'], 5500)
const adorno3 = new Adorno(60, 'Llaveros', ['10cm','15cm'], ['amarillo', 'verde','gris'], 2500)

// todos mis productos
const adorno = [adorno1, adorno2, adorno3]

// caracteristicas para elección de productos
const editarProductoSeleccionado = (adornoSeleccionado) => {
    const productoElegido = {
        id: adornoSeleccionado.id,
        modelo: adornoSeleccionado.modelo,
        tamaños: '0',
        color: '',
        cantidad: 1,
        precio: adornoSeleccionado.precio,
    }

    productoElegido.tamaños = Number (prompt('Elija Tamaños, tenemos los siguientes en stock: ' + adornoSeleccionado.tamaños.join('-')))
    productoElegido.color = prompt('Elija Color, tenemos los siguientes en stock: ' + adornoSeleccionado.colores.join('-')).toLowerCase()
    productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

    return productoElegido
}


// Solicitarle al usuario que elija que producto quiere comprar
const seleccionarProducto = () => {
    const seleccionUsuario = prompt('Elegi el modelo de decoración que quieras comprar entre: Arco Iris, Espejos, Llaveros').toLowerCase()

    switch (seleccionUsuario) {
        case 'arco iris':
            console.log('Elegiste Arco Iris')
            carrito.push(editarProductoSeleccionado(adorno1))
            break
        case 'espejos':
            console.log('Elegiste Espejos')
            carrito.push(editarProductoSeleccionado(adorno2))
            break
        case 'llaveros':
            console.log('Llaveros')
            carrito.push(editarProductoSeleccionado(adorno3))
            break
        default:
            console.log('Por favor, elegi un modelo correcto')
            alert('Por favor, elegi un modelo correcto')
            break
    }

    if (confirm('Desea agregar otro producto a su compra?')) {
        seleccionarProducto()
    }
}


// Suma total de mis productos
const sumarTotalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}


// Ejecuciones
seleccionarProducto()

alert('Gracias por su compra, su total es de $' + sumarTotalCarrito())
console.log('Gracias por su compra, su total es de $' + sumarTotalCarrito())


/*



// ARRAYS-MÉTODOS
/*
 let productos = ["Arco Iris",
                  "Llaveros",
                    "Espejos",
                     "Animales"] ;
 
                     alert(productos); 
 let resultado = productos.push ("Lámparas");   
                     alert(productos);               
 


//CICLOS
for (let i = 001; i <= 005; i++) {
    let nombreIngresado = prompt("Ingresar nombre completo:");
    alert("Usuario  N° "+i+" Nombre: "+nombreIngresado);
}
//FUNCIONES - VARIABLES

    function sumar(numero1, numero2)
     {
         return numero1 + numero2
     }
    
     {  let numero1 = 3500;
        let numero2 = 170;
        let resultado = sumar(numero1, numero2);
         alert("Valor producto (Incluye IVA) $" + (resultado));
     }
    
//CONDICIONALES - VARIABLES
   { var nombre, edad;
    nombre = prompt ('Por favor introduce tu nombre completo:');
    if (nombre =="") { alert ('No has introducido ningún nombre.'); }
    else { alert ('Hola '+nombre + '. Bienvenido/a a nuestra Tienda, que te diviertas.'); }
    edad = prompt ('¿Que edad tienes?');
    edad = Number(edad);
    if (edad >=1 && edad < 18) {alert ('Eres menor de edad, deberás ser supervisado/a por un adulto.');}
    else if (edad >=18 && edad <=100) {alert ('Fuiste registrado/a con éxito.');}
    else {alert ('No has introducido un valor válido de edad. ( '+edad+')');}
    }
    
*/
    

    



    

     