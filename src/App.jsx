// import { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { Users } from './pages/Users'
import { MainPage } from './pages/Homepage'
import { ContactPage } from './pages/ContactPage'
import { ShopPage } from './pages/ShopPage'
import { MyCourses } from './pages/MyCourses'
import { PageLayout } from './Components/Layout/PageLayout'
import { NotFound } from './pages/NotFound'
import { UserInfo } from './pages/UserInfo'
// import { TodoListItem } from './Components/TodoListItem/TodoListItem'
import './App.scss'



function App() {
  // let state = useState([
  //   {
  //     todo:'reading books',
  //     id:1
  // },
  // {
  //     todo:'listen to music',
  //     id:2
  // },
  // {
  //     todo:'go tothe stadium',
  //     id:3
  // }
  // ])
 
 
  return (
    <>
  
  
    <Routes>
      <Route element = {<Navigate to={'/home'}/>} path={'/'}></Route>
      <Route element = {<PageLayout/>} path ={'/'}> 
        <Route element = {<MainPage /> } path='home'></Route>
        <Route element = {<Users />} path='users'></Route>
        <Route element = {<ShopPage />} path='shop'></Route>
        <Route element = {<MyCourses/>} path='mycourses'></Route>
        <Route element = { <ContactPage />} path='contact'></Route>
        <Route element = {<UserInfo/>} path='users/:userId'></Route>
      </Route>
      <Route element={<NotFound/>} path={'*'}>

      </Route>
    </Routes>
    

    </>
  )
}

export default App
