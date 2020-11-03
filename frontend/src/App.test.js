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
import alertaReducer from './context/alertas/alertaReducer';
import  * as types from './types/index.js';

import { shallow, ShallowWrapper } from 'enzyme';
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import ShallowRenderer from 'react-test-renderer/shallow';

describe('App', () => {
  it('Sistema corriendo correctamente', () => {
      shallow(<App/>);
  });

  it('prueba1', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const token = localStorage.getItem('token');
    expect(token).toBe(localStorage.getItem('token'))
  });
});

describe('Dashboard', () => {
  it('Dashboard corriendo correctamente', () => {
    shallow(<Dashboard/>);
  });
});

describe('Chart', () => {
  it('Chart corriendo correctamente', () => {
    shallow(<Chart/>);
  });

  it('Titulo correcto de Charts', () => {
    const {getByTestId} = render(<Chart/>);
    expect((getByTestId('titulo grafica').textContent)).toBe("Datos")
  });
});

describe('Deposits', () => {
  it('Deposits corriendo correctamente', () => {
    shallow(<Deposits/>);
  });

  it('Nombre del equipo favorito correcto', () => {
    const {getByTestId} = render(<Deposits/>);
    expect((getByTestId('equipoFav').textContent)).toBe("Cruz Azul")
  });
});

describe('Orders', () => {
  it('Orders corriendo correctamente', () => {
    shallow(<Orders/>);
  });

  it('Genera TableBody', () => {
    const {getByTestId} = render(<Orders/>);
    expect((getByTestId('Cuerpo'))).toBeTruthy()
  });
});

describe('listItems', () => {
  it('list Items corriendo correctamente', () => {
    shallow(<listItems/>);
  });
});

describe('Title', () => {
  it('Title corriendo correctamente', () => {
    shallow(<Title/>);
  });
});

describe('Copyright', () => {
  it('Copyright corriendo correctamente', () => {
    shallow(<Copyright/>);
  });
});

it('alertaReducer', () => {
    expect(alertaReducer([{"alerta": null}], 'Todos los campos son obligatorios', 'alerta-error')).toEqual([
      {
        alerta: null
      }
    ])
  });

  it('alertaReducer', () => {
      expect(
        alertaReducer([{"alerta": true}], {
          type: types.MOSTRAR_ALERTA,
          alerta: true
        })
      ).toEqual({"alerta": undefined})

      expect(
        alertaReducer(
          [
            {
              text: 'Use Redux',
              completed: false,
              id: 0
            }
          ],
          {
            type: types.OCULTAR_ALERTA,
            text: 'Run the tests'
          }
        )
      ).toEqual(
        {"alerta": null}
      )
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
