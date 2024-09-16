import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="container mx-auto py-10 px-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 pb-10 text-blue-900">Got Questions?</h1>
            <div
                className="flex flex-col sm:flex-row justify-between items-start space-y-10 sm:space-y-0 sm:space-x-10">

                {/* Left Side: Contact Info */}
                <div className="sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-blue-900">Contact Info</h3>
                    <p>Phone: 1 (224) 829-9281</p>
                    <p>Email: delacruzali@yahoo.com</p>
                </div>

                {/* Right Side: Contact Form */}
                <div className="sm:w-2/3 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-blue-900 ">Contact Us</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-4">

                            {/* First Name and Last Name */}
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                    className="w-1/2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                    className="w-1/2 p-2 border border-gray-300 rounded"
                                />
                            </div>

                            {/* Email and Phone Number */}
                            <div className="flex space-x-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-1/2 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-1/2 p-2 border border-gray-300 rounded"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            ></textarea>

                            {/* Submit Button */}
                            <button type="submit"
                                    className="bg-blue-400 text-white font-bold py-2 px-6 rounded hover:bg-blue-500 transition duration-300">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
