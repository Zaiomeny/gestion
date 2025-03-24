import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className='py-5'>
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800">
                        <div className="px-4 sm:px-6 lg:px-8 py-6 text-gray-900 dark:text-gray-100">
                            <h1>Les posts</h1>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
