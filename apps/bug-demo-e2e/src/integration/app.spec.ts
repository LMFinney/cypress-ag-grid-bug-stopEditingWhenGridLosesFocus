import { assertGridValues, setModel, setPrice } from '../support/app.po';

describe('bug-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should show and change values', () => {
    assertGridValues([
      { make: 'Toyota', model: 'Celica', price: '35000' },
      { make: 'Ford', model: 'Mondeo', price: '32000' },
      { make: 'Porsche', model: 'Boxter', price: '72000' }
    ]);

    setModel(0, 'Prius');
    setPrice(1, '12345');

    assertGridValues([
      { make: 'Toyota', model: 'Prius', price: '35000' },
      { make: 'Ford', model: 'Mondeo', price: '12345' },
      { make: 'Porsche', model: 'Boxter', price: '72000' }
    ]);
  });
});
