import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from "./context"
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [todos, settodos] = useState([]);
  const addTodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(), ...todo} , ...prev]);// This adds the new todo at the beginning and spreads the old todos
  }

  const updateTodo=(id,todo)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===todo.id ? todo:prevTodo)))
    // Before: [{id: 1, text: "Old todo"}, {id: 2, text: "Another todo"}]
// Call: updateTodo(1, {id: 1, text: "Updated todo"})
// After: [{id: 1, text: "Updated todo"}, {id: 2, text: "Another todo"}]
  }

  const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id!=id))
  }

  const toggleTodo=(id)=>{
    settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo // ...prevTodo spreads the object so that you can access al the props of the object. Doing this is very important before accessing the contents of the object. 
  ))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      settodos(todos);
    }
  },[])

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
