var d=Object.defineProperty;var t=(n,o)=>d(n,"name",{value:o,configurable:!0});import{M as i,b as c,a as l,c as m,e as p,d as M,T as s,f as g,g as f}from"./index-ced84d2e.js";import{a,j as e}from"./jsx-runtime-c2142c84.js";import{l as h}from"./iframe-e18fa29c.js";import"./index-42521bac.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-4bd83974.js";import"./web.url.constructor-65173184.js";import"./es.number.is-integer-8a4a6ea6.js";const W={parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api'
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
`,locationsMap:{"modal-with-actions":{startLoc:{col:53,line:52},endLoc:{col:1,line:83},startBody:{col:53,line:52},endBody:{col:1,line:83}}}}},title:"Overlay/Modal",component:i,argsTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1},closeButton:{control:"boolean"}},args:{open:!1,overlay:!0,children:"Modal Title",closeButton:!0},decorators:[n=>{const[o,r]=h();return a(i,{...o,onOpenChange:u=>r({open:u}),children:[e(c,{asChild:!0,children:e(l,{children:"Open Modal"})}),n()]})}]},q=t(n=>a(m,{children:[e(p,{...n}),a(M,{children:[e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]}),e(g,{align:"left",children:e(f,{asChild:!0,children:e(l,{children:"Close"})})})]}),"TemplateWithActions"),H=q.bind({}),L=["ModalWithActions"];export{H as ModalWithActions,L as __namedExportsOrder,W as default};
//# sourceMappingURL=ModalActions.stories-b0d9b33d.js.map
