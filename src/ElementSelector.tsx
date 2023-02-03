import React from 'react'

type Props = {
    addFieldToForm: (type: string|undefined, name: string|null, label: string|null) => void
}
export function ElementSelector(props: Props) {
    const {addFieldToForm} = props

    const addField = (event: React.MouseEvent<HTMLLIElement>) => {
        const target = event.target as HTMLLIElement
        addFieldToForm(target.dataset.fieldType, null, null)
    }

    return (
        <ul>
            <li onClick={addField} data-field-type="input">Input</li>
        </ul>
    )
}