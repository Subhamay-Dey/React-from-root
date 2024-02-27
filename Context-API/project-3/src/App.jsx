import './App.css'
import { TodoForm, TodoItem } from './components'
import { TodoProvider } from './contexts'
import { useEffect } from 'react'
import React from 'react'

function App() {

  const [todos, setTodos]  = React.useState([])
  
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  //another way to update todo

  // prev.map((prevTodo) => {
  //   if(prevTodo.id === id){
  //     todo
  //   }
  //   else{
  //     prevTodo
  //   }
  // })

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  
  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(todos))
  } ,[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo,deleteTodo, toggleComplete}}>
      <div className='h-screen w-full flex justify-center items-center'>
      <div className="bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 h-[80%] w-[50%] pt-4 rounded-lg shadow-2xl">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-8 mt-4">Subho's Todo List</h1>
                    <div className="mb-4">
                        {<TodoForm/>}
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </TodoProvider>
  )
}

export default App
