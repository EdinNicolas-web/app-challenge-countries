import React from "react"
import {render} from "@testing-library/dom"
import "@testing-library/jest-dom/extend-expect"

// component
import CardCountry from "./CardCountry"

test("<CardCountry /> Charge correctly Card", () => {
  render(<CardCountry />)
  expect(screen.getByText("Albania")).toBeInTheDocument()
})