import { INPUT, BUTTON, CIRCLE, SMALL_CIRCLE, DELAY_IN_MS, CIRCLE_TAIL, LIST_PAGE } from "../support/constants";

describe('Список', () => {
  beforeEach(() => {
    cy.visit(LIST_PAGE);
  });

  it('При остутвии ввода кнопки неактивны', () => {
    cy.get(INPUT).eq(0).should('have.value', '');
    cy.get(INPUT).eq(1).should('have.value', '');
    cy.get(BUTTON).contains("Добавить в head").parent().should('be.disabled');
    cy.get(BUTTON).contains("Добавить в tail").parent().should('be.disabled');
    cy.get(BUTTON).contains("Добавить по индексу").parent().should('be.disabled');
    cy.get(BUTTON).contains("Удалить по индексу").parent().should('be.disabled');
  });

  it('Проверка отрисовки дефолтного списка', () => {
    cy.get(CIRCLE).eq(0).should('have.text', '13');
    cy.get(CIRCLE).eq(1).should('have.text', '21');
    cy.get(CIRCLE).eq(2).should('have.text', '45');
    cy.get(CIRCLE).eq(3).should('have.text', '32');
  });

  it('Проверка добавления элемента в tail, добавления элемента по индексу, удаления элемента из head, удаления элемента из tail, удаления элемента по индексу', () => {
    cy.get(BUTTON).contains("Добавить в head").parent().as('addInHeadButton');
    cy.get(BUTTON).contains("Добавить в tail").parent().as('addInTailButton');
    cy.get(BUTTON).contains("Добавить по индексу").parent().as('addByIndexButton');
    cy.get(BUTTON).contains("Удалить по индексу").parent().as('deleteByIndexButton');
    cy.get(BUTTON).contains("Удалить из head").parent().as('deleteInHeadButton');
    cy.get(BUTTON).contains("Удалить из tail").parent().as('deleteInTailButton');
    cy.get(INPUT).eq(0).as('addInput');
    cy.get(INPUT).eq(1).as('addByIndexInput');


    cy.get("@addInput").type('0');
    cy.get('@addInHeadButton').click();
    cy.get(SMALL_CIRCLE).contains('0');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(0).contains('0');

    cy.get("@addInput").type('1');
    cy.get('@addInTailButton').click();
    cy.get(SMALL_CIRCLE).contains('1');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(5).contains('1');
    cy.get(CIRCLE).eq(5).get(CIRCLE_TAIL).contains('tail')

    cy.get('@deleteInHeadButton').click();
    cy.get(SMALL_CIRCLE).contains('0');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(0).contains('13');

    cy.get('@deleteInTailButton').click();
    cy.get(SMALL_CIRCLE).contains('1');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(3).contains('32');

    cy.get("@addInput").type('0');
    cy.get('@addByIndexInput').type('1');
    cy.get('@addByIndexButton').click();
    cy.get(SMALL_CIRCLE).contains('0');
    cy.wait(DELAY_IN_MS);
    cy.get(CIRCLE).eq(1).contains('0');

    cy.get('@addByIndexInput').clear();
    cy.get('@addByIndexInput').type('1');
    cy.get('@deleteByIndexButton').click();
    cy.wait(DELAY_IN_MS);
    cy.get(SMALL_CIRCLE).contains('0');
    cy.get(CIRCLE).eq(1).contains('21');
  });
});
