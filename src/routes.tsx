import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const Routes: React.FC = () => {

  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
