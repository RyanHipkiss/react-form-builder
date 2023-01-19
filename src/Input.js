import './Input.css'
import { useInputValidation } from './useInputValidation'

export function Input({ name, label }) {
   const { state, handleInputChange} = useInputValidation();

    return (
        <>
            <input type="text" className='Input' name={name} value={state.value} onChange={handleInputChange}/>
            {!state.valid && <p>{state.error}</p>}
        </>
    )
}