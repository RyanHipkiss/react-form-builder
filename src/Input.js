import { useEffect } from 'react';
import './Input.css'
import { useInputValidation } from './useInputValidation';

export function Input({ position, updateField, removeField }) {
    const { state, handleInputChange} = useInputValidation();

    useEffect(() => {
        updateField( position, state.value)
    }, [state, updateField, position])
   
    return (
        <>
            <label for="name">Name of field</label>
            <input type="text" name="name" onChange={handleInputChange}/>
            <button onClick={e => removeField(position)}>Remove me!</button>
        </>
    )
}