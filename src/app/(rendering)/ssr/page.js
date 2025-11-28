import React from "react";

async function getData() {
  let res = await fetch("http://localhost:3002/posts",{
    cache:'no-store' //force regenerate
  });
  return await res.json();
}
export default async function SSR() {
  const allPosts = await getData();
  return (
    <>
     <h1>SSR</h1>
      {allPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.userId}</p>
        </div>
      ))}
    </>
  );
}
