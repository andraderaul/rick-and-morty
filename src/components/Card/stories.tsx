import { withKnobs, text } from '@storybook/addon-knobs'
import Card from './index'

export default {
  component: Card,
  title: 'Components/Card',
  decorators: [withKnobs]
}

export const Default = () => {
  const title = text('title', 'Pilot')
  const informative = text('informative', 'S01E01')
  const subtitle = text('subtitle', 'December 2, 2013')
  const href = text('href', '/1')

  return (
    <>
      <Card
        title={title}
        informative={informative}
        subtitle={subtitle}
        href={href}
      />
    </>
  )
}
