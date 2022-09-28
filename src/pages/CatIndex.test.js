import { screen, render } from "@testing-library/react"
import CatIndex from "./CatIndex"
import mockCats from '../mockCats'
import { BrowserRouter } from 'react-router-dom'

describe("<CatIndex/>", () => {
  test("renders a card for each mummy that is passed down to component", () => {
    render(
      <BrowserRouter>
       <CatIndex cats={mockCats}/>
      </BrowserRouter>
    ) 
    mockCats.forEach(cat => {
      const element = screen.getByText(cat.name)
      expect(element).toBeInTheDocument()
    })
  })
})