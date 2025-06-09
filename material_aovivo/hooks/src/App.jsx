import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Search from './pages/search'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </>
  )
}

export default App
