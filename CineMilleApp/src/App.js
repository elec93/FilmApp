import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import MovieDetail from "./MovieDetail";
import ReactSwitch from "react-switch";
import logo from "./images/logo.png";
import "./Style.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <div className="header">
            <div className="title-cinemille">
              <nav>
                <img className="logo" src={logo} alt="Logo"></img>
                <h1>Movie Schedule</h1>
                <div className="switch">
                  <ReactSwitch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    onColor="#ffba00"
                    offColor="#800000"
                    borderColor="white"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={50}
                  />
                </div>
              </nav>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
