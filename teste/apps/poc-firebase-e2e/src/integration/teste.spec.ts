import { getTitle } from './../elements/elements';
describe('TESTE', () => { 
    beforeEach(() => cy.visit('/'));

    it('validando texto', () => {
        getTitle().contains('HELLO')
        
    });
   
});