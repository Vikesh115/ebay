import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/slice/CartSlice';
import { removeFromWishlist } from '../../redux/slice/WishlistSlice';
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Wishlist() {
    const dispatch = useDispatch()

    const { wishlist } = useSelector(state => state.wishlist)

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemove = (productId) => {
        dispatch(removeFromWishlist(productId));
    };

    return (
        <div>
            <div className='flex flex-col px-6 py-6 text-xl w-[100%]'>
                <div className='flex font-bold'>Wishlist</div>
            </div>
            <div className='flex w-[100%] flex-col mb-20 md:mb-0'>
            {wishlist.map((item) => {
                return (
                    <>
                        <div key={item.id} className='flex border-4 rounded-3xl md:w-1/2 h-60 mx-2 my-4 p-2 gap-4 items-center'>
                            <img src={item.images} alt={item.title} className='flex h-[100px] md:h-[200px] w-[30%] bg-black ml-8' />
                            <div className='flex flex-col w-[100%] p-2'>
                                <div className='flex text-xs md:text-base w-[100%] mt-4'>{item.title}</div>
                                <div className='flex font-bold items-center'><MdOutlineCurrencyRupee />{item.price}</div>
                                <p className='flex font-medium items-center'>Quantity: {item.quantity}</p>
                                <p className='flex md:font-bold items-center'>Total: <MdOutlineCurrencyRupee />{(item.price * item.quantity).toFixed(2)}</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <button onClick={() => handleAddToCart(item)} className=' cursor-pointer rounded-2xl h-[60px] w-[60%] md:h-[40px] md:w-[60%] m-4 bg-teal-600 text-black'>Add to Cart</button>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="cursor-pointer bg-cyan-600 text-white mb-1 md:px-4 md:py-2 rounded md:mt-2 h-[60px] w-[60%] md:h-[40px] md:w-[60%]"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            </div>
        </div>
    )
}

export default Wishlist