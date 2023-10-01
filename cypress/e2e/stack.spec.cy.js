import { INPUT, BUTTON, CIRCLE, STACK_PAGE, COLOR_MODIFIED, CIRCLE_HEAD, DELAY_IN_MS, COLOR_DEFAULT, CIRCLE_TAIL, CIRCLE_INDEX } from "../support/constants";

describe('Стек', () => {
  beforeEach(() => {
    cy.visit(STACK_PAGE);
  });

  it('Если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get(INPUT).first().should('have.value', '');
    cy.get(BUTTON).parent().contains('Добавить').should('be.disabled');
  });

  it('Проверка правильности добавления, удаления элемента в стек и его очистка. Цвета элементов меняются и каждый шаг анимации отрабатывает корректно.', () => {
    cy.get(BUTTON).parent().contains('Добавить').as('addButton');
    cy.get(BUTTON).parent().contains('Удалить').as('delButton');
    cy.get(BUTTON).parent().contains('Очистить').as('cleanButton');

    cy.get(INPUT).type('2');
    cy.get('@addButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(0).should('have.css', 'border', COLOR_MODIFIED).contains('2');
    cy.get(CIRCLE_HEAD).eq(0).contains('top');
    cy.get(CIRCLE_INDEX).eq(0).contains('0');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(0).should('have.css', 'border', COLOR_DEFAULT).contains('2');

    cy.get(INPUT).type('4');
    cy.get('@addButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(1).should('have.css', 'border', COLOR_MODIFIED).contains('4');
    cy.get(CIRCLE_HEAD).eq(1).contains('top');
    cy.get(CIRCLE_INDEX).eq(0).contains('0');
    cy.get(CIRCLE_INDEX).eq(1).contains('1');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(1).should('have.css', 'border', COLOR_DEFAULT).contains('4');

    cy.get(INPUT).type('7');
    cy.get('@addButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(2).should('have.css', 'border', COLOR_MODIFIED).contains('7');
    cy.get(CIRCLE_HEAD).eq(2).contains('top');
    cy.get(CIRCLE_INDEX).eq(0).contains('0');
    cy.get(CIRCLE_INDEX).eq(1).contains('1');
    cy.get(CIRCLE_INDEX).eq(2).contains('2');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(2).should('have.css', 'border', COLOR_DEFAULT).contains('7');

    cy.get('@delButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(0).should("exist");
    cy.get(CIRCLE).eq(1).should("exist");
    cy.get(CIRCLE).eq(2).should('not.exist');
    cy.get(CIRCLE_INDEX).eq(0).should("exist");
    cy.get(CIRCLE_INDEX).eq(1).should("exist");
    cy.get(CIRCLE_INDEX).eq(2).should('not.exist');

    cy.get('@cleanButton').should('not.be.disabled').click();
    cy.get(CIRCLE).should('not.exist');
    cy.get(CIRCLE_INDEX).should('not.exist');
  });

});
