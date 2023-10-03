describe('template spec', () => {
  it('passes', () => {
    let loginButtonClicked = false;

    cy.visit('https://www.olx.ro/adminpanel/login/?ref%5B0%5D%5Baction%5D=usercards&ref%5B0%5D%5Bmethod%5D=index')
    cy.get(".btn.btn-primary.btn-lg.okta-login-btn").click();

    // Listen to the uncaught:exception event and return false to prevent test failure
    cy.on('uncaught:exception', (err, runnable) => {
      // Handle the error here, if needed
      // You can log the error, assert its properties, or perform any other actions
      // Returning false prevents Cypress from failing the test
      return false;
    });

    cy.origin('https://olxgroup.okta-emea.com', () => {
      cy.get(".input-fix #input28").type("andrei.manache@olx.ro")
      cy.get('.input-fix #input28').should('have.value', 'andrei.manache@olx.ro')
      cy.get('.input-fix #input36').type('Divinacomedie2!')
      cy.get('[data-se-for-name="rememberMe"]').click()
      cy.get('.o-form-button-bar input').click()
      cy.get('#form60 > div.authenticator-verify-list.authenticator-list > div > div:nth-child(2) > div.authenticator-description > div.authenticator-button > a').click()

      cy.wait(10000);
    });

    cy.fixture('Anunturi.csv').then((csvData) => {
      const rows = csvData.split('\n');
      const totalLines = rows.length;

      rows.forEach((row, index) => {
        const [link, value] = row.split(',');

        cy.visit(link.trim());
        if (!loginButtonClicked) {
          cy.get(".btn.btn-primary.btn-lg.okta-login-btn").click();
          loginButtonClicked = true; // Set the flag to true to skip it in subsequent iterations
        }

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
          expect(text).to.include('Are you sure?');

          // Automatically accept the alert
          return true; // Returning true confirms the alert
        });

        // Use the 'value' variable in your interactions
        if (value) {
          cy.get('#content select').select(value.trim());
        }
        cy.get("#content > form:nth-child(2) > input[type=submit]").click();
        cy.wait(2000);
        cy.log(`Processed ${index + 1} of ${totalLines} lines`);
        // Repeat the process for the next link and value
      });
    });
  });
});
