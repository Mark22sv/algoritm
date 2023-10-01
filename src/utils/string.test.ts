import { reverseString } from "./string";
import { ElementStates } from "../types/element-states";

describe('Корректно разворачивает строку', () => {
  const setState = jest.fn();

  const evalString = [
    {value: '1', state: ElementStates.Default},
    {value: '2', state: ElementStates.Default},
    {value: '3', state: ElementStates.Default},
    {value: '4', state: ElementStates.Default},
  ];

  const evalReverseString = [
    {value: '4', state: ElementStates.Modified},
    {value: '3', state: ElementStates.Modified},
    {value: '2', state: ElementStates.Modified},
    {value: '1', state: ElementStates.Modified},
  ];

  it('с чётным количеством символов', async () => {
    const reversedString = await reverseString(evalString, setState);
    expect(reversedString).toEqual(evalReverseString);
    expect(setState).toHaveBeenCalledWith(evalReverseString);
  });

  const oddString = [
    {value: '1', state: ElementStates.Default},
    {value: '2', state: ElementStates.Default},
    {value: '3', state: ElementStates.Default},
    {value: '4', state: ElementStates.Default},
    {value: '5', state: ElementStates.Default},
  ];

  const oddReverseString = [
    {value: '5', state: ElementStates.Modified},
    {value: '4', state: ElementStates.Modified},
    {value: '3', state: ElementStates.Modified},
    {value: '2', state: ElementStates.Modified},
    {value: '1', state: ElementStates.Modified},
  ];

  it('с нечётным количеством символов', async () => {
    const reversedString = await reverseString(oddString, setState);
    expect(reversedString).toEqual(oddReverseString);
    expect(setState).toHaveBeenCalledWith(oddReverseString);
  });


  const oneLetterString = [
    {value: '1', state: ElementStates.Default},
  ];

  const oneLetterReverseString = [
    {value: '1', state: ElementStates.Modified},
  ];

  it('с одним символом', async () => {
    const reversedString = await reverseString(oneLetterString, setState);
    expect(reversedString).toEqual(oneLetterReverseString);
    expect(setState).toHaveBeenCalledWith(oneLetterReverseString);
  });

  const emptyString = [
    {value: '', state: ElementStates.Default},
  ];

  const emptyReverseString = [
    {value: '', state: ElementStates.Modified},
  ];

  it('пустую строку', async () => {
    const reversedString = await reverseString(emptyString, setState);
    expect(reversedString).toEqual(emptyReverseString);
    expect(setState).toHaveBeenCalledWith(emptyReverseString);
  });

});
