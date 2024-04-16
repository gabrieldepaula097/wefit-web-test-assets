import { useNavigate } from "react-router-dom";
import { AmountContainer, AmountCounter, AmountCounterContainer, AmountText, CartContainer, CartWrapper, FooterCart, HeaderComplement, HeaderText, IconCart, ProductContainer, ProductImage, ProductInfo, ProductName, ProductPrice, Row, SeparatorCart, SubTotal, SubTotalContainer, SubTotalText, TotalAmount, TotalContainer, TotalName, TrashContainer } from "./styles"

import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import TrashIcon from '../../assets/trash.svg'
import Button from "components/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux";
import { MovieInitialState, purchaseCompleted, removeMovie, subMovie, sumMovie } from "redux/MovieReducer";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState: MovieInitialState = {
    movies: [],
    totalPrice: 0,
    totalItems: 0
  } 

  const handleClick = () => {
    dispatch(purchaseCompleted(initialState))
    navigate("/purchase")
  }

  const movieList = useSelector((state: RootState) => state.cart.movies)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  const handleMinus = (movie: IMovie) => {
    if(movie.count !== 1){
      return dispatch(subMovie(movie))
    }

    return dispatch(removeMovie(movie))
  }

  return (
    <CartWrapper>
      <CartContainer>
        <HeaderText>PRODUTO</HeaderText>
        <AmountText>QTD</AmountText>
        <SubTotalText>SUBTOTAL</SubTotalText>
        <HeaderComplement />
      </CartContainer>

      {movieList.map((movie: IMovie) =>
      <Row key={movie.id}>
        <ProductContainer>
          <ProductImage src={movie.image} />
          <ProductInfo>
            <ProductName>{movie.title}</ProductName>
            <ProductPrice>R$ {(movie.price).toFixed(2)}</ProductPrice>
          </ProductInfo>
        </ProductContainer>
        <AmountContainer>
          <IconCart src={MinusIcon} onClick={() => handleMinus(movie)} />
          <AmountCounterContainer>
            <AmountCounter>{movie.count}</AmountCounter>
          </AmountCounterContainer>
          <IconCart src={PlusIcon} onClick={() => dispatch(sumMovie(movie))}/>
        </AmountContainer>
        <SubTotalContainer>
          <SubTotal>R$ {Number(movie.count * movie.price).toFixed(2)}</SubTotal>
        </SubTotalContainer>
        <TrashContainer>
          <IconCart src={TrashIcon} onClick={() => dispatch(removeMovie(movie))} />
        </TrashContainer>
        </Row>
      )}

      <SeparatorCart />

      <FooterCart>
        <Button height="34" text="FINALIZAR PEDIDO" width="173" onClick={handleClick} />
          <TotalContainer>
            <TotalName>TOTAL</TotalName>
            <TotalAmount>R$ {(totalPrice).toFixed(2)}</TotalAmount>
          </TotalContainer>
      </FooterCart>
    </CartWrapper>
  )
}

export default Cart