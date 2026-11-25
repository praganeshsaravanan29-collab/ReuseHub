import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, pass, remember)
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="p-4 bg-white border">

        <h1 className="text-blue-500 text-center text-xl">ReUseHub</h1>
        <p className="text-gray-500 text-center mb-4">Give Products a Second Life.</p>
        <h2 className="text-center mb-4">Welcome Back!</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-1">Email Address</label>
          <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-3" />

          <label className="block mb-1">Password</label>
          <input type="password" required placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)} className="border p-2 w-full mb-3" />

          <div className="mb-3">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="mr-2" />
            <p>Remember Me</p>
            <br />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 w-full">LOGIN</button>
        </form>

        <div className="text-center mt-4">
          <p>Don't have an account?</p>
        </div>

      </div>
    </div>
  )
}

export default LoginPage