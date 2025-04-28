import Carousel from "./carousel/Carousel"
import Category from "./categories/Category"

function Home() {

  return (
    <div className='flex flex-col'>
          <Carousel/>
          <Category/>
          <div className="relative px-5 py-3">
            <div className=" bg-green-900 rounded w-[100%] h-[100px]">
              <p className="absolute left-10 top-10 text-white">There's deal for you,too</p>
              <p className="absolute left-10 top-16 text-white text-xs font-light">Don't miss a chance to save on items you've been looking for</p>
              <button className="absolute right-10 top-12 bg-white rounded-2xl p-2 cursor-pointer">Explore now</button>
            </div>
          </div>
    </div>
  )
}

export default Home