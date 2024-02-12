const sinon = require('sinon');
const assert = require('assert');
const mdcModule = require('./calculo-mdc');
const mdcFake = jest.fn((x, y) => {
    return 1;
});


describe('Função calculo MCD', () => {
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

    it('Calculo do máximo divisor comum entre dois números', () => {
        expect(mdcModule.mdc(30, 7)).toBe(1);
    });

    it('Calculo do máximo divisor comum entre dois números com FAKE', () => {
        const originalMdc = mdcModule.mdc; 
        mdcModule.mdc = mdcFake; 
        expect(mdcModule.mdc(30, 7)).toBe(1); 
        mdcModule.mdc = originalMdc; 
    })

    it('Calculo do máximo divisor comum entre dois números com SPY', () => {
        const mdc = sinon.spy();
        mdc(30, 7);
        assert(mdc.calledWith(30, 7));
        assert(mdc.calledOnce);
    });

    it('Calculo do máximo divisor comum entre dois números com STUB', () => {
        const stub = sinon.stub().returns(1);
        expect(stub(30, 7)).toBe(1);
    });

    it('Calculo do máximo divisor comum entre dois números com MOCK', () => {
        const mdcMock = sinon.mock(mdcModule);
        mdcMock.expects('mdc').once().withArgs(30, 7);
        const result = mdcModule.mdc(30, 7);
        mdcMock.verify();
        mdcMock.restore();

    });
});