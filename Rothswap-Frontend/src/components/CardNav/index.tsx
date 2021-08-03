import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'


const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav/>
  )
}

export default Nav
