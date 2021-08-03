import React from 'react'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
import { Button, ButtonProps, useWalletModal} from '../../libraries/pancake-uikit/index'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
