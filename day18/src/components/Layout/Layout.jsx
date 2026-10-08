import { NavLink, Outlet, Link } from 'react-router-dom'
export default function Layout(){
  const nav = { background:'black', color:'white', padding:'18px 40px', display:'flex', gap:'30px', alignItems:'center' }
  const link = ({isActive})=> ({ color: isActive?'white':'#999', textDecoration:'none', borderBottom: isActive?'2px solid white':'none', paddingBottom:'4px' })
  return (<><nav style={nav}><Link to="/" style={{fontSize:'28px', fontWeight:'900', color:'white', textDecoration:'none'}}>MyTasks</Link><div style={{display:'flex', gap:'25px', marginLeft:'40px'}}><NavLink to="/" style={link}>اليوم</NavLink><NavLink to="/tasks" style={link}>المهام</NavLink><NavLink to="/about" style={link}>الإعدادات</NavLink></div></nav><div style={{background:'#f5f1eb', minHeight:'100vh'}}><Outlet/></div></>)
}