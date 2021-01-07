import { filterClave } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/orquesta/orquesta.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(filterClave, data.orquesta);

//ELEMENTOS BARRA DE NAVEGADOR
const selectClave = document.getElementById('clave');
const datalistInstrument = document.getElementById('datalistInstument');
const hrefHome = document.getElementById('home');

//ELEMENTOS BARRA LATERAL
const hrefCuerda = document.getElementById('cuerda');
const hrefVientoMad = document.getElementById('vientoMad');
const hrefVientoMet = document.getElementById('vientoMet');
const hrefPercusion = document.getElementById('percusion');
const hrefSolista = document.getElementById('solista');

//ELEMENTOS GRIDS O GALERIA DE INICIO
const galeryTitle = document.getElementById('title');
const galeryImg = document.createElement('miniImg');
const galeryDiv = document.getElementById('item');
const galerySection = document.getElementById('grid');

//ELEMENTOS DE FICHA O MODAL
const cardImg = document.getElementById('imgInstrument');
const cardAudio = document.getElementById('audioInstruemnt');
const cardPositionImg = document.getElementById('positionInstrument');
const cardTitle = document.getElementById('titleInstument');
const cardClave = document.getElementById('clave');
const cardFamily = document.getElementById('familia');
const cardCharacteristic = document.getElementById('utiliza');
const cardData= document.getElementById('dato');

//INSERTAR DATOS A LA GRID O GALERY
let orchestra = data.orquesta;
const fragment = document.createDocumentFragment();
/*let container = `<img src=${orchestra.miniatura}>`;
    container += `</br><h2>${orchestra.nombre}</h2>`;
galeryDiv.innerHTML = container;*/
for (const item of orchestra){
    let container = `<div><img src=${item.miniatura}>`;
    container += `</br><h2>${item.nombre}</h2></div>`;
    //console.log('---->', container);
    //fragment.appendChild(container);
    galeryDiv.innerHTML += container;
};
/*galeryDiv.appendChild(fragment);*/

//INSERTAR OPTION EN DATALIST
/*const fragmentDatalist = document.createDocumentFragment();
for (const instrumentName of orchestra){
    let selectItem = document.createElement('option');
    selectItem.setAttribute('value', instrumentName.nombre.toLowerCase());
    selectItem.textContent = instrumentName;
    fragmentDatalist.appendChild(selectItem);
}
datalistInstrument.appendChild(fragmentDatalist);*/

//INSERTAR DATOS A LA FICHA DE INSTRUMENTOS

//EVENTO SELECCION POR CLAVE
/*selectClave.addEventListener('onchange', ()=>{
    let clave = selectClave.value;
    document.getElementById('instPorClave').innerHTML = "Los instrumentos que leen en clave de "+ clave +" son:" ;
})*/ 
