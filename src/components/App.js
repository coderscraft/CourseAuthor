import React from "react";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import AuthorPage from './AuthorPage'
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={CoursesPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/authors" component={AuthorPage} />
      </Switch>
    </div>
  );
}

export default App;
