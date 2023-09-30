import renderer from 'react-test-renderer';
import { Button } from './button';
import { render, screen, fireEvent } from "@testing-library/react";

describe('Компонент Button рендерится без ошибок', () => {
  it('Рендер кнопки с текстом', () => {
    const tree = renderer
      .create(<Button text='Я кнопка' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер кнопки без текста', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер заблокированной кнопки', () => {
    const tree = renderer
      .create(<Button disabled={ true } />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер кнопки с лоадером', () => {
    const tree = renderer
      .create(<Button isLoader={ true } />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Проверка работы кнопки', () => {
  it('Нажатие на кнопку вызывает корректный Alert', () => {
    window.alert = jest.fn();
    // Рендерим компонент
    render(<Button text='Click' onClick={() => alert('Кнопка была нажата')} />);
    // Находим элемент ссылки
    const button = screen.getByText('Click');
    // Имитируем нажатие на ссылку
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Кнопка была нажата');
  });
});
