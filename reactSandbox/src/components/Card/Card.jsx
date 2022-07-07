import { dataBase } from "../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

import { Trash } from "phosphor-react";
import "./card.css";

export function Card({ toDos }) {

  const handleClick = async id => {
    const docRef = doc(dataBase, "todo_list", id);
    await deleteDoc(docRef)
    
  }

  return (
    <>
      {toDos &&
        toDos.map(({ task, time, id }) => (
          <div className="card" key={id}>
            <p>{task}</p>
            <small>Criado em {time}</small>
            <button onClick={() => handleClick(id)}>
              <Trash size={22} />
            </button>
          </div>
        ))}
    </>
  );
}