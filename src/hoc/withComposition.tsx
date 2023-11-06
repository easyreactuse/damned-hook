import React, { useRef } from 'react';
const withComposition = (Component: 'input' | 'textarea') => {
  return React.forwardRef<
    any,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
      HTMLInputElement | HTMLTextAreaElement
    > & {
      onFinalChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    }
  >((props, ref) => {
    const composisingRef = useRef(false);
    const lastInputRef = useRef<
      React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    >();
    const { onFinalChange, ...ohterProps } = props;
    return (
      <Component
        {...ohterProps}
        ref={ref}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
        ) => {
          props.onChange?.(e);
          e.persist();
          lastInputRef.current = e;
          if (!composisingRef.current) {
            onFinalChange?.(e);
          }
        }}
        onCompositionStart={(
          ...args: [
            React.CompositionEvent<HTMLInputElement> | React.CompositionEvent<HTMLTextAreaElement>
          ]
        ) => {
          composisingRef.current = true;
          props.onCompositionStart?.(...args);
        }}
        onCompositionEnd={(
          ...args: [
            React.CompositionEvent<HTMLInputElement> | React.CompositionEvent<HTMLTextAreaElement>
          ]
        ) => {
          composisingRef.current = false;
          props.onCompositionEnd?.(...args);
          onFinalChange?.(lastInputRef.current!);
        }}
      />
    );
  });
};

export default withComposition;
