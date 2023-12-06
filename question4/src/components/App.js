// Imported fonts for Material UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";

//components that make up the application
import Landing from "./Landing.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Navbar from "./Navbar.jsx";
import Rater from "./Rater.jsx";

//allows for routing from page to page
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [totalRatings, setTotalRatings] = React.useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          setTotalRatings={setTotalRatings}
        />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signUp"
            element={
              !isLogged && (
                <SignUp
                  setIsLogged={setIsLogged}
                  totalRatings={totalRatings}
                  setTotalRatings={setTotalRatings}
                />
              )
            }
          />
          <Route
            path="/Rate"
            element={
              isLogged && (
                <Rater
                  setTotalRatings={setTotalRatings}
                  totalRatings={totalRatings}
                />
              )
            }
          />
          <Route
            path="/signIn"
            element={
              !isLogged && (
                <SignIn
                  setIsLogged={setIsLogged}
                  totalRatings={totalRatings}
                  setTotalRatings={setTotalRatings}
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
