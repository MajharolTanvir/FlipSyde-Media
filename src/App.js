import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SinglePost from "./Components/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/singlePost/:id" element={<SinglePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
