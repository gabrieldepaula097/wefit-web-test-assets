import Header from "components/Header"
import { Container, Wrapper } from "./styles"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  )
}

export default Layout