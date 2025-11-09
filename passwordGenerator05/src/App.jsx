import { useState,useCallback,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState('');
  const passwordRef=useRef(null);


  const generatePassword =useCallback(()=>{
    // logic
    let pass="";
    let str="ABCDEFDGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+";

    for(let i=1;i<length;i++){
      const char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed]) // these dependencies should not change very frequently.

  const copypasswordToClickboard=()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  useEffect(()=>{
      generatePassword();
  },[length,charAllowed,numberAllowed])
    
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-centre my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly
          ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0'
          onClick={copypasswordToClickboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1'>
            <input type="range" min={8} max={20} value={length} className='cursor-pointer' 
            onChange={(e)=>setLength(e.target.value)}
            name=''
            id='' />
            <label htmlFor="length">length: {length}</label>

          </div>
          <div className='flex items-centre gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>setNumberAllowed((prev)=>!prev)} //Using the concept of Callback here so that we can use the previous value and reverse it when the checkbox is being clicked.
            name=""
            id='' />
            <label htmlFor="number">Numbers</label>

          </div>
          <div className='flex items-centre gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>setCharAllowed((prev)=>!prev)} //Using the concept of Callback here so that we can use the previous value and reverse it when the checkbox is being clicked.
            name=""
            id='' />
            <label htmlFor="charInput">Characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
