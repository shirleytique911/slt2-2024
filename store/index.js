import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import shopReducer from "../features/shop/shopSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        shop: shopReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)