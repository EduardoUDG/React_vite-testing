import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string-test', () => { 

  test('getSaludo debe retornar "Hola Eduardo"', () => {

    const name = 'Eduardo';    
    const message = getSaludo(name);

    expect( message ).toBe(`Hola ${name}`)

  });

});