import {Component } from "react"
import UserContext from "../utils/UserContext";

// export default About=()=>{
//     return (
//         <div>About page</div>
//     )
// }

class About extends Component {
    render() {
      return (
      <div>

      <UserContext.Consumer>
      {({loggedInUser})=>{return <h1>{loggedInUser +" we are in about us"}</h1>}}
      </UserContext.Consumer>
      
   
        </div>
      )
    }
  }
  export default About