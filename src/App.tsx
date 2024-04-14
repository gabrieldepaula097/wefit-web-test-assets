import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import type { RouteObject } from "react-router-dom";

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Layout from './components/Layout/index'
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Cart from 'components/Cart';
import PurchaseMade from 'pages/PurchaseMade';

export default function App() {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/cart', element: <Cart />},
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
