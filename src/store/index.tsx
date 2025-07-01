import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./slices/themeSlice";
import localSliceReducer from "./slices/localSlice";
import systemSliceReducer from "./slices/systemSlice";
import { version } from "os";


// Combine all reducers
const rootReducer: any = combineReducers({
    theme: themeReducer,
    locale: localSliceReducer,
    systemConfig: systemSliceReducer,
});

// Persist configuration with encryption
const persistConfig = {
    key: "root",
    version:3,
    storage,
    whitelist: ["theme","locale","systemConfig"], // List of reducers to persist
    transforms: [
        encryptTransform({
            secretKey:  "my-super-secret-key",
            onError: (error) => {
                console.error("Encryption error:", error);
            },
        }),
    ],
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

// Export store and types
export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
