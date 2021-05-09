import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { moviesSlice } from "./modules/search/store/movies"
import { charactersSlice } from "./modules/search/store/characters"
import { planetsSlice } from "./modules/search/store/planets"

export const store = configureStore({
  reducer: {
    [moviesSlice.name]: moviesSlice.reducer,
    [planetsSlice.name]: planetsSlice.reducer,
    [charactersSlice.name]: charactersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type AppStore = typeof store

export type AppState = ReturnType<AppStore["getState"]>
