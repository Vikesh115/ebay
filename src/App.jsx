import { useDispatch } from "react-redux"
import { productsApi, categoriesApi } from "./redux/actions/Action";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/footer";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ProductsByCategory from "./pages/home/categories/ProductsByCategory";
import SearchBar from "./components/searchbar/SearchBar";
import ProductDetails from "./pages/home/products/ProductDetails";
import { logoutUser } from "./redux/slice/AuthSlice";
import { auth, onAuthStateChanged } from "./firebase";
import { setUser, clearUser } from "./redux/slice/AuthSlice";

function App() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    dispatch(productsApi());
    dispatch(categoriesApi());

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email.split('@')[0]
        }));
      } else {
        dispatch(clearUser());
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const AuthRoute = ({ children }) => {
    const location = useLocation();
    if (!auth.currentUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  if (!authChecked) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Navbar  handleLogout={handleLogout}/>
      <SearchBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<AuthRoute><Wishlist/></AuthRoute>}/>
          <Route path="/categoryProducts/:id" element={<ProductsByCategory/>}/>
          <Route path="/details/:id" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </>
  )
}

      export default App
