import { useRef, useState } from "react"

export const useFieldHandler = () => {
    const [fields, setFields] = useState([])
    const fieldValues = useRef([])

    const addField = (type, name, label) => {
        setFields([...fields, {type, name, label}])
    }

    const updateField = (position, label) => {
        fieldValues.current = fields.map((field, index) => {
            if (index === position) {
                field.label = label
                field.name = label
            }

            return field
        })
    }

    const saveFields = () => {
        setFields(fieldValues.current)
    }

    const removeField = position => {
        fieldValues.current = fields.filter((field, index) => (index !== position))
        setFields(fieldValues.current)
    }

    return {
        fields,
        addField, 
        updateField, 
        removeField,
        saveFields
    }
}