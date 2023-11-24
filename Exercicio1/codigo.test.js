const { soma, dobro } = require('./codigo')

describe('funções matemáticas', () => {
    beforeAll(() => {
        console.log('Antes de tudo')
    });
    beforeEach(() => {
        console.log('Antes de cada teste')
    });
    afterEach(() => {
        console.log('Depois de cada teste')
    });
    afterAll(() => {
        console.log('Depois de tudo')
    });
    
    // aqui iremos validar a soma de dois valores
    it('soma de dois valores', () => {
    // aqui esperamos que a soma de dois números(2 e 5) seja igual a 7
        expect(soma(2,5)).toBe(7)
        expect(soma(2,4)).toBe(6)
    });
    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
        expect(dobro(2)).toBe(4)
    });
});


// Para rodar o teste, digite npx jest no cmd
// altere a tag scripts.test no package.json para "jest" para poder executar os testes digitando " npm t" no cmd