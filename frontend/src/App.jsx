import { useState } from 'react'
import Bot from './component/Bot'


function App() {
  const [count, setCount] = useState(0)

  return (
       <div>
          <Bot/>
       </div>
        
    
  )
}

export default App
