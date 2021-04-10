import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';

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

describe('Ex02 - Comportamentos básicos do jogo', () => {
  it('1 - O jogador inicial deve ser 0 \'X\'', () => {
    const app = render(<App />);
    const currentPlayer = app.getByText(/Current player: X/);
    expect(currentPlayer).toBeInTheDocument();
  });

  it('2 - Quando o jogador clica numa célula, a imagem da marcação correspondente deve preenchê-la', () => {
    const app = render(<App />);
    const randomCell = Math.floor(Math.random() * 9);
    const allCells = app.getAllByTestId(/cell_[0-9]/);
    fireEvent.click(allCells[randomCell]);

    const xMark = app.getByAltText(/[X|O] mark/)
    expect(xMark).toBeInTheDocument();
  });

  it('3 - Quando o primeiro jogador (X) clica numa célula, a próxima jogada será para o jogador "O"', () => {
    const app = render(<App />);
    const allCells = app.getAllByTestId(/cell_[0-9]/);
    fireEvent.click(allCells[0]);

    const currentPlayer = app.getByText(/Current player: O/);
    expect(currentPlayer).toBeInTheDocument();
  });

  it('4 - As casas marcadas não podem ser modificadas e nada deve acontecer', () => {
    const app = render(<App />);
    const allCells = app.getAllByTestId(/cell_[0-9]/);
    const testedCell = allCells[Math.floor(Math.random() * 9)];

    fireEvent.click(testedCell); // Current user: 0
    fireEvent.click(testedCell); // Current user: 0

    const currentPlayer = app.getByText(/Current player/);
    expect(currentPlayer).toHaveTextContent(/Current player: O/);
  });


  it('5 - Ao clicar na casa escolhida, a casa deve ser modificada para possuir a marcação do jogador, X ou O', () => {
    const app = render(<App />);
    const allCells = app.getAllByTestId(/cell_[0-9]/);
    const testedCell = (x)=>allCells[x];

    let currentPlayer = app.getByText(/Current player/);
    
    fireEvent.click(testedCell(0)); // Current user: O
    expect(currentPlayer).toHaveTextContent(/Current player: O/);

    fireEvent.click(testedCell(1)); // Current user: X
    expect(currentPlayer).toHaveTextContent(/Current player: X/);
  });
});