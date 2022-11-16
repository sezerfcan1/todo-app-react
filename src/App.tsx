import {useState} from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import {Todo} from './components/Todo'

function App() {

  const [todos , setTodos] = useState<Todo[]>([]);


  return (
    <div className="bg-bg_color w-screen h-screen flex justify-around items-center">
        <Card todos={todos}></Card>
        <Form todos={todos} setTodos={setTodos}></Form>
    </div>
  );
}

export default App;
