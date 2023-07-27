import './App.css'
import {
  Routes,
  Route,
} from 'react-router-dom';
import DashBoardPage from './pages/dashboard';
function App() {

  return (
    <div className='m-5'  >
      <Routes>
        <Route path='/dashboard' element={<DashBoardPage/>}/>
      </Routes>
    </div>
  )
}

export default App
