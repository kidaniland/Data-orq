import { filterClave, filterFamily, selectInstrument  } from './data.js';
import data from './data/orquesta/orquesta.js';


//ARRAY CON DATOS
let orchestra = data.orquesta;
//console.log('AKIII--->', orchestra);

//ELEMENTOS BARRA DE NAVEGADOR
const selectClave = document.getElementById('clave');
const listInstrument = document.getElementById('listInstument');
const hrefHome = document.getElementById('home');

//ELEMENTOS BARRA LATERAL
const hrefTodos = document.getElementById('todos');
const hrefCuerda = document.getElementById('cuerda');
const hrefVientoMad = document.getElementById('vientoMad');
const hrefVientoMet = document.getElementById('vientoMet');
const hrefPercusion = document.getElementById('percusion');
const hrefSolista = document.getElementById('solista');

//ELEMENTOS GRIDS O GALERIA DE INICIO
const galeryDiv = document.getElementById('item');
const galeryClave = document.getElementById('itemClave');

//ELEMENTOS DE FICHA O MODAL
const cardImg = document.getElementById('imgInstrument');
const cardAudio = document.getElementById('audioInstruemnt');
const cardPositionImg = document.getElementById('positionInstrument');
const cardTitle = document.getElementById('titleInstument');
const cardClave = document.getElementById('clave');
const cardFamily = document.getElementById('familia');
const cardCharacteristic = document.getElementById('utiliza');
const cardData= document.getElementById('dato');

//INSERTAR DATOS A SELEC POR CLAVE
let fragment = document.createDocumentFragment();
let claves = ['Sol', 'Do', 'Fa', 'n/a'];
let selectClef;
for (const clave of claves){
    let selectC = document.createElement('option');
    selectC.setAttribute('value', clave.toLowerCase());
    selectC.textContent = clave;
    selectClef += selectC.value; 
    fragment.appendChild(selectC);
}
selectClave.appendChild(fragment);

//EVENTO SELECCION POR CLAVE
selectClave.addEventListener('change', function(){
    console.log("EVENTOOOOO--->>", selectClave.value)
    let clef = selectClave.value;
    document.getElementById('instPorClave').innerHTML = "Instrumentos que pueden leer en clave de: "+clef;
    console.log("TIPOOOO-->>", typeof clef);
    let selectClef = filterClave(clef);
    printSelect(selectClef);
})

//INSERTAR DATOS EN SELECT POR NOMBRE DE INSTRUMENTOS
const fragmentD = document.createDocumentFragment();
let allInstrument = orchestra.map(instrument => instrument.nombre);

for (let instrument of allInstrument){
    let selectItem = document.createElement('option');
    selectItem.setAttribute('value', instrument.toLowerCase());
    selectItem.textContent = instrument;
    fragmentD.appendChild(selectItem);    
}
listInstrument.appendChild(fragmentD);

/*/EVENTO SELECCION POR INSTRUMENTO
listInstrument.addEventListener('change', function(){
    console.log("Valor--->>", listInstrument.value)
    let instrument = listInstrument.value;
    console.log("TIPO-->>", typeof clef);
    selectInstrument(instrument); 
})*/

//EVENTOS POR FAMILIA DE INSTRUMENTO -NAV LATERAL
hrefTodos.addEventListener('click', function(){
    console.log("seleccionó TODOS");
});
hrefCuerda.addEventListener('click', function(){
    console.log("seleccionó CUERDAS");
});
hrefVientoMad.addEventListener('click', function(){
    console.log("seleccionó VIENTO MAD");
});
hrefVientoMet.addEventListener('click', function(){
    console.log("seleccionó VIENTO MET");
});
hrefPercusion.addEventListener('click', function(){
    console.log("seleccionó PERCUSION");
});
hrefSolista.addEventListener('click', function(){
    console.log("seleccionó SOLISTA");
});

//INSERTAR DATOS A LA GRID O GALERY
function printSelect(arr){
    for (const item of arr){
        //div
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'div-galery');
        //img
        const imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'image-mini');
        imgElement.setAttribute('src', item.miniatura);
        
        //h2
        const nameElement = document.createElement('h2');
        nameElement.setAttribute('class', 'name-galery');
        nameElement.textContent = item.nombre;
        
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);  
        galeryDiv.appendChild(divElement);

        imgElement.addEventListener('click', function(){
            if(item.miniatura === item.img){
                console.log('EL INSTRUMENTO ES ',item.nombre);
            }
        })
    };
}
//printX();