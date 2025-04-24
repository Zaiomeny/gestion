
export default function InputSearch(
    { type = 'text', className = '', ...props }
) {

    return (
        <input
            {...props}
            type={type}
            className={
                'px-1 text-md font-extralight border-none !ring-0 !outline-none !ring-offset-0 focus:border-none dark:text-gray-300 ' +
                className
            }
            placeholder="Rechercher"
            required
        />
    );
};
