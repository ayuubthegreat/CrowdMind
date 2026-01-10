import { useDispatch, useSelector } from "react-redux";
import { loginSchema, registerSchema } from "../schemas/schemas";
import { WEBSITE_NAME } from "../store/BASE_URL";
import Header from "../components/header";
import Logo from "../components/logo";
import InputCustom from "../components/inputs";
import { login, register } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { useState } from "react";



export const Login = () => {
   const dispatch = useDispatch();
   const nav = useNavigate();
   const {loading} = useSelector((state) => state.auth);
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
    {loading && <>
        <div className="background">
          <div className="popup">
            <p>Loading....</p>
          </div>
        </div>
        </>}
    <div className="login">
       <div className="login-card">
    <Logo></Logo>
    <Header title={`Login`} desc={""} headerSize={30} />
    <InputCustom schema={loginSchema} defaultValues={new Map([
        ["email", ""],
        ["password", ""]
    ])} placeHolders={["Enter email here", "Enter password here"]}  onSubmit={onSubmit}></InputCustom>
    <div className="loginPrompt">
     <p>Have you not made an account?</p> <Link to={"/register"}>Register Here</Link>
    </div>
    
   </div> 
    </div>
    </>
    
    
   )
   
}
export const Register = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth);
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
    <>
    {loading && <>
        <div className="background">
          <div className="popup">
            <p>Loading....</p>
          </div>
        </div>
        </>}
    <div className="login">
        
        <div className="login-card">
          <Logo></Logo>
        <Header title={`Join ${WEBSITE_NAME}`} desc={"Join the massive community already enjoying this website!"}/>
        <InputCustom schema={registerSchema} defaultValues={new Map([
        ["name", ""],
        ["email", ""],
        ["password", ""]
    ])} placeHolders={["Enter name here", "Enter email here", "Enter password here"]}  onSubmit={onSubmit} submitPhrase={<>Create Account<MoveRightIcon></MoveRightIcon></>}></InputCustom>
    <div> 
      <p>Already have an account? <Link to={"/login"}>Login</Link></p>
      </div> 
        
        </div>  
    </div>
    </>
    
   )
}
