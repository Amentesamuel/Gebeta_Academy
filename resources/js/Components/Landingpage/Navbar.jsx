import { Link, useForm, usePage } from "@inertiajs/react";
import { BiMenu } from "react-icons/bi";
import React, { useState } from "react";

const Navbar = ({ user }) => {
  const { post } = useForm();

  const handleLogout = (e) => {
      e.preventDefault();
      post(route("logout"));
  };
    const { url } = usePage();
    const [open, setIsopen] = useState(false);
    const togglemenu = () => {
        setIsopen(!open);
    };

    console.log(user);
    return (
        <div className="w-full  shadow-sm sticky top-0 py-4 bg-white z-50 ">
            <div className="flex px-5 lg:px-20 justify-between items-center  mx-auto">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <span className="text-button font-semibold">
                            Gebeta
                        </span>{" "}
                        Academy
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="hidden lg:flex">
                    <ul className="flex items-center justify-center gap-8">
                        <li className=" border-b-2 border-transparent  text-sm hover:border-button transition-colors duration-300 ">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className=" border-b-2 border-transparent  text-sm hover:border-button transition-colors duration-300 ">
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li className="border-b-2 border-transparent  text-sm hover:border-button transition-colors duration-300">
                            <Link href={"/tutor"}>Tutors</Link>
                        </li>
                        <li className=" border-b-2 border-transparent  text-sm hover:border-button transition-colors duration-300 ">
                            <Link href={"/how-to"}>How To</Link>
                        </li>
                        <li className="border-b-2 border-transparent text-sm hover:border-button transition-colors duration-300">
                            <Link href={"/resource"}>Resources</Link>
                        </li>
                        <li className="border-b-2 border-transparent text-sm hover:border-button transition-colors duration-300">
                            <Link href={"/blog"}>Blog</Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile view */}

                <button onClick={togglemenu} className="block lg:hidden">
                    <BiMenu size={24} />
                </button>

                {open && (
                    <div className="flex flex-col z-50 rounded-xl py-6 shadow-lg px-2 w-full bg-foreground items-start justify-center gap-3  absolute right-0 top-16 lg:hidden">
                        <ul className="flex flex-col  items-start justify-center px-2 gap-2 relative z-30">
                            <li className=" border-b-2 border-transparent  hover:border-button transition-colors duration-300 ">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className=" border-b-2 border-transparent hover:border-button transition-colors duration-300 ">
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li className="border-b-2 border-transparent hover:border-button transition-colors duration-300">
                                <Link href={"/tutor"}>Tutors</Link>
                            </li>
                            <li className=" border-b-2 border-transparent  text-sm hover:border-button transition-colors duration-300 ">
                                <Link href={"/how-to"}>How To</Link>
                            </li>
                            <li className="border-b-2 border-transparent hover:border-button transition-colors duration-300">
                                <Link href={"/resource"}>Resources</Link>
                            </li>
                            <li className="border-b-2 border-transparent hover:border-button transition-colors duration-300">
                                <Link href={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                        {user ? (
                            <button className="bg-button text-white rounded-full py-1   px-10">
                                <Link href="/dashboard">Dashboard</Link>
                            </button>
                        ) : (
                            <button className="bg-button text-white rounded-full py-1   px-10">
                                <Link href="/login">Login</Link>
                            </button>
                        )}
                    </div>
                )}
                {/* Login */}

                {user ? (
                    url.includes("dashboard") ? (
                        <div className="border hidden lg:flex border-gray-300 bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 text-white rounded-xl px-12 py-1">
                            <button type="submit" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : user.role === "tutor" ? (
                        <div className="border hidden lg:flex border-gray-300 bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 text-white rounded-xl px-12 py-1">
                            <Link href="/Tutordashboard/profile">
                                Dashboard
                            </Link>
                        </div>
                    ) : (
                        <div className="border hidden lg:flex border-gray-300 bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 text-white rounded-xl px-12 py-1">
                            <Link href="/Userdashboard">Dashboard</Link>
                        </div>
                    )
                ) : url.includes("dashboard") ? (
                    
                      <div className="border hidden lg:flex border-gray-300 bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 text-white rounded-xl px-12 py-1">
                        <button type="submit" onClick={handleLogout}>Logout</button>
                    </div>
                    
                ) : (
                    <div className="border hidden lg:flex border-gray-300 bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 text-white rounded-xl px-12 py-1">
                        <Link href="/login">Login</Link>
                    </div>
                )}
            </div>

            {/* search  */}
        </div>
    );
};

export default Navbar;
