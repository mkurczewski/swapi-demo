import React, { FunctionComponent } from "react"
import {
  MovieItem,
  MovieOpeningCrawl,
  MovieReleaseDate,
  MoviesWrapper,
  MovieTitle,
} from "./movies.styled"
import { useSelector } from "react-redux"
import { AppState } from "../../../../store"
import { MoviesState } from "../../store/movies"
import { Character } from "../../../../utils/swapi/swapi.types"
import { Loader } from "../../../loader/loader.component"

export const Movies: FunctionComponent = () => {
  const movies = useSelector<AppState, MoviesState>((state) => state.movies)
  const selectedCharacter = useSelector<AppState, Character | undefined>(
    (state) => state.characters.selected
  )

  return (
    <MoviesWrapper>
      {movies.loading ? (
        <Loader />
      ) : (
        movies.items
          .filter((movie) => selectedCharacter?.films.includes(movie.url))
          .sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          )
          .map((movie) => (
            <MovieItem key={movie.url}>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieReleaseDate dateTime={movie.release_date}>
                {new Date(movie.release_date).toLocaleDateString()}
              </MovieReleaseDate>
              <MovieOpeningCrawl>
                {movie.opening_crawl.substr(0, 130).trim()}...
              </MovieOpeningCrawl>
            </MovieItem>
          ))
      )}
    </MoviesWrapper>
  )
}
