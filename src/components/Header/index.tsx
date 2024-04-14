import { Cart, CartItems, CartText, Container, Label, Name } from "./styles"
import CartIcon from '@/assets/cart.svg'

export type HeaderProps = {
  name?: string
}

const Header = () => (
  <Container>
    <Name to="/">
      WeMovies
    </Name>

    <Cart>
      <Label>
        <CartText>
          Meu Carrinho
        </CartText>
        <CartItems>
          0 itens
        </CartItems>
      </Label>
      <img src={CartIcon} />
    </Cart>
  </Container>
)

export default Header
