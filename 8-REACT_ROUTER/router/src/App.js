// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Product from "./pages/Product.js";
import Info from "./pages/Info.js";
import NotFound from "./pages/NotFound.js";
import Search from "./pages/Search.js";

// components
import Navbar from "./components/Navbar.js";
import SearchForm from "./components/SearchForm.js";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />

        {/* 9 - Search  */}
        <SearchForm />
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="about" element={<About />} />
          
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />

          {/* 4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />} />

          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />

          {/* 10 - Redirect */}
          <Route path="/company" element={<Navigate to='/about' />}/>

          {/* 7 - No Match Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;