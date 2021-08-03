import React from 'react'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import links from './config'
import { Menu as UikitMenu } from '../../libraries/pancake-uikit/index'

const Menu: any = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const dark = true;
  return (
    <UikitMenu
      account={account as string}
      login={login}
      logout={logout}
      isDark= {dark}
      // toggleTheme={toggleTheme}
      {...props}
    />
  )
}

export default Menu
