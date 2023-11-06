import React, { useEffect, useState } from 'react';

import { useStateRef, withComposition } from 'damned-hook';

const App = () => {
  return (
    <div>
      <div>
        <UseStateRefSample />
      </div>
      <div style={{ marginTop: '30px' }}>
        <ChineseInputSample />
      </div>
    </div>
  );
};

const UseStateRefSample = () => {
  const [ref, setState] = useStateRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setState(ref.current + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [ref, setState]);
  return <div>current count: {ref.current}</div>;
};

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

export default App;
