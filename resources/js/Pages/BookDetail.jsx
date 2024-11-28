import Banner from "@/Layouts/Banner";
import Mainlayout from "@/Layouts/Mainlayout";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa6";

const BookDetail = ({ resources, user }) => {
    const handleDownload = () => {
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = `http://127.0.0.1:8000/storage/${resources.file}`; // Adjust the path based on your storage structure
        link.download = resources.title; // Set the download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Mainlayout user={user}>
            <Banner>
                <h1 className="flex flex-col items-center text-5xl text-button font-sourGummy justify-center">
                    Resource Detail
                </h1>
            </Banner>
            <div className="w-full bg-background2">
                <div className="container mx-auto md:px-40 px-5 py-10 flex gap-5 items-center relative justify-center ">
                    <div className="flex flex-col items-start px-2 shadow-md  py-2 mt-16  bg-foreground justify-start">
                        <div>
                            {resources.link ? (
                                <div className="w-full px-4 py-2">
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src={`${resources.link.replace(
                                            "watch?v=",
                                            "embed/"
                                        )}?enablejsapi=1`}
                                        title={resources.title}
                                        style={{ border: "none" }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-xl"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            // You could set some state here to show a fallback image
                                        }}
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={
                                        "http://localhost:8000/storage/" +
                                        resources.book_cover
                                    }
                                    alt=""
                                    className="w-full h-72 object-cover rounded-md"
                                />
                            )}
                        </div>
                        <div className="flex items-center justify-between w-[32rem] px-2 mt-2 ">
                            <h1 className="text-lg">{resources.title}</h1>
                        </div>
                        <div className="flex items-center gap-2 w-96 px-2 mt-2 ">
                            <FaPenNib className="text-button" />

                            <h1 className="text-sm">{resources.author}</h1>
                        </div>

                        <div className="flex items-center justify-between  px-2 mt-2 ">
                            <h1 className="text-sm">{resources.description}</h1>
                        </div>

                        <div className="pt-10">
                            <button
                                onClick={handleDownload}
                                className="bg-button hover:bg-button/80 hover:scale-105 transition-all duration-300 ease-in-out  text-white items-center justify-center flex gap-2 text-sm px-5 py-2 rounded-xl"
                            >
                                <BiDownload className="text-sm" /> Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Mainlayout>
    );
};

export default BookDetail;
