'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();

  const handleNavigationRegister = () => {
    return router.replace('/register')
  }
  return <div>
    <h2> Login Page</h2>
    <button onClick={() => router.back()}> Back to Register</button>
    </div>;
}
