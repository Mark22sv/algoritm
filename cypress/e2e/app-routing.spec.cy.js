import { FIBONACCI_PAGE, LIST_PAGE, MAIN_PAGE, QUEUE_PAGE, SORTING_PAGE, STACK_PAGE, STRING_PAGE } from "../support/constants";

describe('Тестирование переходов по страницам', () => {
  
  it('Приложение запустилось', () => {
    cy.visit(MAIN_PAGE);
    cy.get('h1').should('have.text', 'МБОУ АЛГОСОШ');
    cy.get('a').should('have.length', '6');
  });

  it('Посетить страницу с алгоритмом Строка', () => {
    cy.visit(STRING_PAGE);
    cy.contains('Строка');
  });

  it('Посетить страницу с алгоритмом Последовательность Фибоначчи', () => {
    cy.visit(FIBONACCI_PAGE);
    cy.contains('Последовательность Фибоначчи');
  });

  it('Посетить страницу с алгоритмом Сортировка массива', () => {
    cy.visit(SORTING_PAGE);
    cy.contains('Сортировка массива');
  });

  it('Посетить страницу с алгоритмом Стек', () => {
    cy.visit(STACK_PAGE);
    cy.contains('Стек');
  });

  it('Посетить страницу с алгоритмом Очередь', () => {
    cy.visit(QUEUE_PAGE);
    cy.contains('Очередь');
  });

  it('Посетить страницу с алгоритмом Связный список', () => {
    cy.visit(LIST_PAGE);
    cy.contains('Связный список');
  });


})

