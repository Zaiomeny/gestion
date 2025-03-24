export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-light text-gray-700 dark:text-gray-300 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
