import axios from 'axios'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = "http://jsonplaceholder.typicode.com/todos/2"
axios.get(url).then(response => {
    const { id, title, completed } = response.data as Todo;
    
    console.log(`${id}, ${title}, ${completed}`)
})

