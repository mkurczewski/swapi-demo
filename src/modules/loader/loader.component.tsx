import React, { FunctionComponent } from "react"
import { LoaderWrapper } from "./loader.styled"
import loaderSvg from "./assets/loader.svg"

export const Loader: FunctionComponent = () => {
  return (
    <LoaderWrapper>
      <img src={loaderSvg} alt="" />
    </LoaderWrapper>
  )
}
