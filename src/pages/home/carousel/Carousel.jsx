import React, { useEffect, useState } from 'react'
import { GoDot, GoDotFill, GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoIosPause, IoIosPlay } from "react-icons/io";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const totalSlides = 4;

    // Handle auto-play and pause
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                if (currentIndex === totalSlides - 1) {
                    setIsTransitioning(false);
                    setCurrentIndex(0);
                    setTimeout(() => setIsTransitioning(true), 50);
                } else {
                    setCurrentIndex(prev => prev + 1);
                }
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isPlaying, totalSlides]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrev = () => {
        setCurrentIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => prev === totalSlides - 1 ? 0 : prev + 1);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='hidden md:block py-4 px-5 border-t border-gray-200'>
            <div className="relative w-full overflow-hidden h-[240px] rounded-xl">
                <div
                    className="flex h-full"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
                    }}
                >
                    {/* Slide 1 */}
                    <div
                        className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://api.lorem.space/image/furniture?w=640&h=480&r=5902)' }}
                    >
                        <div className="absolute inset-0 bg-pink-800 bg-opacity-30 flex flex-col items-center justify-center text-white p-6">
                            <h2 className="text-4xl font-bold mb-2">Mountain View</h2>
                            <p className="text-xl">Explore the beautiful peaks</p>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div
                        className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308)' }}
                    >
                        <div className="absolute inset-0 bg-green-900 bg-opacity-20 flex flex-col items-start justify-end text-green-100 p-6 pb-10 pl-10">
                            <h2 className="text-3xl font-bold mb-2">Forest Trail</h2>
                            <p className="text-lg">Walk through nature's path</p>
                            <button className="mt-4 px-4 py-2 bg-green-700 rounded-lg hover:bg-green-600 transition cursor-pointer">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div
                        className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1429087969512-1e85aab2683d)' }}
                    >
                        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex flex-col items-end justify-center text-yellow-100 p-6 pr-10">
                            <h2 className="text-5xl font-bold mb-2">Ocean Sunset</h2>
                            <p className="text-2xl">Witness breathtaking views</p>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div
                        className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)' }}
                    >
                        <div className="absolute inset-0 bg-purple-900 bg-opacity-10 flex flex-col items-end justify-end text-white p-6">
                            <h2 className="text-2xl font-bold mb-1">Lakeside Camp</h2>
                            <p className="text-sm">Perfect getaway spot</p>
                            <div className="mt-2 flex space-x-2">
                                <span className="text-xs bg-white text-black px-2 py-1 rounded">Nature</span>
                                <span className="text-xs bg-white text-black px-2 py-1 rounded">Camping</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots - Centered */}
                <div className="flex justify-center absolute bottom-4 left-0 right-0 pb-2 gap-2">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="text-white focus:outline-none cursor-pointer"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === currentIndex ? (
                                <GoDotFill className="w-4 h-4" color='white' />
                            ) : (
                                <GoDot className="w-4 h-4 opacity-70" color='white' />
                            )}
                        </button>
                    ))}
                </div>

                {/* Control Buttons - Bottom Right */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-opacity-40 rounded-full p-2">
                    <button
                        onClick={goToPrev}
                        className="text-black bg-white p-1 hover:bg-opacity-20 rounded-full transition cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <GoChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="text-black bg-white p-1 hover:bg-opacity-20 rounded-full transition cursor-pointer"
                        aria-label="Next slide"
                    >
                        <GoChevronRight className="w-5 h-5" />
                    </button>

                    <button
                        onClick={togglePlayPause}
                        className="text-black bg-white p-1 hover:bg-opacity-20 rounded-full transition cursor-pointer"
                        aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                    >
                        {isPlaying ? (
                            <IoIosPause className="w-5 h-5" />
                        ) : (
                            <IoIosPlay className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel