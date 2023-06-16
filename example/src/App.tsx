import React, { useEffect } from 'react'

import { useStateRef } from 'damned-hook'

const App = () => {
  const [ref, setState] = useStateRef(0)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(ref.current)
      setState(ref.current+1)
      console.log(ref.current)

    }, 1000)
    return () => clearInterval(timer)
  }, [ref, setState])
  return <div>
    current count: {ref.current}
  </div>
}

export default App
