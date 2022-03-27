import axios from "axios";
import { useEffect } from "react";
import{BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Travelplan from "./pages/Travelplan";




function App() {

  return (
   <>
    <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/travelplan' component={Travelplan}/>
    </Router>
   </>
  );
}

export default App;
