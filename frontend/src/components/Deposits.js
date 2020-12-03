import React from 'react';
import Link from '@material-ui/core/Link';
import Title from './Title';

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Favorito</Title>
      <div data-testid="equipoFav" align="center">
      Cruz Azul
      <br></br>
      <img src = 'https://upload.wikimedia.org/wikipedia/commons/7/74/Escudo_del_Cruz_Azul.svg' width="50%" alt="azul"/>
      </div>
    </React.Fragment>
  );
}
