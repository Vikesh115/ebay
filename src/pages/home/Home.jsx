import Carousel from "./carousel/Carousel"
import Category from "./categories/Category"

function Home() {

  return (
    <div className='flex flex-col'>
      <Carousel />
      <Category />
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
            <button className="bg-white text-green-900 hover:bg-gray-100 font-medium rounded-full px-5 py-2 md:px-6 md:py-2.5 text-sm transition-colors duration-200 shadow-sm">
              Explore Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home