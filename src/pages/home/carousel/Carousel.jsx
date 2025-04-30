import React, { useEffect, useState } from 'react'
import { GoDot, GoDotFill, GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoIosPause, IoIosPlay, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

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
                    <div className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center">
                        <div className="absolute inset-0 bg-opacity-30 flex flex-col bg-gray-200 pt-12 pl-12 p-3">
                            <h2 className="text-2xl font-bold mb-2 w-[30%]">May the collectibles be with you</h2>
                            <p className="text-xs">Grow your collection with toys, cards, and Star war treasures.</p>
                            <Link to={'/'} className='flex justify-center cursor-pointer my-4 px-2 p-1 font-bold rounded-3xl bg-black text-white w-24'>Shop now</Link>
                        </div>
                        <div className='flex flex-col m-1 mb-1 p-2 w-[50%] absolute h-full right-0'>
                            {/* First image div */}
                            <div
                                className='flex w-[40%] h-[60%] p-2 rounded-4xl bg-cover bg-center'
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/139167/pexels-photo-139167.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
                            ></div>

                            {/* Second image div */}
                            <div
                                className='flex w-[40%] h-[60%] p-3 rounded-4xl right-1/3 bottom-1/4 absolute bg-cover bg-center'
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
                            ></div>

                            {/* Third image div */}
                            <div
                                className='flex w-[40%] h-[60%] p-3 rounded-4xl right-10 bottom-5 absolute bg-cover bg-center'
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/158838/pexels-photo-158838.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
                            ></div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center">
                        <div className="absolute inset-0 bg-opacity-30 flex flex-col bg-green-500 pt-12 pl-12 p-3">
                            <h2 className="text-2xl font-bold mb-2 w-[30%]">Save with refurbished appliances</h2>
                            <p className="text-xs">Put top brands in your price range with quality refurbished.</p>
                            <Link to={'/'} className='flex justify-center cursor-pointer my-4 px-2 p-2 font-bold rounded-3xl bg-black text-white w-44 hover:bg-gray-800 transition-colors'>
                                Shop refurbished
                            </Link>
                        </div>

                        <div className='flex items-center justify-center gap-8 w-[50%] absolute h-full right-0 pr-6'>
                            {/* Laptops */}
                            <div className='flex flex-col items-center justify-center w-full h-[80%] group'>
                                <div
                                    className='flex w-[100%] h-[60%] p-2 bg-cover bg-center rounded-lg shadow-md'
                                    style={{ backgroundImage: `url(https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
                                ></div>
                                <div className='flex items-center mt-3 justify-center drop-shadow-md font-bold'>
                                    <p>Laptops</p>
                                    <IoIosArrowForward size={20} />
                                </div>
                            </div>

                            {/* Smartphones */}
                            <div className='flex flex-col items-center justify-center w-full h-[80%] group'>
                                <div
                                    className='flex w-[100%] h-[60%] p-2 bg-cover bg-center rounded-lg shadow-md'
                                    style={{ backgroundImage: `url(https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg)` }}
                                ></div>
                                <div className='flex items-center mt-3 justify-center drop-shadow-md font-bold'>
                                    <p>Smartphones</p>
                                    <IoIosArrowForward size={20} />
                                </div>
                            </div>

                            {/* Audio */}
                            <div className='flex flex-col items-center justify-center w-full h-[80%] group'>
                                <div
                                    className='flex w-[100%] h-[60%] p-2 bg-cover bg-center rounded-lg shadow-md'
                                    style={{ backgroundImage: `url(https://images.pexels.com/photos/18589085/pexels-photo-18589085/free-photo-of-jbl-wireless-loudspeaker.jpeg)` }}
                                ></div>
                                <div className='flex items-center mt-3 justify-center drop-shadow-md font-bold'>
                                    <p>Audio</p>
                                    <IoIosArrowForward size={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div
                        className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1705037282052-f6b776980f8d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
                    >
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center pl-12 p-3">
                            <h2 className="text-2xl font-bold mb-2 w-[30%] text-white drop-shadow-md">
                                Hey, save on your faves
                            </h2>
                            <p className="text-xs text-white drop-shadow-md w-[30%]">
                                From fashion to motors and everything in between, score a deal.
                            </p>
                            <Link
                                to={'/'}
                                className='flex justify-center cursor-pointer my-4 px-2 p-2 font-bold rounded-3xl bg-black text-white w-44 hover:bg-gray-800 transition-colors'
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>


                    {/* Slide 4 */}
                    <div
                        className="flex-shrink-0 w-full h-full rounded-xl relative bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582133456636-fa7c928448eb?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
                    >
                        <div className="absolute inset-0 bg-opacity-30 flex flex-col pt-12 pl-12 p-3 text-white">
                            <h2 className="text-2xl font-bold mb-1">Returns made simple</h2>
                            <p className="text-sm">Not happy with your purchase? It's easy to start a return.</p>
                            <Link
                                to={'/'}
                                className='flex justify-center cursor-pointer my-4 px-2 p-2 font-bold rounded-3xl bg-white text-black w-44 hover:bg-gray-800 transition-colors'
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots - Centered */}
                <div className="flex justify-center absolute bottom-4 left-0 right-0 pb-2 gap-2">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="text-black focus:outline-none cursor-pointer"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === currentIndex ? (
                                <GoDotFill className="w-4 h-4" color='black' />
                            ) : (
                                <GoDot className="w-4 h-4 opacity-70" color='black' />
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