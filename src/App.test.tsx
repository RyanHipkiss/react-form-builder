import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { FormBuilder } from './FormBuilder';

beforeEach(() => {
  render(<App />)
})

test('renders App', () => {
  expect(screen.getByTestId('App')).toBeInTheDocument()
});

test('renders FormBuilder', () => {
  expect(screen.getByTestId('FormBuilder')).toBeInTheDocument()
})
