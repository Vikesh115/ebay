import React from 'react'
import { Link } from 'react-router-dom'
import { IoNotificationsOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
    return (
        <div className='flex justify-between px-5 py-1 text-[.50rem] border-b border-gray-200 w-[100%]'>
            <div className='flex gap-3'>
                <div>
                    Hi! <Link className='underline text-blue-600'>Sign in</Link> or <Link className='underline text-blue-600'>register</Link>
                </div>
                <div>Daily Deals</div>
                <div>Brand Outlet</div>
                <div>Gift Cards</div>
                <div>Help & Contact</div>
            </div>
            <div className='flex gap-5'>
                <div>Sell</div>
                <div className="group relative inline-block w-[100%]">
                    <div className="flex items-center cursor-pointer ">
                        <div>watchlist</div>
                        <IoIosArrowDown/>
                    </div>
                    <div className="hidden group-hover:flex items-center whitespace-nowrap text-lg font-bold absolute z-10 text-gray-500 bg-white p-4 shadow-lg rounded-lg right-0 gap-1">
                        Please 
                        <span><Link className=' underline text-black'>sign in</Link> </span>
                        to view items you are watching.
                    </div>
                </div>
                <div className="group relative inline-block w-[100%]">
                    <div className="flex items-center cursor-pointer ">
                        <div>My eBay</div>
                        <IoIosArrowDown/>
                    </div>
                    <div className=" hidden group-hover:flex group-hover:flex-col absolute z-10 bg-white p-2 py-4 gap-2 shadow-lg rounded-lg right-0 ">
                        <div>Summary</div>
                        <div>Recently viewed</div>
                    </div>
                </div>
                <div className="group relative inline-block">
                    <div className="cursor-pointer">
                        <IoNotificationsOutline size={12} color='black'/>
                    </div>
                    <div className="hidden group-hover:block absolute z-10 text-gray-500 bg-white p-12 shadow-lg rounded-lg right-0 min-w-[300px] text-lg">
                        Please <Link className='text-blue-600 underline'>sign in</Link> to view notifications
                    </div>
                </div>
                <div className="group relative inline-block">
                    <div className="cursor-pointer">
                        <FiShoppingCart size={12} color='black'/>
                    </div>
                    <div className="hidden group-hover:block absolute z-10 bg-white p-14 shadow-lg rounded-lg right-0 text-lg text-gray-400">
                        Your cart is empty
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Navbar