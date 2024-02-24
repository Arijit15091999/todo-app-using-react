import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: "go to gym",
          description: "9 to 10",
          completed: false,
        },
        {
          title: "go to gym",
          description: "9 to 10",
          completed: false,
        },
        {
          title: "go to gym",
          description: "9 to 10",
          completed: false,
        }
      ]}></Todos>
    </div>
  )
}

export default App
