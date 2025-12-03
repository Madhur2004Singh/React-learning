import React, { useState ,useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const {setUser}=useContext(UserContext);


    const handleSubmit=(e)=>{
      //Preventing the page from reloading.
      e.preventDefault();
      setUser({username,password});// This is used to update the global  user data in the UserContext so that any component in the App can access the curren user information.
    }
  return (
    <div>
      <div>
        <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder='Username'
      />
      </div>
      <div>
        <input type="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)} />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login
