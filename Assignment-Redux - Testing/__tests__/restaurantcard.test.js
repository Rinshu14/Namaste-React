import {screen,render} from "@testing-library/react"
import "@testing-library/jest-dom"
import ResCard from "../src/ResCard"
import ResCardMockData from "../utils/MockResCardData"
import { BrowserRouter } from "react-router-dom"
      
test("it should load rescard ",()=>{
    
     render(
        <BrowserRouter>
     <ResCard restaurant={ResCardMockData}/>
        </BrowserRouter>
     )


     let resName= screen.getByText("Burger King")
     
     expect(resName).toBeInTheDocument();

})