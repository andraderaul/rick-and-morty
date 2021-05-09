import { withKnobs } from '@storybook/addon-knobs'
import Hero from './index'

export default {
  component: Hero,
  title: 'Components/Hero',
  decorators: [withKnobs]
}

export const Default = () => {
  return <Hero />
}
