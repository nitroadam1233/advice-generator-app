import { ThemeProvider, createTheme } from "@mui/material";
import ParentContainer from "./components/ParentContainer/ParentContainer";
import "./App.css"

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <ParentContainer />
    </ThemeProvider>
  );
}

export default App;
