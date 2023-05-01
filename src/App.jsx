import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodosList from './components/TodoList';
import TodosLogic from './components/TodosLogic';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <TodosLogic />
    </>
  );
}

export default App;
