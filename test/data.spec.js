import { filterClave, anotherExample } from '../src/data.js';


describe('filtro de instrumentos por clave', () => {
  it('is a function', () => {
    expect(typeof filterClave).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
