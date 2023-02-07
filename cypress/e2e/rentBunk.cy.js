const { generateUser } = require('../support/generate');


describe('Tenant User', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to Sign Up', () => {
    const { firstName, lastName, email, phone, password } = generateUser();

    cy.contains('Sign Up')
      .click();

    cy.contains('Account type')
      .click();

    cy.contains('I am a Tenant')
      .click();

    cy.get('#signup-first-name')
      .type(firstName);

    cy.get('#signup-last-name')
      .type(lastName);

    cy.get('#signup-email')
      .type(email);

    cy.get('#signup-email-confirmation')
      .type(email);

    cy.get('#mat-input-6')
      .type(phone);

    cy.get('#signup-phone')
      .type(password);

    cy.contains('Create account')
      .click();
  });
});

describe('Landlord User', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide an ability to Sign Up', () => {
    const { firstName, lastName, email, phone, password } = generateUser();

    cy.contains('Sign Up')
      .click();

    cy.contains('Account type')
      .click();

    cy.contains('I am a Landlord')
      .click();

    cy.get('#signup-portfolio')
      .type('15');

    cy.get('#signup-first-name')
      .type(firstName);

    cy.get('#signup-last-name')
      .type(lastName);

    cy.get('#signup-email')
      .type(email);

    cy.get('#signup-email-confirmation')
      .type(email);

    cy.get('#mat-input-6')
      .type(phone);

    cy.contains('How did you hear about us?')
      .click();

    cy.get('#mat-option-229 > .mat-option-text')
      .click();
      
    cy.get('#signup-phone')
      .type(password);

    cy.contains('Create account')
      .click();

    cy.get('.nav-topbar__btn-user-name')
    .contains(firstName + ' ' + lastName);
  });
});