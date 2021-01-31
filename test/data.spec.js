import { filterClave, filterFamily, selectInstrument } from '../src/data.js';


describe('filter musical instrument by clef', () => {
  it('filterClave is a function', () => {
    expect(typeof filterClave).toBe('function');
  });
});

describe('filter musical instrument by family', () => {
  it('filterFamily is a function', () => {
    expect(typeof filterFamily).toBe('function');
  });
});

describe('show instrument card', () => {
  it('selectInstrument is a function', () => {
    expect(typeof selectInstrument).toBe('function');
  });
});
