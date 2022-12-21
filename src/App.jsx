import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import RootLayout from './layout/RootLayout'
import AddQuote from './pages/AddQuote'
import QuoteDetail from './pages/QuoteDetail'
import { AuthContextProvider } from './store/auth-context'
import LikedQuotes from './pages/LikedQuotes'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <AllQuotes /> },
        { path: 'add', element: <AddQuote /> },
        { path: 'liked', element: <LikedQuotes /> },
        { path: ':id', element: <QuoteDetail /> },
      ]
    }
  ])
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>

  )
}
export default App;