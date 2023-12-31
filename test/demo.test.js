describe('Pruebas en <DemoComponent />', () => {

  test('should first', () => {

    // 1. inicialización
    const message1 = 'Hola mundo';
  
    // 2. estimulo
    const message2 = message1.trim();
  
    // 3. observar el comportamiento... esperado
    expect( message1 ).toBe( message2 );
  
  })

})