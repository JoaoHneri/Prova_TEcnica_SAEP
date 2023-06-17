import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import Modal from "./Modal/Modal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/alocacao/:id" Component={Modal}/>
      </Routes>
    </Router>
  );
}

export default App;