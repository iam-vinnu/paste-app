import { createBrowserRouter } from 'react-router-dom'
import './App.css'

const  router = createBrowserRouter([
  {
    path:'/',
    element: <div>Binsy</div>
  },
  {
    path:'/pastes',
    element: <div></div>
  }
])

function App() {

  

  return (
          <div>
            Paste App
          </div>
  )
}

export default App
