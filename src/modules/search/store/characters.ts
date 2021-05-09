import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit"
import { Character } from "../../../utils/swapi/swapi.types"
import swApi from "../../../utils/swapi/swapi"

export interface CharactersState {
  items: Character[]
  loading: boolean
  error: SerializedError | null
  selected?: Character
}

export const initialState: CharactersState = {
  items: [],
  loading: false,
  error: null,
}

export const searchCharacters = createAsyncThunk(
  "characters/search",
  async (searchPhrase: string) => {
    return swApi.searchCharacters(searchPhrase)
  }
)

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    select: (state, { payload }: PayloadAction<Character>) => {
      state.selected = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      searchCharacters.fulfilled,
      (state, { payload }: PayloadAction<Character[]>) => {
        state.items = payload
        state.loading = false
      }
    )
    builder.addCase(searchCharacters.pending, (state) => {
      state.loading = true
    })
    builder.addCase(searchCharacters.rejected, (state, { error }) => {
      state.error = error
      state.loading = false
    })
  },
})
