import { Link } from "@inertiajs/react";

export default function ApplicationLogo(props) {
    return (
        <Link href={route('dashboard')}>
            <div className="flex items-center hover:cursor-pointer">
                <div className="text-indigo-700 font-bold rounded-sm text-3xl/none dark:text-indigo-600 bg-gray-200/90 dark:bg-gray-900/80 px-1 border-collapse border-indigo-900/20 dark:border-indigo-900/60 border-l border-y">G</div>
                <div className="text-xs/none rounded-sm h-[32px] overflow-hidden flex flex-col justify-between border-collapse border-indigo-900/20 dark:border-indigo-900/60 border-r border-y">
                    <h2 className="dark:text-indigo-100 pt-1 text-gray-700 tracking-[3px] text-semibold">
                        PIECES
                    </h2>
                    <h2 className="text-indigo-700 pt-[2px] pb-1 dark:text-indigo-100 tracking-tighter font-thin text-[10px] bg-gray-200/90 dark:bg-gray-900/80">
                        COMPTABLES
                    </h2>
                </div>
            </div>
        </Link>
    );
}
