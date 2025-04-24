import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-sm h-[34px] px-1 text-md border-gray-300 border-[1px] focus:border-blue-400 focus:outline-[1px] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-600 dark:focus:ring-blue-600 ' +
                className
            }
            ref={localRef}
        />
    );
});
