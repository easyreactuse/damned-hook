var react = require('react');

function useStateRefHook(value) {
  var _useState = react.useState(value),
    state = _useState[0],
    setState = _useState[1];
  var ref = react.useRef(state);
  ref.current = state;
  return [ref, setState];
}

var useStateRef = useStateRefHook;

exports.useStateRef = useStateRef;
//# sourceMappingURL=index.js.map
