var u=Object.defineProperty;var o=(n,a)=>u(n,"name",{value:a,configurable:!0});import{M as t,b as c,a as d,c as m,d as p,T as i}from"./index-ced84d2e.js";import{a as s,j as e}from"./jsx-runtime-c2142c84.js";import{l as g}from"./iframe-e18fa29c.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-42521bac.js";import"./index-4bd83974.js";import"./web.url.constructor-65173184.js";import"./es.number.is-integer-8a4a6ea6.js";const O={parameters:{storySource:{source:`import React from 'react'
import { useArgs } from '@storybook/client-api'
import { Meta, Story } from '@storybook/react'

import {
  Button,
  Modal as ModalComponent,
  ModalContent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  Text,
} from '@hype-ui/react'

export default {
  title: 'Overlay/Modal',
  component: ModalComponent,
  argsTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
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
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  return (
    <ModalWrapper>
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
    </ModalWrapper>
  )
}

export const Modal = Template.bind({})
`,locationsMap:{modal:{startLoc:{col:36,line:45},endLoc:{col:1,line:68},startBody:{col:36,line:45},endBody:{col:1,line:68}}}}},title:"Overlay/Modal",component:t,argsTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1}},args:{open:!1,overlay:!0},decorators:[n=>{const[a,r]=g();return s(t,{...a,onOpenChange:l=>r({open:l}),children:[e(c,{asChild:!0,children:e(d,{children:"Open Modal"})}),n()]})}]},f=o(n=>e(m,{children:s(p,{children:[e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]})}),"Template"),A=f.bind({}),B=["Modal"];export{A as Modal,B as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-016ee0a0.js.map
