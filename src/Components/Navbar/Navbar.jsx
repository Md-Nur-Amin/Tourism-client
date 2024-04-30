import { Link, NavLink } from "react-router-dom";
import beach from "../../assets/beach.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Theme from "../Theme/Theme";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="lg:text-white font-quicksand" ><NavLink to="/">Home</NavLink></li>
        {/* <li className="lg:text-white font-quicksand " ><NavLink to="/register">Register</NavLink></li> */}

        {/* <li className="lg:text-white font-quicksand" ><NavLink to="/addTouristSpot">Add Tourist Spot</NavLink></li> */}
        <li className="lg:text-white font-quicksand" ><NavLink to="/allTouristSpot">All Tourist Spot</NavLink></li>

        <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-popins" to='/addTouristSpot'
                    >Add Tourist Spot </NavLink>
                </>
            }
        </li>

        <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-popins" to='/myList'
                    >My List </NavLink>
                </>
            }
        </li>

        {/* <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-popins" to='/allCountry'
                    >Country </NavLink>
                </>
            }
        </li> */}

        {/* <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-quicksand" to='/profile'
                    >Profile </NavLink>
                </>
            }
        </li>
        <li>
            {
                user &&
                <>
                    <NavLink className="lg:text-white font-quicksand" to='/updateProfile'
                    >Update Profile </NavLink>
                </>
            }
        </li> */}


    </>


    return (
        <div>
            <div className=" ">
                <div className="navbar bg-green-700 lg:px-28 hover:opacity-100 opacity-85 hover:bg-slate-600 py-5">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <img className="h-[40px] w-[40px] lg:h-[64px] lg:w-[64px] " src={beach} alt="" />
                        <a className="text-white font-quicksand font-black lg:text-3xl"> <span className="text-yellow-500">T</span>ravel<span className="text-[#34d399]">Trek</span> </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end mb-3 relative">
                        <div className=" dropdown dropdown-end ">

                            <div className="flex gap-x-2">

                                <Theme></Theme>

                                <Link className="btn btn-ghost btn-xs mt-6" to='/register'> Register </Link>

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mt-2 w-12">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className=" ">
                                        <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl " alt="User Avatar" />
                                    </div>
                                </div>

                            </div>



                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content p-1 shadow rounded-box w-28 text-black bg-white z-[2]">
                                {/* <li><a>Profile</a></li> */}
                                {
                                    user ?
                                        <li onClick={handleLogOut} ><a className="text-xs text-black font-medium font-quicksand">Log Out </a></li>
                                        : <Link to='/login'> <li><a className="text-xs text-black font-medium font-quicksand" >Login</a></li> </Link>

                                }

                                <li>
                                    {
                                        user &&
                                        <>
                                            <Link className="text-xs text-black font-medium font-quicksand" to='/profile'
                                            >Profile </Link>
                                        </>
                                    }
                                </li>

                                <li>
                                    {
                                        user &&
                                        <>
                                            <Link className="text-xs text-black font-medium font-quicksand" to='/updateProfile'
                                            >Update Profile </Link>
                                        </>
                                    }
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;


