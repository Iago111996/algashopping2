import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { store } from "../store/store";

function ToDo() {
    const [task, updateTask] = useState("");
    const [tasks, updateTasks] = useState([]);

    function handleInputChange(event) {
        updateTask(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // updateTasks(prevState => [...prevState, task]);
        store.dispatch({
            type: "ADD_TASK",
            payload: task,
        });
        updateTask("");
    }

    useEffect(() => {
        store.subscribe(() => {
            updateTasks(store.getState());
        })
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange} value={task} />
                <button>Add</button>
            </form>

            <ul style={{ padding: 16 }}>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>{task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default connect()(ToDo);