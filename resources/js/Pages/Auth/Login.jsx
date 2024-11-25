import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Banner from "@/Layouts/Banner";
import GuestLayout from "@/Layouts/GuestLayout";
import Mainlayout from "@/Layouts/Mainlayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

import loginImage from "../../../../public/img/Login.jpg";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Mainlayout>
            <Banner>
            <h1 className='flex flex-col items-center text-5xl text-button font-sourGummy justify-center'>Welcome Back</h1>
            </Banner>
            <div className=" flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white dark:bg-foreground p-10 rounded-2xl shadow-2xl">
                    <Head title="Log in" />

                    {status && (
                        <div className="p-4 rounded-lg bg-green-50 text-green-600">
                            {status}
                        </div>
                    )}

                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-black">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Enter your details to continue
                        </p>
                    </div>

                    <form onSubmit={submit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 dark:text-gray-900">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150"
                                    placeholder="name@example.com"
                                />
                            </div>
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleTogglePassword}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        )}
                                    </button>
                                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                                </div>
                            </div>
                        </div>

                        {canResetPassword && (
                            <div className="flex items-center justify-end">
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-button transition duration-150"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                        >
                            {processing ? 'Signing in...' : 'Sign in'}
                        </button>

                        <div className="text-center mt-4">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Don't have an account?{' '}
                                <Link
                                    href={route("register")}
                                    className="font-medium text-button transition duration-150"
                                >
                                    Create one now
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </Mainlayout>
    );
}
