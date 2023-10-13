import {useState} from 'react'
import Todo from './components/todo'
import TodoForm from './components/TodoForm'
import './App.css'
import Search from './components/search'
import EditTodo from './components/EditTodo'


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
    const [editingTodo, setEditingTodo] = useState(null);

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
    const editTodo = (id, newText) => {
        const updatedTodos = [...todos];
        const todoToEdit = updatedTodos.find((todo) => todo.id === id);
        if (todoToEdit) {
            todoToEdit.text = newText;
            setTodos(updatedTodos);
            setEditingTodo(null);
        }
    }
    const cancelEdit = () => {
        setEditingTodo(null);
    }

    return (
        <div className='app'>
        <h1> Lista de Tarefas </h1>
        <Search search={search} setSearch={setSearch} />
        <TodoForm addTodo={addTodo}/>
        <div className='Lista de Tarefas'>
        {todos
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
            .map((todo) =>
            editingTodo && editingTodo.id === todo.id ? (
                <EditTodo
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                cancelEdit={cancelEdit}
            />
            ) : (
                <Todo key={todo.id}  todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} setEditingTodo={setEditingTodo} />
            ))}
        </div>
    </div>
);
}

export default App