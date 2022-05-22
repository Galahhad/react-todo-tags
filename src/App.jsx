import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const todoArray = [];

  const [todo, setTodo] = useState(todoArray);
  const [text, setText] = useState("");
  const [blank, setblank] = useState(false);

  const textNone = text.trim().length === 0;
  const somer = todo.some((todo) => todo.text === text);

  const handleText = (e) => {
    setText(e.target.value);
    setblank(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    setTodo([
      ...todo,
      {
        text: text,
      },
    ]);
  };

  const handleBlur = () => {
    if (textNone) {
      setblank(true);
    } else {
      setblank(false);
    }
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((todo, index) => index !== id));
    setblank(false);
  };

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        blank={blank}
        text={text}
        handleText={handleText}
        handleBlur={handleBlur}
        textNone={textNone}
        somer={somer}
      />
      <Todo todo={todo} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
