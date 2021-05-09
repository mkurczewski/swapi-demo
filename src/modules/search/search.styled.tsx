import styled from "styled-components"

export const SearchButton = styled.button.attrs((props) => ({
  ...props,
  type: "submit",
}))`
  border-radius: 0 0.2rem 0.2rem 0;
  border-left-width: 0 !important;
  cursor: pointer;
  background: #8f62f5;
  color: white;
  transition: background 0.3s ease-in-out;
  outline: none;

  &:hover,
  &:focus {
    background: #7c46f3;
  }
`

export const SearchInput = styled.input.attrs((props) => ({
  ...props,
  type: "text",
}))`
  flex: 1;
  padding: 0.7rem;
  border-radius: 0.2rem 0 0 0.2rem;
  outline: none;

  &:focus,
  &:focus-visible {
    border-color: #7c46f3;
  }
`

export const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${SearchInput}, ${SearchButton} {
    font-size: 1.4rem;
    border: solid 0.1rem #8f62f5;
  }
`
