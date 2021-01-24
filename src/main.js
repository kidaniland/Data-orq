import { filterClave, filterFamily, selectInstrument  } from './data.js';
import data from './data/orquesta/orquesta.js';

//ARRAY CON DATOS
let orchestra = data.orquesta;

//ELEMENTOS BARRA DE NAVEGADOR
const selectClave = document.getElementById('clave');
const listInstrument = document.getElementById('listInstument');
const hrefHome = document.getElementById('home');

//ELEMENTOS GRIDS O GALERIA DE INICIO
const galeryDiv = document.getElementById('item');
galeryDiv.style.display = "none";

//ELEMENTOS DE FICHA O MODAL
const selectModal = document.getElementById('modalInstrument');
selectModal.style.display = "none";


//INSERTAR DATOS A SELEC POR CLAVE
let fragment = document.createDocumentFragment();
let claves = ['Claves de lectura', 'Sol', 'Do', 'Fa', 'n/a'];

for (const clave of claves){
    let selectC = document.createElement('option');
    selectC.setAttribute('value', clave.toLowerCase());
    selectC.textContent = clave;
    fragment.appendChild(selectC);
}
selectClave.appendChild(fragment);

//EVENTO SELECCION POR CLAVE
selectClave.addEventListener('change', function(){
    let clef = selectClave.value;
    document.getElementById('instPorClave').innerHTML = "Instrumentos que pueden leer en clave de: "+clef;
    let selectClef = filterClave(clef);
    printSelect(selectClef);
})
/*
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

//EVENTO SELECCION POR INSTRUMENTO
listInstrument.addEventListener('change', function(){
    console.log("Valor--->>", listInstrument.value)
    let instrument = listInstrument.value;
    console.log("TIPO-->>", typeof instrument);
    //let selectInst = selectInstrument(instrument); 
})*/

//EVENTOS POR FAMILIA DE INSTRUMENTO -NAV LATERAL
let instfamily;
const family = ["cuerdas", "vientos madera","vientos metal", "percusion", "solista"] 

document.addEventListener('click', (e) => {
    let element = e.target;
    instfamily = element.getAttribute('id');
    console.log("AL CLICK", instfamily, typeof instfamily);
    for (let item of family){
        if(instfamily === item){
            navFamily(instfamily, family);
        } 
    }
});


//Funcion de eventos por familia
function navFamily (str, arr){
    console.log("LLEGA A NAVFAMILY>>", str, " TIPO ", typeof str);
    console.log("LLEGA A FAM>>", arr, typeof arr);
    for (let i = 0; i< arr.length; i++) {
        if(family[i] === str){
            let familia = filterFamily(str);
            printSelect(familia);
            galeryDiv.style.display = "block";
        }
        else{
            galeryDiv.style.display = "none";
        }
    }
};

//INSERTAR DATOS A LA GRID O GALERY DE SELECCIONES (CLAVE, FAMILIA)
const printSelect = (arr) => {
    console.log("LLEGA a printSelect-->>", arr);
    galeryDiv.style.display = "block";
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
        nameElement.setAttribute('class', 'name-instrument');
        nameElement.textContent = item.nombre;
        
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);  
        galeryDiv.appendChild(divElement);

        imgElement.addEventListener('click', function(){
            if(item.miniatura === item.img){
                galeryDiv.style.display = "none";
                selectModal.style.display = "block";
                let instrument = item.nombre;
                let cardIntrument = selectInstrument(instrument);
                console.log("EL RETORNO ES-->>", cardIntrument, " TIPO>>", typeof cardIntrument);
                printFicha(cardIntrument);
            }
        });
    }
};

//INSERTAR DATOS EN LA FICHA POR INSTRUMENTOS

function printFicha(obj){
    console.log("llega a PRINFICHA>>", obj)
    selectModal.style.display = "block";
    //Derecha
        //div
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'div-derecha');
        //img
        const imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'imgInstrument');
        imgElement.setAttribute('src', obj.img);
        //audio
        const soundElement = document.createElement('audio');
        soundElement.setAttribute('class', 'audioInstrument');
        soundElement.setAttribute('src', obj.sonido);
        //position
        const imgPosition = document.createElement('img');
        imgPosition.setAttribute('class', 'img-position');
        imgPosition.setAttribute('src', obj.posicion);
        
        divElement.appendChild(imgElement);
        divElement.appendChild(soundElement);
        divElement.appendChild(imgPosition);  
        selectModal.appendChild(divElement);
        
    //Izquierda
        //div
        const divElement2 = document.createElement('div');
        divElement2.setAttribute('class', 'div-izquierda');
        //title
        const titleElement = document.createElement('h1');
        titleElement.setAttribute('class', 'card-title');
        titleElement.textContent = obj.nombre;

        divElement2.appendChild(titleElement);
        //sub title
        if(obj.nombre_dos != ""){
            const titleSecond = document.createElement('p');
            titleSecond.setAttribute('class', 'text-p');
            titleSecond.textContent = obj.nombre_dos;
            divElement2.appendChild(titleSecond);
        }
        //P
        const pElement = document.createElement('p');
        pElement.setAttribute('class', 'text-p');
        pElement.textContent = 
        `Clave: ${obj.clave}, Familia: ${obj.familia}, Dato: ${obj.dato}, Relacionado con: ${obj.relacionado}`;
        //extra
        if (parseInt(obj.num)< 5){
            const pElementdos = document.createElement('p');
            pElementdos.setAttribute('class', 'text-p');
            pElementdos.textContent = 'Cuerdas: ${obj.cuerdas}';
            divElement2.appendChild(pElementdos);
        }
        else if(parseInt(obj.num) < 11 && obj.num > 4){
            const pElementdos = document.createElement('p');
            pElementdos.setAttribute('class', 'text-p');
            pElementdos.textContent = 'Boquilla: ${obj.boquilla}';
            divElement2.appendChild(pElementdos);
        }
        selectModal.appendChild(divElement2);
}
