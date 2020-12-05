import React, { useEffect, useState } from 'react';
import clienteAxios from '../config/axiosGraph';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow
} from "grommet";
import Moment from 'react-moment';

const Chart = () => {

  const [data, setData] = useState([{}]);
  
  useEffect(() => {

    const getMatches = async () => {
        const response = await clienteAxios.post('api/matches', {
          query: `
            matches {
              homeTeam
              awayTeam
              homeGoals
              awayGoals
              ftr
              hst
              ast
            }
          `
        });
        setData(response.data);
    }

    getMatches();
    // eslint-disable-next-line
    }, []);


  return (  
    <Table>
          <TableHeader>
            <TableRow>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Home Team</strong></TableCell>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Away Team</strong></TableCell>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Home Goals</strong></TableCell>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Away Goals</strong></TableCell>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Winner</strong></TableCell>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Shoots to goal HOME</strong></TableCell>
            <TableCell align="center" size="small" scope="col" border="bottom"><strong>Shoots to goal AWAY</strong></TableCell>
            <TableCell align="end"scope="col" border="bottom"><strong></strong></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody data-testid="Cuerpo">
            {data.map((match) =>
              <TableRow className="data-row">
                <TableCell align="center" >{match.homeTeam}</TableCell>
                <TableCell align="center" >{match.awayTeam}</TableCell>
                <TableCell align="center" >{match.homeGoals}</TableCell>
                <TableCell align="center" >{match.awayGoals}</TableCell>
                <TableCell align="center" >{match.ftr}</TableCell>
                <TableCell align="center" >{match.hst}</TableCell>
                <TableCell align="center" >{match.ast}</TableCell>
              </TableRow>
            )}
          </TableBody>
      </Table>
  );
}
 
export default Chart;