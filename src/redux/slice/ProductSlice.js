import { createSlice } from "@reduxjs/toolkit";
import { productsApi, productByIdApi, productsRelatedByIdApi } from "../actions/Action";

const initialState = {
    products: [],
    productById: {},
    productsRelatedById: [],
    loadings: {
        products: false,
        productById: false,
        relatedProducts: false
    },
    errors: {
        products: null,
        productById: null,
        relatedProducts: null
    }
}

const productSlice = createSlice({
    name: 'ebayProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsApi.pending, (state)=>{
                state.loadings.products = true;
                state.errors.products = null;
            })
            .addCase(productsApi.fulfilled, (state, action)=>{
                state.loadings.products = false;
                state.products = action.payload;
            })
            .addCase(productsApi.rejected, (state,action)=>{
                state.loadings.products = false;
                state.errors.products = action.payload;
            })
            .addCase(productByIdApi.pending, (state)=>{
                state.loadings.productById = true;
                state.errors.productById = null;
            })
            .addCase(productByIdApi.fulfilled, (state, action)=>{
                state.loadings.productById = false;
                state.productById = action.payload;
            })
            .addCase(productByIdApi.rejected, (state, action)=>{
                state.loadings.productById = false;
                state.errors.productById = action.payload;
            })
            .addCase(productsRelatedByIdApi.pending, (state)=>{
                state.loadings.relatedProducts = true;
                state.errors.relatedProducts = null;
            })
            .addCase(productsRelatedByIdApi.fulfilled, (state, action)=>{
                state.loadings.relatedProducts = false;
                state.productsRelatedById = action.payload;
            })
            .addCase(productsRelatedByIdApi.rejected, (state, action)=>{
                state.loadings.relatedProducts = false;
                state.errors.relatedProducts = action.payload
            })
    }
})

export default productSlice.reducer;