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

  const { user } = useAuthContext();
  const { documents } = useCollection("todo_list", ["userId", "==", user.uid]);

  const handleAddTodo = async e => {
    e.preventDefault();

    const toAdd = {
      task: newTodo,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      id: Math.random(),
      userId: user.uid,
    };

    await addDoc(collection(dataBase, "todo_list"), toAdd);

    setNewTodo("");
  };

  const handleCloseModal = () => setShowModal(false);
  if (showModal) setTimeout(handleCloseModal, 3000);

  return (
    <section>
      <h1>React ToDo List =&#41;</h1>
      <div className="toDos">
        <Card toDos={documents} />
        <form className="addTodo" onSubmit={e => handleAddTodo(e)}>
          <input
            type="text"
            onChange={e => setNewTodo(e.target.value)}
            value={newTodo}
            autoComplete="off"
            placeholder="Insira uma tarefa..."
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>

      {showModal && (
        <Modal>
          <h2>Sua tarefa deve conter pelo menos 3 letras =&#41;</h2>
        </Modal>
      )}
    </section>
  );
}
