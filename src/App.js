import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Disney from "./components/Disney";
import Pixar from "./components/Pixar";
import Marvel from "./components/Marvel";
import StarWars from "./components/StarWars";
import NationalGeographic from "./components/NationalGeographic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Header offset={offset} fadeable={false} />
            <Login />
          </Route>
          <Route exact path="/detail">
            <Header offset={offset} fadeable={true} />
            <Detail />
          </Route>
          <Route exact path="/disney">
            <Header offset={offset} fadeable={true} />
            <Disney offset={offset} fadeable={true} />
          </Route>
          <Route exact path="/pixar">
            <Header offset={offset} fadeable={true} />
            <Pixar offset={offset} fadeable={true} />
          </Route>
          <Route exact path="/marvel">
            <Header offset={offset} fadeable={true} />
            <Marvel offset={offset} fadeable={true} />
          </Route>
          <Route exact path="/starwars">
            <Header offset={offset} fadeable={true} />
            <StarWars offset={offset} fadeable={true} />
          </Route>
          <Route exact path="/nationalgeographic">
            <Header offset={offset} fadeable={true} />
            <NationalGeographic offset={offset} fadeable={true} />
          </Route>
          <Route exact path="/">
            <Header offset={offset} fadeable={false} />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
