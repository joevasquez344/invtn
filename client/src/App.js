import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Accessories from "./pages/Accessories.js";
import MShoes from "./pages/MShoes.js";
import MSweatshirts from "./pages/MSweatshirts.js";
import MTshirts from "./pages/MTshirts.js"
import MClothing from "./pages/MClothing.js"
import WShoes from "./pages/WShoes.js";
import WSweatshirts from "./pages/WSweatshirts.js";
import WTshirts from "./pages/WTshirts.js"
import WClothing from "./pages/WClothing.js"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Accessories" component={Accessories} />
          <Route exact path="/MShoes" component={MShoes} />
          <Route exact path="/MSweatshirts" component={MSweatshirts} />
          <Route exact path="/MTshirts" component={MTshirts} />
          <Route exact path="/MClothing" component={MClothing} />
          <Route exact path="/WShoes" component={WShoes} />
          <Route exact path="/WSweatshirts" component={WSweatshirts} />
          <Route exact path="/WTshirts" component={WTshirts} />
          <Route exact path="/WClothing" component={WClothing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
