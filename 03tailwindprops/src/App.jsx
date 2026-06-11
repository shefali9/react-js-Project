import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className="bg-green-400 text-blue-50 text-center p-4">
        Tailwind test
      </h1>
      <Card username= "shefali" btnText="Click me"/>
     <Card username="john doe" btnText="Visit me"/>
  
    </>
  )
}

export default App
