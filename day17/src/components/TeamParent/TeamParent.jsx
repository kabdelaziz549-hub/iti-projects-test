import { useState } from 'react'
import TeamChild from '../TeamChild/TeamChild.jsx'
export default function TeamParent() {
  const [team] = useState([
    { id: 1, name: 'kareem', role: 'Frontend' },
    { id: 2, name: 'Abd elaziz', role: 'Backend' },
  ])
  return (
    <div className="bg-light p-3 rounded shadow-sm mt-4">
      <h3 className="bg-dark text-white p-2 text-center">2- Team Parent</h3>
      <TeamChild members={team} />
    </div>
  )
}