import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/orquesta/orquesta.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    
}
