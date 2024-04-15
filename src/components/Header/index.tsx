import { useNavigate } from "react-router-dom";

import { Cart, CartItems, CartText, Container, Label, Name } from "./styles"
import CartIcon from '@/assets/cart.svg'
import { useSelector } from "react-redux";
import { RootState } from "redux";

export type HeaderProps = {
  name?: string
}

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  }

  const totalItems = useSelector((state: RootState) => state.cart.totalItems)

  return (
    <Container>
      <Name to="/">
        WeMovies
      </Name>

      <Cart onClick={handleClick}>
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
