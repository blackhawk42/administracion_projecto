import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/prediccion/CategoriaContext';
import { RecetasContext } from '../context/prediccion/RecetasContext';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        local: '',
        visita: ''
    });

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext );

    // función para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Selecciona el equipo local y visitante</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="local"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">Local</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.teamName} 
                                value={categoria.teamName} 
                            >{categoria.teamName}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="visita"
                        onChange={obtenerDatosReceta}
                    >
                        <option value=""> Visitante </option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.teamName} 
                                value={categoria.teamName} 
                            >{categoria.teamName}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-info"
                        value="Obtener predicción"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;