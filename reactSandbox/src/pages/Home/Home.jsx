import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

import { Card } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";

import "./home.css";

export function Home() {
  const [showModal, setShowModal] = useState();
  const [showToDos, setShowToDos] = useState(true);
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const { user } = useAuthContext();

  const handleCloseModal = () => setShowModal(false);
  if (showModal) setTimeout(handleCloseModal, 3000);

  const handleDelete = id => {
    /* setToDoList(prevState => prevState.filter(toDo => toDo.id != id)); */
  };

  const handleAddTodo = e => {
    e.preventDefault();
    if (toDo.length > 3) {
      const newToDo = {
        task: toDo,
        time: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        id: toDoList.length + 1,
      };
      setToDoList(prevState => [...prevState, newToDo]);
      setToDo("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <section>
      <h1>React ToDo List =&#41;</h1>
      <div className="toDos">
        {!showToDos && (
          <button className="showButtons" onClick={() => setShowToDos(true)}>
            Mostrar
          </button>
        )}
        {showToDos && (
          <button className="showButtons" onClick={() => setShowToDos(false)}>
            Ocultar
          </button>
        )}
        {showToDos &&
          toDoList.map(toDo => (
            <Card key={toDo.id} toDo={toDo} deleteFunc={handleDelete} />
          ))}
        {showToDos && (
          <form className="addTodo" onSubmit={e => handleAddTodo(e)}>
            <input
              type="text"
              onChange={e => setToDo(e.target.value)}
              value={toDo}
              autoComplete="off"
              placeholder="Insira uma tarefa..."
            />
            <button type="submit">Adicionar</button>
          </form>
        )}
      </div>

      {showModal && (
        <Modal>
          <h2>Sua tarefa deve conter pelo menos 3 letras =&#41;</h2>
        </Modal>
      )}
    </section>
  );
}
