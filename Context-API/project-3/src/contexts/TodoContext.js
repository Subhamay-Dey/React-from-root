import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo: "todo message",
            completed: false,                                                
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export default TodoContext;

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;