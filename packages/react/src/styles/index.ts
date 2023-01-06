import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@hype-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },

    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
    },

    media: {
      mobile: '(max-width: 768px)',
    },

    utils: {
      px: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  })
