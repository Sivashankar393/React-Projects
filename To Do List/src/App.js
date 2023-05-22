import { useState } from 'react';
import TodoList from './TodoList';

 function App() {
  const[todoList,setTodoList] = useState(['Todo1','Todo2'])

  return (
    <div>
      <TodoList todoList={todoList}/>
      <input/>
      <button onclick></button>
      <button>clear Complete Todo</button>
      <p>0 Left to do</p>
      
    </div>
  );
}
export default App;
