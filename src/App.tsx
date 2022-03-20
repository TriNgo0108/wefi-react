import LoginPage from "features/login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "features/home/HomePage";
import FigurePage from "features/figure/FigurePage";
import AnimePage from "features/anime/AnimePage";
import MangaPage from "features/manga/mangaPage";
import AccessoriesPage from "features/accessories/AccessoriesPAge";
import ProductDetail from "features/product-detail/Product-Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/figure" element={<FigurePage/>}/>
          <Route path="/anime" element={<AnimePage/>}/>
          <Route path="/manga" element={<MangaPage/>}/>
          <Route path="/accessories" element={<AccessoriesPage/>}/>
          <Route path="/product-detail/:id" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
