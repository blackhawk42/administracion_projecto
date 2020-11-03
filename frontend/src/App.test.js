import React from 'react';
import App from './App';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';
import Deposits from './components/Deposits';
import listItems from './components/listItems';
import Orders from './components/Orders';
import Title from './components/Title';
import Copyright from './components/Copyright'
//import { Copyright } from './components/Dashboard';
import Token from './config/token';

import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import ShallowRenderer from 'react-test-renderer/shallow';


it('Sistema corriendo correctamente', () => {
    shallow(<App/>);
});

it('Dashboard corriendo correctamente', () => {
  shallow(<Dashboard/>);
});

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

it('Copyright corriendo correctamente', () => {
  shallow(<Copyright/>);
});

/*it('Titulo correcto', () => {
  const {getByTestId} = render(<Dashboard/>);
  expect(getByTestId('titulo').textContent).toBe("Deportes APP")
});

it('Footer correcto', () => {
  const {getByTestId} = render(<Dashboard/>);
  expect(getByTestId('footer').textContent).toBe("Copyright © Equipo deportes 2020.");
});

*/ 

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

it('prueba1', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  const token = localStorage.getItem('token');
  expect(token).toBe(localStorage.getItem('token'))
});

it('Genera TableBody', () => {
  const {getByTestId} = render(<Orders/>);
  expect((getByTestId('Cuerpo'))).toBeTruthy()
});
/*
it('Autentifica token', () => {
  const  = render(<token/>);
  expect((getByTestId())).toHaveBeenCalledWith(expect.anything())
});*/

/*it('Copyright correcto', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper.containsMatchingElement(<Copyright />)).toEqual(true);
  //const {getByTestId} = render(<Dashboard/>);
  //expect(getByTestId('footer1')).anything();
  //expect(getByTestId('footer1')).anything();
});*/

/*
it('Abre HandleDrawer', () {

});

it('Cierra HandleDrawer', () {

});
*/
