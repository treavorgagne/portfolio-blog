import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Education from "./pages/Education";
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
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Routes>
        <Route path="/education" element={<Education />} />
      </Routes>
      <Routes>
        <Route path="/addBlog" element={<AddBlog />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
