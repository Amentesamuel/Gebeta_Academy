import { book1 } from "../../../../public/img";

import React, { useState } from "react";

import { LuGraduationCap } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
    FaArrowRightLong,
    FaLocationDot,
    FaPenNib,
    FaStar,
} from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const ResourceList = ({ resources }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openfilter, setOpenFilter] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const toggleOpenFilter = () => {
        setOpenFilter(!openfilter);
    };
    return (
        <div className="w-full bg-background2">
            <div className="container mx-auto md:px-20 md:py-10 py-5 px-2 flex flex-col md:flex-row gap-10">
                <div className="w-64 h-fit  bg-background hidden md:flex flex-row md:flex-col gap-5 md:p-5 rounded-xl">
                    <div>
                        <h1 className="text-sm font-poppins">Filter Tutors</h1>
                    </div>
                    <hr className="w-full border-b-1 border-gray-400 border-dashed" />

                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm">Type</h1>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label htmlFor="male" className="text-xs">
                                Paid
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 selection:border-bg-white cursor-pointer"
                            />
                            <label htmlFor="female" className="text-xs">
                                Free
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm">Grade</h1>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="gender"
                                id="online"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 focus-ring-0  cursor-pointer"
                            />
                            <label htmlFor="online" className="text-xs">
                                8
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="gender"
                                id="home"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label htmlFor="home" className="text-xs">
                                9
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="gender"
                                id="home"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label htmlFor="home" className="text-xs">
                                10
                            </label>
                        </div>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <h1 className="text-sm">Star Rating</h1>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="gender"
                                id="star5"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label
                                htmlFor="star5"
                                className="text-xs flex items-center justify-center gap-1"
                            >
                                <FaStar
                                    className="text-yellow-500"
                                    style={{ fontSize: "14px" }}
                                />
                                <p className="text-xs">5 stars</p>
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="gender"
                                id="star4"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label
                                htmlFor="star4"
                                className="text-xs flex items-center justify-center gap-1"
                            >
                                <FaStar
                                    className="text-yellow-500"
                                    style={{ fontSize: "14px" }}
                                />
                                <p className="text-xs">4 stars</p>
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="gender"
                                id="star3"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label
                                htmlFor="star3"
                                className="text-xs flex items-center justify-center gap-1"
                            >
                                <FaStar
                                    className="text-yellow-500"
                                    style={{ fontSize: "14px" }}
                                />
                                <p className="text-xs">3 stars</p>
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="gender"
                                id="star2"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label
                                htmlFor="star2"
                                className="text-xs flex items-center justify-center gap-1"
                            >
                                <FaStar
                                    className="text-yellow-500"
                                    style={{ fontSize: "14px" }}
                                />
                                <p className="text-xs">2 stars</p>
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="gender"
                                id="star1"
                                className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                            />
                            <label
                                htmlFor="star1"
                                className="text-xs flex items-center justify-center gap-1"
                            >
                                <FaStar
                                    className="text-yellow-500"
                                    style={{ fontSize: "14px" }}
                                />
                                <p className="text-xs">1 star</p>
                            </label>
                        </div>
                    </div> */}

                    <div className="flex  items-center justify-between">
                        <button className="text-xs border bg-button text-white w-full px-5 py-1 rounded-xl flex items-center justify-center gap-2">
                            Search
                        </button>
                    </div>
                </div>
                <div className="md:hidden  flex items-center justify-end">
                    <button
                        onClick={toggleOpenFilter}
                        className="text-xs border bg-button text-white  px-5 py-2 rounded-xl flex items-center justify-center gap-2"
                    >
                        Filter <FaFilter />
                    </button>
                    {openfilter && (
                        <>
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-10"
                                onClick={toggleOpenFilter}
                            ></div>

                            <div className="fixed inset-0 flex items-center justify-center z-20">
                                <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">
                                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                                        <h2 className="text-lg font-semibold">
                                            Filter Options
                                        </h2>
                                        <button
                                            onClick={toggleOpenFilter}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <IoClose />
                                        </button>
                                    </div>

                                    {/* Filter Options */}
                                    <div className="space-y-4">
                                        {/* Example: Gender Filter */}
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-sm">Gender</h1>
                                            <div className="flex gap-2">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        id="male"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="male"
                                                        className="text-xs"
                                                    >
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        id="female"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 selection:border-bg-white cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="female"
                                                        className="text-xs"
                                                    >
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-sm">
                                                Tutorial Type
                                            </h1>
                                            <div className="flex gap-2">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="gender"
                                                        id="online"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 focus-ring-0  cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="online"
                                                        className="text-xs"
                                                    >
                                                        Online
                                                    </label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="gender"
                                                        id="home"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="home"
                                                        className="text-xs"
                                                    >
                                                        Home
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-sm">
                                                Star Rating
                                            </h1>
                                            <div className="flex gap-6">
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="star5"
                                                        id="star5"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="star5"
                                                        className="text-xs flex items-center justify-center gap-1"
                                                    >
                                                        <p className="text-xs">
                                                            5
                                                        </p>
                                                        <FaStar
                                                            className="text-yellow-500"
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                            }}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="star4"
                                                        id="star4"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="star4"
                                                        className="text-xs flex items-center justify-center gap-1"
                                                    >
                                                        <p className="text-xs">
                                                            4
                                                        </p>
                                                        <FaStar
                                                            className="text-yellow-500"
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                            }}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="star3"
                                                        id="star3"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="star3"
                                                        className="text-xs flex items-center justify-center gap-1"
                                                    >
                                                        <p className="text-xs">
                                                            3
                                                        </p>
                                                        <FaStar
                                                            className="text-yellow-500"
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                            }}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="star2"
                                                        id="star2"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="star2"
                                                        className="text-xs flex items-center justify-center gap-1"
                                                    >
                                                        <p className="text-xs">
                                                            2
                                                        </p>
                                                        <FaStar
                                                            className="text-yellow-500"
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                            }}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="star1"
                                                        id="star1"
                                                        className="text-button w-4 h-4 appearance-none focus:outline-none focus:ring-0 checked:bg-blue-500 cursor-pointer"
                                                    />
                                                    <label
                                                        htmlFor="star1"
                                                        className="text-xs flex items-center justify-center gap-1"
                                                    >
                                                        <p className="text-xs">
                                                            1
                                                        </p>
                                                        <FaStar
                                                            className="text-yellow-500"
                                                            style={{
                                                                fontSize:
                                                                    "14px",
                                                            }}
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={toggleOpenFilter}
                                            className="bg-button text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                                        >
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="  flex-1 flex flex-col gap-5  rounded-xl">
                    <div className="flex items-center justify-between">
                        {/* <div className="flex relative items-center gap-2">
                            <div className="text-sm text-gray-500">sort by</div>
                            <button onClick={toggleOpen} className="rounded-full cursor-pointer flex items-center justify-center bg-gray-200 px-5 py-1">
                                <h1 className="text-sm">Newest</h1>
                                <BiChevronDown />
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 top-5 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                    <ul className="py-1">
                                        <li>
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 1
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 2
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 3
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {resources.data.map((resource, i) => (
                            <Link
                                href={`/resource/${resource.id}`}
                                className="cursor-pointer"
                            >
                                <div
                                    key={i}
                                    className=" gap-3 flex pb-5 h-fit flex-col items-start justify-start bg-background rounded-xl shadow-md"
                                >
                                    {resource.link ? (
                                        <div className="w-full px-4 py-2">
                                            <iframe
                                                width="100%"
                                                height="200"
                                                src={`${resource.link.replace("watch?v=", "embed/")}?enablejsapi=1`}
                                                title={resource.title}
                                                style={{ border: "none" }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-xl"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    // You could set some state here to show a fallback image
                                                }}
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <img
                                            src={
                                                "http://localhost:8000/storage/" +
                                                resource.book_cover
                                            }
                                            alt="tutor"
                                            className="rounded-xl h-52 w-full  p-1 mt-0 object-cover "
                                        />
                                    )}

                                    <h1 className="text-sm font-poppins overflow-hidden break-words  px-5 ">
                                        {resource.title}
                                    </h1>
                                    <div className="flex   items-center w-full justify-between px-4 md:gap-16">
                                        <div className="flex items-center justify-center gap-2">
                                            <FaPenNib className="text-button" />
                                            <p className="text-xs">
                                                {resource.author}
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="w-full border-b-1 border-button border-dashed" />

                                    <div className="flex items-center justify-between w-full px-4 py-2">
                                        <button className="text-xs text-button flex items-center justify-center gap-2">
                                            View detail
                                            <FaArrowRightLong className="text-button" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceList;
