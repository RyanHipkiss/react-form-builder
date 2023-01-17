import { useState } from 'react'
import './FormBuilder.css'
import { ElementSelector } from './ElementSelector'
import { Input } from './Input'

export function FormBuilder() {
    const [showNewElementSelector, setShowNewElementSelector] = useState(false)
    const [fields, setFields] = useState([])

    const toggleNewElementSelector = event => {
        setShowNewElementSelector(!showNewElementSelector)
    }

    const addFieldToForm = fieldType => {
        setFields([...fields, fieldType])
    }

    return (
        <>
            <div className='FormBuilder'>
                { fields && 
                    <ul>
                        { fields.map(field => {
                            switch(field) {
                                case 'input':
                                    return <Input/>
                                default:
                                    break;
                            }
                        })}
                    </ul>
                }
                <p onClick={toggleNewElementSelector} className='NewElementToggle'>Add element</p>
            </div>
            {showNewElementSelector && <ElementSelector addFieldToForm={addFieldToForm}/>}
        </>
    )
}