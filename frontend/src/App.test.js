import React from 'react';
import App from './App';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';
import Deposits from './components/Deposits';
import listItems from './components/listItems';
import Orders from './components/Orders';
import Title from './components/Title';
import { Copyright } from './components/Dashboard';

import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

it('Sistema corriendo correctamente', () => {
    shallow(<App/>);
});

/*it('Dashboard corriendo correctamente', () => {
  shallow(<Dashboard/>);
});*/

it('Chart corriendo correctamente', () => {
  shallow(<Chart/>);
});

it('Deposits corriendo correctamente', () => {
  shallow(<Deposits/>);
});

it('list Items corriendo correctamente', () => {
  shallow(<listItems/>);
});

it('Orders corriendo correctamente', () => {
  shallow(<Orders/>);
});

it('Title corriendo correctamente', () => {
  shallow(<Title/>);
});

/*it('Titulo correcto', () => {
  const {getByTestId} = render(<Dashboard/>);
  expect(getByTestId('titulo').textContent).toBe("Deportes APP")
});

it('Footer correcto', () => {
  const {getByTestId} = render(<Dashboard/>);
  expect(getByTestId('footer').textContent).toBe("Copyright © Equipo deportes 2020.");
});

it('Copyright correcto', () => {
  const {getByTestId} = render(<Dashboard/>);
  expect(getByTestId('footer1').textContent).toBe("Copyright © Equipo deportes 2020.");
})*/

it('Mas informacion correcto', () => {
  const {getByTestId} = render(<Deposits/>);
  expect((getByTestId('Masinfo').textContent)).toBe("Más información")
});

it('Titulo correcto de Charts', () => {
  const {getByTestId} = render(<Chart/>);
  expect((getByTestId('titulo grafica').textContent)).toBe("Datos")
});

it('Nombre del equipo favorito correcto', () => {
  const {getByTestId} = render(<Deposits/>);
  expect((getByTestId('equipoFav').textContent)).toBe("Cruz Azul")
});

