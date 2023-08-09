import { useState, useRef } from 'react';

function useStateRefHook(value) {
  var _useState = useState(value),
    state = _useState[0],
    setState = _useState[1];
  var ref = useRef(state);
  return [ref, function (value) {
    ref.current = value;
    setState(value);
  }];
}

var useStateRef = useStateRefHook;

export { useStateRef };
//# sourceMappingURL=index.modern.js.map
