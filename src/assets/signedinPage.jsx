import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { WEBSITE_NAME } from "../store/BASE_URL";

const SignedinPage = () => {
    const {user, token} = useSelector((state) => state.auth);
    return (
       <>
       <div className="container img1">
            <div className="section">
                <Header title={`Welcome, ${user.name}!`} desc={`Welcome to ${WEBSITE_NAME}. What do you want to do?`} headerSize={40}/>
            </div>
        </div>
       </> 
    )
}
export default SignedinPage;