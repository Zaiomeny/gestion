export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-sm border border-transparent bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white transition duration-150 ease-in-out hover:bg-blue-400 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-700 dark:bg-blue-300 dark:text-gray-800 dark:hover:bg-blue-200 dark:focus:bg-blue-600 dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
