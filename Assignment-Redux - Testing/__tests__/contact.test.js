import Contact from "../src/Contact"
import {screen,render} from "@testing-library/react"
import "@testing-library/jest-dom"

test("it should load contact us page ",()=>{


    render(<Contact/>)
    const button =screen.getByRole("button")

    expect(button).toBeInTheDocument();

})