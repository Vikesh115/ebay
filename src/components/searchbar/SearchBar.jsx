import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';

function SearchBar() {

    const {products} = useSelector((state) => state.product)
    console.log(products);

    const [query, setQuery] = useState('')

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='flex items-center py-2 px-5 gap-5 w-[100%]'>
            <Link to={'/'} className=' items-center'>
                <span className='text-red-500 text-4xl -mx-[1.5px]'>e</span>
                <span className='text-blue-500 text-4xl -mx-[1.5px]'>b</span>
                <span className='text-yellow-500 text-4xl -mx-[1.5px]'>a</span>
                <span className='text-green-500 text-4xl -mx-[1.5px]'>y</span>
            </Link>
            <div className="group relative inline-block">
                <div className="flex -space-x-3 items-center cursor-pointer">
                    <div className='font-light text-[.45rem] text-gray-500'> Shop by category</div>
                    <IoIosArrowDown />
                </div>
                <div className="hidden group-hover:block absolute z-10 bg-white p-10 shadow-lg rounded-lg right-0">
                    categories
                </div>
            </div>
            <div className='flex justify-between items-center border-[1.5px] rounded-2xl w-[100%]'>
                <div className='flex w-[100%] items-center pl-2 gap-2'>
                    <BiSearch size={12} />
                    <input 
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    placeholder="Search for anything" 
                    className='text-[.55rem] outline-none w-[100%]' 
                    />
                </div>
                <div className="group relative inline-block h-full">
                    <div className='flex w-[100%] cursor-pointer text-[.55rem] font-light px-4 items-center gap-6 border-l border-gray-200 py-2'>
                        <div className='flex items-center gap-1 text-gray-600'>
                            <div>All</div>
                            <div>categories</div>
                        </div>
                        <div><IoIosArrowDown /></div>
                    </div>
                    <div className="hidden group-hover:block absolute z-10 bg-white p-12 shadow-lg rounded-lg right-0">
                        categories
                    </div>
                </div>
            </div>
            <div className='bg-blue-600 text-white rounded-2xl px-10 py-2 text-xs'>
                Search
            </div>
            {query && filteredProducts.length > 0 && (
                <div className="absolute z-10 top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg border-t-0 border-gray-200 max-w-xl mx-auto mt-1">
                    <div className="px-2 max-h-120 overflow-y-auto">
                        {filteredProducts.slice(0, 10).map(product => (
                            <Link 
                                key={product.id}
                                to={`/details/${product.id}`}
                                className="flex items-center p-1 hover:bg-gray-50 rounded"
                                onClick={() => setQuery('')}
                            >
                                <div>
                                    <div className="text-xs">{product.title}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
)}

export default SearchBar