import React from 'react';

const ClientReviews: React.FC = () => {
    const reviews = [
        {
            id: 1,
            image: "/reviews1-removebg-preview.png",
            text: "The service provided is top-notch. Highly recommend!",
            author: "John Doe",
        },
        {
            id: 2,
            image: "/reviews2-removebg-preview.png",
            text: "Amazing experience, will definitely use again.",
            author: "Jane Smith",
        },
        {
            id: 3,
            image: "/reviews3-removebg-preview.png",
            text: "Great customer support and fast delivery.",
            author: "Alice Johnson",
        },
        {
            id: 4,
            image: "/reviews5-removebg-preview.png",
            text: "Great customer support and fast delivery.",
            author: "Alice Johnson",
        },
        {
            id: 5,
            image: "/reviews6-removebg-preview.png",
            text: "Great customer support and fast delivery.",
            author: "Alice Johnson",
        },
        {
            id: 6,
            image: "/reviews4-removebg-preview.png",
            text: "Great customer support and fast delivery.",
            author: "Alice Johnson",
        },


    ];

    return (
        <section className="relative py-16 bg-black">
            {/* Top shadow gradient */}
            <div className="z-10 absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-black to-transparent"></div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">

                    <div className='flex flex-col gap-4'>

                        <img
                            src={reviews[0].image}
                            alt={`Review from ${reviews[0].author}`}
                            className="w-full h-auto rounded-lg mb-4 shadow-md border-agency-orange/30 border"
                        />
                        <img
                            src={reviews[5].image}
                            alt={`Review from ${reviews[5].author}`}
                                className="w-full h-auto rounded-lg mb-4 shadow-md border-agency-orange/30 border"
                        />
                    </div>
                    <div className='flex flex-col gap-4'>

                        <img
                            src={reviews[1].image}
                            alt={`Review from ${reviews[1].author}`}
                            className="w-full h-auto rounded-lg mb-4 shadow-md border-agency-orange/30 border"
                        />
                        <img
                            src={reviews[2].image}
                            alt={`Review from ${reviews[2].author}`}
                            className="w-full h-auto rounded-lg mb-4 shadow-md border-agency-orange/30 border"
                        />
                    </div>
                    <div className='flex flex-col gap-4'>

                        <img
                            src={reviews[3].image}
                            alt={`Review from ${reviews[3].author}`}
                            className="w-full h-auto rounded-lg mb-4 shadow-md border-agency-orange/30 border"
                        />
                        <img
                            src={reviews[4].image}
                            alt={`Review from ${reviews[4].author}`}
                            className="w-full h-auto rounded-lg mb-4 shadow-md border-agency-orange/30 border"
                        />
                    </div>

                </div>
            </div>

            {/* Bottom shadow gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default ClientReviews;

