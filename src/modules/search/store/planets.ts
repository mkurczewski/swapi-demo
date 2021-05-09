import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit"
import { Planet } from "../../../utils/swapi/swapi.types"
import swApi from "../../../utils/swapi/swapi"

export interface PlanetsState {
  items: Planet[]
  loading: boolean
  error: SerializedError | null
}

export const initialState: PlanetsState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchAllPlanets = createAsyncThunk(
  "planets/fetchAll",
  async () => {
    return swApi.getPlanets()
  }
)

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllPlanets.fulfilled,
      (state, { payload }: PayloadAction<Planet[]>) => {
        state.items = payload
        state.loading = false
      }
    )
    builder.addCase(fetchAllPlanets.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllPlanets.rejected, (state, { error }) => {
      state.error = error
      state.loading = false
    })
  },
})
