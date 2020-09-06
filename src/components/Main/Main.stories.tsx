import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { text, withKnobs } from '@storybook/addon-knobs'

import Main from './Main'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic = () => <Main title={text('Title', 'Won-Games')} />
