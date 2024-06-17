import { notFound } from 'next/navigation'
import React from 'react'

export default function page({params}: {params: any}) {
  if (params.documents.includes("routing")) {
    if(params.documents.includes("nested")) {
      return <h2>Welcome to nested routing</h2>
    }
    return <h2>Welcome to rounting </h2>
  }


  if (params.documents.length > 1) {
    notFound();
  }
  return (
    <div>
        Page document ne
    </div>
  )
}
