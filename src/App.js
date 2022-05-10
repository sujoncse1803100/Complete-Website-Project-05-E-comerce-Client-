import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pay from "./components/Pay/Pay";
import Success from "./components/Success/Success";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { useSelector } from "react-redux";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/register" /> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          ></Route>
          <Route exact path="/product/:id" element={<Product />}></Route>
          <Route
            exact
            path="/products/:category"
            element={<ProductList />}
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/success" element={<Success />}></Route>
          <Route exact path="/payment" element={<Pay />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
