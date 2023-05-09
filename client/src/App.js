import './App.css';

import Home from "./componentesP/Home/Home";
import Landing from "./componentesP/Landing/Landing";
import Detail from "./componentesP/Detail/Detail";
import Form from "./componentesP/Form/Form";
import { Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <Landing/>
      </Route> 

      <Route path="/home">     
        <Home/>
      </Route> 

      <Route exact path="/detail">
        <Detail/>
      </Route> 

      <Route path="/form">     
        <Form/>
      </Route> 
    </div>
  );
}

export default App;
