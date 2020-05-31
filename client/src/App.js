import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import LandingPage from "./pages/Landing";

import "./App.css";

/*

class App extends Component {  
  constructor(props) {    
    super(props);    
    this.state = {}    
    this.connecToServer = this.connecToServer.bind(this);  
  }
  connecToServer() {    
    fetch('/');  
  }
  componentDidMount() {    
    this.connecToServer();  
  }
  render() {    
    return (      
      <Router>      
        <div className="container">         
          <Navbar />         
          <Route exact path="/" component={Home} />         
          <Route exact path="/social" component={Social} />         
          <Footer />      
        </div>      
      </Router>    
      );  
    }}



*/

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={LandingPage} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
