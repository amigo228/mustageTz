import { useState } from "react";
import { Popup } from './Popup.jsx';

export function Task({ task, onDeleted }) {
    const [showEditPopup, setShowEditPopup] = useState(false);

    const deleteTask = () => {
        fetch('http://localhost:3000/tasks/' + task.id, { method: 'DELETE' })
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                onDeleted();
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="task">
            <h2>{task.title}</h2>
            <p className="description">{task.description}</p>
            <span className={"status " + (task.status ? "completed" : "incomplete")}>
        {task.status ? "Completed" : "Incomplete"}
      </span>
            <button className="edit-btn" onClick={() => setShowEditPopup(true)}>Edit</button>
            <button className="delete-btn" onClick={deleteTask}>Delete</button>

            {showEditPopup && (
                <Popup
                    onClose={() => setShowEditPopup(false)}
                    initialData={task}
                    onTaskUpdated={onDeleted}
                />
            )}
        </div>
    );
}
