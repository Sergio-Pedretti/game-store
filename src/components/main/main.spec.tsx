import React from 'react'
import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument()
  })

  it('should render with correct background color', () => {
    const { getByTestId } = render(<Main />)

    const container = getByTestId('container')

    expect(container).toHaveStyle('background-color: rgb(161 161 170)')
  })
})
