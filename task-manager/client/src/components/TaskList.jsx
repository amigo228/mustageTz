import {Task} from './Task.jsx'

export function TaskList({ searchTerm, tasks, loading, onDeleted, filterStatus }) {
    const filteredTasks = tasks
        .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(task => {
            if (filterStatus === 'completed') return task.status === true;
            if (filterStatus === 'incomplete') return task.status === false;
            return true;
        });

    if (loading) return <div>Loading...</div>;
    if (filteredTasks.length === 0) return <div>No tasks found</div>;

    return (
        <>
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} onDeleted={onDeleted} />
            ))}
        </>
    );
}
