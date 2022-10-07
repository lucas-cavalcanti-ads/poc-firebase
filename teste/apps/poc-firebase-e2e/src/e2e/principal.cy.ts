import { getTitle } from '../support/elements';

describe('TESTE', () => { 
    beforeEach(() => cy.visit('/'));

    it('validando texto', () => {
        getTitle().contains('HELLO')
        
    });
   
});