import { INPUT, BUTTON, CIRCLE, COLOR_MODIFIED, CIRCLE_HEAD, DELAY_IN_MS, COLOR_DEFAULT, CIRCLE_TAIL, QUEUE_PAGE } from "../support/constants";

describe('Очередь', () => {
  beforeEach(() => {
    cy.visit(QUEUE_PAGE);
  });

  it('Если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get(INPUT).first().should('have.value', '');
    cy.get(BUTTON).parent().contains('Добавить').should('be.disabled');
  });

  it('Проверка правильности добавления, удаления элемента в очередь и его очистка. Цвета элементов меняются и каждый шаг анимации отрабатывает корректно. Проверка корректности отрисовки курсоров head и tail', () => {
    cy.get(BUTTON).parent().contains('Добавить').as('addButton');
    cy.get(BUTTON).parent().contains('Удалить').as('delButton');
    cy.get(BUTTON).parent().contains('Очистить').as('cleanButton');

    cy.get(INPUT).type('2');
    cy.get('@addButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(0).should('have.css', 'border', COLOR_MODIFIED).contains('2');
    cy.get(CIRCLE).eq(0).get(CIRCLE_HEAD).contains('head');
    cy.get(CIRCLE).eq(0).get(CIRCLE_TAIL).contains('tail');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(0).should('have.css', 'border', COLOR_DEFAULT).contains('2');

    cy.get(INPUT).type('4');
    cy.get('@addButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(1).should('have.css', 'border', COLOR_MODIFIED).contains('4');
    cy.get(CIRCLE).eq(0).get(CIRCLE_HEAD).contains('head');
    cy.get(CIRCLE).eq(1).get(CIRCLE_TAIL).contains('tail');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(1).should('have.css', 'border', COLOR_DEFAULT).contains('4');

    cy.get(INPUT).type('7');
    cy.get('@addButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(2).should('have.css', 'border', COLOR_MODIFIED).contains('7');
    cy.get(CIRCLE).eq(0).get(CIRCLE_HEAD).contains('head');
    cy.get(CIRCLE).eq(2).get(CIRCLE_TAIL).contains('tail');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(2).should('have.css', 'border', COLOR_DEFAULT).contains('7');

    cy.get('@delButton').should('not.be.disabled').click();
    cy.get(CIRCLE).eq(0).should('have.css', 'border', COLOR_MODIFIED);
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(0).should('have.css', 'border', COLOR_DEFAULT);
    cy.get(CIRCLE).eq(1).get(CIRCLE_HEAD).contains('head');
    cy.get(CIRCLE).eq(2).get(CIRCLE_TAIL).contains('tail');

    cy.get('@cleanButton').should('not.be.disabled').click();
    cy.get(CIRCLE).each(element => cy.wrap(element).should('have.text', ''));
  });

});
