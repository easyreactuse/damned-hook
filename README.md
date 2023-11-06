# damned-hook

> easy to use react hook

[![NPM](https://img.shields.io/npm/v/damned-hook.svg)](https://www.npmjs.com/package/damned-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save damned-hook
```

## Usage

### useStateRef
Merge useState and useRef to solve some closure problems.

```tsx
import React, { useEffect } from 'react'

import { useStateRef } from 'damned-hook'

const App = () => {

  const [ref, setState] = useStateRef(0)
  
  setInterval(() => {
      console.log(ref.current) // update every seconds
      setState(ref.current+1) // can trigger dom update.
      console.log(ref.current) // change synchronously
    }, 1000)
  
  return <div>
    current count: {ref.current}
  </div>
}

export default App

```

### withComposition
It's a hoc function for create the input component which compatible with composited language, like Chinese etc.
![file](https://github.com/easyreactuse/damned-hook/assets/136778676/a8f27d16-381b-4a2c-a1a9-de6790589146)

```tsx
import { withComposition } from 'damned-hook';
const ChineseInput = withComposition('input');

const ChineseInputSample = () => {
  const [value, setValue] = useState('');
  const [finalValue, setFinalValue] = useState(value);
  return (
    <div>
      <label>please input chinese or other composised language </label>
      <ChineseInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFinalChange={(e) => setFinalValue(e.target.value)}
      />
      <label> value: {value} ; </label>

      <label>final value: {finalValue}</label>
    </div>
  );
};
```

## License

MIT © [](https://github.com/)
