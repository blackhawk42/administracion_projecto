import React, { createContext, useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';


export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [team1, setTeam1] = useState({});
    const [team2, setTeam2] = useState({});
    const [busqueda, buscarRecetas] = useState({
        local: '',
        visita: ''
    });
    const [ consultar, guardarConsultar] = useState(false);

    const { local, visita} = busqueda;

    useEffect(() => {
        if(consultar) {

            const obtenerRecetas = async () => {
                const response = await clienteAxios.post('/teams/',
                {
                    homeTeam: local,
                    awayTeam: visita
                }

                );
                setTeam1(response.data.team1);
                setTeam2(response.data.team2);
            }

            obtenerRecetas();
        }

    }, [busqueda]);

    return ( 
        <RecetasContext.Provider
            value={{
                team1,
                team2,
                buscarRecetas, 
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;