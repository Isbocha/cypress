describe('test book', () => {

  beforeEach(() => {
    cy.visit('/')
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

  it("Add a book to favorites list test", () => {
    cy.login('bropet@mail.ru', '123');
    cy.get('.card-footer > .btn').then((elements) => {
      cy.get(elements[0]).click();
    });
    cy.contains('Favorites').click();
    cy.contains('Теория Всего')
  })
})
