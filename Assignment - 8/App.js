import React from "react";
import ReactDom from "react-dom/client";

class IsEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = { IsEmployee: props.IsEmployee };
    console.log("IsEmployee constructor called")
  }

componentDidMount(){
  console.log("IsEmployee componentDidMount called")
}

  render() {
    console.log("IsEmployee render called")
    return (
      <>
        <p>{this.state.IsEmployee}</p>
      </>
    );
  }
}
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName,
      IsEmployee: props.IsEmployee,
      userDetails: {},
    };
    console.log("User constructor called")
  }

  async componentDidMount() {
    console.log("User componentDidMount called")
    let api_rspn = await fetch("https://api.github.com/users/akshaymarch7");
    let data = await api_rspn.json();
    // console.log(data);
    this.setState({ userDetails: data });

    this.setTimeout(() => {
      console.log("set timeout function called")
      
    }, 1000);
  }

  componentWillUnmount()
  {
    this.clearInterval();
    console.log("setTimeout deregister")
  }

  render() {
    console.log("User render called")
    const { name, avatar_url, email, company, bio, twitter_username } =
      this.state.userDetails;

    return (
      <>
        <IsEmployee IsEmployee={true} />
        <h1>{this.state.userName}</h1>
        <div
          className="user_card"
          style={{
            height: "15rem",
            width: "15rem",
            backgroundColor: "gray",
            borderRadius: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <img src={avatar_url} style={{ height: "6rem", width: "6rem" }} />
          <h3 style={{ padding: "0.5px", margin: "0.5px" }}>{name}</h3>
          <h4 style={{ padding: "0.5px", margin: "0.5px" }}>{bio}</h4>
          <p style={{ padding: "0.5px", margin: "0.5px" }}>{company}</p>
          <p style={{ padding: "0.5px", margin: "0.5px" }}>
            {twitter_username}
          </p>
          {/* <p></p> */}
        </div>
      </>
    );
  }
}

const OuterComponent=()=>{
  const[isUser,setIsUser]=useState(true)

  return <div>
      <button onClick={()=>{
          (isUser)?setIsUser(false):setIsUser(true);
          console.log("btn click called")
      }}>toggele</button>
      {(isUser)?<User/>:<></>}
  </div>
}

let root = ReactDom.createRoot(document.querySelector(".root"));
//root.render(<User userName={"Rinshu"} IsEmployee={true} />);
root.render(<OuterComponent />);
