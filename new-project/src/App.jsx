import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import Spaces from './spaces'

function App() {


  return (
    <div>
      <BrowserRouter >
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/booking' element={<Spaces/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/sign up' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}

export default App
