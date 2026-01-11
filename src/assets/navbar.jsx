import { Link, Links, useNavigate } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/logo";
import LinksCustom from "../components/links";
import { useWindowWidth } from "../components/width";
import { checkForUserInfo, logout } from "../slices/authSlice";
import Header from "../components/header";
import { PlusCircle } from "lucide-react";
const ColorOfUserIcon = (role) => {
    console.log(role);
    switch (role) {
        case "user":
            console.log("User is user. Color used will be black.")
            return "rgba(175, 56, 56, 1)"
        case "admin": 
            return "rgba(175, 56, 56, 1)"
        case "supa_admin":
            return "rgb(220, 215, 50)"
        default:
            return "rgb(0, 0, 0)"
    }
}
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
    const {user, token} = useSelector((state) => state.auth);
    console.log(mapIfAuthenticated, mapIfNotAuthenticated, user)
    const width = useWindowWidth();
    return (
        <>
        <nav className="navbar">
           <Logo width={width}></Logo>
           <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20}}>
            <LinksCustom linksMap={token != null ? mapIfAuthenticated : mapIfNotAuthenticated}/>
            {(user != null && user.role === "supa_admin") && <>
            <Link to={"/userTable"}>Users</Link>
            </>}
            {(token == null || user == null) || <>
            <div className="user_profile">
                <h3>{user.name}</h3>
                <h3 className="user_profile_role" style={{backgroundColor: `${ColorOfUserIcon(user.role)}`, color: "white"}}>{user.role}</h3>
            </div>
            
            
            </>}
             {token == null || <a onClick={handleLogout}>Logout</a>}
           </div>
            
        </nav>
        </>
    )
}
export default Navbar;