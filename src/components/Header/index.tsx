import { useSelector } from 'react-redux'

import CartIcon from '@/assets/cart.svg'
import { RootState } from 'redux'

import useDeviceDetection from 'utils/useDeviceDetection'

import { Cart, CartItems, CartText, Container, Label, Name } from './styles'

export type HeaderProps = {
  name?: string
}

const Header = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems)
  const isMobile = useDeviceDetection()

  return (
    <Container>
      <Name to="/">WeMovies</Name>

      <Cart to="/cart">
        <Label>
          {!isMobile && <CartText>Meu Carrinho</CartText>}
          <CartItems>{totalItems} itens</CartItems>
        </Label>
        <img src={CartIcon} />
      </Cart>
    </Container>
  )
}

export default Header
