import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Banner from '@/Layouts/Banner';
import GuestLayout from '@/Layouts/GuestLayout';
import Mainlayout from '@/Layouts/Mainlayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <Mainlayout>
            <Banner>
            <h1 className='flex flex-col items-center text-5xl text-button font-sourGummy justify-center'>Register</h1>
            </Banner>
       

            <div className=" flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white dark:bg-foreground p-10 rounded-2xl shadow-2xl">

            <Head title="Register" />
                    <form onSubmit={submit}>
                        <div className="">
                            <h1 className="text-2xl text-black ">
                                Let's Get You Started!
                            </h1>
                            <p className="text-sm mt-3 text-gray-500">
                                Please enter your information to get started
                            </p>

                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 text-sm  mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={data.name}
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 text-sm shadow-sm text-black bg-white rounded-lg "
                                />
                                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
                            </div>
                            
                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm  mb-1"
                                >
                                    Enter Your Email ID
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    placeholder="Enter Your Email..."
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 text-sm shadow-sm text-black bg-white rounded-lg "
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm mb-1"
                                >
                                    Enter Your Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    placeholder="Enter password "
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 shadow-sm text-sm  text-black bg-white rounded-lg "
                                />
                                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                            </div>
                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-gray-700 text-sm mb-1"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    placeholder="Re-Enter Your password "
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 shadow-sm text-sm  text-black bg-white rounded-lg "
                                />
                                {errors.password_confirmation && <span className="text-red-500 text-sm">{errors.password_confirmation}</span>}
                            </div>

                            <div className="flex flex-col gap-2 pt-5">
                                <label
                                    htmlFor="role"
                                    className="block text-gray-700 text-sm mb-1"
                                >
                                    Select Your Role
                                </label>
                                <select id="role" name="role" value={data.role} onChange={(e) => setData('role', e.target.value)} className="w-full px-4 py-2 border border-gray-200 shadow-sm text-sm  text-black bg-white rounded-lg ">
                                    <option value="">Select Your Role</option>
                                    <option value="tutor">Tutor</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>

                            

                            <div className="flex items-center justify-center gap-2 pt-5">
                                <button className="w-full bg-button text-white py-2 rounded-lg">
                                    Register
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 pt-5">
                                <h1 className="text-sm text-gray-500">
                                    Already have an account?
                                </h1>
                                <Link
                                    href={route("login")}
                                    className="text-sm text-button"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                        {/* <div className="rounded-full p-20 shadow-sm  flex items-center justify-center bg-foreground ">
                        <img src={loginImage} alt="login" className="w-52 h-52 object-contain" />
                    </div> */}
                    </form>
                </div>
                </div>
        
        </Mainlayout>
    );
}
