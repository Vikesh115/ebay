import { createSlice } from "@reduxjs/toolkit";
import { productsApi, productByIdApi, productsRelatedByIdApi, categoriesApi, categoriesByIdApi } from "../actions/Action";

const initialState = {
    products: [],
    productById: {},
    productsRelatedById: [],
    categories: [],
    categoriesById: {},
    loadings: {
        products: false,
        productById: false,
        relatedProducts: false,
        categoriesloading: false,
        categoriesByIdLoading: false
    },
    errors: {
        products: null,
        productById: null,
        relatedProducts: null,
        categorieserror: null,
        categoriesByIdError: null
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
                state.errors.relatedProducts = action.payload;
            })
            .addCase(categoriesApi.pending, (state)=>{
                state.loadings.categoriesloading = true;
                state.errors.categorieserror = null;
            })
            .addCase(categoriesApi.fulfilled, (state, action)=>{
                state.loadings.categoriesloading = false;
                state.categories = action.payload;
            })
            .addCase(categoriesApi.rejected, (state, action)=>{
                state.loadings.categoriesloading = false;
                state.errors.categorieserror = action.payload;
            })
            .addCase(categoriesByIdApi.pending, (state)=>{
                state.loadings.categoriesByIdLoading = true;
                state.errors.categoriesByIdError = null;
            })
            .addCase(categoriesByIdApi.fulfilled, (state, action)=>{
                state.loadings.categoriesByIdLoading = false;
                state.categoriesById = action.payload;
            })
            .addCase(categoriesByIdApi.rejected, (state, action)=>{
                state.loadings.categoriesByIdLoading = false;
                state.errors.categoriesByIdError = action.payload;
            })
    }
})

export default productSlice.reducer;