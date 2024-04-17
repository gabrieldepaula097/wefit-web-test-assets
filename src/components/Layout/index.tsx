import Header from "components/Header"
import { Container, Wrapper } from "./styles"
import { Outlet } from "react-router-dom"
import useDeviceDetection from 'utils/useDeviceDetection';

const Layout = () => {
  const isMobile = useDeviceDetection();

  return (
    <Wrapper isMobile={isMobile}>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  )
}

export default Layout