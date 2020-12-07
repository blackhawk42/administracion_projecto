import React, {useContext, useState, useEffect} from 'react';
import { RecetasContext } from '../context/prediccion/RecetasContext';
import Equipo from './Equipo';
import clienteAxios from '../config/axiosTensor';

const ListaPrediccion = () => {
    
    //Extraer las recetas
    const{team1, team2} = useContext(RecetasContext);
    const [team, setTeam] = useState({});
    const [dataTeam1, setDataTeam1] = useState(0);
    const [dataTeam2, setDataTeam2] = useState(0);

    //console.log(team1);

    useEffect(() => {

        if(team1[0] && team2[0]){

        const getPrediction = async () => {
            const response = await clienteAxios.post('/v1/models/my_model:predict', {
                "instances" : [[team1[0].goalsPerMatches, team2[0].goalsPerMatches]]
            });
            if (response.data.predictions[0] < 0) {
                setTeam(team2);
            }
            else{
                setTeam(team1);
            }
        }

        getPrediction();
        }
        // eslint-disable-next-line
    }, [team1, team2]);


    if(!team[0])
    return null;

    return (
         
        <div className = "row mt-5">
            <Equipo
                team = {team[0]}
            />
        </div>
    );
}
 
export default ListaPrediccion;