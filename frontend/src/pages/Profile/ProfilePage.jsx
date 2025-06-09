import React, { useEffect, useRef, useState } from 'react';

const ProfilePage = () => {
    const [selectImage, setselectImage] = useState('')
    const ImageRef = useRef(null);
    const [UserData, setUserData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        country: ''

    });

    useEffect(() => {
        const storeData = localStorage.getItem('Login Data');
        if (storeData) {
            try {
                const parsedData = JSON.parse(storeData);
                setUserData({
                    name: parsedData.name || '',
                    email: parsedData.email || '',
                    password: parsedData.password || '',
                    phone: parsedData.phone || '',

                    address: parsedData.address || '',
                });
            } catch (error) {
                console.log('Error parsing localStorage data:', error);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('Login Data', JSON.stringify(UserData));
        alert('Profile updated successfully!');
    };

    const handleImage = () => {

    }

    const ImageFilehandler = () => {

    }
    return (
        <div className="container mx-auto p-4 md:p-6 max-w-[900px] my-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative" onClick={handleImage}>
                        <img
                            src={selectImage}
                            alt="Profile Picture"
                            onChange={ImageFilehandler}
                            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                        />
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="hidden"
                        />
                        <label
                            htmlFor="imageUpload"
                            className="absolute bottom-0 left-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer"
                        >
                            Edit
                        </label>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">First Name</p>
                            <input
                                type="text"
                                name="firstName"
                                value={UserData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Last Name</p>
                            <input
                                type="text"
                                name="lastName"
                                value={UserData.lastName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Email</p>
                            <input
                                type="email"
                                name="email"
                                value={UserData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Password</p>
                            <input
                                type="password"
                                name="password"
                                value={UserData.password}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Phone Number</p>
                            <input
                                type="tel"
                                name="phone"
                                value={UserData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Address</p>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 mt-2"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
