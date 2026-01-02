import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schemas/loginSchema"




const InputCustom = ({schema, defaultValues, placeHolders, onSubmit}) => {
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
            <input type={one} placeholder={placeHolders[index]}{...register(one)}></input>
            </>
            
        ))}
        <button type="submit">Submit</button>   
        </form>
        
        </>
        
    )
}
export default InputCustom;