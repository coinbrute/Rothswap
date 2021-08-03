import { MenuEntry } from '../../libraries/pancake-uikit/index'

const config: MenuEntry[] = [
  {
    label: 'Token Home',
    icon: 'HomeIcon',
    href: 'https://www.officialrothscoin.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'http://localhost:3000/#/swap',
      },
    ],
  },

]

export default config
