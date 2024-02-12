const sinon = require('sinon');
assert = require('assert');
let { somaDosMultiplos } = require('./multiplos.js');
const somaDosMultiplosFake = jest.fn(() => {
  return 156361;
});

describe('Função soma de números inteiros múltiplos de 5 e 7 menor que 1000', () => {
    beforeAll(() => {
        console.log('antes de tudo');
    });

    beforeEach(() => {
        console.log('antes de cada teste');
    });

    afterEach(() => {
        console.log('depois de cada teste');
    });

    afterAll(() => {
        console.log('depois de tudo');
    });

    it('Soma dos múltiplos de 5 e 7 menores que 1000', () => {
        expect(somaDosMultiplos()).toBe(156361);
    });

    it('Soma dos múltiplos de 5 e 7 menores que 1000 com FAKE', () => {
        const originalSomaDosMultiplos = somaDosMultiplos;
        somaDosMultiplos = somaDosMultiplosFake;
        expect(somaDosMultiplos()).toBe(156361);
        somaDosMultiplos = originalSomaDosMultiplos;
    });

    it('Soma dos múltiplos de 5 e 7 menores que 1000 com SPY', () => {
        const somaDosMultiplos = sinon.spy();
        somaDosMultiplos();
        assert(somaDosMultiplos.calledOnce);
        assert(somaDosMultiplos.calledWith());
    });
    
    it('Soma dos múltiplos de 5 e 7 menores que 1000 com STUB', () => {
        const stub = sinon.stub().returns(156361);
        expect(stub()).toBe(156361);
    });
});
