import styled, { css } from 'styled-components'

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${props => (props.isMobile ? '0' : '0 180px')};
  justify-content: flex-start;
  align-items: center;
`

const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    height: 100%;
    justify-content: flex-start;
    padding: 0 ${theme.spacings.medium};
    width: 100%;
  `}
`

export { Container, Wrapper }
