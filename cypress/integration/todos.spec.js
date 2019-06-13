describe('Todo Application', () => {
    it('loads the page', () => {
        cy.visit('/')

        cy.get('[data-cy=todo-item-3]')
          .should('have.text', 'Hello world')
          .should('not.have.class', 'completed')
          .find('.toggle')
          .should('not.be.checked')

        cy.get('[data-cy=todo-item-4]')
          .should('have.text', 'Goodnight moon')
          .should('have.class', 'completed')
          .find('.toggle')
          .should('be.checked')

      // fails because contains selects the label and not the checkbox and find toggle can't be found
      cy.contains('Goodnight moon')
          .should('have.text', 'Goodnight moon')
          .should('not.have.class', 'completed')
          .find('.toggle')
          .should('be.checked')
    })
})
