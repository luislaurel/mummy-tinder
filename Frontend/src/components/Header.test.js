import { screen, render } from '@testing-library/react'
import Header from './Header'


describe("<Header/>", () =>{
    test("renders the home page and is viewable for the user", ()=>{
        render(<Header/>)
        const element = screen.getByText(/Mummy Tinder/i)
        expect(element).toBeInTheDocument()
    })
})
