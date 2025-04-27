import { useDispatch, useSelector } from "react-redux"
import { productsApi, categoriesApi } from "./redux/actions/Action";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/footer";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const {categories, products} = useSelector((state)=>state.product);
  console.log(categories);
  console.log(products);

  useEffect(() => {
    dispatch(productsApi())
  }, [dispatch])

  useEffect(()=>{
    dispatch(categoriesApi())
  },[dispatch])

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const AuthRoute = ({ children }) => {
    const location = useLocation();
    if (!isLoggedIn) {
      return (
        <Navigate to="/login" state={{ from: location }} />
      )
    }
    return children;
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/cart" element={<AuthRoute><Cart/></AuthRoute>}/>
          <Route path="/wishlist" element={<AuthRoute><Wishlist/></AuthRoute>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </>
  )
}

      export default App
