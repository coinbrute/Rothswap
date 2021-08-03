import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  background: #341329;
  background-repeat: no-repeat;
  // background-position: bottom 24px center;
  // background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('images/512x512_App_Icon.png'), url('images/512x512_App_Icon.png');
    background-repeat: no-repeat;
    background-position: 10% 230px, 90% 230px;
    background-size: 266px, 266px;
    min-height: 90vh;
  }
`

export default Container
