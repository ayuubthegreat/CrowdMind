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
            return new Map([
                ["rgba(88, 153, 232, 1)", "rgba(113, 182, 225, 1)"]
            ])
        default:
            return "rgba(0, 0, 0, 0)"
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
            {(token == null || user == null) || <>
            <button><PlusCircle></PlusCircle> New Post</button>
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