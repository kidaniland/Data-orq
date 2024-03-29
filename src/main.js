import { filterClave, 
        filterFamily, 
        selectInstrument, 
        orderByNum, 
        orderAtoZ, 
        orderZtoA, 
        orderRandom } from './data.js';
import data from './data/orquesta/orquesta.js';

//ARRAY CON DATOS
let orchestra = data.orquesta;

//ELEMENTOS BARRA DE NAVEGADOR
const selectClave = document.getElementById('clave');
const selectOrder = document.getElementById('order');
const home = document.getElementById('home');
const btnHome = document.getElementById('btnHome');
const searchInput = document.getElementById('search');
const btnSearch = document.getElementById('Sbutton')

//ELEMENTOS GRIDS O GALERIA DE INICIO
const galeryDiv = document.getElementById('item');
galeryDiv.style.display = "none";
let divElement;
let imgElement;
let nameElement;

//ELEMENTOS DE FICHA O MODAL
const selectModal = document.getElementById('modalInstrument');
selectModal.style.display = "none";

//ARRAY FAMILIA DE INSTRUMENTO
let instfamily; 
const family = ["cuerdas", "vientos madera","vientos metal", "percusion", "solista"];

//ARRAY NOMBRE DE INTRUMENTO
let nameInstument = orchestra.map(function(nam){
    return nam.nombre;
});

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
    let selectClef = filterClave(clef);
    printSelect(selectClef);
});

//INSERTAR DATOS A SELEC ORDEN
let fragmentO = document.createDocumentFragment();
let orders = ['Ordenar por', 'A - Z', 'Z - A', 'N° de Posición'];
for (const order of orders){
    let selectO = document.createElement('option');
    selectO.setAttribute('value', order.toLowerCase());
    selectO.textContent = order;
    
    fragmentO.appendChild(selectO);
}
selectOrder.appendChild(fragmentO);

//EVENTO SELECCION ORDEN
selectOrder.addEventListener('change', function(){
    let orderValue = selectOrder.value;
    //console.log("VALUE DE ORDER--->", orderValue);
    instrumentOrder(orderValue);
});

//EVENTOS.TARGET POR CADA CLICK para instrumentos por familia
document.addEventListener('click', (e) => {
    let element = e.target;
    instfamily = element.getAttribute('name');

    for (let item of family){
        if(instfamily === item){
            navFamily(instfamily, family);
        }
        else if(instfamily === "todos"){
            const random = orderRandom(orchestra);
            //console.log("RANDOMM--->", random);
            printSelect(random);
        }
    }
});

//EVENTO.TARGET  para cada instrumento
document.addEventListener('click', (e) =>{
    let elementInstrument = e.target;
    let instrumentBtn =  elementInstrument.getAttribute('id');
    
    for (let item of nameInstument){
        if(instrumentBtn === item){
            galeryDiv.style.display = "none";
            selectModal.style.display = "flex";
            let cardIntrument = selectInstrument(item);
            
            printFicha(cardIntrument);
        } 
    }
});

//EVENTO BOTON SEARCH
btnSearch.addEventListener('click', () =>{
    let instrument = searchInput.value;
    let cardIntrument = selectInstrument(instrument);
    printFicha(cardIntrument);
    selectModal.style.display = "flex";
    searchInput.value = "";
});


//EVENTO BOTON HOME
btnHome.addEventListener('click', () => {
    galeryDiv.style.display = "none";
    selectModal.style.display = "none";
    home.style.display = "block";
});


//Funcion de eventos por familia
function navFamily (str, arr){
    for (let i = 0; i< arr.length; i++) {
        if(family[i] === str){
            let familia = filterFamily(str);
            printSelect(familia);
        }
        else if(str === "todos"){
            printSelect(orchestra);
        }
    }
}

//INSERTAR DATOS A LA GRID O GALERY DE SELECCIONES (CLAVE, FAMILIA)
const printSelect = (arr) => {
    //console.log("LLEGA a printSelect-->>", arr, galeryDiv);
    home.style.display = "none";
    galeryDiv.style.display = "block";
    galeryDiv.innerHTML = "";
    for (const item of arr){
        //div
        divElement = document.createElement('div');
        divElement.setAttribute('class', 'div-galery');
        //img
        imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'image-mini');
        imgElement.setAttribute('id', item.nombre);
        imgElement.setAttribute('src', item.miniatura);
        //h2
        nameElement = document.createElement('h2');
        nameElement.setAttribute('class', 'name-instrument');
        nameElement.textContent = item.nombre;
        
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);  
        galeryDiv.appendChild(divElement);
    }
    galeryDiv.appendChild(divElement);
}

//INSERTAR DATOS EN LA FICHA POR INSTRUMENTOS
function printFicha(obj){
    //console.log("llega a PRINFICHA>>", obj)
    home.style.display = "none";
    selectModal.style.display = "grid";  
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
        //sub título P
        if(obj.nombre_dos != ""){
            const titleElement = document.getElementById('card-title');
            titleElement.textContent = obj.nombre;
            const titleSecond = document.getElementById('titleTwo');
            titleSecond.innerHTML = obj.nombre + '</br>';
        }
        else{
            const titleElement = document.getElementById('card-title');
            titleElement.innerHTML = obj.nombre + '</br>';
        }
        //familia
        const spanFamily = document.getElementById('family');
        spanFamily.innerHTML = obj.familia + '</br>';
        //claves
        if(obj.clave_dos != ""){
            const spanClave = document.getElementById('clef');
            spanClave.innerHTML = obj.clave + '</br>';
            const clefSecond = document.getElementById('secondClef');
            clefSecond.innerHTML ="Segunda clave de lectura: " + obj.clave_dos + '</br>';
        }
        else{
            const spanClave = document.getElementById('clef');
            spanClave.innerHTML = obj.clave + '</br>';
        }
        //Cuerdas o boquilla 
        if(parseInt(obj.num)<5){
            const caracteristic = document.getElementById('caracteristica');
            caracteristic.innerHTML = "Cuerdas: " + obj.caracteristica + '</br>';
        }
        else if(parseInt(obj.num)< 11 && parseInt(obj.num)>4){
            const caracteristic = document.getElementById('caracteristica');
            caracteristic.innerHTML = "Boquilla: " + obj.caracteristica  + '</br>';
        }
        const spanDato = document.getElementById('dato');
        spanDato.innerHTML = obj.dato + '</br>';
        const spanRelacionado = document.getElementById('relacion');
        spanRelacionado.textContent = obj.relacionado;

        //Cerrar Modal
        const closed = document.getElementById('btnClosed');
        closed.addEventListener('click', function(){
            selectModal.style.display = "none";
            home.style.display = "block";
        });
}

function instrumentOrder(typeofOrder){
    if(typeofOrder === 'a - z'){
        const byNameA = orderAtoZ(orchestra);
        printSelect(byNameA);
    }
    else if (typeofOrder === 'z - a'){
        const byNameZ = orderZtoA(orchestra)
        printSelect(byNameZ)
    }
    else if(typeofOrder === 'n° de posición'){
        const byNumber = orderByNum(orchestra);
        printSelect(byNumber);
    }
    else{
        const random = orderRandom(orchestra);
        printSelect(random);
    }

}
