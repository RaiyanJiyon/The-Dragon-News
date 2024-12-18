import { useContext} from "react";
import userIcon from "../assets/user.png"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("User sign out successfully");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "text-[#D72050] font-bold" : "text-black"}>Home</NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-[#D72050] font-bold" : "text-black"}>About</NavLink>
                        <NavLink to={"/career"} className={({ isActive }) => isActive ? "text-[#D72050] font-bold" : "text-black"}>Career</NavLink>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-lg">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "text-[#D72050] font-bold" : "text-black"}>Home</NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => isActive ? "text-[#D72050] font-bold" : "text-black"}>About</NavLink>
                    <NavLink to={"/career"} className={({ isActive }) => isActive ? "text-[#D72050] font-bold" : "text-black"}>Career</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {/* avatar */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="User image"
                            src={userIcon} />
                    </div>
                </div>

                {/* login Link */}
                {
                    user ?
                        <Link to={"/login"}>
                            <button onClick={handleSignOut} className="btn px-8 bg-[#403F3F] text-lg text-white font-semibold">Logout</button>
                        </Link>
                        :
                        <Link to={"/login"}>
                            <button className="btn px-8 bg-[#403F3F] text-lg text-white font-semibold">Login</button>
                        </Link>

                }
            </div>
        </div>
    );
};

export default Navbar;