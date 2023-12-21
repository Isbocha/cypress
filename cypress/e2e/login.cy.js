describe('test logins', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })
    it('Should show correct display of the account', () => {
      cy.login('bropet@mail.ru', '123');
      cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
    })
  })

  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })
    it('Should show correct display of the account ', () => {
      cy.login('bropet@mail.ru', '123');
      cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
    })
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


  it('Add first new book test', () => {
    cy.login('bropet@mail.ru', '123');
    cy.bookDescription('Теория Всего', 'Книга состоит из семи лекций, каждая из которых посвящена определенной теме. Автор описывает свои исследования и теории, а также приводит примеры из истории науки');
    cy.get('.card-title').then((elements) => {
      expect(elements[0]).to.have.text('Теория Всего')
    })
  })

  it('Add second new book test', () => {
    cy.login('bropet@mail.ru', '123');
    cy.bookDescription('Вселенная. Емкие ответы на непостижимые вопросы',
      'В этой книге собраны лекции ученых, которые многие годы работали над тем, чтобы воссоздать прошлое вселенной и представить ее структуру');
    cy.get('.card-title').then((elements) => {
      expect(elements[1]).to.have.text('Вселенная. Емкие ответы на непостижимые вопросы')
    })
  })

  it('Log out test', () => {
    cy.login('bropet@mail.ru', '123');
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
    cy.get('.ml-auto > .ml-2').click();
    cy.contains('Log in').should('be.visible')
  })


  it("Add a book to favorites list test", () => {
    cy.login('bropet@mail.ru', '123');
    cy.get('.card-footer > .btn').then((elements) => {
      cy.get(elements[0]).click();
    });
    cy.contains('Favorites').click();
    cy.contains('Теория Всего')
  })
})