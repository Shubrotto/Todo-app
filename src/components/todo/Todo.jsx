// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";
import { add, del, edit } from "../../features/todoSlice";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const Todo = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const [title, setTitle] = useState({});
  console.log(todos.map((todo) => todo.id));
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(add(title));
    setTitle(null);
    console.log("object");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Todo app</h1>
        <div className="form_container">
          <button className="add_btn" onClick={() => handleAddTodo()}>
            Add
          </button>
          <input
            className="todo_input"
            type="text"
            placeholder="write todo title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>{" "}
        <div className="todo_container">
          <div className="input_container">
            {todos?.map((item) => (
              <div key={item?.id} className="todo_wrapper">
                <FaEdit
                  className="edit_btn"
                  onClick={() => dispatch(edit({ id: item.id }))}
                />
                <div className="todo_item">
                  <span>{item?.title}</span>{" "}
                </div>
                <AiFillDelete
                  className="delete_btn"
                  onClick={() => dispatch(del({ id: item.id }))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
