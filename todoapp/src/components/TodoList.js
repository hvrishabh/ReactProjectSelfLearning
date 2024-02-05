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

  console.log(task.length);
  const [text, setText] = useState("23");
  const [classTaskDone, setclassTaskDone] = useState(false);

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

  //   if (task.length === 0) {
  //     return <div>Please Enter the content for Todo List</div>;
  //   }
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

      {task.length === 0 ? (
        <div>
          <h1>Please Enter some tasks</h1>
        </div>
      ) : (
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
                  classTaskDone={classTaskDone}
                />
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

function ListItems({ item, toggleCompleted, handleDelete, classTaskDone }) {
  const { id, text, completed } = item;

  function handleChange() {
    toggleCompleted(id);
  }
  classTaskDone = "line-through";

  return (
    <>
      <tr>
        <td>{id}.</td>
        <td style={{ textDecorationLine: completed ? classTaskDone : "" }}>
          {text}
        </td>
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
