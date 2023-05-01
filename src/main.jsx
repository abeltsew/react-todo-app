import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';

import TodosLogic from './components/TodosLogic.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="todos">
        <TodosLogic />
      </div>
    </div>
  </React.StrictMode>
);
