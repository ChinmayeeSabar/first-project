import {createContext, useContext} from 'react'


//Context is created
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            cpmpleted: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider