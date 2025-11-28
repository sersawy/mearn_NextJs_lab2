'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function EditTodo() {
  const { id } = useParams();
  console.log(id);
  const [todo, setTodo] = useState({ title: '', status: '' });

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`);
        const todoData = await res.json();
        setTodo({ title: todoData.title, status: todoData.status });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodo();
  }, [id]);

  const handelsubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch(`/api/todos?id=${id}`, {
        method: 'PUT',
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
          <input
            type="text"
            className="form-control"
            name="todoTitle"
            value={todo.title}
            onChange={(ev) => handleChange(ev)}
          />
        </div>
        <div className="form-group">
          <label>Todo status</label>
          <input
            type="text"
            className="form-control"
            name="todoStatus"
            value={todo.status}
            onChange={(ev) => handleChange(ev)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </ProtectedRoute>
  );
}
