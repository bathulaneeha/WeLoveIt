import { configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/User'
import userWish from './slices/Wishlist'
import userBuy from './slices/Buynow'
import userCart from './slices/Cart'
export const store=configureStore({
    reducer:{
        user:userReducer,
        buy:userBuy,
        wish:userWish,
        cart:userCart
    }
})