import {Container} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth"

function App() {

  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>  
          <Route path="/auth" exact element={<Auth />}/>  
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
