import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const Navbar= ()=> {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* start of the navigation bar */}
            <main >
                <nav className="navbar flex items-center justify-between text-white relative">
                    <section className="flex items-center justify-between w-full">
                        <a href="index.html" className="flex items-center space-x-4 p-4">
                            <img src="/img/workingtogether.png" alt="Working Together Logo"
                                 className="w-12 h-8 sm:w-16 sm:h-16"/>
                            <p className="text-md sm:text-lg">Working Together</p>
                        </a>

                        {/* Navbar Items for Larger Screens */}
                        <ul className="hidden pr-4 md:flex items-center space-x-6">
                            <li><Link to="/" className="text-lg">Home</Link></li>
                            <li><a href="#" className="text-lg">Our Programs</a></li>
                            <li><a href="#" className="text-lg">Get Involved</a></li>
                            <li><a href="#" className="text-lg">Donate</a></li>
                        </ul>

                        {/* Hamburger Icon for Smaller Screens */}
                        <div className="md:hidden" onClick={toggleMenu}>
                            <button className="focus:outline-none">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </section>

                    {/* Slide-in Navbar for Mobile Screens */}
                    <section
                        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white flex flex-col items-start space-y-4 p-8 transform transition-transform duration-300 ease-in-out ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        } md:hidden z-50`}  // Added z-50 to bring it on top
                    >
                        <button
                            className="self-end mb-4"
                            onClick={toggleMenu}
                        >
                            {/* Close Icon */}
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <Link to="/" className="text-lg">Home</Link>
                        <a href="#" className="text-xl">Our Programs</a>
                        <a href="#" className="text-xl">Get Involved</a>
                        <a href="#" className="text-xl">Donate</a>
                    </section>
                </nav>

            </main>
        </>
    )
}
export default Navbar;