import styled, {css} from "styled-components";

const CartMobileWrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  flex-direction: column;
`

const CartMobileContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`

const ProductWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  width: 100%;
  height: 82px;
`
const ProductPriceContainer =  styled.div`
  justify-content: flex-start; 
  align-items: center; 
  gap: 16px; 
  display: flex;
`
const ProductContainer = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  display: inline-flex;
  width: 100%;
  flex: 1 1 0;
`

const ProductNameMobile = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.base};
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    word-wrap: break-word;
    height: 18px;
  `}
`

const SubTotalContainerMobile = styled.div`
  align-items: center;
  display: inline-flex;
  height: 100%;
  justify-content: flex-end;
  flex-direction: column;
`

const SubTotalSubtitle = styled.span`
  color: #999999;
  font-size: 12px;
  font-weight: bold;
`

const ValueContainer = styled.div`
  justify-content: space-between; 
  align-items: center; 
  gap: 16px; 
  display: flex;
  width: 100%;
`

const ProductImageMobile = styled.img`
  width: 64px;
  height: 82px;
`

const FooterMobile = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: inline-flex;
  width: 100%;
`
const TotalContainerMobile = styled.div`
  ${({theme}) => css`
    align-items: center;
    display: flex;
    gap: ${theme.spacings.large};
    justify-content: space-between;
    width: 100%;
  `}
`

export {ProductWrapper, ProductContainer, ProductPriceContainer, ProductNameMobile, ValueContainer, SubTotalContainerMobile, SubTotalSubtitle, ProductImageMobile, CartMobileContainer, CartMobileWrapper, FooterMobile, TotalContainerMobile}