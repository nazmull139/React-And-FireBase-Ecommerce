import { useSelector } from "react-redux";
import SearchBar from "../searchBar/SearchBar"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const user =JSON.parse(localStorage.getItem("users")) 

  //Navigate
  const navigate  = useNavigate();

  const logout = ()=>{
    localStorage.clear("users");
    navigate("/login");
  }
  const cartItems = useSelector((state) => state.cart);

  //navbar data

    const navList =(
      
      <ul className="flex space-x-3 text-white font-medium text-md px-5">
          {/*Home*/}
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          {/*All Product*/}
          <li>
            <Link to={'/allproduct'}>All Product</Link>
          </li>


          {/*Sign Up*/}

         {!user ?  <li>
            <Link to={'/signup'}>Sign Up</Link>
          </li> : ""}

          {/*Login*/}

         {!user ?  <li>
            <Link to={'/login'}>Login</Link>
          </li> : ""}

          {/*User*/}

         {user?.role == "user" &&  <li>
            <Link to={'/user-dashboard'}>{user?.name}</Link>
          </li>}

          {/* Admin */}
          {user?.role == "admin" &&  <li>
                <Link to={'/admin-dashboard'}>{user?.name}</Link>
            </li>
          }

          {/*Logout */}

          {user && <li className="cursor-pointer" onClick={logout}>
            Logout
            </li>}

          {/* Cart */}

          <li>
            {

              user ?
              <Link to={'/cart'}>
              Cart({cartItems.length})
             </Link>


             :

             <Link to={'/login'}>
             Cart({cartItems.length})
            </Link>


            }

          </li>

      </ul>

    )



  return (
   <nav className="bg-pink-600 sticky top-0">

      {/*main*/}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">

        {/* Left */}

        <div className="left py-3 lg:py-0">
          <Link to={'/'}>
            <h2 className="font-bold text-white text-2xl text-center">Artzii</h2>      
          </Link>
        </div>

        {/* Right */}

        <div className="right flex justify-center mb-4 lg:mb-0">
          {navList}
        </div>

        {/* Search Bar */}

        <SearchBar></SearchBar>
    </div>

   </nav>
  )
}

export default Navbar