import { Link } from "react-router-dom"
import Carousel from "./carousel/Carousel"
import Category from "./categories/Category"

function Home() {

  return (
    <div className='flex flex-col'>
      <Carousel />
      <Category />

      {/* Box-1 */}
      <div className="relative w-full py-4 md:px-6">
        <div className="bg-green-900 md:rounded-lg w-full h-24 md:h-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-green-700 to-green-600"></div>
          <div className="relative h-full flex items-center justify-between px-6">
            <div className="text-white">
              <p className="text-lg md:text-xl font-semibold">There's a deal for you too!</p>
              <p className="text-xs md:text-sm font-light mt-1">
                Don't miss your chance to save on items you've been looking for
              </p>
            </div>
            <Link to={'/login'} className="bg-white text-green-900 hover:bg-gray-100 font-medium rounded-full px-5 py-2 md:px-6 md:py-2.5 text-sm transition-colors duration-200 shadow-sm">
              Explore Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Box-2 */}
      <div className="px-6 py-4">
        <div className="flex-shrink-0 w-full bg-amber-500 h-[150px] md:h-[240px] rounded-xl relative overflow-hidden ">
          {/* Background Content */}
          <div className="absolute inset-0 flex flex-col pt-12 pl-6 md:pl-12 p-3 z-10">
            <h2 className="text-2xl md:text-3xl  font-bold mb-2 w-full md:w-[40%]">
              The force is strong with this one
            </h2>
            <p className="text-xs md:text-sm w-full md:w-[40%]">
              Discover a variety of action figures, cards, toys and more.
            </p>
            <Link
              to={'/'}
              className='flex justify-center cursor-pointer my-4 px-2 py-1.5 font-bold rounded-3xl bg-black text-white w-32 hover:bg-gray-800 transition-colors'
            >
              Find yours
            </Link>
          </div>

          {/* Image Gallery */}
          <div className='absolute right-0 top-0 w-full md:w-[50%] h-full'>
            <div className="relative h-full">
              {/* First Image */}
              <img
                src="https://images.unsplash.com/photo-1734221040685-d175bc4abaa5?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Collectible items"
                className="absolute w-[40%] h-[50%] md:h-[60%] top-4 left-4 object-cover rounded-xl shadow-lg"
              />

              {/* Second Image */}
              <img
                src="https://images.unsplash.com/photo-1709768669165-e213f726aa9e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Action figures"
                className="absolute w-[40%] h-[50%] md:h-[60%] top-[20%] right-[30%] object-cover rounded-xl shadow-lg"
              />

              {/* Third Image */}
              <img
                src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Star wars collectibles"
                className="absolute w-[40%] h-[50%] md:h-[60%] bottom-4 right-4 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home