import styled, { css } from "styled-components"

export const ResultsItemCharacterName = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`

export const ResultsItemPlanetName = styled.p`
  font-size: 1.4rem;
  margin: 0 0 0 1rem;
  color: darkgrey;
`

export const ResultsItemPlanetPopulation = styled.span`
  margin-left: 0.5rem;
  color: darkgrey;
  font-size: 1.4rem;
  white-space: nowrap;
`

export const ResultsItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  padding: 1rem;
  margin: 0;

  ${({ active }) =>
    active
      ? css`
          background: paleturquoise;
        `
      : css`
          &:hover {
            background: whitesmoke;
          }
        `};
`

export const ResultsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  border-bottom: solid 0.2rem darkgrey;
`
