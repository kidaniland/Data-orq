import { filterClaveImg, filterClaveName, filterFamily, selectInstrument } from '../src/data.js';


describe('filter musical instrument img by clef', () => {
  it('filterClaveImg is a function', () => {
    expect(typeof filterClaveImg).toBe('function');
  });
  //ME FALTA DECIR A QUE ES IGUAL CLAVE
  it('str is equal to clave', () => {
    expect(filterClaveImg("do")).toEqual(clave);
  });
  it('should return array for intrumentImg', () => {
    expect(filterClaveImg("do")).toBe('objet')
  });
});

describe('filter musical instrument name by clef', () => {
  it('filterClaveName is a function', () => {
    expect(typeof filterClaveName).toBe('function');
  });
  it('clv is equal to clave', () => {
    expect(filterClaveName("do")).toEqual("do");
  });
  it('should return array for intrumentImg', () => {
    expect(filterClaveName("do")).toBe('objet')
  });
});


describe('filter musical instrument by family', () => {
  it('filterFamily is a function', () => {
    expect(typeof filterFamily).toBe('function');
  });
  it('str is equal to "cuerdas"', () => {
    expect(filterFamily("cuerdas")).toEqual("cuerdas");
  });
  it('should return array from family', () => {
    expect(filterFamily("cuerdas")).toBe('objet');
  });
});

describe('show instrument card', () => {
  it('selectInstrument is a function', () => {
    expect(typeof selectInstrument).toBe('function');
  });
  it('returns findInstrument should be a objet', () => {
    expect(selectInstrument("viola")).toBe('object');
  });
});
