import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';

function SearchBar() {

    const { products, categories } = useSelector((state) => state.product)

    const [query, setQuery] = useState('')

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    const firstFiveCategories = categories.slice(0, 5);

    return (
        <>
            {/* Screensize >= 768px */}
            <div className='md:flex hidden items-center py-2 px-5 gap-5 w-[100%]'>
                <Link to={'/'} className=' items-center'>
                    <span className='text-red-500 text-4xl -mx-[1.5px]'>e</span>
                    <span className='text-blue-500 text-4xl -mx-[1.5px]'>b</span>
                    <span className='text-yellow-500 text-4xl -mx-[1.5px]'>a</span>
                    <span className='text-green-500 text-4xl -mx-[1.5px]'>y</span>
                </Link>
                <div className="group relative inline-block">
                    <div className="flex -space-x-3 items-center cursor-pointer">
                        <div className='font-light text-[.65rem] text-gray-500'> Shop by category</div>
                        <IoIosArrowDown />
                    </div>
                    <div className="text-[.65rem] hidden group-hover:flex group-hover:flex-col absolute z-10 bg-black text-white p-2 shadow-lg rounded-lg right-0">
                        {firstFiveCategories.map((item) => (
                            <Link key={item.id} to={`/categoryProducts/${item.id}`}>{item.name}</Link>
                        ))}
                    </div>
                </div>
                <div className='flex justify-between items-center border-[1.5px] rounded-2xl w-[100%]'>
                    <div className='flex w-[100%] items-center pl-2 gap-2'>
                        <BiSearch size={12} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for anything"
                            className='text-[.55rem] outline-none w-[100%]'
                        />
                    </div>
                    <div className="group relative inline-block h-full">
                        <div className='flex w-[100%] cursor-pointer text-[.65rem] font-light px-4 items-center gap-6 border-l border-gray-200 py-2'>
                            <div className='flex items-center gap-1 text-gray-600'>
                                <div>All</div>
                                <div>categories</div>
                            </div>
                            <div><IoIosArrowDown /></div>
                        </div>
                        <div className="text-[.65rem] hidden group-hover:flex group-hover:flex-col absolute z-10 bg-white text-black p-2 shadow-lg rounded-lg right-0">
                            {firstFiveCategories.map((item) => (
                                <Link key={item.id} to={`/categoryProducts/${item.id}`}>{item.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                <button className='bg-blue-600 text-white cursor-pointer rounded-2xl px-10 py-2 text-xs'>
                    Search
                </button>
                {/* Search Results Dropdown */}
                {query && (
                    <div className="absolute z-10 top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg border-t-0 border-gray-200 max-w-xl mx-auto mt-1">
                        <div className="px-2 max-h-120 overflow-y-auto">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.slice(0, 10).map(product => (
                                    <Link
                                        key={product.id}
                                        to={`/details/${product.id}`}
                                        className="flex items-center p-1 hover:bg-gray-50 rounded"
                                        onClick={() => setQuery('')}
                                    >
                                        <div className="text-xs">{product.title}</div>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-2 text-xs text-gray-500">
                                    No products found for "{query}"
                                    <div className="text-blue-500 mt-1">
                                        Try different keywords or browse our categories
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Screensize < 768px */}
            <div className='md:hidden flex flex-row w-[100%] px-5'>
                <div className='flex border-[1.5px] border-r-white w-[100%]'>
                    <div className='flex w-[100%] items-center pl-2 gap-2'>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for anything"
                            className='text-[.55rem] outline-none w-[100%]'
                        />
                    </div>
                </div>
                <button className='bg-blue-500 text-white cursor-pointer px-3 py-2 text-xs'>
                    <BiSearch size={12} />
                </button>
                {/* Search Results Dropdown */}
                {query && (
                    <div className="absolute z-10 top-26 left-0 right-0 bg-white shadow-lg rounded-b-lg border-t-0 border-gray-200 mx-5 mt-1">
                        <div className="px-2 max-h-120 overflow-y-auto">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.slice(0, 10).map(product => (
                                    <Link
                                        key={product.id}
                                        to={`/details/${product.id}`}
                                        className="flex items-center p-1 hover:bg-gray-50 rounded"
                                        onClick={() => setQuery('')}
                                    >
                                        <div className="text-xs">{product.title}</div>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-2 text-xs text-gray-500">
                                    No products found for "{query}"
                                    <div className="text-blue-500 mt-1">
                                        Try different keywords
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchBar