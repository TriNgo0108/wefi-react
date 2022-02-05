import LoginPage from "features/login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "features/home/HomePage";
import AnimePage from "features/anime/AnimePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/anime" element={<AnimePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
