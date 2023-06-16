# damned-hook

> easy to use react hook

[![NPM](https://img.shields.io/npm/v/damned-hook.svg)](https://www.npmjs.com/package/damned-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save damned-hook
```

## Usage

### useStateRef
We got many closure problems when a callback contain the state variable, as we know, it never changed. like this code:
```tsx
import React, { useEffect, useState } from 'react'

const App = () => {

  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(state) // state always be 0
      setState(state + 1)
      console.log(state) // won't change
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return <div>
    current count: {state}
  </div>
}

export default App
```


So we can solve those trouble by use the "use StateRef"

```tsx
import React, { useEffect } from 'react'

import { useStateRef } from 'damned-hook'

const App = () => {

  const [ref, setState] = useStateRef(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(ref.current)
      setState(ref.current+1)
      console.log(ref.current) // change synchronously
    }, 1000)
    return () => clearInterval(timer)
  }, [ref, setState])
  
  return <div>
    current count: {ref.current}
  </div>
}

export default App

```

## License

MIT © [](https://github.com/)
