import { baseUrl } from "../firebase/database";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { objectToArray, objectToArrays } from "../utils/array";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery ({ baseUrl }),
    endpoints: builder => ({
        getProductsByCategory: builder.query({
            query: categorybook => `products.json?orderBy="categorybook"&equalTo="${categorybook}"`,
            transformResponse: response => objectToArray(response)
        }),
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getOrdersByUser: builder.query({
            query: user => `orders.json?orderBy="user"&equalTo="${user}"`,
            transformResponse: response => objectToArrays(response)
        }),
        postOrder: builder.mutation({
            query: order => ({
              url: 'orders.json',
              method: 'POST',
              body: order,
            }),
        }),
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`,
          }),
          postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
              url: `profileImages/${localId}.json`,
              method: 'PUT',
              body: { image },
            }),
          }),
          getUserLocation: builder.query({
            query: localId => `locations/${localId}.json`,
          }),
          postUserLocation: builder.mutation({
            query: ({ location, localId }) => ({
              url: `locations/${localId}.json`,
              method: 'PUT',
              body: { ...location },
            }),
        }),
        postWishList: builder.mutation({
          query: ({ list, localId, productId }) => ({
            url: `wishlist/${localId}/products/${productId}.json`,
            method: 'PUT',
            body: { ...list },
          }),
      }),
        getProductsByWishlist: builder.query({
          query: localId => `wishlist/${localId}/products.json`,
          transformResponse: response => objectToArray(response)
        }),
        deleteProductFromWishlist: builder.mutation({
          query: ({ localId, productId }) => ({
            url: `wishlist/${localId}/products/${productId}.json`,
            method: 'DELETE',
          }),
        }),
    })
})

export const 
{ 
    useGetProductsByCategoryQuery, 
    useGetCategoriesQuery, 
    usePostOrderMutation, 
    useGetOrdersByUserQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetUserLocationQuery,
    usePostUserLocationMutation,
    usePostWishListMutation, 
    useGetProductsByWishlistQuery,
    useDeleteProductFromWishlistMutation,
} = shopApi