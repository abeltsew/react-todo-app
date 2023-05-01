import { useState } from 'react';
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-new"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
