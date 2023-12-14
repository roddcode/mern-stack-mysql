import { Link } from 'react-router-dom'

function TasksPage() {
  return (
    <div>
      <h1>Task Page</h1>
      <Link to='/new'>Ir a Formulario</Link>
    </div>
  )
}

export default TasksPage
