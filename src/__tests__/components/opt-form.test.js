import React from 'react'
import { render } from '@testing-library/react'
import { OptForm } from '../../components'

describe('<OptForm />', () => {
  it('renders the <OptForm /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder='Email address' />
        <OptForm.Button>Get Started</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    )

    expect(getByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy()
    expect(getByPlaceholderText('Email address')).toBeTruthy()
    expect(getByText('Get Started')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})