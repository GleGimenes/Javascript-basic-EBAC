const sinon = require('sinon');
assert = require('assert');
let { indicesValores } = require('./array');
const indicesValoresFake = jest.fn((array) => {
    return { indiceDoMaior: 0, indiceDoMenor: 0 };
});

describe('Função Índice de Array', () => {
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

    it('Listar índice de maior e menor valor no Array', () => {
        expect(indicesValores([5, 8, 1, 3, 2, 9, 4, 7, 6])).toEqual({indiceDoMaior: 5, indiceDoMenor: 2});
    });

    it('Listar índice de maior e menor valor no Array com FAKE', () => {
        const originalIndicesValores = indicesValores;
        indicesValores = indicesValoresFake;
        expect(indicesValores([5, 8, 1, 3, 2, 9, 4, 7, 6])).toEqual({ indiceDoMaior: 0, indiceDoMenor: 0 });
        indicesValores = originalIndicesValores;
    });

    it('Listar índice de maior e menor valor no Array com SPY', () => {
        const indicesValores = sinon.spy();
        indicesValores([5, 8, 1, 3, 2, 9, 4, 7, 6]);
        assert(indicesValores.calledOnce);
    });

    it('Listar índice de maior e menor valor no Array com STUB', () => {
        const stub = sinon.stub().returns({ indiceDoMaior: 0, indiceDoMenor: 0 });
        expect(stub([5, 8, 1, 3, 2, 9, 4, 7, 6])).toEqual({ indiceDoMaior: 0, indiceDoMenor: 0 });
    });
});