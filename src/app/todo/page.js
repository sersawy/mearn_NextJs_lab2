'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function TodoList() {
  const [alltodos, setAlltodos] = useState([]);
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    fetch('/api/todos')
      .then((res) => {
        return res.json();
      })
      .then((todos) => {
        console.log(todos);
        setAlltodos(todos.data);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/todos?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setAlltodos(alltodos.filter((todo) => todo._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      {isAuthenticated && (
        <Link href="/todo/add">
          <button className="btn btn-primary">Add Todo</button>
        </Link>
      )}
      <hr />
      {alltodos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.status}</p>
          <Link href={`/todo/${todo._id}`}>
            <button className="btn btn-success">See Details</button>
          </Link>
          {isAuthenticated && (
            <>
              <Link href={`/todo/${todo._id}/edit`}>
                <button className="btn btn-primary">Edit Todo</button>
              </Link>

              <button className="btn btn-danger" onClick={() => handleDelete(todo._id)}>
                Delete Todo
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
