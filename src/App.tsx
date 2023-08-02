import './App.css'
import {
  Routes,
  Route,
} from 'react-router-dom';
import DashBoardPage from './pages/dashboard';
import Orders from './pages/orders';
import Products from './pages/products';
function App() {

  return (
    <div className='m-5'  >
      <Routes>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <div className='grid place-items-center' style={{color:"#8E95A9"}}>
      eCommerce Platform @ 2020. All right reserved
      </div>
    </div>
  )
}

export default App
