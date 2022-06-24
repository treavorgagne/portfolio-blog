import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import ResponsiveAppBar from "./components/Nav.js";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#05284a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/AddBlog" element={<AddBlog />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
