import React, { useState } from 'react';
import EditTask from './EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor: "#E36387",
            secondaryColor: "#F2AAAA"
        },
        {
            primaryColor: "#8294C4",
            secondaryColor: "#ACB1D6"
        },
        {
            primaryColor: "#BA6B57",
            secondaryColor: "#F1935C"
        },
        {
            primaryColor: "#AD6989",
            secondaryColor: "#FFCBCB"
        },
        {
            primaryColor: "#32AFA9",
            secondaryColor: "#A4D4AE"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class="card-wrapper mr-5">

            <div className="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>

            <div className="task-holder">
                <span className="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{taskObj.Name}</span>

                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "30px", "bottom": "20px" }}>
                    <i className="far fa-edit" style={{ "color": colors[index % 5].primaryColor, "margin-right": "5px", "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                </div>

            </div>

            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
            
        </div>
    );
};

export default Card;