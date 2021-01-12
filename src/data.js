import orquesta from "./data/orquesta/orquesta.js";

const orchestra = orquesta.orquesta;
console.log("MIRAAA-->", orchestra);

//Nombre e imagen de instrumento por clave
export const filterClave = (clv) => {
  let clave;
  if (clv === "sol"){
    clave = orchestra.filter(x => x.clave === 'sol');
  }
  else if (clv === "do"){
    clave = orchestra.filter(x => x.clave === 'do');
  }
  else if (clv === "fa"){
    clave = orchestra.filter(x => x.clave === 'fa');
  }
  else {
    clave = orchestra.filter(x => x.clave === 'n/a');
  }
  return clave
};

//Datos de instrumentos por familia
export const filterFamily = (str) => {
  let family;
  if(str === "cuerdas"){
    family = orchestra.filter(x => x.famila === 'cuerdas');
  }
  else if(str === "vientos madera"){
    family = orchestra.filter(x => x.famila === 'vientos madera');
  }
  else if(str === "vientos metal"){
    family = orchestra.filter(x => x.famila === 'vientos metal');
  }
  else if(str === "percusion"){
    family = orchestra.filter(x => x.famila === 'percusion');
  }
  else{
    family = orchestra.filter(x => x.famila === 'solista');
  }
  return family
}

//Datos por instrumentos
export const selectInstrument = (instrument) => {
  let findInstrument;
  let nameInstrument = orquesta.nombre;
  if(instrument === nameInstrument){
    findInstrument = orquesta.find(x => x.nombre)
  }
  return findInstrument;
};
