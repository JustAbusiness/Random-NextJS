'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Register() {
  const router = useRouter();
  const handleNavigationLogin = () => {
     return router.push('/login');
  }
  const handleNavigationHomePage = () => {
     return router.push('/');
  }

  return (
    <div>
      Register Page
      <button onClick={handleNavigationLogin}>Go to Login Page</button>
      <button onClick={() => router.back()}>Back to Home Page</button>
    </div>
  )
}
