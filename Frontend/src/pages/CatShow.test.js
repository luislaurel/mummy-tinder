import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CatShow from './CatShow'
import mockCats from "../mockCats";

const renderComponent = () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path='catshow/:id' element={<CatShow cats={mockCats} />}/>
        </Routes>
      </MemoryRouter>
    )
  } 
  describe('CatShow', () => { 
    test("render a card with a mummy enjoys", ()=>{
      renderComponent()
      expect(screen.getByText(mockCats[0].enjoys)).toBeInTheDocument()
    })
 })