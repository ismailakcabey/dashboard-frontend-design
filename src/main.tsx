import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/sidebar/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="flex flex-row">
  <div className="basis-1/8">
  <SideBar />
  </div>
  <div className="flex-grow" style={{backgroundColor:"#e8e8e8"}}>
  <App />
  </div>
</div>
        </BrowserRouter>
  </React.StrictMode>,
)
