import React from 'react'
import { render } from '@testing-library/react'
import { Form } from '../../components'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

// jest.mock('react-router-dom')

describe('<Form />', () => {
  it('renders the <Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>

        <Form.Base>
          <Form.Input
            placeholder='Email or phone number'
            onChange={() => { }}
          />
          <Form.Input
            type='password'
            autoComplete='off'
            placeholder='Password'
            onChange={() => { }}
          />
          <Form.Submit disabled type='submit'>
            Sign In
            </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix?
          {/* <BrowserRouter> */}
          <Form.Link to={ROUTES.SIGN_IN}>Sign up now</Form.Link>
          {/* </BrowserRouter> */}
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
      , { wrapper: MemoryRouter }
    )

    expect(getByText(`Sign In Now`)).toBeTruthy()
    expect(getByText(`Sign In`)).toBeTruthy()
    expect(getByText(`Sign In`).disabled).toBeTruthy()
    expect(getByText(`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`)).toBeTruthy()
    expect(getByPlaceholderText('Email or phone number')).toBeTruthy()
    expect(getByPlaceholderText('Password')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the <Form /> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used</Form.Error>
        <Form.Submit type='submit'>Sign In</Form.Submit>
      </Form>
    )

    expect(getByText('Your email address is already being used')).toBeTruthy()
    expect(queryByText('Sign In').disabled).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  })
})