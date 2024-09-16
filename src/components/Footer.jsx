import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#5A72A0] text-white py-10">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-10 sm:space-y-0 sm:space-x-10 px-4">

                {/* Right Side: Logo and Buttons */}
                <div className="flex flex-col items-center space-y-4 sm:items-start">
                    <div className="flex flex-col items-center">
                        <img src="img/workingtogether.png" alt="Logo" className="h-16 w-auto" />
                        <p className="text-xs"> <i> Empowering Communities </i> </p>
                    </div>
                    <button className="bg-white text-[#5A72A0] font-semibold py-2 px-4 rounded">Our Programs</button>
                    <button className="bg-white text-[#5A72A0] font-semibold py-2 px-4 rounded">Our History</button>
                    <button className="bg-white text-[#5A72A0] font-semibold py-2 px-4 rounded">Get Involved</button>
                </div>

                {/* Left Side: Contact Info and Social Media */}
                <div className="flex flex-col space-y-4">
                    <div>
                        <h3 className="font-bold text-lg">Contact Info</h3>
                        <p>Phone: 1 (224) 829-9281</p>
                        <p>Email: delacruzali@yahoo.com</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/workingtogetherillinois"> <FaFacebookF className="hover:text-gray-300 cursor-pointer" /></a>
                            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                            <FaTiktok className="hover:text-gray-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* White Horizontal Line */}
            <div className="border-t border-white mt-10"></div>

            {/* Copyright */}
            <div className="text-center py-4">
                <a href="https://angelzeferino.com/"><p>&copy; {new Date().getFullYear()} Angel Zeferino | All Rights Reserved.</p> </a>
            </div>
        </footer>
    );
};

export default Footer;
