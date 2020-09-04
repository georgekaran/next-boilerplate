import React from 'react'
import { render, screen } from '@testing-library/react'

import Main from './index'

describe('Main component', () => {
  test('Should render with no error', () => {
    render(<Main />)
    expect(screen.getByTestId('main')).toHaveTextContent('Won-Games')
  })
})
