import { useArgs } from '@storybook/client-api'
import React from 'react'
import { Meta, Story } from '@storybook/react'

import {
  Button,
  Modal as ModalComponent,
  ModalContent,
  ModalActions,
  ModalHeader,
  ModalHeaderProps,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  Text,
  ModalClose,
} from '@hype-ui/react'

export default {
  title: 'Overlay/Modal',
  component: ModalComponent,
  argsTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
    closeButton: { control: 'boolean' },
  },
  args: {
    open: false,
    overlay: true,
    children: 'Modal Title',
    closeButton: true,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs()

      return (
        <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
          <ModalTrigger asChild>
            <Button>Open Modal</Button>
          </ModalTrigger>

          {Story()}
        </ModalComponent>
      )
    },
  ],
} as Meta<ModalProps & ModalHeaderProps>

const TemplateWithActions: Story<ModalHeaderProps> = (args) => {
  return (
    <ModalWrapper>
      <ModalHeader {...args} />

      <ModalContent>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
      </ModalContent>

      <ModalActions align="left">
        <ModalClose asChild>
          <Button>Close</Button>
        </ModalClose>
      </ModalActions>
    </ModalWrapper>
  )
}

export const ModalWithActions = TemplateWithActions.bind({})
