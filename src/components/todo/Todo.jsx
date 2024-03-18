import "./todo.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Todo app</h1>
        <div className="form_container">
          <button className="add_btn">Add</button>
          <input
            className="todo_input"
            type="text"
            placeholder="write todo title..."
          />
          <input
            className="todo_input"
            type="text"
            placeholder="write todo description..."
          />
        </div>
        <div className="todo_container">
          <FaEdit className="edit_btn" />
          <div className="todo_wrapper">
            <h4>todo title</h4>
            <p>todo desc</p>
          </div>
          <AiFillDelete className="delete_btn" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
