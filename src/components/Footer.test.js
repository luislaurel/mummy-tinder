import { screen, render } from '@testing-library/react'
import Footer from './Footer'

describe("<Footer/>", () =>{
    test("renders the footer and is viewable for the user", ()=>{
        render(<Footer/>)
        const element = screen.getByText(/Created by Luis Laurel & Clifford Roecker © 2022/i)
        expect(element).toBeInTheDocument()
    })
})