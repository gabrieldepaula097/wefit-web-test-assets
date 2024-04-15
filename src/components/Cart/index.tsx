import { useNavigate } from "react-router-dom";
import { AmountContainer, AmountCounter, AmountCounterContainer, CartContainer, CartWrapper, FooterCart, HeaderComplement, HeaderText, IconCart, ProductContainer, ProductImage, ProductInfo, ProductName, ProductPrice, SeparatorCart, SubTotal, SubTotalContainer, TotalAmount, TotalContainer, TotalName, TrashContainer } from "./styles"

import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import TrashIcon from '../../assets/trash.svg'
import Button from "components/Button";

const Cart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/purchase");
  }

  return (
    <CartWrapper>
      <CartContainer>
        <HeaderText>PRODUTO</HeaderText>
        <HeaderText>QTD</HeaderText>
        <HeaderText>SUBTOTAL</HeaderText>
        <HeaderComplement />
      </CartContainer>
      <CartContainer>
        <ProductContainer>
          <ProductImage src="https://via.placeholder.com/91x114" />
          <ProductInfo>
            <ProductName>Homem Aranha</ProductName>
            <ProductPrice>R$ 29,99</ProductPrice>
          </ProductInfo>
        </ProductContainer>
        <AmountContainer>
          <IconCart src={MinusIcon} />
          <AmountCounterContainer>
            <AmountCounter>1</AmountCounter>
          </AmountCounterContainer>
          <IconCart src={PlusIcon}/>
        </AmountContainer>
        <SubTotalContainer>
          <SubTotal>R$ 29,99</SubTotal>
        </SubTotalContainer>
        <TrashContainer>
          <IconCart src={TrashIcon}  />
        </TrashContainer>
      </CartContainer>
      <SeparatorCart />

      <FooterCart>
        <Button height="34" text="FINALIZAR PEDIDO" width="173" onClick={handleClick} />
          <TotalContainer>
            <TotalName>TOTAL</TotalName>
            <TotalAmount>R$ 29,90</TotalAmount>
          </TotalContainer>
      </FooterCart>
    </CartWrapper>
  )
}

export default Cart