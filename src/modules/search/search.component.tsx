import React, { FunctionComponent, useRef, FormEvent } from "react"
import { SearchButton, SearchInput, SearchWrapper } from "./search.styled"

interface Props {
  onSearch: (searchPhrase: string) => void
}

export const Search: FunctionComponent<Props> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    onSearch(inputRef.current?.value || "")
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onClick()
  }

  return (
    <SearchWrapper onSubmit={onSubmit}>
      <SearchInput placeholder="Search for character" ref={inputRef} />
      <SearchButton>Search</SearchButton>
    </SearchWrapper>
  )
}
