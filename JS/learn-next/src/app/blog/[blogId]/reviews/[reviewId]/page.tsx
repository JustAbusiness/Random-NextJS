'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function ReviewPage() {
    const catchParam  = useParams();
    return (
    <div>
        Page detail ne {catchParam.reviewId}
    </div>
  )
}
