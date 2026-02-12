import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:3000/signup",
        { username, email, password }
      )

      console.log("Success:", res.data)
    } 
    catch (err) {
      console.error("Error:", err)
    }
  }

  return (
    <div>
      <h1>Signup Page</h1>

      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h3>Email</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3>Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
