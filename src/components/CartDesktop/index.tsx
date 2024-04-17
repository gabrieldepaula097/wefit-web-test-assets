import { AmountContainer, AmountCounter, AmountCounterContainer, AmountText, CartContainer, FooterCart, HeaderComplement, HeaderText, IconCart, ProductContainer, ProductImage, ProductInfo, ProductName, ProductPrice, Row, SeparatorCart, SubTotal, SubTotalContainer, SubTotalText, TotalAmount, TotalContainer, TotalName, TrashContainer } from "pages/Cart/styles"
import { useSelector } from "react-redux"
import { RootState } from "redux"
import MinusIcon from 'assets/minus.svg';
import PlusIcon from 'assets/plus.svg';
import TrashIcon from 'assets/trash.svg'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { purchaseCompleted, removeMovie, subMovie, sumMovie } from "redux/MovieReducer";
import Button from "components/Button";

const CartDesktop = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState = {
    movies: [],
    totalPrice: 0,
    totalItems: 0,
    searchTerm: '',
    filteredMovies: []
  } 

  const movieList = useSelector((state: RootState) => state.cart.movies)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  const handleClick = () => {
    dispatch(purchaseCompleted(initialState))
    navigate("/purchase")
  }

  const handleMinus = (movie: IMovie) => {
    if(movie.count !== 1){
      return dispatch(subMovie(movie))
    }

    return dispatch(removeMovie(movie))
  }

  return (
    <>
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
          <Button height="34" text="FINALIZAR PEDIDO" width="173px" onClick={handleClick} />
            <TotalContainer>
              <TotalName>TOTAL</TotalName>
              <TotalAmount>R$ {(totalPrice).toFixed(2)}</TotalAmount>
            </TotalContainer>
        </FooterCart>
    </>
  )
}

export {CartDesktop}