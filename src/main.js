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
        //img
        const imgElement = document.getElementById('imgInstrument');
        imgElement.setAttribute('src', obj.img);
        //audio
        const soundElement = document.getElementById('audioInstrument');
        soundElement.setAttribute('controls', true);
        soundElement.setAttribute('src', obj.sonido);
        //position
        const imgPosition = document.getElementById('imgPosition');
        imgPosition.setAttribute('src', obj.posicion);
    //Izquierda
        //h1
        const titleElement = document.getElementById('card-title');
        titleElement.textContent = obj.nombre;
        //sub título P
        if(obj.nombre_dos != ""){
            const titleSecond = document.getElementById('titleTwo');
            titleSecond.textContent = obj.nombre_dos;
        }
        //p
        const spanFamily = document.getElementById('family');
        spanFamily.textContent = obj.familia;
        const spanClave = document.getElementById('clef');
        spanClave.textContent = obj.clave;
        if(obj.clave_dos != ""){
            const clefSecond = document.getElementById('secondClef');
            clefSecond.textContent ="Segunda clave de lectura: " + obj.nombre_dos;
        }
        if(parseInt(obj.num)<5){
            const caracteristic = document.getElementById('caracteristica');
            caracteristic.textContent = "Cuerdas: " + obj.caracteristica;
        }
        else if(parseInt(obj.num)< 11 && parseInt(obj.num)>4){
            const caracteristic = document.getElementById('caracteristica');
            caracteristic.textContent = "Boquilla: " + obj.caracteristica;
        }
        const spanDato = document.getElementById('dato');
        spanDato.textContent = obj.dato;
        const spanRelacionado = document.getElementById('relacion');
        spanRelacionado.textContent = obj.relacionado;
}
