import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import configReducer from "./configSlice";
import orderReducer from "./orderSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistStore, persistReducer } from "redux-persist";

// Create a custom storage object that falls back to a noop storage when localStorage is not available
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(value: unknown) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

// persite store
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
  config: configReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "config"], // Only persist these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof store.getState>;
