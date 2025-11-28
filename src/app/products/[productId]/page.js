"use client"
import { useParams } from "next/navigation";
import React from "react";

export default function ProductDetails() {
  const {productId} = useParams();
 
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
}
