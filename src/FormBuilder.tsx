import React, { useEffect, useRef, useState } from 'react'
import './FormBuilder.css'
import { ElementSelector } from './ElementSelector'
import { Input } from './Input'
import { FieldType, useFieldHandler } from './useFieldHandler'

export function FormBuilder() {
    const [showNewElementSelector, setShowNewElementSelector] = useState<boolean>(false)
    const {
        fields,
        addField,
        updateField,
        removeField,
        saveFields
    } = useFieldHandler()
    const isFormSaved = useRef<boolean>(false)

    const toggleNewElementSelector = () => {
        setShowNewElementSelector(!showNewElementSelector)
    }

    const renderField = (field: FieldType, index: number) => {
        switch(field.type) {
            case 'input':
                return <Input position={index} updateField={updateField} removeField={removeField} />
            default:
                return <></>
        }
    }

    const handleFormSave = () => {
        isFormSaved.current = true
        saveFields()
    }

    /**
     * @todo
     * 
     * What should happen when the form gets saved?
     */
    useEffect(() => {
        if (!isFormSaved.current) return

        console.log('form has been saved.')
    }, [fields, isFormSaved])

    return (
        <>
            <div className='FormBuilder' data-testid="FormBuilder">
                { fields && 
                    <ul className='InputsList'>
                        { fields.map((field: FieldType, index: number) => {
                            return (<li key={index}>
                                {renderField(field, index)}
                            </li>)
                        })}
                    </ul>
                }
                { fields && <button onClick={() => handleFormSave()}>Save form!</button>}
                <p onClick={toggleNewElementSelector} className='NewElementToggle'>Add element</p>
            </div>
            {showNewElementSelector && <ElementSelector addFieldToForm={addField}/>}
        </>
    )
}