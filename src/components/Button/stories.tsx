import { withKnobs, text, select } from '@storybook/addon-knobs'
import Button from './index'

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs]
}

export const Default = () => {
  const title = text('title', 'title')
  const type = select(
    'type',
    {
      button: 'button',
      submit: 'submit',
      reset: 'reset'
    },
    'button'
  )

  return (
    <>
      <Button
        title={title}
        type={type}
        onClick={() => {
          console.log('onClick')
        }}
      />
    </>
  )
}
