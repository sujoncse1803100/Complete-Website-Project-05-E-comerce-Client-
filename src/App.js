import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay/Pay";
import Success from "./components/Success/Success";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Cart />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/product" element={<Product />}></Route>
          <Route exact path="/productlist" element={<ProductList />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/success" element={<Success />}></Route>
          <Route exact path="/payment" element={<Pay />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
