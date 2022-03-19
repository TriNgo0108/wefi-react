import LoginPage from "features/login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "features/home/HomePage";
import FigurePage from "features/figure/FigurePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/figure" element={<FigurePage/>}/>
          <Route path="/anime" element={<></>}/>
          <Route path="/manga" element={<></>}/>
          <Route path="/game" element={<></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
