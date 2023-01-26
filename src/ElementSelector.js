export function ElementSelector({addFieldToForm}) {
    const addField = event => {
        addFieldToForm(event.target.dataset.fieldType, null, null)
    }

    return (
        <ul>
            <li onClick={addField} data-field-type="input">Input</li>
        </ul>
    )
}