import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar';
import TaskComponent from './Components/TaskListComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    {/* <SideBar></SideBar> */}
    <TaskComponent></TaskComponent>
  </React.StrictMode>
)
