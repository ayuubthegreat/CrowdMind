import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {token} = useSelector((state) => state.auth);
    return (
        <>
        
        <nav className="navbar">
            <div>
             <p className="icon1"><strong>CM</strong></p>
                <h3>{WEBSITE_NAME}</h3>   
            </div>
            {token != null ? <>
        <div className="navlinks">
               <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> 
            </div>
        
        </> :<>
        <div className="navlinks">
                <Link to="/signin">Sign In</Link>
        </div>
        </> }
        </nav>
        </>
    )
}
export default Navbar;