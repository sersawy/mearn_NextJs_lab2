'use client';
import React, { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Addtodo() {
  const [todo, setTodo] = useState({ title: '', status: '' });

  const handelsubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    if (event.target.name == 'todoTitle') {
      setTodo({ ...todo, title: event.target.value });
    } else if (event.target.name == 'todoStatus') {
      setTodo({ ...todo, status: event.target.value });
    }
  };

  return (
    <ProtectedRoute>
      <form onSubmit={(e) => handelsubmit(e)}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" name="todoTitle" onChange={(ev) => handleChange(ev)} />
        </div>
        <div className="form-group">
          <label>Todo status</label>
          <input type="text" className="form-control" name="todoStatus" onChange={(ev) => handleChange(ev)} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </ProtectedRoute>
  );
}
