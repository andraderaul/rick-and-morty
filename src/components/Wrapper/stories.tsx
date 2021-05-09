import { withKnobs } from '@storybook/addon-knobs'
import Wrapper from './index'

export default {
  component: Wrapper,
  title: 'Components/Wrapper',
  decorators: [withKnobs]
}

export const Default = () => {
  return <Wrapper>this is a children component</Wrapper>
}
