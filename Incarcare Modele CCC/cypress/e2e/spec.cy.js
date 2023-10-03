describe('template spec', () => {
  before(() => {
    // Load the test data from the fixture
    cy.fixture("output.json").as("testData");
  });

  it('passes', () => {
    cy.visit('https://service-ccc.eks-01.shared.prd.eu-west-1.verticals.olx.org/aut/taxonomy')
    cy.get(".social-auth-links .btn.btn-primary").click()
    cy.origin('https://olxgroup.okta-emea.com', () => {
      cy.get("#input43").type("andrei.manache@olx.ro")
      cy.get('#input43').should('have.value', 'andrei.manache@olx.ro')
      cy.get('#input51').type('Divinacomedie2!')
      cy.get('[data-se-for-name="rememberMe"]').click()
      cy.get('.o-form-button-bar input').click()
      cy.get('[data-se="okta_verify-push"] a').click()
      cy.get("#form107 > div.o-form-button-bar > input").click()

      cy.wait(10000);

      cy.visit('https://service-ccc.eks-01.shared.prd.eu-west-1.verticals.olx.org/aut/taxonomy/parameters/545/values/new')
    })
    // })

    // describe("Populate Database from Excel", () => {
    // it("Inserts data from Excel", () => {
    // Iterate through each data set (50 items per set)
    cy.get("@testData").each((data, index) => {
      // if ((index) % 2 === 0) {

      // Perform UI interactions to insert data for each item
      cy.get("#value").type(data.columnA);
      cy.get("#value_en").type(data.columnA);
      cy.get("#key").type(data.columnB);
      cy.get("#key_path").type(data.columnB);
      cy.get("#make").select('Byd');
      cy.get(".card-footer button").click();
      cy.get(".alert-success.alert-dismissible").should('contain.text', 'Parameter value inserted successfully');
      // Add a short delay to ensure the modal is closed before continuing
      cy.wait(1000);
      cy.get('.card-tools .btn-primary').click()

    });
  });
});

// })

// NEW BUTTON
// cy.get('.card-tools .btn-primary').click()

// ADD VALUES

// SELECT CATEGORY FROM DROPDOWN

// CHECK FOR CONFIRMATION MESSAGE

// SAVE