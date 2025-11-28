"use client"
import React, { useEffect, useState } from "react";

export default function CSR() {
  const [alldata, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
    <h1>CSR</h1>
      {alldata.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.userId}</p>
        </div>
      ))}
    </>
  );
}
