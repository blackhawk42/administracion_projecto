import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center" data-testid = "footer1">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Equipo deportes
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
export default Copyright;