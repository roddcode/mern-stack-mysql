import { createContext, useContext, useState } from 'react'
import {
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from '../api/task.api'
import { createTaskRequest } from '../api/task.api'
const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskContext')
  }
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  async function loadTask() {
    const response = await getTasksRequest()
    setTasks(response.data)
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id)
      setTasks(tasks.filter((task) => task.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task)
      // setTasks([...tasks, response.data])
    } catch (error) {
      console.error(error)
    }
  }

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id)
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false)

      tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done)
      setTasks([...tasks])
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTask,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
