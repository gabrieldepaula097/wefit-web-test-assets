import { Cart, CartItems, CartText, Container, Label, Name } from "./styles"
import CartIcon from '@/assets/cart.svg'
import { useSelector } from "react-redux";
import { RootState } from "redux";

export type HeaderProps = {
  name?: string
}

const Header = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems)

  return (
    <Container>
      <Name to="/">
        WeMovies
      </Name>

      <Cart to="/cart">
        <Label>
          <CartText>
            Meu Carrinho
          </CartText>
          <CartItems>
            {totalItems} itens
          </CartItems>
        </Label>
        <img src={CartIcon} />
      </Cart>
    </Container>
  )
}

export default Header
