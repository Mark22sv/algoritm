import renderer from 'react-test-renderer';
import { Circle } from './circle';
import { ElementStates } from '../../../types/element-states';

describe('Компонент Circle рендерится без ошибок', () => {
  it('Рендер Circle без буквы', () => {
    const tree = renderer
      .create(<Circle />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с буквами', () => {
    const tree = renderer
      .create(<Circle letter='ABC'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с head', () => {
    const tree = renderer
      .create(<Circle head={'1'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с react-элементом в head', () => {
    const tree = renderer
      .create(<Circle head={<Circle />}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с tail', () => {
    const tree = renderer
      .create(<Circle tail={'12'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с react-элементом в tail', () => {
    const tree = renderer
      .create(<Circle tail={<Circle />}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с index', () => {
    const tree = renderer
      .create(<Circle index={2} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle с пропом isSmall ===  true', () => {
    const tree = renderer
      .create(<Circle isSmall={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle в состоянии default', () => {
    const tree = renderer
      .create(<Circle state={ElementStates.Default} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle в состоянии changing', () => {
    const tree = renderer
      .create(<Circle state={ElementStates.Changing} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Рендер Circle в состоянии modified', () => {
    const tree = renderer
      .create(<Circle state={ElementStates.Modified} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

