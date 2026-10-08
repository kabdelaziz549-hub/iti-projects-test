import { useParams } from 'react-router-dom'
export default function TaskDetails(){
  const {id} = useParams()
  return <div style={{padding:'30px', background:'white', marginTop:'20px', borderRadius:'15px'}}>تفاصيل المهمة رقم: {id}</div>
}