const { UsuariosController } = require('./controller')
const { Database } = require('./database')

describe('Controller de Usuários', () => {
    it('fake', () => {
        // aqui vamos criar uma database mockada
        const respostaEsperada = [
            {
                id: 10,
                nome: 'Gaby Pompeo',
                email: 'gabypompeo@teste.com'
            }
        ]

        const fakeDatabase = {
            findAll() {
                return respostaEsperada
            }
        }

        const controller = new UsuariosController(fakeDatabase)
        const response = controller.getAll()

        //o que nós esperamos do teste será descrito no expect
        expect(response).toBe(respostaEsperada)
    });
});