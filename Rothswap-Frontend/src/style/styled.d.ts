// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '../libraries/pancake-uikit/index'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
