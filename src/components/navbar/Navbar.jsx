import React from 'react'
import { Link } from 'react-router-dom'
import { IoNotificationsOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';
import { FiMenu, FiX } from "react-icons/fi";

function Navbar({ handleLogout }) {
    const { cartCount } = useSelector((state) => state.cart);
    const { wishlistCount = 0, wishlist = [] } = useSelector((state) => state.wishlist);
    const { user } = useSelector((state) => state.auth);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { cart } = useSelector(state => state.cart);

    console.log('wish', wishlist);

    return (
        <>
            {/* Screensize >= 768px */}
            <div className='md:flex hidden justify-between px-5 py-1 font-medium text-[.65rem] border-b border-gray-200 w-full'>
                <div className='flex gap-3 items-center'>
                    {user ? (
                        <div className="relative inline-block group">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span>Hi</span>
                                <span className="font-bold">
                                    {user?.username || user?.email?.split('@')[0]}
                                </span>
                                <IoIosArrowDown className="ml-1 text-xs opacity-70" />
                            </div>
                            {/* Logout dropdown - only shows on hover */}
                            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute right-0 left-1 top-3 w-32 bg-white  rounded-md shadow-2xl py-12 px-5 z-10">
                                <button onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm hover:underline cursor-pointer">
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className='flex gap-1'>
                            <span>Hi!</span>
                            <Link to='/login' className='underline text-blue-600'>Sign in</Link>
                            <span>or</span>
                            <Link to='/signup' className='underline text-blue-600'>register</Link>
                        </div>
                    )}
                    <div>Daily Deals</div>
                    <div>Brand Outlet</div>
                    <div>Gift Cards</div>
                    <div>Help & Contact</div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div>Sell</div>

                    {/* Wishlist */}
                    <div className="group relative inline-block">
                        <div className="flex items-center cursor-pointer">
                            <div>Watchlist</div>
                            <IoIosArrowDown className="ml-1" />
                        </div>
                        {!user ? (
                            <div className="hidden group-hover:flex items-center whitespace-nowrap text-sm absolute z-10 text-gray-500 bg-white p-4 shadow-lg rounded-lg right-0 gap-1">
                                Please <Link to="/login" className='underline text-black font-medium'>sign in</Link> to view your watchlist
                            </div>
                        ) : (
                            <div className="hidden group-hover:block absolute z-10 w-64 bg-white p-4 shadow-lg rounded-lg right-0">
                                {wishlistCount > 0 ? (
                                    <>
                                        <div className="space-y-3 max-h-80 overflow-y-auto">
                                            {wishlist.slice(0, 5).map((item) => (
                                                <Link
                                                    to={'/wishlist'}
                                                    key={item.id}
                                                    className="flex gap-3 hover:bg-gray-50 p-2 rounded"
                                                >
                                                    <img
                                                        src={item.images}
                                                        alt={item.title}
                                                        className="w-12 h-12 object-cover"
                                                    />
                                                    <div>
                                                        <div className="font-medium text-sm line-clamp-1">{item.title}</div>
                                                        <div className="text-gray-600 text-sm">${item.price}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="border-t pt-3 mt-2">
                                            <Link
                                                to="/wishlist"
                                                className="text-sm font-medium text-blue-600 hover:underline block text-center"
                                            >
                                                View all ({wishlistCount}) items
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-gray-500 text-center py-4">
                                        Your watchlist is empty
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* My eBay */}
                    {user && (
                        <div className="group relative inline-block">
                            <div className="flex items-center cursor-pointer">
                                <div>My eBay</div>
                                <IoIosArrowDown className="ml-1" />
                            </div>
                            <div className="hidden group-hover:flex flex-col absolute z-10 bg-white p-2 py-4 gap-2 shadow-lg rounded-lg right-0 w-48">
                                <Link to="/account" className="hover:text-blue-600">Summary</Link>
                                <Link to="/recently-viewed" className="hover:text-blue-600">Recently viewed</Link>
                                <Link to="/purchases" className="hover:text-blue-600">Purchases</Link>
                            </div>
                        </div>
                    )}

                    {/* Notifications */}
                    <div className="group relative inline-block">
                        <div className="cursor-pointer">
                            <IoNotificationsOutline size={16} />
                        </div>
                        <div className="hidden group-hover:block absolute z-10 text-gray-500 bg-white p-4 shadow-lg rounded-lg right-0 min-w-[200px] text-sm">
                            {user ? (
                                <div className="text-center py-2">No new notifications</div>
                            ) : (
                                <div>
                                    Please <Link to="/login" className='text-blue-600 underline'>sign in</Link> to view notifications
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Cart */}
                    <div className="group relative inline-block">
                        {/* Cart Icon with Badge */}
                        <Link to="/cart" className="cursor-pointer flex items-center relative">
                            <FiShoppingCart size={16} />
                            {cartCount > 0 && (
                                <span className="absolute -right-2 -top-1 bg-red-600 rounded-full text-white text-xs h-4 w-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Cart Dropdown Content */}
                        {cartCount > 0 ? (
                            <div className="hidden group-hover:block absolute z-10 right-0 w-64 bg-white p-4 shadow-lg rounded-lg">
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {cart.slice(0, 5).map((item) => (
                                        <Link
                                            to={'/cart'}
                                            key={item.id}
                                            className="flex gap-3 hover:bg-gray-50 p-2 rounded"
                                        >
                                            <img
                                                src={item.images}
                                                alt={item.title}
                                                className="w-12 h-12 object-cover"
                                            />
                                            <div>
                                                <div className="font-medium text-sm line-clamp-1">{item.title}</div>
                                                <div className="text-gray-600 text-sm">
                                                    ${item.price} × {item.quantity}
                                                </div>
                                                <div className="text-sm font-medium">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="border-t pt-3 mt-2">
                                    <Link
                                        to="/cart"
                                        className="text-sm font-medium text-blue-600 hover:underline block text-center"
                                    >
                                        View all ({cartCount}) items
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden group-hover:block absolute z-10 right-0 mt-2 w-48 bg-white p-4 shadow-lg rounded-lg text-sm text-gray-500">
                                Your cart is empty
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Screensize < 768px */}
            <div className='md:hidden flex justify-between items-center px-5 py-4 relative'>
                {/* eBay Logo */}
                <Link to={'/'} className='flex items-center'>
                    <span className='text-red-500 text-4xl -mx-[1.5px]'>e</span>
                    <span className='text-blue-500 text-4xl -mx-[1.5px]'>b</span>
                    <span className='text-yellow-500 text-4xl -mx-[1.5px]'>a</span>
                    <span className='text-green-500 text-4xl -mx-[1.5px]'>y</span>
                </Link>

                {/* Right side buttons */}
                <div className='flex items-center gap-4'>
                    {/* Cart Button */}
                    <Link to="/cart" className="relative">
                        <FiShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-1 bg-red-600 rounded-full text-white text-xs h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <FiX size={24} /> // Close icon when menu is open
                        ) : (
                            <FiMenu size={24} /> // Hamburger icon when menu is closed
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full right-0 h-fit w-[1/2] bg-white shadow-lg z-50">
                        <div className="flex flex-col divide-y divide-gray-200">
                            {user ? (
                                <>
                                    <div className="px-5 font-medium">
                                        Hi, {user?.username || user?.email?.split('@')[0]}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="px-5 py-3 text-left text-red-600 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="px-5 py-3 hover:bg-gray-100"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="px-5 py-3 hover:bg-gray-100"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                            <Link
                                to="/wishlist"
                                className="px-5 py-3 hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Watchlist
                            </Link>
                            {user && (
                                <>
                                    <Link
                                        to="/account"
                                        className="px-5 py-3 hover:bg-gray-100"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        My Account
                                    </Link>
                                    <Link
                                        to="/purchases"
                                        className="px-5 py-3 hover:bg-gray-100"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        My Purchases
                                    </Link>
                                </>
                            )}
                            <Link
                                to="/help"
                                className="px-5 py-3 hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Help & Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar