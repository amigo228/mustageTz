import {useEffect, useState} from 'react'
import './styles/main.scss'
import {TaskList} from './components/TaskList.jsx'
import {Popup} from './components/Popup.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setFilterStatus] = useState('completed');

  // TODO: Implement FE-side crypto using C++ enc_ funcs WASM

  const loadTasks = () => {
    setLoading(true);
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched tasks:', data);
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
        setLoading(false);
      });
  }

    useEffect(() => {
        loadTasks();
    }, [])

    const handleTaskUpdate = () => {
        loadTasks();
    }

  return (
      <div className="app-container">
        <header className="app-header">
          <button className="btn create-btn" onClick={() => setShowPopup(true)}>Create task</button>

          <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="filter-placeholder"><label>
              Filter by status
              <select
                  value={status}
                  onChange={(e) => setFilterStatus(e.target.value)}
              >
                  <option value="completed">Completed</option>
                  <option value="incomplete">Incomplete</option>
              </select>
          </label></div>
        </header>

        <main className="tasks-list">
            <TaskList searchTerm={searchTerm} tasks={tasks} loading={loading} onDeleted={handleTaskUpdate} filterStatus = {status} />
        </main>

          {showPopup && <Popup onClose={() => setShowPopup(false)} onTaskCreated={handleTaskUpdate} />}
      </div>
  )
}

export default App
