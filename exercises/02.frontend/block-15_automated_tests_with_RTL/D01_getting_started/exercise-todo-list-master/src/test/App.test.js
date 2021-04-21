import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercício 1 - Testando o botão de adicionar tarefa', () => {
  it('Existe um botão com o texto /Adicionar/?', () => {
    const obj = render(<App />);
    const btnSend = obj.getByText(/Adicionar/i);
    expect(btnSend).toBeInTheDocument();
  });

  it('Verifica se o botão tem value /Adicionar/', () => {
    const obj = render(<App />);
    const btnSend = obj.getByText(/Adicionar/i);
    expect(btnSend.value).toBe('Adicionar');
  });

  it('Verifica se a tarefa digitada é salva', () => {
    const obj = render(<App />);

    //Elements
    const input = obj.container.querySelector('#inputTodo');
    const addBtn = obj.container.querySelector('#btnAdd');

    const listItem = 'Item da lista';

    fireEvent.change(input, { target: { value: listItem } });

    fireEvent.click(addBtn);
    const listElement = obj.getByText(listItem);

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveTextContent(listItem);
  })
});

describe('Exercício 2 - Testando o componente <Item />', () => {
  const tasks = ['item1', 'item2', 'item3'];
  const task = 'Task de exemplo'

  it('Verifica se são renderizados bár tarefas na lista', () => {
    const itemComponents = tasks.map((task, i) => <Item key={i + 1} content={task} />)
    const obj = render(
      <div>{itemComponents}</div>
    );

    const items = obj.getAllByText(/item/);
    expect(items.length).toBe(3);

    items.forEach((itemElement, index) => {
      expect(itemElement).toHaveTextContent(tasks[index]);
    })
  });

  it('Renderiza o componente na tela com uma string específica', () => {
    const obj = render(<Item content={task} />);
    const itemElement = obj.getByText(task);
    expect(itemElement).toHaveTextContent(task);
  })
});