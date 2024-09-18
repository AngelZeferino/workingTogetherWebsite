import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Sample data
const programs = [
    { name: 'Dancer 2 Dancer', image: '/img/wt_dancer2dancer.JPG', description: 'Dancing is a great way to express yourself through movement, rhythm, and coordination. It also promotes physical fitness.' },
    { name: 'Guitarist 2 Guitarist', image: '/img/wt_guitar.JPG', description: 'Learning guitar teaches you the fundamentals of music, enabling you to play a wide variety of songs and styles.' },
    { name: 'Folklore Mexican Dances', image: '/img/wt_folklorico.JPG', description: '' },
    { name: 'Art 4 All ', image: '/img/wt_art4all.JPG', description: 'Art encourages creativity and expression through different mediums like drawing, painting, and sculpture.' },
    { name: 'Tae Kwon Do', image: '/img/wt_taekwondo.JPG', description: '' },
    { name: 'Giant Splash', image: '/img/wt_splash.JPG', description: '' },
    { name: 'Hip Hop', image: '/images/football.JPG', description: '' },
    { name: 'Breakdance', image: '/img/wt_breakdance.JPG', description: 'Breakdancing is a style of street dance that involves athletic movements, including spins, flips, and intricate footwork.' },
    { name: 'Tech Giants', image: '/images/football.JPG', description: '' },
    { name: 'Yoga & Zumba', image: '/img/wt_yoga.JPG', description: 'Yoga focuses on flexibility, strength, and mindfulness, helping improve both physical and mental well-being.' },
    { name: 'Knitting & Crochet', image: '/images/football.jpg', description: '' },
    { name: 'You Go Girl', image: '/images/football.jpg', description: '' },
    { name: 'Football', image: '/img/wt_football.JPG', description: '' },
    { name: 'Educators of Tomorrow', image: '/images/football.jpg', description: '' },
    { name: 'Sanity School', image: '/images/football.jpg', description: '' },
    { name: 'Taller de Emprendedores', image: '/images/football.jpg', description: '' },

];

const ProgramList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setIsOpen(false); // Close dropdown after selection
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl text-red-700 font-bold mb-4">Our Programs</h1>
            <div className="flex flex-col items-center sm:flex-row bg-beige p-4 sm:p-8 rounded-lg shadow-lg">
                <img
                    src="img/wtProgramPicture.png"
                    alt="Program Image"
                    className="h-48 w-auto sm:h-72 sm:w-auto rounded-lg shadow-md mb-4 sm:mb-0 transition-transform transform hover:scale-105 animate-slide-in"
                />
                <div
                    className="flex flex-col justify-center text-center sm:text-left sm:ml-32 bg-beige p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-red-700 mb-4 text-shadow-md">
                        Our Vision
                    </h2>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        We envision that all Hispanic children in the community can get involved and fully integrate by
                        participating in the same activities as others. Working Together focuses on projects with the
                        following objectives:
                    </p>
                    <ul className="list-none mt-4 text-gray-800 pl-0">
                        <li className="relative mb-4 pl-6">
                            <span
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 w-2 h-2 rounded-full"></span>
                            Engage youth in fun and active programs to address the alarming trend of increasing numbers
                            of overweight children and adolescents.
                        </li>
                        <li className="relative mb-4 pl-6">
                            <span
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 w-2 h-2 rounded-full"></span>
                            Provide a safe and welcoming environment to address the tendency of young Hispanics to join
                            gangs in the absence of other safe and engaging activities.
                        </li>
                        <li className="relative mb-4 pl-6">
                            <span
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 w-2 h-2 rounded-full"></span>
                            Teach children that they too can be successful in the same activities as their peers. We
                            have found that depression and low self-esteem often stem from a feeling of being
                            “different.”
                        </li>
                        <li className="relative mb-4 pl-6">
                            <span
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 w-2 h-2 rounded-full"></span>
                            Provide no-cost or low-cost classes and activities to remove the economic barrier that
                            prevents children and adolescents from accessing exciting activities in the community.
                        </li>
                        <li className="relative pl-6">
                            <span
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 w-2 h-2 rounded-full"></span>
                            Provide hope and encourage dreams! While it may sound corny, we have seen that many of our
                            participants either leave school before receiving their degree or don’t think they can make
                            it to college. We encourage our participants to believe in themselves.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between py-10">
                {/* Left: Custom Select Dropdown */}
                <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full bg-gray-200 p-3 rounded-md text-left flex justify-between items-center"
                    >
                        {selectedProgram ? selectedProgram.name : 'Select a Program'}
                        <span className="ml-2">&#9660;</span> {/* Dropdown arrow */}
                    </button>
                    {isOpen && (
                        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto z-10">
                            {programs.map((program) => (
                                <li
                                    key={program.name}
                                    onClick={() => handleProgramClick(program)}
                                    className="p-3 cursor-pointer hover:bg-gray-100"
                                >
                                    {program.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Right: Display selected program details */}
                <div className="flex flex-col items-center sm:w-2/3 sm:ml-8">
                    {selectedProgram ? (
                        <>
                            <img
                                src={selectedProgram.image}
                                alt={selectedProgram.name}
                                className="w-full sm:w-auto h-auto rounded-md shadow-lg mb-4"
                            />
                            <p className="text-center text-lg text-gray-700">
                                {selectedProgram.description}
                            </p>
                        </>
                    ) : (
                        <p className="text-center text-gray-500">Please select a program to see details.</p>
                    )}
                </div>
            </div>

        </div>
    )
};

export default ProgramList;
