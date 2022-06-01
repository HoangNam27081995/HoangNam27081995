import React, { useState } from "react";
import "./TodoList.css";
import { useSelector , useDispatch } from "react-redux";
import {toDotaskSlice} from "./store/taskSlice";

function TodoList() {
  const dispatch = useDispatch()
  const listTask = useSelector((state) => state.taskSlice);
  console.log(listTask);
  const handleRemove = (id)=>{
    dispatch(toDotaskSlice.deleteTodo(id))
  }
  const [checkShowDetail,setCheckShowDetail] =useState(false);
  const handleShowDetail = ()=>{
    setCheckShowDetail(true);
  }
  return (
    <>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Search..."
      />
      {listTask.map((item, index) => {
        return (
          <div className="row itemTodo mt-3" key={index} >
            <input type="checkbox" name="" id="" className="col-2"/>
            <span className="col-3">{item.titleTask}</span>
            <button className="btn btn-primary col-2 m-2" onClick={handleShowDetail}>Detail</button>
            <button className="btn btn-danger col-2 m-2" onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
