import { useDispatch } from "react-redux";
import { loginSchema, registerSchema } from "../schemas/loginSchema";
import { WEBSITE_NAME } from "../store/BASE_URL";
import Header from "../components/header";
import Logo from "../components/logo";
import InputCustom from "../components/inputs";
import { login, register } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";



export const Login = () => {
   const dispatch = useDispatch();
   const nav = useNavigate();
   const onSubmit = async(data) => {
    try {
        await dispatch(login(data)).unwrap();
        setTimeout(() => {
          nav("/")  
        }, 500)
    } catch (err) {
       console.log(`Login failed: `, err)
    }
   }
   return (
    <>
    <div className="login">
       <div className="login-card">
    <Logo></Logo>
    <Header title={`Login`} desc={""} headerSize={30} />
    <InputCustom schema={loginSchema} defaultValues={new Map([
        ["email", ""],
        ["password", ""]
    ])} placeHolders={["Enter email here", "Enter password here"]}  onSubmit={onSubmit}></InputCustom>
    <p>Have you not made an account?<Link to={"/register"}>Log In Here</Link></p>
   </div> 
    </div>
    </>
    
    
   )
   
}
export const Register = () => {
    const dispatch = useDispatch();
   const nav = useNavigate();
   const onSubmit = async(data) => {
    try {
        await dispatch(register(data)).unwrap();
        setTimeout(() => {
          nav("/")  
        }, 500)
    } catch (err) {
       console.log(`Login failed: `, err)
    }
   }
   return (
    <div className="login">
        <div className="login-card">
          <Logo></Logo>
        <Header title={`Join ${WEBSITE_NAME}`} desc={"Join the massive community already enjoying this website!"}/>
        <InputCustom schema={loginSchema} defaultValues={new Map([
        ["name", ""],
        ["email", ""],
        ["password", ""]
    ])} placeHolders={["Enter name here", "Enter email here", "Enter password here"]}  onSubmit={onSubmit}></InputCustom>  
        </div>
        
    </div>
   )
}
