import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { toDotaskSlice } from "./store/taskSlice";
import "./formUpdate.css";
function FormUpdate({ id, titleTask, dueDate, Description, Priority }) {
  const dispatch = useDispatch();
  const [taskUpdate, setTaskUpdate] = useState({
    id: id,
    titleTask: titleTask,
    dueDate: dueDate,
    Description: Description,
    Priority: Priority,
  });
  // console.log(taskUpdate);
  const handleTaskupDate = (e) =>{
    const {name,value}= e.target;
    console.log(e.target.value);
    setTaskUpdate({...taskUpdate,[name]:value})
  }
  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(toDotaskSlice.updateTodo(taskUpdate))
  }
  return (
    <div className="p-2 formupdate">
      <form action="">
        <input
          type="text"
          value={taskUpdate.titleTask}
          className="form-control"
          placeholder="Update new task..."
          name="titleTask"
          onChange={handleTaskupDate}
        />
        <p className="mt-3">
          <label htmlFor="description">Descripton</label>
        </p>
        <textarea
          name="Description"
          id="description"
          className="form-control"
          onChange={handleTaskupDate}
          value={taskUpdate.Description}
        ></textarea>
        <div className="row">
          <div className="date col-6">
            <h6>Due date</h6>
            <input
              type="date"
              className="form-select"
              name="dueDate"
              onChange={handleTaskupDate}
              value={taskUpdate.dueDate}
            />
          </div>
          <div className="Priority col-6">
            <h6>Priority</h6>
            <select
              className="form-select"
              name="Priority"
              onChange={handleTaskupDate}
              value={taskUpdate.Priority}
            >
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
              <option value="Hight">High</option>
            </select>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-success mt-2" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUpdate;
