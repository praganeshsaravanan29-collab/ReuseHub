import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function LoginPage() {
  //const [email, setEmail] = useState("")
  //const [pass, setPass] = useState("")

  const [remember, setRemember] = useState(false)

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  })

  function handlechange(e) {
    e.preventDefault();
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value
    })
  }
  
  const location=useLocation();
  const regdata=location.state;
const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(logindata.email, logindata.password,remember)
    console.log(regdata.name)
    if(logindata.email===regdata.email && logindata.password===regdata.password){
      alert("login successful")
    navigate("/mainpage",{state:logindata})
    }else{
      alert("data unmatched")
    }
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="p-4 bg-white border max-w-sm mx-auto">

        <h1 className="text-blue-500 text-center text-xl">ReUseHub</h1>
        <p className="text-gray-500 text-center mb-4">Give Products a Second Life.</p>
        <h2 className="text-center text-blue-500 mb-4">USER LOGIN</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-1">Email Address</label>

          <input type="email" required placeholder="Enter your email" name="email" value={logindata.email} onChange={handlechange} className="border p-2 w-full mb-3" />

          <label className="block mb-1">Password</label>

          <input type="password" required placeholder="Enter your password" name="password" value={logindata.password} onChange={handlechange} className="border p-2 w-full mb-3" />

          <div className="mb-3">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="mr-2" />
            <p>Remember Me</p>
            <br />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 w-full">LOGIN</button>
        </form>

        <div className="text-center mt-4">
          <p>Don't have an account?</p>
          <Link to="/registers" className="text-blue-500 hover:underline">Register Here</Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage