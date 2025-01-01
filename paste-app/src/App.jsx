import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import ViewPaste from './component/ViewPaste'
import Paste from './component/Paste'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: '/pastes',
    element: <div>
      <Navbar />
      <Paste />
    </div>
  },
  {
    path: '/paste/:id',
    element: <div>
      <Navbar />
      <ViewPaste />    
    </div>
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </> 
    
  )


}

export default App

