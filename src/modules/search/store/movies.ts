import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit"
import { Movie } from "../../../utils/swapi/swapi.types"
import swApi from "../../../utils/swapi/swapi"

export interface MoviesState {
  items: Movie[]
  loading: boolean
  error: SerializedError | null
}

export const initialState: MoviesState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchAllMovies = createAsyncThunk("movies/fetchAll", async () => {
  return swApi.getMovies()
})

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllMovies.fulfilled,
      (state, { payload }: PayloadAction<Movie[]>) => {
        state.items = payload
        state.loading = false
      }
    )
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllMovies.rejected, (state, { error }) => {
      state.error = error
      state.loading = false
    })
  },
})
