import { useForm } from "react-hook-form"
import Header from "./header"
import { zodResolver } from "@hookform/resolvers/zod"
import { community_postSchema } from "../schemas/schemas"
import InputCustom from "./inputs"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editPost, getAllUserPosts, newPost } from "../slices/community_postSlice"
import { useEffect, useState } from "react"
import { set } from "zod/v3"
import { X } from "lucide-react"


export const CommunityPostWindow = ({titleOG, descriptionOG, contentOG, tagsOG, id, isEditing, setShowWindow, resetAllParams}) => {
    const d = useDispatch();
    const n = useNavigate();
    const [tempError, setTempError] = useState("");
    const {successMessage, communityPosts} = useSelector((state) => state.posts);
    const {
        register,
        handleSubmit, 
        reset,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(community_postSchema),
        defaultValues: {
            title: titleOG || "",
            description: descriptionOG || "",
            content: contentOG || "",
            tags: tagsOG || "",
            priority: 100,
        }
    })
    const onSubmit = async (data) => {
        console.log(data);
        try {
            
            if (isEditing) {
                data.idPost = id;
            }
            if (isEditing) {
                await d(editPost(data)).unwrap();
            } else {
              await d(newPost(data)).unwrap();  
            }
            await d(getAllUserPosts()).unwrap();
            reset();
            setTimeout(() => {setShowWindow(false)}, 500);
        } catch (error) {
            setTempError(error);
            console.error(error);
        }
    }
    useEffect(() => {
        console.error(errors);
    }, [errors])
    return (
        <>
        <div className="background">
          <div className="popup">
            <div className="spaceBetween">
              <h1>{isEditing ? "Edit post" : "Create new post"}</h1>
              <button onClick={() => {setShowWindow(false); resetAllParams();}}><X></X></button>  
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="barrier">

            </div>
            <div>
              <p>Idea Title *</p>
            <input placeholder="Title here" {...register("title")}></input>
            {errors.title && <p className="error">{errors.title.message}</p>}  
            </div>
            <div>
              <p>Description *</p>
            <textarea placeholder="Description here" {...register("description")}></textarea>
            {errors.description && <p className="error">{errors.description.message}</p>}  
            </div>
            <div>
              <p>Content</p>
            <textarea placeholder="Content here" {...register("content")}></textarea>
            {errors.description && <p className="error">{errors.description.message}</p>}  
            </div>
            <div>
             <p>Tags</p>
             <input placeholder="Tags here" {...register("tags")}></input>   
             {errors.content && <p className="error">{errors.content.message}</p>}   
            </div>
            
            <div className="buttonContainer flex_right">
            <button onClick={() => {setShowWindow(false); resetAllParams();}}>Close</button>  
             <button className="button1" type="submit">Submit Post</button> 
            </div>
             
             {tempError != "" && <p className="error">{tempError.message}</p>}
            
            </form>
            {successMessage != null && <p>{successMessage}</p>}
        </div>  
        </div>
        
        </>
    )
}

export default CommunityPostWindow;


