import React, { useState } from 'react'

export const AddTodo = (props) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const submit = (evnt) => {
    evnt.preventDefault();
    if (!title || !desc) {
      alert('Title or description can not be blank')
    }
    AddTodo(title, desc)
  }

  return (
    <div className='container my-3'>
      <h3> Add a Todo </h3>
      <form onSubmit={submit} >
        <div className="mb-3">
          <label htmlfor="title" className="form-label"> Task Title </label>
          <input type="text" value={title} onChange={(evnt) => { setTitle(evnt.target.value) }}
            className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlfor="desc" className="form-label"> Task Description </label>
          <input type="text" value={desc} onChange={(evnt) => { setDesc(evnt.target.value) }}
            className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success"> Add Todo </button>
      </form>
    </div>
  )
}