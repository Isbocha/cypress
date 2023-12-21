Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    if (email)
        cy.get('#mail').type(email);
    if (password)
        cy.get('#pass').type(password);
    cy.contains("Submit").click()
})

Cypress.Commands.add('bookDescription', (title, description) => {
    cy.contains('Add new').click();
    if (title)
        cy.get("#title").type(title);
    if (description)
        cy.get("#description").type(description);
    cy.contains("Submit").click()
})