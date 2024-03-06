
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"


import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import Navbar from "./scenes/navbar";



function App() {
  const mode = useSelector((state) => state.mode) // from state the we setting up
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = true


  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to="/" />}/>
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/" />}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
