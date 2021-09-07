import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'Template Maroto')}
    creator={text('Creator', 'Thiago')}
    desc={text('Description', 'TypeScript, ReactJS e Styled Components')}
  />
)

export const Basic2: Story = (args) => <Main {...args} />
Basic2.args = {
  title: 'Template Maroto',
  creator: 'Thiago',
  desc: 'TypeScript, ReactJS e Styled Components'
}
