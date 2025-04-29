import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Category() {

    const { categories } = useSelector((state) => state.product)

    const firstFiveCategories = categories.slice(0, 5);

    return (
        <div className='px-5 py-5'>
            <div className='font-bold'>Explore Popular Categories</div>
            <div className='flex flex-row gap-6 justify-start py-4'>
                {firstFiveCategories.map((item) => (
                    <Link to={`/categoryProducts/${item.id}`} key={item.id} className='flex flex-col gap-4 items-center'>
                        {item.id === 1 ? (
                            <img
                                src="https://images.pexels.com/photos/18533668/pexels-photo-18533668/free-photo-of-jeans-camera-sunglasses-and-shoes.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Clothing"
                                className='rounded-full w-24 h-24 object-cover'
                            />
                        ) : (
                            <img
                                src={item.image}
                                alt={item.name}
                                className='rounded-full w-24 h-24 object-cover'
                            />
                        )}
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Category