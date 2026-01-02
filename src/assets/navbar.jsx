import { Link, Links, useNavigate } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/logo";
import LinksCustom from "../components/links";
import { useWindowWidth } from "../components/width";
import { logout } from "../slices/authSlice";

const Navbar = ({className, mapIfAuthenticated, mapIfNotAuthenticated}) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const handleLogout = () => {
        try {
            dispatch(logout());
            nav(`/login`);
        } catch(err) {
            console.error(err);
        }
       
    }
    const {token} = useSelector((state) => state.auth);
    console.log(mapIfAuthenticated, mapIfNotAuthenticated)
    const width = useWindowWidth();
    return (
        <>
        <nav className="navbar">
           <Logo width={width}></Logo>
           <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20}}>
            <LinksCustom linksMap={token != null ? mapIfAuthenticated : mapIfNotAuthenticated}/>
             {token == null || <a onClick={handleLogout}>Logout</a>}
           </div>
            
        </nav>
        </>
    )
}
export default Navbar;