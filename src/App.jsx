
import './App.css'
import {Routes,Route} from 'react-router-dom'
import RootLayout from './Component/Layout/RootLayout'
import Home from './Component/Pages/Home'
import Shop from './Component/Pages/Shop'
import Collection from './Component/Pages/Collection'
import Journal from './Component/Pages/Journal'
import LookBook from './Component/Pages/LookBook'
import Pages from './Component/Pages/Pages'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<RootLayout/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/Journal' element={<Journal/>}/>
      <Route path='/lookbook' element={<LookBook/>}/>
      <Route path='/pages' element={<Pages/>}/>
     </Routes>
    </>
  )
}

export default App
