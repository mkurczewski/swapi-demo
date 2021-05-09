import React, { FunctionComponent, useEffect } from "react"
import { Search } from "./modules/search/search.component"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./store"
import { fetchAllMovies, MoviesState } from "./modules/search/store/movies"
import { searchCharacters } from "./modules/search/store/characters"
import { Movies } from "./modules/search/components/movies/movies.component"
import { SearchResults } from "./modules/search/components/search-results/search-results.component"
import { fetchAllPlanets, PlanetsState } from "./modules/search/store/planets"

const App: FunctionComponent = () => {
  const dispatch = useDispatch()
  const selectedCharacter = useSelector<AppState>(
    (state) => state.characters.selected
  )
  const planets = useSelector<AppState, PlanetsState>((state) => state.planets)
  const movies = useSelector<AppState, MoviesState>((state) => state.movies)

  const onSearch = (searchPhrase: string) => {
    dispatch(searchCharacters(searchPhrase))
    if (planets.items.length === 0 && !planets.loading) {
      dispatch(fetchAllPlanets())
    }
  }

  useEffect(() => {
    if (selectedCharacter && movies.items.length === 0 && !movies.loading) {
      dispatch(fetchAllMovies())
    }
  }, [selectedCharacter, dispatch, movies])

  return (
    <main>
      <Search onSearch={onSearch} />
      <SearchResults />
      <Movies />
    </main>
  )
}

export default App
