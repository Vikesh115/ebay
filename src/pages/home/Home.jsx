import Carousel from "./carousel/Carousel"
import Category from "./categories/Category"

function Home() {

  return (
    <div className='flex flex-col'>
          <Carousel/>
          <Category/>
    </div>
  )
}

export default Home