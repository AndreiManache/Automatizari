describe('template spec', () => {

  const numberOfIterations = 50;



  for (let i = 1; i <= numberOfIterations; i++) {

    it(`Iteration ${i} - passes`, () => {

      cy.visit('https://www.autovit.ro/vinde?from=postAdButton')
      cy.get("#onetrust-accept-btn-handler").click();
      cy.get('#__next > div > div > div > div.ooa-lcsd53.e137gw2t3 > main > section:nth-child(1) > div > article > div > div > button > span > span').click();
      cy.get("#__next > div > div > div > div > main > div > div.css-ymo82s > div > form > div.css-1a74nwz > div > div > input").type("andrei.manache@olx.ro")
      cy.get('#__next > div > div > div > div > main > div > div.css-ymo82s > div > form > div.css-1a74nwz > div > div > input').should('have.value', 'andrei.manache@olx.ro')
      cy.get('#__next > div > div > div > div > main > div > div.css-ymo82s > div > form > div.css-1gs5ebu > div > div > div > input').type('Divinacomedie2!')
      cy.get('#__next > div > div > div > div > main > div > div.css-ymo82s > div > form > button.css-1m3y0q6 > span > span').click();

      cy.get('#is_imported_car > div:nth-child(1) > button').should('be.visible');
      cy.get('#is_imported_car > div:nth-child(1) > button').click();

      cy.get('#mileage > div > div > input').type('10000');

      cy.get('#year > div > div > input').click();
      cy.get('#year > div > ul > li:nth-child(1) > div > div > div > div > span').click();

      cy.get('#make > div > div > button > svg').click();
      cy.get('#make > div > ul > li:nth-child(103) > div > div > div > div > span').click();

      cy.get('#model > div > div > input').click();
      cy.get('#model > div > ul > li:nth-child(1) > div > div > div > div > span').click();

      cy.get('#fuel_type > div > div > input').click();
      cy.get('#fuel_type > div > ul > li:nth-child(1) > div > div > div > div > span').click();
      cy.on('uncaught:exception', (err, runnable) => {
        // Handle the error without failing the test
        // You can log the error, assert its properties, or perform any other actions
        // Return false to prevent Cypress from failing the test
        return false;
      });

      cy.get('#engine_power > div > div > input').type('120');
      cy.get('#engine_power > div > div > input').should('have.value', '120')

      cy.get('#engine_capacity > div > div > input').click({ force: true });
      cy.get('#engine_capacity > div > div > input').type('1490');

      cy.get('#door_count > div > div > input').click({ force: true });
      cy.get('#door_count > div > div > input').click();
      cy.get('#door_count > div > ul > li:nth-child(3)').click();

      cy.get('#gearbox > div > div > input').click();
      cy.get('#gearbox > div > ul > li:nth-child(1) > div > div > div > div > span').click();

      cy.get('#version > div > div > input').click();
      cy.get('#version > div > ul > li > div > div > div > div > span').click();

      cy.get('#body_type > div > div > input').click();
      cy.get('#body_type > div > ul > li:nth-child(4) > div > div > div > div > span').click();

      cy.get('#color > div > div > input').click();
      cy.get('#color > div > ul > li:nth-child(5) > div > div > div > div > span').click();

      cy.get('#price > div > div > input').type('20000');

      cy.get('#__next > div > div > div > div.ooa-30b9tx.e4emyt33 > form > div.ooa-ao8wph.e12qm28y1 > footer > div > button.e1qww7qk1.e998fon0.ooa-8m5mei > span').click();
      cy.get('#siteWrap > main > div:nth-child(7) > div > div > a:nth-child(2) > button').should('be.visible');
      cy.get('#siteWrap > main > div:nth-child(7) > div > div > a:nth-child(2) > button').click();
      cy.get('#__next > main > div.ooa-4j61ku.e1qrqq8q8 > div > div > div.ooa-g51bkg.e1qrqq8q2 > div > div > button > span > span').click();
    })
  }
})

