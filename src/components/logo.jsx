import { useNavigate } from "react-router-dom";
import { WEBSITE_NAME } from "../store/BASE_URL";



const Logo = ({logoSize = 30, width}) => {
    const navigate = useNavigate();
    console.log(width);
    return (
        <>
         <div className="logoTitle" style={{display : "flex", flexDirection : "row", gap : 10, alignItems: "center", justifyContent: "center"}} onClick={() => {navigate("/")}}>
             <p style={{fontSize: (logoSize / (width < 800 ? 2 : 1)) , padding: (logoSize / 2)}} className="mainIcon"><strong>CM</strong></p>
            <h3 style={{fontSize: (logoSize / (width < 800 ? 2 : 1))}}>{WEBSITE_NAME}</h3>   
            </div>
        </>
    )
}
export default Logo;