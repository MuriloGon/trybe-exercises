import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('Ex01 - Configurações iniciais de jogo', () => {

  it('1 - Campos são inicialmente vazios.', () => {
    const app = render(<App />);
    const emptyFields = app.getAllByTestId(/cell_[0-9]+/);
    emptyFields.forEach(el => {
      expect(el.children.length).toBe(0);
    });
  });

  it('2 - Inicialmente não deve aparecer a \'Fim de jogo\'.', () => {
    const app = render(<App />);
    const endGameMsg = app.queryByText('Fim de jogo');
    expect(endGameMsg).toBeNull()
  });

  it('3 - Nove casas (9) devem ser renderizadas.', () => {
    const app = render(<App />);
    const emptyFields = app.getAllByTestId(/cell_[0-9]+/);
    expect(emptyFields.length).toBe(9);
  });
});