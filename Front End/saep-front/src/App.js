import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import Modal from "./Modal/Modal";
import ModalConce from "./ModalConce/ModalConce";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/alocacao/:id" Component={Modal}/>
        <Route path="/concessionaria/:modelo/:id/:area" Component={ModalConce}/>
      </Routes>
    </Router>
  );
}

export default App;