import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MinusIcon from 'assets/minus.svg'
import PlusIcon from 'assets/plus.svg'
import TrashIcon from 'assets/trash.svg'
import { RootState } from 'redux'
import {
  purchaseCompleted,
  removeMovie,
  subMovie,
  sumMovie
} from 'redux/MovieReducer'

import {
  AmountContainer,
  AmountCounter,
  AmountCounterContainer,
  IconCart,
  ProductPrice,
  SeparatorCart,
  SubTotal,
  TotalAmount,
  TotalName
} from 'pages/Cart/styles'

import Button from 'components/Button'

import {
  CartMobileContainer,
  CartMobileWrapper,
  FooterMobile,
  ProductContainer,
  ProductImageMobile,
  ProductNameMobile,
  ProductPriceContainer,
  ProductWrapper,
  SubTotalContainerMobile,
  SubTotalSubtitle,
  TotalContainerMobile,
  ValueContainer
} from './styles'
import { IMovie } from 'types/types'

const CartMobile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const movieList = useSelector((state: RootState) => state.cart.movies)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  const initialState = {
    movies: [],
    totalPrice: 0,
    totalItems: 0,
    searchTerm: '',
    filteredMovies: []
  }

  const handleClick = () => {
    dispatch(purchaseCompleted(initialState))
    navigate('/purchase')
  }

  const handleMinus = (movie: IMovie) => {
    if (movie.count !== 1) {
      return dispatch(subMovie(movie))
    }

    return dispatch(removeMovie(movie))
  }

  return (
    <>
      <CartMobileWrapper>
        {movieList.map((movie: IMovie) => (
          <CartMobileContainer key={movie.id}>
            <ProductImageMobile src={movie.image} />
            <ProductWrapper>
              <ProductContainer>
                <ProductNameMobile>{movie.title}</ProductNameMobile>
                <ProductPriceContainer>
                  <ProductPrice>R$ {movie.price.toFixed(2)}</ProductPrice>
                </ProductPriceContainer>
                <IconCart
                  src={TrashIcon}
                  onClick={() => dispatch(removeMovie(movie))}
                />
              </ProductContainer>
              <ValueContainer>
                <AmountContainer>
                  <IconCart
                    src={MinusIcon}
                    onClick={() => handleMinus(movie)}
                  />
                  <AmountCounterContainer>
                    <AmountCounter>{movie.count}</AmountCounter>
                  </AmountCounterContainer>
                  <IconCart
                    src={PlusIcon}
                    onClick={() => dispatch(sumMovie(movie))}
                  />
                </AmountContainer>
                <SubTotalContainerMobile>
                  <SubTotalSubtitle>SUBTOTAL</SubTotalSubtitle>
                  <SubTotal>
                    R$ {Number(movie.count * movie.price).toFixed(2)}
                  </SubTotal>
                </SubTotalContainerMobile>
              </ValueContainer>
            </ProductWrapper>
          </CartMobileContainer>
        ))}

        <SeparatorCart />

        <FooterMobile>
          <TotalContainerMobile>
            <TotalName>TOTAL</TotalName>
            <TotalAmount>R$ {totalPrice.toFixed(2)}</TotalAmount>
          </TotalContainerMobile>
          <Button
            height="40"
            text="FINALIZAR PEDIDO"
            width="100%"
            onClick={handleClick}
          />
        </FooterMobile>
      </CartMobileWrapper>
    </>
  )
}

export { CartMobile }
