import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import ViewPaste from './component/ViewPaste'

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
    // <RouterProvider router={router}/>
    <div>binay</div>
  )


}

export default App

