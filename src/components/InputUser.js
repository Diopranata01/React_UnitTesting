import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {Input} from 'reactstrap';
import {tambahDaftar} from '../store/dataSlice'

const InputUser = () => {

    const dispatch = useDispatch()
    /* const {addTask} = props */

    //Temp
    const [newTask, setNewTask] = useState([
        { title : '', status : false}
    ]);

    //Passing the temp data via props
    const passSubmit = (e) =>{
        e.preventDefault()

        if(newTask.title){
            const passData = {
                title: newTask.title,
                status: false
            }
            
            dispatch(tambahDaftar(passData))
        }else{
            alert('Input kosong, isi terlebih dahulu!')
        }
        setNewTask({
            ...newTask,
            title : ''
        })
    }
    const onChange = (e) => {
        const { name, value} = e.target
        setNewTask({
            ...newTask, [name] : value
        })
        console.log(newTask)
    }

  return (
    <>
                <div className="row row-form justify-content-between">
                    <div className="col-10">
                        <Input
                        name="title"
                        value={newTask.title}
                        onChange={onChange}//assign setNewTask while typing, before submited newTask
                        className="form-control form-control-md border-0"
                        placeholder="Add todo..."
                        />
                    </div>
                    <div className="col-1">
                        <button onClick={passSubmit} className="btn">Submit</button>
                    </div>
                </div>
    </>
  )
}

export default InputUser