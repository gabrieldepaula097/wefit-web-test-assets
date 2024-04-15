import { useNavigate } from "react-router-dom";
import { AmountContainer, AmountCounter, AmountCounterContainer, CartContainer, CartWrapper, FooterCart, HeaderComplement, HeaderText, IconCart, ProductContainer, ProductImage, ProductInfo, ProductName, ProductPrice, Row, RowContainer, SeparatorCart, SubTotal, SubTotalContainer, TotalAmount, TotalContainer, TotalName, TrashContainer } from "./styles"

import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import TrashIcon from '../../assets/trash.svg'
import Button from "components/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux";

const Cart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/purchase");
  }

  const movieList = useSelector((state: RootState) => state.cart.movies)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  
  return (
    <CartWrapper>
      <CartContainer>
        <HeaderText>PRODUTO</HeaderText>
        <HeaderText>QTD</HeaderText>
        <HeaderText>SUBTOTAL</HeaderText>
        <HeaderComplement />
      </CartContainer>
      <RowContainer>
      {movieList && movieList.map((movie: IMovie) =>
      <Row key={movie.id}>
        <ProductContainer>
          <ProductImage src={movie.image} />
          <ProductInfo>
            <ProductName>{movie.title}</ProductName>
            <ProductPrice>R$ {movie.price}</ProductPrice>
          </ProductInfo>
        </ProductContainer>
        <AmountContainer>
          <IconCart src={MinusIcon} />
          <AmountCounterContainer>
            <AmountCounter>{movie.count}</AmountCounter>
          </AmountCounterContainer>
          <IconCart src={PlusIcon}/>
        </AmountContainer>
        <SubTotalContainer>
          <SubTotal>R$ {movie.count * movie.price}</SubTotal>
        </SubTotalContainer>
        <TrashContainer>
          <IconCart src={TrashIcon}  />
        </TrashContainer>
        </Row>
      )}
      </RowContainer>
      <SeparatorCart />

      <FooterCart>
        <Button height="34" text="FINALIZAR PEDIDO" width="173" onClick={handleClick} />
          <TotalContainer>
            <TotalName>TOTAL</TotalName>
            <TotalAmount>R$ {totalPrice}</TotalAmount>
          </TotalContainer>
      </FooterCart>
    </CartWrapper>
  )
}

export default Cart