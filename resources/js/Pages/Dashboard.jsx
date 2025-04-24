import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div>
                <h1 className="text-indigo-gardiant font-semibold text-xl">
                Here's dashboard
                </h1>
            </div>
        </AuthenticatedLayout>
    );
}
