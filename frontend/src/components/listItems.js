import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DoneIcon from '@material-ui/icons/Done';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estadisticas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DoneIcon />
      </ListItemIcon>
      <ListItemText primary="Predicciones" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SportsSoccerIcon />
      </ListItemIcon>
      <ListItemText primary="Ultimos Resultados" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Suscripciones" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Usuario</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Ajustes" />
    </ListItem>

  </div>
);