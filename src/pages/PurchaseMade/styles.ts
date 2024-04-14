import styled, { css } from 'styled-components'

const PurchaseWrapper = styled.div`
  ${({theme}) => css`
    align-items: center;
    background-color: white;
    border-radius: ${theme.spacings.xxsmall};
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    height: 100%;
    justify-content: center;
    margin-bottom: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.mega}; 
    width: 100%;
  `}
`

const PurchaseContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const PurchaseText = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
  `}
`

const ImgContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export {PurchaseWrapper, PurchaseContainer, PurchaseText, ImgContainer}