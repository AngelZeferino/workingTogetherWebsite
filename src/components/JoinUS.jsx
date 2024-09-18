import React from "react";

const GetInvolved = () => {
    return (
        <div className="container mx-auto py-10 px-4 p-8 rounded-lg shadow-lg">
            <h1 className="flex text-2xl font-bold mb-4 justify-end text-blue-900">Join Us</h1>
            {/* First Section: Donate */}
            <div className="flex flex-col sm:flex-row items-center mb-10">
                <img src="/img/wtJoinUsVolunteer1.JPG" alt="Donate" className="w-full sm:w-1/2 h-64 object-cover"/>
                <div className="relative w-full sm:w-1/2 h-64 flex items-end bg-blue-700 bg-opacity-50 p-6">
                    <div className="absolute top-0 right-0 h-full w-2 bg-blue-900"></div>
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-4">Help Us Grow</h3>
                        <p>Support our cause by donating to help the children in our programs.</p>
                        <button
                            className="mt-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200 transition duration-300">
                            Donate
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Section: Volunteer */}
            <div className="flex flex-col-reverse sm:flex-row items-center mb-10">
                <div className="relative w-full sm:w-1/2 h-64 flex items-end bg-blue-700 bg-opacity-50 p-6">
                    <div className="absolute top-0 left-0 h-full w-2 bg-blue-900"></div>
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-4">Become a Volunteer</h3>
                        <p>Join us in making a difference by volunteering your time and skills.</p>
                        <button
                            className="mt-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200 transition duration-300">
                            Volunteer
                        </button>
                    </div>
                </div>
                <img src="/img/wtJoinUs2.JPG" alt="Volunteer" className="w-full sm:w-1/2 h-64 object-cover"/>
            </div>

            {/* Third Section: Join Us */}
            <div className="flex flex-col sm:flex-row items-center mb-10">
                <img src="/img/wtJoinUs3.JPG" alt="Join Us" className="w-full sm:w-1/2 h-64 object-cover"/>
                <div className="relative w-full sm:w-1/2 h-64 flex items-end bg-blue-700 bg-opacity-50 p-6">
                    <div className="absolute top-0 right-0 h-full w-2 bg-blue-900"></div>
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                        <p>Become part of our family and help us continue to grow.</p>
                        <button
                            className="mt-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200 transition duration-300">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetInvolved;
