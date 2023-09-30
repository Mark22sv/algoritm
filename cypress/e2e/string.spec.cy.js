import { BUTTON, INPUT, CIRCLE, STRING_PAGE, COLOR_DEFAULT, COLOR_CHANGING, COLOR_MODIFIED, DELAY_IN_MS } from "../support/constants"

describe('Строка', () => {
  beforeEach(() =>{
    cy.visit(STRING_PAGE);
  });

  it('Если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get(INPUT).first().should('have.value', '');
    cy.get(BUTTON).contains('Развернуть').parent().should('be.disabled');
  });

  it('Строка разворачивается корректно. На каждом шаге анимации проверки на корректность выполненной операции и корректность стилей', () => {
    cy.clock();

    cy.get(INPUT).type('test');
    cy.get(CIRCLE).eq(0).should("have.css", "border", COLOR_DEFAULT);
    cy.get(CIRCLE).eq(1).should("have.css", "border", COLOR_DEFAULT);
    cy.get(CIRCLE).eq(2).should("have.css", "border", COLOR_DEFAULT);
    cy.get(CIRCLE).eq(3).should("have.css", "border", COLOR_DEFAULT);

    cy.get(BUTTON).contains('Развернуть').parent().should('not.be.disabled').click();
    cy.get(CIRCLE).eq(0).should("have.css", "border", COLOR_CHANGING).contains('t');
    cy.get(CIRCLE).eq(1).should("have.css", "border", COLOR_DEFAULT).contains('e');
    cy.get(CIRCLE).eq(2).should("have.css", "border", COLOR_DEFAULT).contains('s');
    cy.get(CIRCLE).eq(3).should("have.css", "border", COLOR_CHANGING).contains('t');

    cy.tick(DELAY_IN_MS);

    cy.get(CIRCLE).eq(0).should("have.css", "border", COLOR_MODIFIED).contains('t');
    cy.get(CIRCLE).eq(1).should("have.css", "border", COLOR_CHANGING).contains('e');
    cy.get(CIRCLE).eq(2).should("have.css", "border", COLOR_CHANGING).contains('s');
    cy.get(CIRCLE).eq(3).should("have.css", "border", COLOR_MODIFIED).contains('t');

    cy.tick(DELAY_IN_MS);

    cy.get(CIRCLE).eq(0).should("have.css", "border", COLOR_MODIFIED).contains('t');
    cy.get(CIRCLE).eq(1).should("have.css", "border", COLOR_MODIFIED).contains('s');
    cy.get(CIRCLE).eq(2).should("have.css", "border", COLOR_MODIFIED).contains('e');
    cy.get(CIRCLE).eq(3).should("have.css", "border", COLOR_MODIFIED).contains('t');

    cy.get(INPUT).clear();
    cy.get(BUTTON).contains("Развернуть").parent().should('be.disabled');

  });
});
