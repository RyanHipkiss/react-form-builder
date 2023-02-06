import React from 'react'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { FormBuilder } from "./FormBuilder"
import { act } from 'react-dom/test-utils'

beforeEach(() => {
    render(<FormBuilder />)
})

test('renders FormBuilder', () => {
    expect(screen.getByTestId('FormBuilder')).toBeInTheDocument()
})

describe('adding a new input', () => {
    beforeEach(() => {
        act(() => {
            screen.getByText('Add element').click()
        })
    })

    test('it shows the element selector', () => {
        expect(screen.getByTestId('ElementSelector')).toBeInTheDocument()
    })
})

describe('saving the form', () => {
    beforeEach(async () => {
        fireEvent.click(screen.getByTestId('AddElement'))
        await waitFor(() => {
            fireEvent.click(screen.getByTestId('InputField'))
        })
    })

    test('it should render out the new field', async () => {
        expect(screen.getByTestId('InputElementWrapper')).toBeInTheDocument()
    })

    test('it should remove the field when the button is clicked', async () => {
        fireEvent.click(screen.getByTestId('RemoveInputElement'))
        expect(screen.queryByTestId('InputElementWrapper')).not.toBeInTheDocument()
    })

    test('it should show the form has been saved', async () => {
        fireEvent.click(screen.getByTestId('SaveTheForm'))
        expect(screen.getByTestId('SavedForm')).toBeInTheDocument()
    })
})