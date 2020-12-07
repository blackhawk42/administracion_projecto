import React from 'react';
import Header from './Header';
import Formulario from './Formulario';
import CategoriasProvider from '../context/prediccion/CategoriaContext';
import RecetasProvider from '../context/prediccion/RecetasContext';
import ModalProvider from '../context/prediccion/ModalContext';
import ListaPrediccion from '../components/ListaPrediccion';

const Prediction = () => {
    return (
        <CategoriasProvider>
            <RecetasProvider>
                <ModalProvider>
                <Header/>
                <div className = "container mt-5">
                    <div className = "row">
                    <Formulario/>
                    </div>
                    <ListaPrediccion/>
                </div>
                </ModalProvider>
            </RecetasProvider>
        </CategoriasProvider>  
    );
}
 
export default Prediction;