import { Button } from "@material-tailwind/react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom" ;
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allproduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import AddProductPage from "./pages/admin/AddProductPage";
import CategoryPage from "./pages/category/CategoryPage";

import MyState from "./context/MyState";
import {Toaster} from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

function App() {
  return (
    <MyState >
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/*" element={<NoPage/>}/>

        <Route path="/productinfo/:id" element={<ProductInfo></ProductInfo>}></Route>

        <Route path="/cart" element={<CartPage></CartPage>}></Route>

        <Route path="/allproduct" element={<AllProduct></AllProduct>}></Route>

        <Route path="/signup" element={<Signup></Signup>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/category/:categoryname" element={<CategoryPage></CategoryPage>}></Route>

        <Route path="/user-dashboard" element={
          <ProtectedRouteForUser>
            <UserDashboard></UserDashboard>
        </ProtectedRouteForUser>
      }></Route>

        <Route path="/admin-dashboard" element={
          <ProtectedRouteForAdmin>
              <AdminDashboard></AdminDashboard>
        </ProtectedRouteForAdmin>
      }></Route>

        <Route path="/addproduct" element={
          <ProtectedRouteForAdmin>
          <AddProductPage></AddProductPage>
        </ProtectedRouteForAdmin>
      }></Route>

        <Route path="/updateproduct/:id" element={
          <ProtectedRouteForAdmin>
            <UpdateProductPage></UpdateProductPage>
          </ProtectedRouteForAdmin>
        }></Route>
       
      </Routes>
       <Toaster></Toaster>
    </Router>

      </MyState>
  )
}

export default App