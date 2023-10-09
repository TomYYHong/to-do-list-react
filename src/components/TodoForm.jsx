import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
      // prevent default action: sumbit will refresh the page
      event.preventDefault();
      
        if (value) {
          // add todo, addTodoFunction is passed by reference
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };


  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className="todo-input" placeholder='please enter your todo task?' />
    <button type="submit" className='button'>Add Task</button>
  </form>
  )
}