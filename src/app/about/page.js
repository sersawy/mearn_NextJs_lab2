import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: "About Page",
};

export default function About() {
  return (
    <div>
        <h1>About</h1>
        {/* <img src='1.avif' alt='flower'></img> */}
        {/* <Image src='/1.avif' width={300} height={300} alt='flower image'></Image> */}
        <Image src='https://images.unsplash.com/photo-1763142275498-c87a9acb57ec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={300} height={300} alt='flower image'></Image>
    </div>
  )
}
