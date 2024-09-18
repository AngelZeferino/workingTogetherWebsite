import React from 'react'

const AboutUs = () => {
    return (
        <main>

            <div
                className="container mx-auto px-4 py-8 bg-beigerounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-green-800 text-left">About Us</h1>

                <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
                    <img
                        src="/img/wtAboutUs2.JPG"
                        alt="About Us Image"
                        className="h-48 sm:h-64 w-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                    <p className="text-lg leading-relaxed text-gray-700 sm:text-left text-center mt-6 sm:mt-0 bg-beige p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        At the beginning of 2007, a group of low-income Hispanic mothers, concerned about their
                        children’s health and lack of after-school activity options, met in the park to play soccer
                        with their kids. Other parents from the community joined in, and with the help of amazing
                        volunteers, Working Together was born. Working Together has grown from a handful of children
                        to serving over 1,000 children ranging in age from three to 18 who primarily live within the
                        boundaries of North Shore School District #112 and Township High School District #113.
                        <br/><br/>
                        Founded upon the goal of enhancing the emotional and physical wellbeing of children, Working
                        Together initiates projects that benefit and support the Hispanic community of both Highwood
                        and Highland Park. Our mission is to promote, encourage, and support the Hispanic community
                        with educational, cultural, and recreational activities geared toward enhancing the lives of
                        participants.
                    </p>
                </div>

                <br/>

                <div>
                    <h2 className="text-2xl font-bold text-green-800 pb-5 text-center">About the Founder</h2>
                    <div className="flex flex-col-reverse sm:flex-row sm:space-x-6 items-center">
                        <p className="text-lg leading-relaxed text-gray-700 py-10 sm: p-6 text-left text-center bg-beigep-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            As a child growing up in Mexico City, Alicia remembers the influence her grandfather who
                            came to Chicago in 1925 to build helicopters had on her life. Although he needed to return
                            to Mexico to help his family, he filled their home with American music: The Supremes, Diana
                            Ross, the Big Bands, and New Orleans Jazz. He impressed upon Alicia’s father the importance
                            of education and the ability to speak English. “That’s the future,” he would say. Alicia
                            remembers that her grandfather always focused on empathy. “Everybody is the same,” he would
                            say. “Treat everyone with kindness and respect no matter what they do for a living or who
                            they are.”
                            <br/><br/>
                            Alicia carried those values with her when she and her husband moved to Highland Park in
                            2001. With a bachelor’s and an advanced degree in marketing and having worked for Citibank
                            in Mexico, Alicia hoped to secure a job in the banking industry. However, that did not come
                            to fruition. Unsure of what to do next, she remembers her friend Rosa telling her, “You need
                            to meet people; you need to get involved, help people, volunteer.” The seed had been
                            planted.
                        </p>
                        <img
                            src="/img/wtAliciaAboutUs.jpg"
                            alt="Founder Image"
                            className="h-48 sm:h-64 w-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>


        </main>
    )
};
export default AboutUs
