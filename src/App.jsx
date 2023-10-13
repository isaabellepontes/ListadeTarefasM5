import {useState} from 'react'
import Todo from './components/todo'


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
}