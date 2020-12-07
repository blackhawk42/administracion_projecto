import React, {createContext, useState, useEffect} from 'react';
import clienteAxios from '../../config/axios';

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear state del context
    const[categorias, setCategorias] = useState([]);

    //Ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const respuesta = await clienteAxios.get('/teams/');
            setCategorias(respuesta.data.teams);
        }
        obtenerCategorias();
    },[])

    return(
        <CategoriasContext.Provider
            value ={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider