import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import firebase from "firebase";
import { useEffect } from "react";
import "./App.css";
import { firebaseConfig } from "./firebase";
import Main from "./pages/Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FFB962",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#ff5969",
    },
  },
});

function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
