import React, { useEffect, useRef, useState } from 'react';

const ProfilePage = () => {
    const [selectImage, setselectImage] = useState('https://via.placeholder.com/150');
    const InputRef = useRef(null);
    const [UserData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        mobile: '',
        country: ''
    });

    useEffect(() => {

        const loginData = localStorage.getItem('Login Data');
        let mergedData = { ...UserData };

        if (loginData) {
            try {
                const parsedLoginData = JSON.parse(loginData);
                console.log('Login Data from localStorage:', parsedLoginData);
                mergedData = {
                    ...mergedData,
                    email: parsedLoginData.email || '',
                    password: parsedLoginData.password || ''
                };
            } catch (error) {
                console.log('Error parsing Login Data:', error);
            }
        }

        const registerData = localStorage.getItem('Register Data');
        if (registerData) {
            try {
                const parsedRegisterData = JSON.parse(registerData);
                console.log('Register Data from localStorage:', parsedRegisterData);
                mergedData = {
                    ...mergedData,
                    firstname: parsedRegisterData.firstname || mergedData.firstname,
                    lastname: parsedRegisterData.lastname || mergedData.lastname,
                    email: parsedRegisterData.email || mergedData.email,
                    password: parsedRegisterData.password || mergedData.password,
                    mobile: parsedRegisterData.mobile || mergedData.mobile,
                    country: parsedRegisterData.country || mergedData.country
                };
            } catch (error) {
                console.log('Error parsing Register Data:', error);
            }
        }

        console.log('Merged Data to set in state:', mergedData);
        setUserData(mergedData);


        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setselectImage(storedImage);
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

        if (!UserData.firstname || !UserData.email || !UserData.password) {
            alert('Please fill in required fields: First Name, Email, and Password!');
            return;
        }
        console.log('Saving to localStorage:', UserData);
        localStorage.setItem('Login Data', JSON.stringify({
            email: UserData.email,
            password: UserData.password
        }));
        localStorage.setItem('Register Data', JSON.stringify(UserData));
        alert('Profile updated successfully!');


    };

    const handleImage = () => {
        InputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const newImage = event.target.result;
                    setselectImage(newImage);
                    localStorage.setItem('profileImage', newImage);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file!');
            }
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-6 max-w-[900px] my-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative" onClick={handleImage}>
                        <img
                            src={selectImage}
                            alt="Profile Picture"
                            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                        />
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="hidden"
                            ref={InputRef}
                            onChange={handleFileChange}
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
                                name="firstname"
                                value={UserData.firstname}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Last Name</p>
                            <input
                                type="text"
                                name="lastname"
                                value={UserData.lastname}
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
                            <p className="text-gray-600 font-medium">Mobile Number</p>
                            <input
                                type="tel"
                                name="mobile"
                                value={UserData.mobile}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-medium">Country</p>
                            <input
                                type="text"
                                name="country"
                                value={UserData.country}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-gray-800 text-lg focus:outline-none focus:border-blue-500"
                            />
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






