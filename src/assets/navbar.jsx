import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <h2>{WEBSITE_NAME}</h2>
            <div className="navlinks">
               <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> 
            </div>
        </nav>
        </>
    )
}
export default Navbar;