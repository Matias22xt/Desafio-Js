// Declaraciones
let carrito =  []

// Array de todos los Productos
let producto = []

// Selectores
const productoSeleccionado = document.querySelector('#productoSeleccionado')
const carritoo = document.querySelector('#carrito')
const total = document.querySelector('#total')
const botonVaciar = document.querySelector('#boton-vaciar')
const botonComprar = document.querySelector('#comprar')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const miLocalStorage = window.localStorage;

// Funciones
const cardContainer = document.querySelector('#cardContainer')
const cardProducto = document.querySelectorAll ('.card')

//Dibuja todos los productos a partir del array
function renderizarProducto() {
       producto.forEach((adornos) => {
        const cardProducto = document.createElement('div');
        cardProducto.className = 'card' 
        cardProducto.setAttribute('data-id', adornos.id)
        cardProducto.innerHTML = 
       `<h3 class="cardTitulo"> ${adornos.modelo} </h3>
        <center><img ${adornos.imagen} class="cardImg"></center>
        <p class="cardDescri"> ${adornos.medidas}</p>
        <span class="cardPrecio"> $${adornos.precio} </span>`

 // Boton Agregar Carrito (función)
        const cardBoton = document.createElement('div');
        cardBoton.classList.add('card-body');
        const Boton = document.createElement('button');
        Boton.classList.add('btn', 'agregarCarrito');
        Boton.textContent = 'Agregar al carrito';
        Boton.setAttribute('push', adornos.id);
        Boton.addEventListener('click', agregarProductoAlCarrito);

//Libreria sweetAlert
        Boton.addEventListener('click', () => {
            Swal.fire(
                'Producto seleccionado'
              );
           })
        cardBoton.append(Boton);
        cardProducto.append(cardBoton);
        productoSeleccionado.append(cardProducto);
        cardContainer.append(cardProducto)
        });
     }

//añadir un producto al carrito
function agregarProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('push'))
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}

// productos guardados en el carrito
function renderizarCarrito() {
    carritoo.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((unidad) => {
        const miProducto = producto.filter((unidadInfo) => {
            return unidadInfo.id === parseInt(unidad);
        });
    const numeroProductos = carrito.reduce((total, unidadId) => {
// contador de productos
            return unidadId === unidad ? total + 1 : total;
        }, 0);
// nodo del carrito (lo seleccionado)
        const cardProducto = document.createElement('li');
        cardProducto.classList.add('list-group-item', 'seleccionado', 'mx-2');
        cardProducto.textContent = `${numeroProductos} x ${miProducto[0].modelo} - $${miProducto[0].precio}`;
// Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn2', 'mx-2');
        miBoton.textContent = 'Eliminar compra';
        miBoton.dataset.unidad = unidad;
        miBoton.addEventListener('click', borrarCarrito);
//Libreria sweetAlert
        miBoton.addEventListener('click', () => {
            Swal.fire(
                'Eliminar producto?',
                'Puedes volver a comprarlo en nuestra Tienda',
                'question'
             );
        })

// Mezcla de nodos
        cardProducto.append(miBoton);
        carritoo.append(cardProducto);
    });
// precio total
    total.textContent = calcularTotal();
}

//borrar un elemento del carrito
function borrarCarrito(evento) {
    const id = evento.target.dataset.unidad;
    carrito = carrito.filter((carritoSelec) => {
        return carritoSelec !== id;
    });
        renderizarCarrito();
    guardarCarritoEnLocalStorage();
 }

 //Calculo dd precio total teniendo en cuenta los productos repetidos
 function calcularTotal() {
//array del carrito 
    return carrito.reduce((total, unidad) => {
// De cada elemento se obtiene su precio
        const miProducto = producto.filter((adornosInfo) => {
            return adornosInfo.id === parseInt(unidad);
        });
// suma al total
        return total + miProducto[0].precio;
    }, 0).toFixed(2);
}

// Vacio el carrito y vuelve a imprimir //Libreria sweetAlert
document.querySelector('#boton-vaciar').addEventListener('click', () => {
   Swal.fire(
            'Carrito vacio!',
            'Vuelve pronto.',
            'success'
          )
        }
      )
function vaciarCarrito() {
// Limpieza de productos guardados
    carrito = [];
// Renderiza los cambios
    renderizarCarrito();
// Borrar LocalStorage
    localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}
function cargarCarritoDeLocalStorage () {

    // Carga de info al carrito, guardado de LocalStorage (optimizado) + compras
 carrito = JSON.parse(miLocalStorage.getItem('carrito')) || []
}

// Eventos
botonComprar.addEventListener('click', vaciarCarrito);
botonVaciar.addEventListener('click', vaciarCarrito);
//Libreria sweetAlert
document.querySelector('#comprar').addEventListener('click', () => {
    swal.fire(
        'Gracias por tu compra!',
        'Aca Tá Tienda',
        'success'
      );
})
// Inicio
cargarCarritoDeLocalStorage();
fetch('../json/productos.json')
.then((response) => response.json())
.then((data)=> {
    producto = data
    renderizarProducto(producto)
    renderizarCarrito()
} )
// BUSCADOR
const search = () => {
    const query = searchBar.value.toLowerCase() 
    const arrayResultados = producto.filter((adornos) => adornos.modelo.toLowerCase().includes(query))
    renderizarProducto(arrayResultados)
}
searchButton.addEventListener('click', search)
searchBar.addEventListener('input', search)
