//todo
import { createBrowserRouter } from 'react-router-dom'
import LayoutView from '../routes/Layout'
import Home from '../views/HomeView/Home'
import About from '../views/AboutView/About'
import NotFound from '../views/NotFoundView/NotFound'
import Shop from '../views/ShopView/ShopView'
import ProductView from '../views/ShopView/ProductView/ProductView'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutView />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/shop',
        children: [
          {
            path: '/shop/:categoryName',
            element: <Shop />,
          },
          {
            path: '/shop/:categoryName/:productName',
            element: <ProductView />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
export default router
