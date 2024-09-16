import React from 'react';
import Navbar from '../Navbar.jsx'
import ImpactCarousel from '../ImpactCarousel.jsx'
import ProgramList from "../ProgramList.jsx";
import AboutUs from "../AboutUs.jsx";
import Footer from "../Footer.jsx"
import ContactUs from "../ContactUs.jsx"
import JoinUS from "../JoinUS.jsx"
import { useEffect, useState } from 'react'

function Home() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    const circles = [
        { label: 'Progress', color: 'var(--primary)' },
        { label: 'Growth', color: 'var(--secondary)' },
        { label: 'Success', color: 'var(--accent)' },
        { label: 'Achievement', color: 'var(--muted)' }
    ]

    return (
        <>
            <main className="bg-beige">
                <div className="bg-black">
                <div className="w-screen max-h-screen bg-no-repeat bg-cover bg-center bg-[url('img/wtActionImage.png')] py-0 my-0 sm:h-96">
                    <Navbar/>
                    <section className="flex items-center justify-center ">
                        <span className="flex items-center justify-center px-4 pb-16 w-fit sm:w-10/12 sm:pb-0 md:w-8/12 lg:w-6/12 lg:h-16 md:h-20 lg:h-24">
                           <span className="text-center">
                            <h1 className="text-white text-sm sm:text-xl md:text-2xl lg:text-4xl p-4 font-bold text-center">
                        Empowering Latino Youth for a Better Future
                            </h1>

                           </span>
                        </span>
                    </section>
                </div>
                </div>

                <ImpactCarousel/>
                <div className="flex justify-center ">
                    <img
                        src="img/wtImagelayoutOver1.png"
                        alt="Overlapping"
                        className="w-screen max-h-screen sm: max-h-screen"
                    />
                </div>

                <ProgramList/>
                <div
                    id="parallax-section"
                    className="relative w-full h-32 sm:h-48 md:h-56 lg:h-96 bg-center bg-no-repeat bg-cover"
                    style={{backgroundImage: "url('/img/wtImageLayout2.jpg')"}}
                >
                    <div className="absolute inset-0 flex items-center justify-center md:justify-end p-2 sm:p-4">
                        <div
                            className="bg-gray-600 bg-opacity-50 p-4 max-w-xs sm:max-w-md w-full text-center md:text-right">
                            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
                                "I felt like my student and I were really connected and making progress. This program is
                                an incredible
                                experience for everyone involved, and I am glad I was able to participate."
                            </p>
                        </div>
                    </div>
                </div>

                <AboutUs/>
                <br/>
                <JoinUS/>


                <div>
                    <ContactUs/>
                </div>

                <div>
                    <Footer/>
                </div>

            </main>


        </>

    );
}

export default Home;