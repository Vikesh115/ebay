// npx vitest cartSlice.test.js

import { describe, it, expect, beforeEach } from 'vitest';
import cartReducer, {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
} from './CartSlice';

// Mock localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    clear: vi.fn(),
};

beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
    });
});

describe('Cart Slice', () => {
    const mockProduct = {
        id: 1,
        name: 'Test Product',
        price: 10.99,
    };

    const mockProduct2 = {
        id: 2,
        name: 'Another Product',
        price: 15.99,
    };

    beforeEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    describe('initial state', () => {
        it('should return the initial state', () => {
            const initialState = {
                cart: [],
                cartCount: 0
            };
            const result = cartReducer(undefined, { type: undefined });
            expect(result).toEqual(initialState);
        });
    });

    describe('addToCart', () => {
        it('should add new product to empty cart', () => {
            const initialState = { cart: [], cartCount: 0 };
            const result = cartReducer(initialState, addToCart(mockProduct));

            expect(result.cart).toEqual([{ ...mockProduct, quantity: 1 }]);
            expect(result.cartCount).toBe(1);
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                'cart',
                JSON.stringify([{ ...mockProduct, quantity: 1 }])
            );
        });

        it('should increment quantity when adding existing product', () => {
            const initialState = {
                cart: [{ ...mockProduct, quantity: 1 }],
                cartCount: 1
            };
            const result = cartReducer(initialState, addToCart(mockProduct));

            expect(result.cart).toEqual([{ ...mockProduct, quantity: 2 }]);
            expect(result.cartCount).toBe(2);
        });

        it('should handle multiple different products', () => {
            const initialState = { cart: [], cartCount: 0 };
            let state = cartReducer(initialState, addToCart(mockProduct));
            state = cartReducer(state, addToCart(mockProduct2));

            expect(state.cart).toEqual([
                { ...mockProduct, quantity: 1 },
                { ...mockProduct2, quantity: 1 }
            ]);
            expect(state.cartCount).toBe(2);
        });
    });

    describe('removeFromCart', () => {
        it('should remove product from cart', () => {
            const initialState = {
                cart: [
                    { ...mockProduct, quantity: 1 },
                    { ...mockProduct2, quantity: 1 }
                ],
                cartCount: 2
            };
            const result = cartReducer(initialState, removeFromCart(mockProduct.id));

            expect(result.cart).toEqual([{ ...mockProduct2, quantity: 1 }]);
            expect(result.cartCount).toBe(1);
        });

        it('should do nothing when removing non-existent product', () => {
            const initialState = {
                cart: [{ ...mockProduct, quantity: 1 }],
                cartCount: 1
            };
            const result = cartReducer(initialState, removeFromCart(999));

            expect(result).toEqual(initialState);
        });
    });

    describe('incrementQuantity', () => {
        it('should increment product quantity', () => {
            const initialState = {
                cart: [{ ...mockProduct, quantity: 1 }],
                cartCount: 1
            };
            const result = cartReducer(initialState, incrementQuantity(mockProduct.id));

            expect(result.cart).toEqual([{ ...mockProduct, quantity: 2 }]);
            expect(result.cartCount).toBe(2);
        });
    });

    describe('decrementQuantity', () => {
        it('should decrement product quantity when quantity > 1', () => {
            const initialState = {
                cart: [{ ...mockProduct, quantity: 2 }],
                cartCount: 2
            };
            const result = cartReducer(initialState, decrementQuantity(mockProduct.id));

            expect(result.cart).toEqual([{ ...mockProduct, quantity: 1 }]);
            expect(result.cartCount).toBe(1);
        });

        it('should remove product when quantity is 1', () => {
            const initialState = {
                cart: [{ ...mockProduct, quantity: 1 }],
                cartCount: 1
            };
            const result = cartReducer(initialState, decrementQuantity(mockProduct.id));

            expect(result.cart).toEqual([]);
            expect(result.cartCount).toBe(0);
        });
    });
});
