
import React from 'react'

const ProfilePage = () => {
    return (
        <>

            <div className="container mx-auto p-4 md:p-6 max-w-[900px] my-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <form >
                            <div className="relative">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Profile Picture"
                                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                                />
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    className="hidden"
                                />
                                <button
                                    for="imageUpload"
                                    className="absolute bottom-0 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer"
                                >
                                    Edit
                                </button>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium">Full Name</p>
                                    <input
                                        type="text"

                                        className="w-full p-2 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium">Email</p>
                                    <input
                                        type="email"

                                        className="w-full p-2 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium">Password</p>
                                    <input
                                        type="password"

                                        className="w-full p-2 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium">Phone Number</p>
                                    <input
                                        type="tel"

                                        className="w-full p-2 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium">Date of Birth</p>
                                    <input
                                        type="date"

                                        className="w-full p-2 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-medium">Address</p>
                                    <input
                                        type="text"

                                        className="w-full p-2 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <a
                                    href="#"
                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                                >
                                    Edit Profile
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfilePage