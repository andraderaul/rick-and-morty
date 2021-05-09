import { withKnobs } from '@storybook/addon-knobs'
import Content from './index'

export default {
  component: Content,
  title: 'Components/Content',
  decorators: [withKnobs]
}

export const Default = () => {
  return <Content>this is a children component</Content>
}
