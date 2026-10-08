import { Link } from 'react-router-dom'

export default function TaskCard({ task, onDelete, onToggle }){
  // props + Binding + onClick
  return (
    <div style={{background:'white', padding:'25px', borderRadius:'18px', boxShadow:'0 10px 30px rgba(0,0,0,0.07)', display:'flex', flexDirection:'column', gap:'15px'}}>
      
      <div 
        onClick={()=>onToggle(task.id)} 
        style={{width:'30px', height:'30px', border:'1.5px solid black', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', background: task.done ? 'black' : 'white', color: task.done ? 'white' : 'black'}}
      >
        {task.done && '✓'}
      </div>

      <h3 style={{fontSize:'22px', fontWeight:'900', margin:0, textDecoration: task.done ? 'line-through' : 'none'}}>{task.title}</h3>
      
      <span style={{background:'#f0ece6', padding:'6px 12px', borderRadius:'20px', fontSize:'12px', width:'fit-content', fontWeight:'bold'}}>{task.tag}</span>
      
      <p style={{color:'#777', fontSize:'14px', lineHeight:'1.6', minHeight:'40px'}}>{task.desc}</p>
      
      <div style={{display:'flex', gap:'10px', marginTop:'auto'}}>
     <button onClick={()=>onDelete(task.id)} style={{flex:1, padding:'12px', borderRadius:'12px', border:'1.5px solid black', background:'white', color:'black', cursor:'pointer', fontWeight:'bold', fontSize:'14px'}}>مسح</button>
        <Link to={`/tasks/${task.id}`} style={{flex:1, padding:'12px', borderRadius:'12px', background:'black', color:'white', textAlign:'center', textDecoration:'none', fontWeight:'bold'}}>تفاصيل</Link>
      </div>
    </div>
  )
}