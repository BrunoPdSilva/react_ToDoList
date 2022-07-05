import { Trash } from "phosphor-react"

import './card.css'

export function Card({id, task, time, deleteFunc}){

  return (
    <div className="card">
      <p>{id} - {task}</p>
      <small>Criado em {time}</small>
      <button onClick={() => deleteFunc(id)}><Trash size={22} /></button>
    </div>
  )
}