
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';

import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log('deleted', todo)
    // deleting this way doesn't work
    // let index=todos.indexOf(todo)
    //todo.splice(index,i)
    setTodos(todos.filter((item) => {
      return item !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'shopping',
      desc: 'buy things today'
    },
    {
      sno: 2,
      title: 'study react',
      desc: 'complete react fast'
    },
    {
      sno: 3,
      title: 'go to market',
      desc: 'finish marketing'
    }
  ])
  return (
    <>
      <Header title='MyTodos' searchBar={false} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

