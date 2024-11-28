import { LuGraduationCap } from "react-icons/lu";
import { Tutor } from "../../../../public/img";
import React from "react";
import { FaArrowRightLong, FaLocationDot, FaStar } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const BlogList = ({ blogs }) => {
    return (
        <div className="w-full bg-background2">
                <div
                    
                    className="grid grid-cols-1 md:grid-cols-2  container mx-auto px-8 md:px-20 py-20  lg:grid-cols-3 gap-4"
                    >
                    {blogs.data.map((blog, i) => (
                    <Link href={`/blog/${blog.id}`}>
                        <div key={i} className=" gap-3 flex pb-5 flex-col items-start justify-start bg-background rounded-xl shadow-md">
                        <img
                            src={"http://localhost:8000/storage/" + blog.image}
                            alt="tutor"
                            className="rounded-xl p-1 mt-0 object-cover "
                        />
                        <h1 className="text-lg font-poppins  px-5 ">
                            {blog.title}
                        </h1>
                        <div className="flex   items-center w-full justify-start px-4 md:gap-16">
                            <div className="flex items-center justify-center gap-2">
                                <p className="text-xs">{blog.description}</p>
                            </div>
                        </div>

                        <hr className="w-full border-b-1 border-button border-dashed" />

                        <div className="flex items-center justify-between w-full px-4 py-2">
                            <button className="text-xs text-button flex items-center justify-center gap-2">
                                Continue Reading
                                <FaArrowRightLong className="text-button" />
                            </button>
                        </div>
                    </div>
                    </Link>
            ))}
                </div>
        </div>
    );
};

export default BlogList;
