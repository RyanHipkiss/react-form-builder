import { useReducer } from "react"

const initialState = {
    value: '',
    valid: true,
    error: ''
}

export const useInputValidation = () => {
    const [state, dispatch] = useReducer((state, action) => {
        return {
            value: action.value,
            valid: action.value.length <= 10,
            error: action.value.length > 10 ? 'Maximum 10 characters' :''
        }
    }, initialState)

    const handleInputChange = event => {
        dispatch({ state, value: event.target.value})
    }

    return {state, handleInputChange}
}