import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Category() {
    const { categories = [] } = useSelector((state) => state.product)
    const firstFiveCategories = categories.slice(0, 5);

    // Default category images if category image is missing
    const defaultCategoryImages = {
        1: 'https://images.pexels.com/photos/18533668/pexels-photo-18533668/free-photo-of-jeans-camera-sunglasses-and-shoes.jpeg?auto=compress&cs=tinysrgb&w=600',
        2: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600', // Electronics
        3: 'https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=600', // Home
        4: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600', // Sports
        5: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600' // Beauty
    };

    return (
        <div className='px-6 py-8'>
            <h2 className='text-xl font-bold mb-6 text-gray-800'>Explore Popular Categories</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-6 justify-center md:justify-start'>
                {firstFiveCategories.map((item) => (
                    <Link 
                        to={`/categoryProducts/${item.id}`} 
                        key={item.id} 
                        className='flex flex-col gap-3 items-center group'
                    >
                        <div className='relative rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all duration-300'>
                            <img
                                src={item.image || defaultCategoryImages[item.id]}
                                alt={item.name}
                                className='w-full h-full object-cover'
                                onError={(e) => {
                                    e.target.src = defaultCategoryImages[item.id] || 'https://via.placeholder.com/150'
                                }}
                            />
                        </div>
                        <p className='text-sm md:text-base text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors'>
                            {item.name}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Category