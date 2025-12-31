import { useSelector } from "react-redux";
import SignedinPage from "../assets/signedinPage";
import SignedOutPage from "../assets/signedOutPage";


const Home = () => {
    const {user, token} = useSelector((state) => state.auth);
    return (
        <>
        {token != null ? <SignedinPage></SignedinPage> :<SignedOutPage></SignedOutPage>}
        </>
        
    )
}
export default Home;