import React from 'react'
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/slice/CartSlice';
import { addToWishlist } from '../../redux/slice/WishlistSlice';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function Cart() {
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const Shipping = 20.02;
    const Handling = 10.00;
    const Tax = 30.28;
    const Total = totalPrice + Shipping + Handling + Tax;

    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item))
    }

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleIncrement = (item) => {
        dispatch(incrementQuantity(item.id));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(decrementQuantity(item.id));
        }
    };

    return (
        <div>
            <div className='flex flex-col justify-start px-5 border-b-1 border-gray-200 py-6 text-xl w-full '>
                <h1 className='font-bold'>Shopping Cart</h1>
            </div>

            {cart.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-20'>
                    <h2 className='text-2xl font-bold mb-4'>Your cart is empty</h2>
                    <Link to="/" className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='flex flex-col md:w-[60%] p-4'>
                        {cart.map((item) => (
                            <div key={item.id} className='flex border rounded-xl w-full mb-4 p-4 items-center'>
                                <img 
                                    src={item?.images} 
                                    alt={item.title} 
                                    className='w-24 h-24 object-contain mr-4' 
                                />
                                <div className='flex flex-col flex-grow'>
                                    <h3 className='font-medium'>{item.title}</h3>
                                    <p className='font-bold'>${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p className='font-bold'>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => handleDecrement(item)}
                                            className="h-8 w-8 border rounded-lg flex items-center justify-center"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <p className="mx-4">{item.quantity}</p>
                                        <button
                                            onClick={() => handleIncrement(item)}
                                            className="h-8 w-8 border rounded-lg flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className='flex mt-4 space-x-2'>
                                        <button 
                                            onClick={() => handleAddToWishlist(item)} 
                                            className='underline px-4 py-1'
                                        >
                                            Save for later
                                        </button>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className=" underline px-4 py-1 "
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='md:w-[40%] p-4'>
                        <div className='border rounded-lg p-6 sticky top-24'>
                            <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <span>Subtotal:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Shipping:</span>
                                    <span>${Shipping.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Handling:</span>
                                    <span>${Handling.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Tax:</span>
                                    <span>${Tax.toFixed(2)}</span>
                                </div>
                                <div className='border-t pt-4 mt-4 flex justify-between font-bold text-lg'>
                                    <span>Total:</span>
                                    <span>${Total.toFixed(2)}</span>
                                </div>
                            </div>
                            <Link to={'/'} className='flex justify-center items-center w-full bg-blue-600 text-white rounded-xl hover:bg-blue-700'>
                            <p className='flex my-2'> Go to Checkout </p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart