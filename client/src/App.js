import {Container} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"))

  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/posts" replace={true} />} />  
          <Route path="/posts" exact element={<Home/>} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts" replace={true}  /> }/>  
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
