import './card.css'

export function Card({id, task, time, deleteFunc}){

  return (
    <div className="card">
      <p>{id} - {task}</p>
      <small>Criado em {time}</small>
      <button onClick={() => deleteFunc(id)}><i className="fa-solid fa-trash-can"></i></button>
    </div>
  )
}