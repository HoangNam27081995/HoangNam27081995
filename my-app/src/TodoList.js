import React from "react";
import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { toDotaskSlice } from "./store/taskSlice";
import FormUpdate from "./FormUpdate";

function TodoList() {
  const dispatch = useDispatch();
  let listTask = useSelector((state) => state.taskSlice);
  const handleRemove = (id) => {
    dispatch(toDotaskSlice.deleteTodo(id));
  };
  const handleShowDetail = (id) => {
    dispatch(toDotaskSlice.updateShowupdate(id));
  };
  const handleChecked = (id) => {
    dispatch(toDotaskSlice.updateCheckedTodo(id));
  };
  const handleSearch = (e) => {
    dispatch(toDotaskSlice.searchTodo(e.target.value));
  };
  return (
    <>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Search..."
        onChange={handleSearch}
      />
      {listTask.map((item, index) => {
        return (
          <div key={index}>
            <div
              className="row itemTodo mt-3"
              style={{ backgroundColor: item.checked ? "gray" : "white" }}
            >
              <input
                type="checkbox"
                name=""
                id=""
                className="col-2"
                onChange={() => handleChecked(item.id)}
              />
              <span className="col-3">{item.titleTask}</span>
              <button
                className="btn btn-primary col-2 m-2"
                disabled={item.checked ? true : false}
                onClick={() => handleShowDetail(item.id)}
              >
                {item.checked ? "Done" : "Detail"}
              </button>
              <button
                className="btn btn-danger col-2 m-2"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
            {item.checkedDetail ? (
              <FormUpdate
                id={item.id}
                titleTask={item.titleTask}
                dueDate={item.dueDate}
                Priority={item.Priority}
                Description={item.Description}
              />
            ) : null}
          </div>
        );
      })}
      
    </>
  );
}

export default TodoList;
