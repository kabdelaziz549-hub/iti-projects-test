import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import TaskCard from '../TaskCard/TaskCard'

export default function Tasks(){
  const [tasks, setTasks] = useState([
    {id:1, title:'تصميم صفحة الهبوط', desc:'إنشاء تصميم أولي للصفحة الرئيسية', tag:'اليوم • تصميم', done:false},
    {id:2, title:'مراجعة التقارير الأسبوعية', desc:'مراجعة تقرير الأداء الأسبوعي', tag:'غداً • تقارير', done:true},
    {id:3, title:'شراء مستلزمات المكتب', desc:'دفاتر، أقلام، أوراق طباعة', tag:'هذا الأسبوع • مشتريات', done:false},
  ])
  const [search, setSearch] = useState('')
  const [newTitle, setNewTitle] = useState('')

  useEffect(()=>{ document.title = `عندك ${tasks.length} مهام`; }, [tasks])

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id!== id))
  const toggleTask = (id) => setTasks(tasks.map(t => t.id===id? {...t, done:!t.done} : t))
useEffect(()=>{ console.log('render') })
useEffect(()=>{ console.log('mounted') }, [])
  // دي فانكشن الاضافة الجديدة
  const addTask = () => {
    if(newTitle.trim() === '') return
    const newTask = { id: Date.now(), title: newTitle, desc:'مهمة جديدة', tag:'الآن • جديدة', done:false }
    setTasks([newTask,...tasks])
    setNewTitle('')
  }

  const filtered = tasks.filter(t => t.title.includes(search))

  return (
    <div style={{padding:'50px'}}>
      <h1 style={{fontSize:'50px', fontWeight:'900', margin:'0 0 10px 0'}}>نظم يومك صح.</h1>

      <div style={{display:'flex', gap:'10px', marginBottom:'30px', marginTop:'20px'}}>
        <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder='اكتب مهمة جديدة...' style={{padding:'12px 15px', borderRadius:'10px', border:'1.5px solid black', width:'300px', fontWeight:'bold'}}/>
        <button onClick={addTask} style={{padding:'12px 25px', borderRadius:'10px', background:'black', color:'white', border:'none', cursor:'pointer', fontWeight:'900'}}> + اضافة</button>

        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='دور...' style={{padding:'12px 15px', borderRadius:'10px', border:'1px solid #ddd', marginLeft:'auto', width:'200px'}}/>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px'}}>
        {filtered.map(task => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask}/>
        ))}
      </div>
      <Outlet/>
    </div>
  )
}