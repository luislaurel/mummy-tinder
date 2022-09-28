import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'
import { BrowserRouter, useNavigate } from 'react-router-dom'

describe("<CatNew/>", ()=>{
    test("renders a heading on the CatNew page for the user", () =>{
        render(
        <BrowserRouter>
        <CatNew/>
        </BrowserRouter>)
        const element = screen.getByText(/Add a Mummy/i)
        expect(element).toBeInTheDocument()
    })
})