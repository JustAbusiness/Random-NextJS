"use client"
import { notFound, useParams } from 'next/navigation';
import React from 'react'

export default function Review() {
  const arrId = [1, 2, 3];
  const param = useParams();
  if (!arrId.includes(+param.reviewId)) {
    return notFound();
  }
  
  return (
    <div>
        Review
    </div>
  )
}
