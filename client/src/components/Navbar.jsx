import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <h1>React MySQL</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/new">Create task</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar