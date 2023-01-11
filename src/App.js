/* eslint-disable react/jsx-no-undef */
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) initTodo = [];
  else initTodo = JSON.parse(localStorage.getItem("todos"));

  // deleting this way doesn't work
  // let index=todos.indexOf(todo)
  //todo.splice(index,i)
  const onDelete = (todo) => {
    console.log("deleted", todo);
    setTodos(
      todos.filter((item) => {
        return item !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) sno = 1;
    else sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="MyTodos" searchBar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </Router>
    </>
  );
}

export default App;

// return (
//   <>
//     <Router>
//       <Header title='MyTodos' searchBar={false} />
//       <Switch>
//         <Route path='/' render={() => {
//           return (
//             <>
//               <AddTodo addTodo={addTodo} />
//               <Todos todos={todos} onDelete={onDelete} />
//             </>)
//         }}>
//         </Route>
//         <Route path='/about'>
//           <About />
//         </Route>
//       </Switch>
//       <Footer />
//     </Router>
//   </>
// );
// }

// export default App;
