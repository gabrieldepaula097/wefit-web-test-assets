import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import { RootState } from 'redux'

import Cart from 'pages/Cart'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import PurchaseMade from 'pages/PurchaseMade'

import Layout from './components/Layout/index'
import Search from 'components/Search'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export default function App() {
  const totalPrice = useSelector((state: RootState) => state.cart.totalItems)

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/search', element: <Search /> },
        { path: '/cart', element: totalPrice > 0 ? <Cart /> : <NotFound /> },
        { path: '/purchase', element: <PurchaseMade /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ]
  const element = useRoutes(routes)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
