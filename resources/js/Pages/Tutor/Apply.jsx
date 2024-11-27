import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useForm } from "@inertiajs/react";
import Select from "react-select";

const Apply = ({user,tutor}) => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        gender: "",
        phone: "",
        address: "",
        education: "",
        subject: "",
        available_days: [],
        experience: "",
        image: "",
        description: "",
    });
    // useEffect(()=>{
    //     setData({
    //         name:user.name,
    //         email:user.email
    //     })
    // },[user]);
    const options = [
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
        { value: "Saturday", label: "Saturday" },
        { value: "Sunday", label: "Sunday" },
    ];
    const handleChange = (selectedOptions) => {
        setData(
            "available_days",
            selectedOptions.map((option) => option.value)
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("store"), {
            onFinish: () => console.log("Form submitted successfully"),
            onError: (errors) => console.error(errors),
        });
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">
                    Become a Tutor
                </h1>

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={user.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full px-4 text-gray-500 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Gender Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <select
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            >
                                <option value="" disabled>
                                    Select Your Gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.gender}
                                </p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* Address Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.address && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.address}
                                </p>
                            )}
                        </div>

                        {/* Education Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Education
                            </label>
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                name=""
                                value={data.education}
                                onChange={(e) =>
                                    setData("education", e.target.value)
                                }
                                id="education"
                            >
                                <option value="" defaultChecked disabled>
                                    Select Eduactional Level
                                </option>
                                <option value="Bachelor">
                                    Bachelor Degree
                                </option>
                                <option value="Masters">Masters Degree</option>
                                <option value="PhD">PhD</option>
                            </select>
                            {errors.education && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.education}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Select preferred subject
                            </label>
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                name=""
                                value={data.subject}
                                onChange={(e) =>
                                    setData("subject", e.target.value)
                                }
                                id="subject"
                            >
                                <option value="" defaultChecked disabled>
                                    Select preferred subject
                                </option>
                                <option value="Maths">Maths</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Physics">Physics</option>
                                <option value="Biology">Biology</option>
                            </select>
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.subject}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Available Days
                            </label>
                            <Select
                                isMulti
                                options={options}
                                placeholder="Select Available Days"
                                name="available_days"
                                value={options.filter((option) =>
                                    data.available_days.includes(option.value)
                                )}
                                onChange={handleChange}
                                id="available_days"
                            ></Select>
                            {errors.available_days && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.available_days}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Experience
                            </label>
                            <input
                                type="text"
                                value={data.experience}
                                onChange={(e) =>
                                    setData("experience", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.experience && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.experience}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                value={data.image}
                                onChange={(e) =>
                                    setData("image", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.image}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                type="text"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                        >
                            {processing
                                ? "Submitting..."
                                : "Submit Application"}
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default Apply;
