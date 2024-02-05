import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "doc app",
      completed: true,
    },
    {
      id: 2,
      text: "aws theory",
      completed: true,
    },
    {
      id: 3,
      text: "JS",
      completed: false,
    },
  ]);

  const [text, setText] = useState("23");

  function addTask(e) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    e.preventDefault();
    console.log(task);
    setTask([...task, newTask]);
    setText("");
  }
  function handleDelete(id) {
    setTask(task.filter((item) => item.id !== id));
  }

  function toggleCompleted(id) {
    // console.log(id);
    setTask(
      task.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <div className="TODO-LIST">
      <h1 className="Heading">Your TODO APP is here: </h1>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>

      <div>
        <h1>The list of Todo is</h1>
        <table style={{ fontSize: "24px" }}>
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
          {task.map((item) => {
            return (
              <ListItems
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                toggleCompleted={toggleCompleted}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

function ListItems({ item, toggleCompleted, handleDelete }) {
  //   const [taskDone, setTaskDone] = useState(false);

  const { id, text, completed } = item;
  //   console.log(id, text, completed);
  function handleChange() {
    toggleCompleted(id);
  }

  return (
    // <>
    //   <div style={{ margin: "10px" }}>
    //     <span> {id}. </span>
    //     <span> {text} </span>
    //     <input type="checkbox" checked={completed} onChange={handleChange} />
    //     <button
    //       style={{ marginLeft: "20px" }}
    //       onClick={(e) => handleDelete(id)}
    //     >
    //       delete task
    //     </button>
    //   </div>
    // </>

    <>
      <tr>
        <td>{id}</td>
        <td>{text}</td>
        <td>
          <input type="checkbox" checked={completed} onChange={handleChange} />
        </td>
        <td>
          <button onClick={(e) => handleDelete(id)}>Del task</button>
        </td>
      </tr>
    </>
  );
}

export default TodoList;
