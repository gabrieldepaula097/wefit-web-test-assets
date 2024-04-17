import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import type { RouteObject } from "react-router-dom";

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Layout from './components/Layout/index'
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Cart from 'pages/Cart';
import PurchaseMade from 'pages/PurchaseMade';
import { useSelector } from 'react-redux';
import { RootState } from 'redux';
import Search from 'components/Search';

export default function App() {
  const totalPrice = useSelector((state: RootState) => state.cart.totalItems)

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/search', element: <Search /> },
        { path: '/cart', element: totalPrice > 0 ? <Cart /> : <NotFound />},
        { path: '/purchase', element: <PurchaseMade />},
        { path: "*", element: <NotFound /> },
      ],
    },
  ];
  let element = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {element}
    </ThemeProvider>
  )
}
