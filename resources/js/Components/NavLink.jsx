import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'flex items-center border-l-4 px-1 p-2 text-lg font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 bg-gray-300/20 text-gray-900 focus:border-indigo-700 dark:bg-gray-700 dark:border-indigo-600 dark:text-gray-100'
                    : 'border-transparent text-gray-500 hover:border-gray-300 dark:hover:border-b-indigo-600/60 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-indigo-600/40 dark:hover:bg-gray-700/40 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300') +
                className
            }
        >
            {children}
        </Link>
    );
}
