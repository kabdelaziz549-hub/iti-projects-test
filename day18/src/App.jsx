import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Tasks from './components/Tasks/Tasks'
import TaskDetails from './components/TaskDetails/TaskDetails'
import About from './components/About/About'

const router = createBrowserRouter([
  { path:'/', element:<Layout/>, children:[
    { index:true, element:<Home/> },
    { path:'tasks', element:<Tasks/>, children:[
      { path:':id', element:<TaskDetails/> }
    ]},
    { path:'about', element:<About/> },
    { path:'*', element:<div style={{padding:'100px', textAlign:'center', fontSize:'40px'}}>404 - مش موجود</div> }
  ]}
])
export default function App(){ return <RouterProvider router={router}/> }