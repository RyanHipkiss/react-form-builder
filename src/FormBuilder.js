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

    const addFieldToForm = (type, name, label) => {
        setFields([...fields, {type, name, label}])
    }

    return (
        <>
            <div className='FormBuilder'>
                { fields && 
                    <ul className='InputsList'>
                        { fields.map(field => {
                            switch(field.type) {
                                case 'input':
                                    return <Input name={field.name} label={field.label}/>
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