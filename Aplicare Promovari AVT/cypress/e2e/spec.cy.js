describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.autovit.ro/adminpanel/login/?ref%5B0%5D%5Baction%5D=usercards&ref%5B0%5D%5Bmethod%5D=index')
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get(".block.clr a").click()
    cy.origin('https://olxgroup.okta-emea.com', () => {
      cy.get(".input-fix #input28").type("andrei.manache@olx.ro")
      cy.get('.input-fix #input28').should('have.value', 'andrei.manache@olx.ro')
      cy.get('.input-fix #input36').type('Divinacomedie2!')
      cy.get('[data-se-for-name="rememberMe"]').click()
      cy.get('.o-form-button-bar input').click()
      cy.get('[data-se="okta_verify-push"] a').click()

      cy.wait(10000);
    });

    cy.fixture('Anunturi.csv').then((csvData) => {
      const rows = csvData.split('\n');
      rows.forEach((row) => {
        const [link, value] = row.split(',');

        cy.visit(link.trim());

        cy.get(".adTitle").click();
        cy.get(".moderationaction").select("payment_0");

        cy.on('uncaught:exception', (err, runnable) => {
          // Handle the error without failing the test
          // You can log the error, assert its properties, or perform any other actions
          // Return false to prevent Cypress from failing the test
          return false;
        });

        cy.on('window:alert', (text) => {
          // Check the content of the alert
          expect(text).to.include('Are you sure?'); S

          // Automatically accept the alert
          return true; // Returning true confirms the alert
        });

        // Use the 'value' variable in your interactions
        cy.get('#content select').select(value.trim());
        cy.get("#content > form:nth-child(2) > input[type=submit]").click();
        cy.wait(2000);

        // Repeat the process for the next link and value
      });
    });
  });
});