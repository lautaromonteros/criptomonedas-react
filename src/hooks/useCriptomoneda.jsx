import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`
const Select = styled.select`
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    --webkit-appearance: none;
    font-family: 'Bebas Neue', cursive;
    display: block;
`

const useCriptomoneda = (label, stateInicial, OPCIONES) => {


    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value) }
                value={state}
            >
                <option value=''>--Seleccione--</option>
                {OPCIONES.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectCripto, actualizarState];
}
 
export default useCriptomoneda;
