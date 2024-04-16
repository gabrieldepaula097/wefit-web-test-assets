import styled, { css } from 'styled-components'
import { Link } from "react-router-dom"

const Container = styled.div`
${({theme}) => css`
    align-items: center; 
    display: inline-flex;
    height: 88px;
    justify-content: space-between; 
    padding: ${theme.spacings.medium};
    width: 100%;
  `}
`

const Name = styled(Link)`
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
    line-height: ${theme.spacings.large};
    text-decoration: none;
    word-wrap: break-word;
  `}
`
const Cart = styled(Link)`
  ${({ theme }) => css`
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: ${theme.spacings.xsmall};
    justify-content: flex-start;
    text-decoration: none;
  `}
`

const Label = styled.div`
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
`

const CartText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.semiBold};
    wordWrap: break-word;
  `}
`

const CartItems = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.grey};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semiBold};
    word-wrap: break-word;
  `}
`

export {Cart, CartText, CartItems,  Container, Label, Name}