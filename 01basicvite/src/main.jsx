import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const ReactElement={ 
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

function MyAPP(){
    return(
        <div>Create React App.</div>
    )
}

const AnotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const areactElement=React.createElement(
    'a',
    {href:'https://google.com', target:"_blank"},
    'click to visit google.'
)

createRoot(document.getElementById('root')).render(
  
    
    <App/>
  
)
