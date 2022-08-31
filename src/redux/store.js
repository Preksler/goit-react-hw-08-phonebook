// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { contactsApi } from './mokeApi';
// import { createSlice } from "@reduxjs/toolkit";

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: {
//         filter: '',
//     },
//     reducers: {
//         filterContacts: (state, action) => {
//             state.filter = action.payload;
//         }
//     }
// })

// export const { filterContacts } = filterSlice.actions;

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterSlice.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

// setupListeners(store.dispatch);






import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authSlice from './Auth/auth-slice'
// import { contactsReducer } from "./contactsSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
        // contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
