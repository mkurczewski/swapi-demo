import styled from "styled-components"

export const MovieTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`

export const MovieReleaseDate = styled.time`
  font-style: italic;
`

export const MovieOpeningCrawl = styled.p`
  font-size: 1.4rem;
  margin: 1rem 0 0 0;
`

export const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: solid 0.2rem whitesmoke;
  padding: 1rem 0;
`

export const MoviesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`
