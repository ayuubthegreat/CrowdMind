import { zodResolver } from "@hookform/resolvers/zod";
import Header from "./header"
import { useForm } from "react-hook-form";
import { prioritySchema } from "../schemas/schemas";



const Priority_window = ({setShowWindow, originalPriority, id}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(prioritySchema),
        defaultValues: {
            priority: originalPriority || 0,
        }
    })
    const onSubmit = (data) => {
    
    }
    return (
        <>
        <div className="background">
            <div className="popup">
                <button onClick={setShowWindow(false)}>Close</button>
               <Header headerSize={50} title={"Change Priority"} desc={`Change the priority of the current post with ID: ${id}`}/>
               <input placeholder="Priority"{...register("priority")}></input> 
            </div>
        </div>
        </>
    )
}

export default Priority_window;