let loadMoreBtn = document.querySelector('#loadMore');
let currentIten =8;

loadMoreBtn.onclik = () => {
let boxes = [...document.queryselectorAll('.box-container .box')];
for(var i = currentItem; I < currentIten + 4; i++) {
    boxes[i].style.diplay = 'inline-block'
}

currentIten += 4;
if(currentIten>= boxes.length) {
    loadMoreBtn.style.dispaly = 'none'
}

}

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.getElementById('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function caragarEventListeners() {
    elementos1.addEventListener('click, comprarElement');
    carrito.addEventListener('click, eliminarElemento');
    vaciarCarritoBtn.addEventListener8('click, vaciarCarrito')
}

function comprarElement(e) { 
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parenElement.parenElement;
        leerdatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElement =  {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContet,
        precio: elemento.querySelector('.precio').textContet,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElement);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = ` 
    <td>
            <img src="${elemento.imagen}" width=100 height=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td> 
        <td>
            ${elemento.precio}
         </td>
         <td>
             <a herf="#" class="borrar" data-id="${elemento.id}" >x<</a>
        </td>
    `;
    lista.appendChild(row)
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains('borrar')) {   
        e.target.parenElement.remove();
        elemento = e.target.parenElement.parenElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    return false;
}
