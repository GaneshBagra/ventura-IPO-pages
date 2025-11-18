
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListIpoPage from './pages/ListIpoPage'
import IpoDetailsPage from './pages/IpoDetailsPage'

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<ListIpoPage/>} />
        <Route path='/IpoDetails/:companyId' element={<IpoDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
