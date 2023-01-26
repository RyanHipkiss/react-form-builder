import { useRef, useState } from 'react'
import './FormBuilder.css'
import { ElementSelector } from './ElementSelector'
import { Input } from './Input'

export function FormBuilder() {
    const [showNewElementSelector, setShowNewElementSelector] = useState(false)
    const [fields, setFields] = useState([])
    const fieldValues = useRef([])

    const toggleNewElementSelector = event => {
        setShowNewElementSelector(!showNewElementSelector)
    }

    const addFieldToForm = (type, name, label) => {
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

    const saveForm = event => {
        setFields(fieldValues.current)
    }

    const removeField = (position) => {
        fieldValues.current = fields.filter((field, index) => (index !== position))
        setFields(fields.map((field, index) => (index !== position)))
    }

    return (
        <>
            <div className='FormBuilder'>
                { fields && 
                    <ul className='InputsList'>
                        { fields.map((field, index) => {
                            switch(field.type) {
                                case 'input':
                                    return <Input position={index} updateField={updateField} removeField={removeField} />
                                default:
                                    return <></>
                            }
                        })}
                    </ul>
                }
                { fields && <button onClick={saveForm}>Save form!</button>}
                <p onClick={toggleNewElementSelector} className='NewElementToggle'>Add element</p>
            </div>
            {showNewElementSelector && <ElementSelector addFieldToForm={addFieldToForm}/>}
        </>
    )
}