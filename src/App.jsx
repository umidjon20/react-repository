import { Routes,Route,Navigate } from 'react-router-dom'
import { Classespage } from './pages/Classespage'
import { MainPage } from './pages/Homepage'
import { ContactPage } from './pages/ContactPage'
import { ShopPage } from './pages/ShopPage'
import { MyCourses } from './pages/MyCourses'
import { PageLayout } from './Components/Layout/PageLayout'
import './App.scss'

function App() {


  return (
    <>
  
    <Routes>
      <Route element = {<Navigate to={'/main/home'}/>} path={'/'}></Route>
      <Route element = {<PageLayout/>} path ={'main'}> 
        <Route element = {<MainPage/> } path='home'></Route>
        <Route element = {<Classespage />} path='classes'></Route>
        <Route element = {<ShopPage />} path='shop'></Route>
        <Route element = {<MyCourses/>} path='mycourses'></Route>
        <Route element = { <ContactPage />} path='contact'></Route>
      </Route>
    </Routes>

    </>
  )
}

export default App
