import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo with input text value and the 
        editTodo(value, task.id);
      };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      {/* event in input is the input of the user: the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action */}
    <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Edit Task</button>
  </form>
  )
}