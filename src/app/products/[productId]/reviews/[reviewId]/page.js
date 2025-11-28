"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function ReviewDetails() {
    const {reviewId}=useParams()
    console.log(reviewId);
  return (
    <div><h1>ReviewDetails </h1></div>
  )
}
