import { Outlet } from 'react-router-dom'

import Header from 'components/Header'

import useDeviceDetection from 'utils/useDeviceDetection'

import { Container, Wrapper } from './styles'

const Layout = () => {
  const isMobile = useDeviceDetection()

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
