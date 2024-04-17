import styled, { css } from 'styled-components'

const CartWrapper = styled.div`
  ${({ theme }) => css`
    alignitems: flex-start;
    background: ${theme.colors.white};
    border-radius: ${theme.spacings.xxsmall};
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    justify-content: flex-start;
    margin-bottom: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.large};
    width: 100%;
  `}
`

const CartContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr repeat(3, 2fr);
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacings.medium};
  `}
`

const Row = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr repeat(3, 2fr);
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacings.medium};
    grid-row-gap: ${theme.spacings.medium};
    width: 100%;
  `}
`
const HeaderText = styled.span`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.grey};
    display: flex;
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    word-wrap: break-word;
  `}
`

const AmountText = styled(HeaderText)`
  justify-content: flex-start;
`

const SubTotalText = styled(HeaderText)`
  justify-content: flex-end;
`

const HeaderComplement = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  height: 18px;
`

const ProductContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacings.medium};
    justify-content: flex-start;
  `}
`
const ProductImage = styled.img`
  height: 114px;
  width: 91px;
`

const ProductInfo = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    justify-content: flex-start;
  `}
`

const ProductName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    word-wrap: break-word;
  `}
`

const ProductPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    word-wrap: break-word;
  `}
`

const AmountContainer = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 11px;
  height: 100%;
  justify-content: flex-start;
`
const IconCart = styled.img`
  cursor: pointer;
  height: 18px;
  width: 16px;
`

const AmountCounterContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border: 1px ${theme.colors.grey2} solid;
    border-radius: ${theme.spacings.xxsmall};
    display: inline-flex;
    flex-direction: column;
    height: 26px;
    justify-content: center;
    padding: ${theme.spacings.medium};
    width: 62px;
  `}
`

const AmountCounter = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    text-align: center;
    word-wrap: break-word;
  `}
`

const SubTotalContainer = styled.div`
  align-items: center;
  display: inline-flex;
  height: 100%;
  justify-content: flex-end;
`

const SubTotal = styled.span`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.base};
    display: inline-flex;
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    justify-content: center;
    word-wrap: break-word;
  `}
`

const TrashContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding: ${theme.spacings.xxsmall};
  `}
`

const SeparatorCart = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    height: 1px;
    width: 100%;
  `}
`

const FooterCart = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  flex-direction: reverse;
`

const TotalContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacings.large};
    justify-content: flex-start;
  `}
`
const TotalName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
    height: 12px;
    text-align: center;
    word-wrap: break-word;
  `}
`

const TotalAmount = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    height: 21px;
    text-align: center;
    word-wrap: break-word;
  `}
`

export {
  CartContainer,
  CartWrapper,
  HeaderText,
  HeaderComplement,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  AmountContainer,
  IconCart,
  AmountCounterContainer,
  AmountCounter,
  SubTotal,
  SubTotalContainer,
  TrashContainer,
  SeparatorCart,
  FooterCart,
  TotalContainer,
  TotalName,
  TotalAmount,
  Row,
  AmountText,
  SubTotalText
}
