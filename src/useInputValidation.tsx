import { useReducer } from "react"

const initialState = {
    value: '',
    valid: true,
    error: ''
}

type ValidationState = {
    value: string,
    valid: boolean,
    error: string
}

export const useInputValidation = () => {
    const [state, dispatch] = useReducer((state: ValidationState, action: ValidationState) => {
        state = {
            value: action.value,
            valid: action.value.length <= 10,
            error: action.value.length > 10 ? 'Maximum 10 characters' :''
        }

        return state
    }, initialState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ 
            value: event.target.value, 
            valid: false, 
            error: ''
        })
    }

    return {state, handleInputChange}
}