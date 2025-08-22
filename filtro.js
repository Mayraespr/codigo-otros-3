// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//Cambiamos todas las contanstantes var a let o const
const li = document.getElementById("lista-de-productos"); //cambiamos el get element a ID 
const $i = document.querySelector('.input');
const botonDeFiltro = document.querySelector("button");//movemos de lugar la constante del botón de filtro
//Definimos una función para mostrar productos (La estábamos mandando a llamar después y daba error)
function displayProducto(productos) {
  li.innerHTML = "";

  productos.forEach(producto => {
      const d = document.createElement("div");
      d.classList.add("producto");

      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = producto.nombre;

      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);//eliminamos el [1] porque producto ya pertenece a un arreglo

  d.appendChild(ti)
  d.appendChild(imagen)
  li.appendChild(d);

  }); 
}//displayProducto

botonDeFiltro.onclick = function() {
  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);
  displayProducto(productosFiltrados);
}
// botonDeFiltro.onclick = function() {
//   while (li.firstChild) {
//     li.removeChild(li.firstChild);
//   }

//   const texto = $i.value;
//   console.log(texto);
//   const productosFiltrados = filtrado(productos, texto );

//   for (let i = 0; i < productosFiltrados.length; i++) {
//     var d = document.createElement("div")
//     d.classList.add("producto")
  
//     let ti = document.createElement("p")
//     ti.classList.add("titulo")
//     ti.textContent = productosFiltrados[i].nombre
    
//     let imagen = document.createElement("img");
//     imagen.setAttribute('src', productosFiltrados[i].img);
  
//     d.appendChild(ti)
//     d.appendChild(imagen)
  
//     li.appendChild(d)
//   }
// }

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  