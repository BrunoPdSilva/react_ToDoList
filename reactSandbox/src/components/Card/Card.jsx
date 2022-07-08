import { dataBase } from "../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

import { Trash } from "phosphor-react";
import "./card.css";

export function Card({ toDos }) {
  const handleClick = async id => {
    const docRef = doc(dataBase, "todo_list", id);
    await deleteDoc(docRef);
  };

  return (
    <>
      {toDos &&
        toDos.map(({ task, date, id, description }) => (
          <div className="card-container" key={id}>
            <header>
              <p className="task-title">{task}</p>
              <small>{date}</small>
              <button onClick={() => handleClick(id)}>
                <Trash size={22} />
              </button>
            </header>
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        ))}
    </>
  );
}
