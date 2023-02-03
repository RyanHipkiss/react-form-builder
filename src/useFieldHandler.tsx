import { useRef, useState } from "react"

export type FieldType = {
    type: string|undefined,
    name: string|null,
    label: string|null
}

export const useFieldHandler = () => {
    const [fields, setFields] = useState<FieldType[]>([])
    const fieldValues = useRef<FieldType[]>([])

    const addField = (type: string|undefined, name: string|null, label: string|null) => {
        setFields([...fields, {type, name, label}])
    }

    const updateField = (position: number, label: string) => {
        fieldValues.current = fields.map((field: FieldType, index: number) => {
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

    const removeField = (position: number) => {
        fieldValues.current = fields.filter((_field: FieldType, index: number) => (index !== position))
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