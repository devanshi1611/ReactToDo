import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Card from "./Card";
import CreateTask from './CreateTask';


const Details = () => {

    const getuserArr = localStorage.getItem("userkey");

    const userobj = JSON.parse(getuserArr);

    const userdata = Object.values(userobj);

    const username = userdata[0].name;

    const history = useNavigate();

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    }

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();

        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };

        setCurrentDate(date.toLocaleDateString('en-GB', options));
    }, []);

    return (
        <>
            {
                <div className="container_new">

                    <div className=" header text-center sub_nav">

                        <div className="row btn_container">

                            <div className="col uname">
                                User Name : {username}
                            </div>

                            <div className="col-6">
                                <button className="cmn_btn" onClick={() => setModal(true)}>Create Task</button>

                                <button className="cmn_btn" onClick={userlogout}>Log Out</button>
                            </div>

                            <div className="col date">
                                Date : {currentDate}
                            </div>

                        </div>

                    </div>

                    <div className="task-container">
                        {taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                    </div>

                    <CreateTask toggle={toggle} modal={modal} save={saveTask} />
                </div>

            }
        </>
    );
}

export default Details
