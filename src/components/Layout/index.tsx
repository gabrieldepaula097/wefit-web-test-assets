import Header from "components/Header"
import { Container, Wrapper } from "./styles"
import { Outlet } from "react-router-dom"

// export type HomeProps = {
//   name?: string
// }

const Layout = () => (
  <Wrapper>
    <Header></Header>
    <Container>
      <Outlet />
    </Container>
  </Wrapper>
)

export default Layout
// { name = 'React Boilerlate' }: HomeProps