describe('test logins', () => {

  beforeEach(() => {
    cy.visit('/')
  })

   it('Should show correct display of the account', () => {
     cy.viewport(550, 750);
     cy.login('bropet@mail.ru', '123');
     cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
   })

    it('Should show correct display of the account ', () => {
      cy.viewport("iphone-6");
      cy.login('bropet@mail.ru', '123');
      cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
    })

  it('Should show error message in the "Your Email" field', () => {
    cy.login(null, "123");
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Should show error message in the "Your password" field', () => {
    cy.login('bropet@mail.ru', null);
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Log out test', () => {
    cy.login('bropet@mail.ru', '123');
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
    cy.get('.ml-auto > .ml-2').click();
    cy.contains('Log in').should('be.visible')
  })
})