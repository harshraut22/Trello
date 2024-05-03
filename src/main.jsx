import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import TaskComponent from './Components/TaskListComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <TaskComponent></TaskComponent>
  </React.StrictMode>
)
