import { RiCloseCircleFill } from "react-icons/ri";

function Todo({ todo, handleDelete }) {
  return (
    <div className="todos">
      {todo.map((todo, index) => {
        return (
          <div className="todo" key={index}>
            <p>{todo.text}</p>
            <button onClick={() => handleDelete(index)}>
              <RiCloseCircleFill className="close" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
