import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsApi = createAsyncThunk(
    'productsApi',
    async () => {
        try {
            const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
            return data;
        } catch (error) {
            return error.message;
        }
    }
);

export const productByIdApi = createAsyncThunk(
    'productByIdApi',
    async (id) => {
        try {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            return data;
        } catch (error) {
            return error.message;
        }
    }
);

export const productsRelatedByIdApi = createAsyncThunk(
    'productsRelatedByIdApi',
    async (id) => {
        try {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}/related`);
            return data;
        } catch (error) {
            return error.message;
        }
    }
);

export const categoriesApi = createAsyncThunk(
    'categoriesApi',
    async () => {
        try {
            const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories');
            return data;
        } catch (error) {
            return error.message
        }
    }
)

export const categoriesByIdApi = createAsyncThunk(
    'categoryByIdApi',
    async (id) => {
        try {
            const {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`)
            return data;
        } catch (error) {
            return error.message
        }
    }
)