import { INPUT, BUTTON, FIBONACCI_PAGE, CIRCLE, DELAY_IN_MS } from "../support/constants";

describe('Фибоначи', () => {
  beforeEach(() => {
    cy.visit(FIBONACCI_PAGE);
  });

  it('Если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get(INPUT).first().should('have.value', '');
    cy.get(BUTTON).contains('Рассчитать').parent().should('be.disabled');
  });

  it('Числа генерируются корректно', () => {
    cy.get(INPUT).type('4');
    cy.get(BUTTON).contains('Рассчитать').parent().should('not.be.disabled').click();

    cy.get(CIRCLE).eq(0).contains('1');

    cy.wait(DELAY_IN_MS);

    cy.get(CIRCLE).eq(1).contains('1');

    cy.wait(DELAY_IN_MS);

    cy.get(CIRCLE).eq(2).contains('2');

    cy.wait(DELAY_IN_MS);

    cy.get(CIRCLE).eq(3).contains('3');

    cy.wait(DELAY_IN_MS);

    cy.get(CIRCLE).eq(4).contains('5');

    cy.get(INPUT).clear();
    cy.get(BUTTON).contains("Рассчитать").parent().should('be.disabled');
  });
});
