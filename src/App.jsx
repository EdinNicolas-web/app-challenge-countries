// theme
import { DarkTheme, LigthTheme } from "./theme/GlobalTheme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// hooks
import { useToggleTheme } from "./hooks/useToggleTheme";

function App() {
  const [theme, toggleTheme] = useToggleTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LigthTheme}>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route path="/detail/:name_country" element={<Detail theme={theme} toggleTheme={toggleTheme}/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
