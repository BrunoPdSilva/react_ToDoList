import './card.css'

export function Card(props){

  return (
    <div className="card">
      <p>{props.id} - {props.task}</p>
      <small>Criado em {props.time}</small>
      <button onClick={() => props.deleteFunc(props.id)}><i className="fa-solid fa-trash-can"></i></button>
    </div>
  )
}