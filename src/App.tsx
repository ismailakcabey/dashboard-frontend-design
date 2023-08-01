import './App.css'
import {
  Routes,
  Route,
} from 'react-router-dom';
import DashBoardPage from './pages/dashboard';
import Orders from './pages/orders';
function App() {

  return (
    <div className='m-5'  >
      <Routes>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App
