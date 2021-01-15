import { filterClave, filterFamily, selectInstrument  } from './data.js';
import data from './data/orquesta/orquesta.js';

//INSERTAR DATOS A LA GRID O GALERY DE SELECCIONES (CLAVE, FAMILIA)
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
    }
}

//INSERTAR DATOS EN LA FICHA POR INSTRUMENTOS

function printFicha(obj){

    if(obj === orchestra.num){ //OJO debo recibir el string de un numero
        //div de la derecha
        cardImg.innerHTML = orchestra.img;
        cardAudio.innerHTML = orchestra.sonido;
        cardPositionImg.innerHTML = orchestra.posicion;

        //div de la izquierda
        cardTitle.textContent= orchestra.nombre;
        if(orchestra == orchestra.nombre_dos){
            cardSecondTitle.textContent = orchestra.nombre_dos;
        }
        cardClave.textContent = orchestra.clave;
        cardFamily.textContent = orchestra.familia;
        cardData.textContent= orchestra.dato;
        if(orchestra.num < "05"){
            cardCharacteristic.innerHTML = "Cuerdas: " + orchestra.cuerdas;
        }
        else if(orchestra.num < "11" && orchestra.num > "04"){
            cardCharacteristic.innerHTML = "Boquilla tipo: " + orchestra.boquilla;
        }
    }
}


//ARRAY CON DATOS
let orchestra = data.orquesta;
//console.log('AKIII--->', orchestra);

//ELEMENTOS BARRA DE NAVEGADOR
const selectClave = document.getElementById('clave');
const listInstrument = document.getElementById('listInstument');
const hrefHome = document.getElementById('home');

//ELEMENTOS BARRA LATERAL
const familyAll = document.getElementById('todos');
const familyCuerda = document.getElementById('cuerdas');
const familyentoMad = document.getElementById('vientoMad');
const familyVientoMet = document.getElementById('vientoMet');
const familyPercusion = document.getElementById('percusion');
const familySolista = document.getElementById('solista');

//ELEMENTOS GRIDS O GALERIA DE INICIO
const galeryDiv = document.getElementById('item');
const galeryClave = document.getElementById('itemClave');

//ELEMENTOS DE FICHA O MODAL
const cardImg = document.getElementById('imgInstrument');
const cardAudio = document.getElementById('audioInstruemnt');
const cardPositionImg = document.getElementById('positionInstrument');
const cardTitle = document.getElementById('titleInstument');
const cardSecondTitle = document.getElementById('sTitle');
const cardClave = document.getElementById('clave');
const cardFamily = document.getElementById('familia');
const cardCharacteristic = document.getElementById('utiliza');
const cardData= document.getElementById('dato');

//INSERTAR DATOS A SELEC POR CLAVE
let fragment = document.createDocumentFragment();
let claves = ['Sol', 'Do', 'Fa', 'n/a'];

for (const clave of claves){
    let selectC = document.createElement('option');
    selectC.setAttribute('value', clave.toLowerCase());
    selectC.textContent = clave;
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

//EVENTO SELECCION POR INSTRUMENTO
listInstrument.addEventListener('change', function(){
    console.log("Valor--->>", listInstrument.value)
    let instrument = listInstrument.value;
    console.log("TIPO-->>", typeof instrument);
    //let selectInst = selectInstrument(instrument); 
})

//EVENTOS POR FAMILIA DE INSTRUMENTO -NAV LATERAL
familyAll.addEventListener('click', function(){
    console.log("Selecciona TODOS");
    printSelect(orchestra);
});
familyCuerda.addEventListener('click', function(){
    console.log("Selecciona CUERDAS");
    const instrCuerdas = "cuerdas";
    const cuerdas = filterClave(instrCuerdas);
    printSelect(cuerdas);
    console.log("RETORNA LA FUNCION-->>", printSelect(cuerdas));
});
familyentoMad.addEventListener('click', function(){
    console.log("Selecciona VIENTO MAD");
    const instrVientoMad = "vientos madera";
    const vientoMad = filterFamily(instrVientoMad);
    printSelect(vientoMad);
});
familyVientoMet.addEventListener('click', function(){
    console.log("Selecciona VIENDO MET");
    const instrVientoMet = "vientos metal";
    const vientoMet = filterFamily(instrVientoMet);
    printSelect(vientoMet);
});
familyPercusion.addEventListener('click', function(){
    console.log("Selecciona PERCUSION");
    const instrPercusion = "percusion";
    const percusion = filterFamily(instrPercusion);
    printSelect(percusion);
});
familySolista.addEventListener('click', function(){
    console.log("Selecciona SOLISTA");
    const instrSolista = "solista";
    const solista = filterFamily(instrSolista);
    printSelect(solista);
});


