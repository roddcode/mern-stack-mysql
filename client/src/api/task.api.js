import axios from 'axios'

export const getTasksRequest = async () => {
  return await axios.get("http://localhost:4000/tasks")
}

export const createTaskRequest = async (task) => {
  return await axios.post('http://localhost:4000/tasks', task)
}

export const deleteTaskRequest = async(id) => {
  return await axios.delete(`http://localhost:4000/tasks/${id}`)
}

export const getTaskRequest = async (id) => {
  return axios.get(`http://localhost:4000/tasks/${id}`)
}

export const updateTaskRequest = async (id, newFields) => {
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields)
}

export const toggleTaskDoneRequest = async (id, done) => {
  await axios.put(`http://localhost:4000/tasks/${id}`, {done})
}