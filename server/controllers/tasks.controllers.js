import { pool } from '../db.js'

const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM tasks ORDER BY createAt ASC'
    )
    res.json(result)
  } catch (error) {
    return res.status(500).json({ messagge: error.message })
  }
}

const getTask = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [
      req.params.id,
    ])

    if (!result.length)
      return res.status(404).json({ message: 'Task not found' })

    res.json(result[0])
  } catch (error) {
    return res.status(500).json({ messagge: error.message })
  }
}

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body

    if (!title || title.trim() === '')
      return res.status(400).json({ message: 'Title is required' })

    const [result] = await pool.query(
      'INSERT INTO tasks(title, description) VALUES (?, ?)',
      [title, description]
    )
    res.json({
      id: result.insertId,
      title,
      description,
    })
  } catch (error) {
    return res.status(500).json({ messagge: error.message })
  }
}

const updateTask = async (req, res) => {
  try {
    const result = await pool.query('UPDATE tasks SET ? WHERE id = ?', [
      req.body,
      req.params.id,
    ])
    res.json(result)
  } catch (error) {
    return res.status(500).json({ messagge: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id

    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [
      taskId,
    ])

    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Task not found' })

    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ messagge: error.message })
  }
}

export { getTasks, getTask, createTask, updateTask, deleteTask }
