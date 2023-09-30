import { selectionSort, bubbleSort } from "./sorting";

describe('Корректно сортирует', () => {
  const setSortingIndex = jest.fn();
  const setSortedIndex = jest.fn();
  const setNumArr = jest.fn();

  it('выбором пустой массив', async () => {
    const selectionSorted = await selectionSort([], true, setSortingIndex, setSortedIndex, setNumArr);
    expect(selectionSorted).toEqual([]);
    expect(setNumArr).toHaveBeenCalledWith([]);
  });

  it('пузырьком пустой массив', async () => {
    const bubbleSorted = await bubbleSort([], true, setSortingIndex, setSortedIndex, setNumArr);
    expect(bubbleSorted).toEqual([]);
    expect(setNumArr).toHaveBeenCalledWith([]);
  });

  const oneNumberArr = [1];
  const oneNumberSortedArr = [1];

  it('выбором массив из одного элемента', async () => {
    const selectionSorted = await selectionSort(oneNumberArr, true, setSortingIndex, setSortedIndex, setNumArr);
    expect(selectionSorted).toEqual(oneNumberSortedArr);
    expect(setNumArr).toHaveBeenCalledWith(oneNumberSortedArr);
  });

  it('пузырьком массив из одного элемента', async () => {
    const bubbleSorted = await bubbleSort(oneNumberArr, true, setSortingIndex, setSortedIndex, setNumArr);
    expect(bubbleSorted).toEqual(oneNumberSortedArr);
    expect(setNumArr).toHaveBeenCalledWith(oneNumberSortedArr);
  });

  const numberArr = [10, 2, 35, 4];
  const numberSortedArr = [2, 4, 10, 35];

  it('выбором массив из нескольких элементов', async () => {
    const selectionSorted = await selectionSort(numberArr, true, setSortingIndex, setSortedIndex, setNumArr);
    expect(selectionSorted).toEqual(numberSortedArr);
    expect(setNumArr).toHaveBeenCalledWith(numberSortedArr);
  });

  it('пузырьком массив из нескольких элемента', async () => {
    const bubbleSorted = await bubbleSort(numberArr, true, setSortingIndex, setSortedIndex, setNumArr);
    expect(bubbleSorted).toEqual(numberSortedArr);
    expect(setNumArr).toHaveBeenCalledWith(numberSortedArr);
  });

});

