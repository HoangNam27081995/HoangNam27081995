import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {toDotaskSlice} from "./store/taskSlice";
import isEmpty from "validator/lib/isEmpty";
import { v4 as uuidv4 } from 'uuid';

function NewTask() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id:"",
    titleTask: "",
    dueDate:new Date().toISOString().slice(0,10),
    Priority: "",
    Description: "",
  });
  const [validatorMsg,setValidatorMsg] = useState('');
  const handleTask = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setTask({ ...task, [name]: value ,id:uuidv4() });
  };
  const validateAll = () => {
    const msg ={};
    if(isEmpty(task.titleTask)){
      msg.titleTask = "Làm ơn điền đầy đủ form này"
    }
    if(isEmpty(task.Description)){
      msg.Description = "Làm ơn điền đầy đủ form này"
    }
    if(isEmpty(task.dueDate)){
      msg.dueDate = "Làm ơn điền đầy đủ form này"
    }
    setValidatorMsg(msg);
    if(Object.keys(msg).length > 0) return false;
    return true;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    console.log(isValid)
    if(!isValid)return;
    dispatch(toDotaskSlice.addTodo(task));
    setTask({
      id:"",
      titleTask: "",
      dueDate: "",
      Priority: "",
      Description: ""
    })
  }
  return (
    <>
      <div className="p-2">
        <form action="">
          <input
            type="text"
            value={task.titleTask}
            className="form-control"
            placeholder="Add new task..."
            name="titleTask"
            onChange={handleTask}
          />
          <p>{validatorMsg.titleTask}</p>

          <p className="mt-3">
            <label htmlFor="description">Descripton</label>
          </p>
          <textarea
            name="Description"
            id="description"
            className="form-control"
            onChange={handleTask}
            value={task.Description}
          ></textarea>
          <p>{ validatorMsg.Description}</p>
          <div className="row">
            <div className="date col-6">
              <h6>Due date</h6>
              <input
                type="date"
                className="form-select"
                name="dueDate"
                onChange={handleTask}
                value={task.dueDate}
                min={new Date().toISOString().slice(0,10)}
              />
              <p>{ validatorMsg.dueDate}</p>
            </div>
            <div className="Priority col-6">
              <h6>Priority</h6>
              <select
                className="form-select"
                name="Priority"
                onChange={handleTask}
                value={task.Priority}
              >
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
                <option value="Hight">High</option>
              </select>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-success mt-4" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default NewTask;
