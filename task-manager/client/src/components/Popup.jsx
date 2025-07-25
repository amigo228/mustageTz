import { useState, useEffect } from "react";

export function Popup({ onClose, onTaskCreated, onTaskUpdated, initialData }) {
    const isEditMode = !!initialData;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('completed');

    useEffect(() => {
        if (isEditMode) {
            setTitle(initialData.title);
            setDescription(initialData.description || '');
            setStatus(initialData.status ? 'completed' : 'incomplete');
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskData = {
            title,
            description,
            status: status === 'completed',
        };

        const url = isEditMode
            ? `http://localhost:3000/tasks/${initialData.id}`
            : `http://localhost:3000/tasks`;

        const method = isEditMode ? 'PUT' : 'POST';

        fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData),
        })
            .then(res => res.json())
            .then(data => {
                isEditMode ? onTaskUpdated() : onTaskCreated();
                onClose();
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h2>{isEditMode ? 'Edit Task' : 'Create New Task'}</h2>

                <form className="task-form" onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Status:
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="completed">Completed</option>
                            <option value="incomplete">Incomplete</option>
                        </select>
                    </label>

                    <button type="submit">{isEditMode ? 'Update' : 'Create'}</button>
                </form>

                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
