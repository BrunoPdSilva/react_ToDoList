import { Trash } from "phosphor-react"
import './card.css'

export function Card({toDo, deleteFunc}){
  
  return (
    <div className="card">
      <p>{toDo.task}</p>
      <small>Criado em {toDo.time}</small>
      <button onClick={() => deleteFunc()}><Trash size={22} /></button>
    </div>
  )
}