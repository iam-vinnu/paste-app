import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
    </>
  },
  {
    path: '/pastes',
    element: <div></div>
  }
])

function App() {

  return (
    // <RouterProvider router={router}/>
    <div> binay </div>
  )


}

export default App

