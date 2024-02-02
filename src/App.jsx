import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editIndex !== null) {
        // Update existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        // Add new todo
        setTodos([...todos, newTodo]);
      }
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div id='body'>

      <div id='title'>
        <div id='todo'>
          <h1>TODO</h1>
        </div>
        <div id='creator'>
          <h2>Submitted by: Marc Angel Villarosa</h2>
        </div>
      </div>

        <div id='content'>
         
          <div id='input'>  
              <input
                id='textbox'
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
              />
              <button onClick={addTodo}>{editIndex !== null ? 'UPDATE' : 'ADD'}</button>
          </div>

         <div id='list'>
          <div id='listcontent'>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                 <div id='details'>{todo}</div>
                 <div id='buttons'>
                    <button id='edit' onClick={() => editTodo(index)}>Edit</button>
                    <button id='delete' onClick={() => deleteTodo(index)}>Delete</button>
                 </div>
                </li>
              ))}
            </ul>
          </div>
          </div>

        </div>

    </div>
  );
};

export default TodoApp;
