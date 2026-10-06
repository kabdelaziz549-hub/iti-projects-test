export default function TeamChild({ members }) {
  return (
    <div className="row g-2 mt-2">
      {members.map(m => (
        <div key={m.id} className="col-md-6">
          <div className="card text-center"><div className="card-body"><h5>{m.name}</h5><p>{m.role}</p></div></div>
        </div>
      ))}
    </div>
  )
}