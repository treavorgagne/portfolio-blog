import {
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import ResponsiveAppBar from './components/Nav.js'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
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
    </ThemeProvider>
  );
}

export default App;
