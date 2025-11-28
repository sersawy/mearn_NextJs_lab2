import React from "react";

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const todo = await fetch(`http://localhost:3000/api/todos/${id}`).then((res) => res.json());

  return {
    title: todo.title,
  };
}

export default async function ToDoDetails({ params }) {
  let { id } = await params;
  let todo;
  try {
    let res = await fetch(`http://localhost:3000/api/todos/${id}`);
    let tododata = await res.json();
    todo = tododata;
    console.log("returned data", tododata);
  } catch (error) {}
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.status}</p>
    </div>
  );
}
