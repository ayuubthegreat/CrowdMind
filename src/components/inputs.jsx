import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schemas/schemas"
import { LockIcon, MailIcon, User2Icon } from "lucide-react"
import { useState } from "react"


const Icon2Use = ({name}) => {
    switch (name) {
        case "name":
            return <User2Icon></User2Icon>
        case "email":
            return <MailIcon></MailIcon>
        case "password":
            return <LockIcon></LockIcon>
    }
}
const header2Use = (name) => {
    switch (name) {
        case "name":
            return "Full Name"
        case "email":
            return "Email Address"
        case "password":
            return "Password"
    }
}

const InputCustom = ({schema, defaultValues, placeHolders, onSubmit, submitPhrase = "Submit"}) => {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues,
    })
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
         {Array.from(defaultValues).map(([one, two], index) => (
            <>
            <div >
                <p><strong>{header2Use(one)}</strong></p>
                <div className={`input`}>
                 <Icon2Use name={one}></Icon2Use>   
              <input type={one} placeholder={placeHolders[index]}{...register(one)}></input>  
                </div>
                 
            </div>
            
            </>
            
        ))}
        <button type="submit">{submitPhrase}</button>   
        </form>
        
        </>
        
    )
}
export default InputCustom;