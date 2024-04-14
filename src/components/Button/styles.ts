import styled, { css } from 'styled-components'

const ButtonStyled = styled.button<{ height: string; width?: string; }>`
  align-items: center;
  border: none;
  display: inline-flex;
  font-weight: bold;
  height: ${props => props.height}px;
  justify-content: center;
  width:  ${props => props.width}px;
  text-align: center;
  word-wrap: break-word;
  
  ${({theme}) => css`
    background: ${theme.colors.buttonBlue};
    border-radius: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};
  `}  
`

export {ButtonStyled}