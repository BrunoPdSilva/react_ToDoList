import { useState } from "react";
import { Card } from "../../components/Card/Card";
import "./home.css";

export function Home() {
  const [showToDos, setShowToDos] = useState(true);
  const [toDo, setToDo] = useState();
  const [toDoList, setToDoList] = useState([]);
  const form = document.querySelector(".addTodo");

  const handleDelete = id =>
    setToDoList(prevState => prevState.filter(toDo => toDo.id != id));

  const handleAddTodo = e => {
    e.preventDefault();
    form.reset();

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
  };

  return (
    <section>
      <h1>React ToDo List =&#41;</h1>
      <h2>Feito para estudar React</h2>
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
            <Card
              key={toDo.id}
              task={toDo.task}
              time={toDo.time}
              id={toDo.id}
              deleteFunc={handleDelete}
            />
          ))}
        {showToDos && (
          <form className="addTodo">
            <input type="text" onChange={e => setToDo(e.target.value)} />
            <button type="submit" onClick={e => handleAddTodo(e)}>
              Adicionar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
