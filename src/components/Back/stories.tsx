import { withKnobs } from '@storybook/addon-knobs'
import Back from './index'

export default {
  component: Back,
  title: 'Components/Back',
  decorators: [withKnobs]
}

export const Default = () => {
  return (
    <>
      <Back />
    </>
  )
}
