import React, { useEffect } from 'react';
import './Input.css'
import { useInputValidation } from './useInputValidation';

type InputProps = {
    position: number,
    updateField: (position: number, value: string) => void,
    removeField: (position: number) => void
}
export function Input(props: InputProps) {
    const { position, updateField, removeField} = props
    const { state, handleInputChange} = useInputValidation();

    useEffect(() => {
        updateField( position, state.value)
    }, [state, updateField, position])
   
    return (
        <>
            <label htmlFor="name">Name of field</label>
            <input type="text" name="name" onChange={handleInputChange}/>
            <button onClick={() => removeField(position)}>Remove me!</button>
        </>
    )
}