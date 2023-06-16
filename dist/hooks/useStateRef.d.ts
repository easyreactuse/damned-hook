import type { Dispatch, MutableRefObject } from 'react';
export default function useStateRefHook<T = any>(value: T): [MutableRefObject<any>, Dispatch<any>];
