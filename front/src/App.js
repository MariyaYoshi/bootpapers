import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
//import Journal from "./components/journal";
import JournalsMesInNs from "./components/journalsMesInNs";
import JournalsMesInS from "./components/journalsMesInS";
import JournalsMesOutS from "./components/journalsMesOutS";
import JournalsMesOutNs from "./components/journalsMesOutNs";
//import NavBar from "./components/navBar";
import NavBarDrop from "./components/navBarDrop";
import NotFound from "./components/notFound";
//import Classifiers from "./components/classifiers";
import ClassifiersDest from "./components/classifiersDest";
import ClassifiersPersonType from "./components/classifiersPersonType";
import ClassifiersTdrc from "./components/classifiersTdrc";
import ClassifiersLists from "./components/classifiersLists";
import "./styles/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle as faCheckRegCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCheckCircle,
  faCheck,
  faTimesCircle,
  faCoffee,
  faSortUp,
  faSync,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSortDown,
  faSortUp,
  faTimesCircle,
  faCheck,
  faCheckRegCircle,
  faSync
);

function App() {
  return (
    <React.Fragment>
      <NavBarDrop />
      <main className="container-fluid">
        <Switch>
          {/* <Route path="/papers/:id" component={PaperForm} /> */}
          <Route path="/classifiers/dest" component={ClassifiersDest} />
          <Route
            path="/classifiers/persontype"
            component={ClassifiersPersonType}
          />
          <Route path="/classifiers/tdrc" component={ClassifiersTdrc} />
          <Route path="/classifiers/lists" component={ClassifiersLists} />
          <Route path="/journals/mes-out-s" component={JournalsMesOutS} />
          <Route path="/journals/mes-in-s" component={JournalsMesInS} />
          <Route path="/journals/mes-out-ns" component={JournalsMesOutNs} />
          <Route path="/journals/mes-in-ns" component={JournalsMesInNs} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/classifiers/dest" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}
export default App;
