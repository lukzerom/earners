import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "date-fns";
import firebase from "firebase";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { firebaseConfig } from "./firebase";
import Main from "./pages/Main";
import MainPage from "./pages/MainPage";
import Mentoring from "./pages/Mentoring";
import Report from "./pages/Report";
import Rise from "./pages/rise/Rise";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB962",
    },
    secondary: {
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
        <Router>
          <Switch>
            <Route exact path="/report" component={Report} />
            <Route exact path="/rise" component={Rise} />
            <Route exact path="/arguments" component={Main} />
            <Route exact path="/mentoring" component={Mentoring} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
