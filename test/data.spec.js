import { filterClave, filterFamily, selectInstrument } from '../src/data.js';


describe('filter musical instrument by clef', () => {
  it('filterClave is a function', () => {
    expect(typeof filterClave).toBe('function');
  });
  it('str is equal to clave', () => {
    expect(filterClave("do")).toEqual("do");
  });
  it('should return array from intrument by clef', () => {
    expect(filterClave("do")).toBe('objet')
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
