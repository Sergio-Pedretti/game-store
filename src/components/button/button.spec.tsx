import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

describe('<Button/>', () => {
  it('should render component', () => {
    render(<Button />)
  })
})
