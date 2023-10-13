import {useState} from 'react'
import Todo from './components/todo'
import TodoForm from './components/TodoForm'
import './App.css'
import Search from './components/search'


function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Fazer a lista do modulo 5",
            categoria: "Atividades",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Fazer compras no mercado",
            categoria: "Casa",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar mais React",
            categoria: "Atividades",
            isCompleted: false,
        },
        {
            id: 4,
            text: "Ir na reunião da escola",
            categoria: "Familia",
            isCompleted: false,
        },
    ]);

    const [search, setSearch] = useState('')

    const addTodo = (text, categoria) => {
            const newTodos = [
                ...todos, 
                {
                id: Math.floor(Math.random() * 10000),
                text,
                categoria,
                isCompleted: false,
                },
            ];
        setTodos(newTodos);
    };
    
    const removeTodo = (id) => {
        const newTodos = [...todos]
        const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
        setTodos(filteredTodos);
    }

    const completeTodo = (id) => {
        const newTodos = [...todos]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
        setTodos(newTodos);
    }
    return (
        <div className='app'>
        <h1> Lista de Tarefas </h1>
        <Search search={search} setSearch={setSearch} />
        <TodoForm addTodo={addTodo}/>
        <div className='Lista de Tarefas'>
            {todos.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((todo) => (
                <Todo key={todo.id}  todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
            ))}
        </div>
    </div>
)
}

export default App