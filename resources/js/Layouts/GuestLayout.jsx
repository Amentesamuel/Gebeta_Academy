import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-white">
          

            <div className="mt-6 w-full font-poppins overflow-hidden bg-foreground px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:foreground">
                {children}
            </div>
        </div>
    );
}
