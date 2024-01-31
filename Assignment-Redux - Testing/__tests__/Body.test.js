import {screen,render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../src/Body"
import { BrowserRouter } from "react-router-dom"
import MockData from "../utils/MockData"
import {act} from "react-dom/test-utils"

global.fetch=jest.fn(()=>{

    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockData)
        }
    })
})

test("it should load the body component",async ()=>{
   await act(()=> render( 
    <BrowserRouter>
    <Body/>
    </BrowserRouter>))

    const resCards=screen.getAllByTestId("resCard")

    expect(resCards.length).toBe(20)
    const searchinput=screen.getByRole("textbox")
    fireEvent.change(searchinput,{target:{value:"Pizza"}})
    const resCardsAfrerSearch=screen.getAllByTestId("resCard")

    expect(resCardsAfrerSearch.length).toBe(2)


})