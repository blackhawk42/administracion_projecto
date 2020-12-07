import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Equipo({team}) {
  const classes = useStyles();
 
  console.log(team);

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <h2 className = "card-header">
            {team.teamName}
      </h2>
        <img className = "card-img-top" src = {team.logo}  alt={`Imagen de LOGO`}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ganador
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}