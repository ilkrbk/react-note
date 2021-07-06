import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import {Home} from './pages/Home'
import {About} from './pages/About'
import { FirebaseState } from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
