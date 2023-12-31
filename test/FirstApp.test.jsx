import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

  // test('Debe hacer math con el snapshot', () => {

  //   const title = 'Hola soy vegeta';

  //   const { container } = render( <FirstApp title={ title } /> );
  //   expect( container ).toMatchSnapshot();

  // });

  test('should mostrar el titulo en un <h1/>', () => {

    const title = 'Hola soy vegeta';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect( h1.innerHTML ).toContain( title );

    // expect( getByTestId('test-title') ).toBe( title );
    expect( getByTestId('test-title').innerHTML ).toContain( title );

  });

  test('should mostrar el subtitle enviado por "props"', () => {

    const title = 'Hola soy vegeta';
    const subTitle = 'Soy un subtitulo';
    // const { getAllByText } = render( 
    const { getByText } = render( 
      <FirstApp 
        title={ title }
        subTitle={ subTitle }
      /> 
    );

    expect( getByText(subTitle) ).toBeTruthy();
    // expect( getAllByText(subTitle).length ).toBe(2);

  });

});