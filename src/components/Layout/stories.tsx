import { withKnobs } from '@storybook/addon-knobs'
import Layout from './index'

export default {
  component: Layout,
  title: 'Components/Layout',
  decorators: [withKnobs]
}

export const Default = () => {
  return <Layout>this is a children component</Layout>
}
