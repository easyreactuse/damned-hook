import { useRef, useState } from 'react';
import type { Dispatch, MutableRefObject } from 'react';

export default function useStateRefHook<T = any>(value: T): [MutableRefObject<any>, Dispatch<any>] {
  const [state, setState] = useState<any>(value);
  const ref = useRef(state);
  return [
    ref,
    (value) => {
      ref.current = value;
      setState(value);
    }
  ];
}
