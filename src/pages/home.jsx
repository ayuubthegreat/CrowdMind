import { useDispatch, useSelector } from "react-redux";
import SignedinPage from "../assets/signedinPage";
import SignedOutPage from "../assets/signedOutPage";
import Footer from "../components/footer";
import { useEffect } from "react";
import { getAllPosts, getAllUserPosts } from "../slices/community_postSlice";


const Home = () => {
    const d = useDispatch();
    const {user, token} = useSelector((state) => state.auth);
    const {communityPosts} = useSelector((state) => state.posts);
    useEffect(() => {
        if (user != null) {
            d(getAllUserPosts()).unwrap();
        }
    }, [user])
    return (
        <>
        {token != null ? <SignedinPage></SignedinPage> :<SignedOutPage></SignedOutPage>}
        <Footer/>
        </>
        
    )
}
export default Home;