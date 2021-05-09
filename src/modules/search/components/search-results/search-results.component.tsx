import React, { FunctionComponent } from "react"
import {
  ResultsItem,
  ResultsItemCharacterName,
  ResultsItemPlanetName,
  ResultsItemPlanetPopulation,
  ResultsWrapper,
} from "./search-results.styled"
import { useDispatch, useSelector } from "react-redux"
import { charactersSlice, CharactersState } from "../../store/characters"
import { AppState } from "../../../../store"
import { PlanetsState } from "../../store/planets"
import { Loader } from "../../../loader/loader.component"

export const SearchResults: FunctionComponent = () => {
  const dispatch = useDispatch()
  const characters = useSelector<AppState, CharactersState>(
    (state) => state.characters
  )
  const planets = useSelector<AppState, PlanetsState>((state) => state.planets)

  const loading = characters.loading || planets.loading

  return (
    <ResultsWrapper>
      {loading ? (
        <Loader />
      ) : (
        characters.items.map((character) => {
          const planet = planets.items.find(
            (planet) => planet.url === character.homeworld
          )
          const onClick = () => {
            dispatch(charactersSlice.actions.select(character))
          }
          return (
            <ResultsItem
              key={character.url}
              active={character === characters.selected}
              onClick={onClick}
            >
              <ResultsItemCharacterName>
                {character.name}
              </ResultsItemCharacterName>
              <ResultsItemPlanetName>{planet?.name}</ResultsItemPlanetName>
              {planet?.population && planet?.population !== "unknown" && (
                <>
                  <ResultsItemPlanetPopulation>
                    (population:{" "}
                    {new Intl.NumberFormat().format(
                      parseInt(planet?.population)
                    )}
                    )
                  </ResultsItemPlanetPopulation>
                </>
              )}
            </ResultsItem>
          )
        })
      )}
    </ResultsWrapper>
  )
}
