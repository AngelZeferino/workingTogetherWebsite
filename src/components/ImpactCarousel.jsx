import React from "react";
import Slider from "react-slick";

const ImpactCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 4 seconds per slid
        pauseOnHover: true,
        arrows: false, // Disable arrows
    };

    const impactStatements = [
        "1000 families have joined our programs since 2009.",
        "Since 2015, 440 students learned to swim at Giant Splash",
        "50 girls join our Dancer 2 Dancer program every year",
        "Every semester, at least 50 kids join Tae Kwon Do"
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-beige m-0 py-10 px-4 sm:py-20">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 sm:text-4xl">Our Impact</h2>
            <div className="w-full sm:w-4/5 lg:w-2/3">
                <Slider {...settings}>
                    {impactStatements.map((statement, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 bg-beige rounded-lg text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
                        >
                            <p className="text-base sm:text-xl lg:text-2xl text-gray-700">{statement}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};
export default ImpactCarousel;
