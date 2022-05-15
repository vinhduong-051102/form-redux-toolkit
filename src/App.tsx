import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormRegister from "./components/FormRegister/FormRegister";
import Home from "./components/Home";
import Nav from "./components/Nav";


function App() {
  return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/register" element={ <FormRegister /> } />
        </Routes>

      </div>
  );
}

export default App;
