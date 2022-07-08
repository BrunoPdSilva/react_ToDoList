//REACT
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

//COMPONENTS
import { Card } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";

//FIREBASE
import { dataBase } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

//STYLES
import "./home.css";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useAuthContext();
  const { documents } = useCollection("todo_list", ["userId", "==", user.uid]);

  const handleAddTodo = async e => {
    e.preventDefault();

    const toAdd = {
      task: newTodo,
      id: Math.random(),
      userId: user.uid,
      date,
      description,
    };

    await addDoc(collection(dataBase, "todo_list"), toAdd);

    setNewTodo("");
    setDate("");
    setDescription("");
  };
  console.log(date);
  const handleCloseModal = () => setShowModal(false);
  if (showModal) setTimeout(handleCloseModal, 3000);

  return (
    <main>
      <h1>React ToDo List =&#41;</h1>
      <div className="toDos">
        <Card toDos={documents} />
      </div>
      <div className="form-container">
        <form className="addTodo" onSubmit={e => handleAddTodo(e)}>
          <div>
            <label>
              <span>Tarefa:</span>
              <input
                className="task-input"
                type="text"
                onChange={e => setNewTodo(e.target.value)}
                value={newTodo}
                autoComplete="off"
                placeholder="Insira uma tarefa..."
              />
            </label>
            <label>
              <input
                className="date-input"
                type="date"
                onChange={e => setDate(e.target.value)}
                value={date}
                required
              />
            </label>
          </div>
          <div>
            <label>
              <span>Descrição:</span>
              <input
                className="description-input"
                type="text"
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </label>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>

      {showModal && (
        <Modal>
          <h2>Sua tarefa deve conter pelo menos 3 letras =&#41;</h2>
        </Modal>
      )}
    </main>
  );
}
