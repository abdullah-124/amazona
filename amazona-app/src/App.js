import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Componant/Footer"
import Header from "./Componant/Header"
import HomeScreens from './Componant/Screen/HomeScreens';
import ProductScreen from "./Componant/Screen/ProductScreen"

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
       <Header />
        <main>
        <Routes>
          <Route path="/" element={<HomeScreens />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
