import Body from "./Components/Body";
import {Provider} from "react-redux"
import appStrore from "./Redux/ReduxStore";


function App() {
  return (
    <div className="App">
      <Provider store={appStrore}>

     <Body/>
      </Provider>
    </div>
  );
}

export default App;
