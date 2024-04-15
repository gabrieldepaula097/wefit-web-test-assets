import { useNavigate } from "react-router-dom";

import { Cart, CartItems, CartText, Container, Label, Name } from "./styles"
import CartIcon from '@/assets/cart.svg'

export type HeaderProps = {
  name?: string
}

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  }
  return (
    <Container>
      <Name to="/">
        WeMovies
      </Name>

      <Cart>
        <Label onClick={handleClick}>
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
}

export default Header
