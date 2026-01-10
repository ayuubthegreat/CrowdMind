import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { WEBSITE_NAME } from "../store/BASE_URL";
import CommunityPostWindow from "../components/community_post";
import Priority_window from "../components/priorityWindow.jsx";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownNarrowWideIcon, ArrowUp01Icon, ArrowUpIcon, BellDot, Check, Clock, Filter, IndentDecrease, PlusCircleIcon } from "lucide-react";
import { deletePost, editPost, editStatus, getAllUserPosts } from "../slices/community_postSlice.js";
import Dropdown from "../components/dropdown.jsx";
import Midsection from "../components/midsection.jsx";


const SignedinPage = () => {
    
    const {user, token} = useSelector((state) => state.auth);
    const {communityPosts, userPosts, statusArr, loading, allTags} = useSelector((state) => state.posts);
    const [priority, setPriority] = useState(0);
    const [showWindow, setShowWindow] = useState(false);
    const [spw, sspw] = useState(false);
    const [originalTitle, setOriginalTitle] = useState("");
    const [originalDescription, setOriginalDescription] = useState("");
    const [originalContent, setOriginalContent] = useState("");
    const [originalTags, setOriginalTags] = useState("");
    const [ID, setID] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [sortingMethod, setSortingMethod] = useState(0);
    const [filteringMethod, setFilteringMethod] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    const dispatch = useDispatch();
    const [real_user_posts, setPosts] = useState([]);
    const resetAllParameters = function() {
        setIsEditing(false);
        setOriginalContent(""); 
        setOriginalDescription("");
        setOriginalTitle("");
    }


    

    const getStatusIcon = (status) => {
        switch(status) {
            case "under_review":
                return <>
                <BellDot></BellDot>Under Review
                </>
            case "planned":
                return <>
                <Clock></Clock>Planned
                </>
            case "done":
                return <>
                <Check></Check>Done
                </>
        }
    }
    const getStatusColor = (status) => {
        switch (status) {
            case "under_review":
                return "rgba(167, 163, 163, 1)";
            case "planned":
                return "rgba(16, 103, 153)";
            case "done":
                return "rgba(100, 100, 2)";
        }
    } 
    const findUserPost = async(id) => {
        const endResult = userPosts.filter((element) => element.id === id)[0];
        console.log(endResult);
        return endResult;
    }
    const sortedUserPosts = function(sortingOrder) {
        console.log(real_user_posts);
        const posts = [...userPosts];
        switch (sortingOrder) {
            case 0: 
            return posts.toSorted((a, b) => a.priority < b.priority);
            case 1: 
            return posts.toSorted((a, b) => b.priority > a.priority);
            default:
            return posts;
        }
    }
    const filteredUserPosts = function(filteredOrderID) {
        const posts = [...userPosts];
        switch (filteredOrderID) {
            case 1:
                return posts.filter((element) => element.status == "under_review");
            case 2:
                return posts.filter((element) => element.status == "planned");
            case 3:
                return posts.filter((element) => element.status == "done");
            default:
                return posts;
        }
    }
    
    useEffect(() => {
        setPosts(sortedUserPosts(sortingMethod));
        setPosts(filteredUserPosts(filteringMethod));

    }, [sortingMethod, filteringMethod, userPosts, selectedTags])
    const changePriorityNumberOrStatus = async(id, number, status) => {
    const userPost = await findUserPost(id);
    if (userPost.userID !== user.id && user.role !== "admin") {
        console.error("User is not admin and this post does not belong to the user.")
        return;
    }
    console.log(userPost);
    let data = {
        idPost : userPost.id,
        ...userPost
    }
    data.priority = number || data.priority;
    data.status = status || data.status;
    console.log(data, id, number);
    try {
        await dispatch(editPost(data)).unwrap();
        await dispatch(getAllUserPosts()).unwrap();
    } catch (error) {
        console.error(error);
    }
}
    return (
       <>
       {loading && <div className="background">
        <div className="popup" style={{textAlign: "center"}}>
            <p>Loading......</p>
        </div>
        </div>}
       {showWindow && <CommunityPostWindow titleOG={originalTitle} descriptionOG={originalDescription} contentOG={originalContent} tagsOG={originalTags} isEditing={isEditing} id={ID} setShowWindow={setShowWindow} resetAllParams={resetAllParameters}/>}
       {spw && <Priority_window setShowWindow={sspw} originalPriority={priority} id={ID}></Priority_window>}
       <div className="container img1">
            <div className="section">
                <div className="sectionRow">
                    <Midsection title={userPosts.length} headerSize={70} desc={"Total Ideas"}/>
                    <Midsection title={real_user_posts.filter((element) => element.status == "under_review").length} headerSize={70} desc={"Under Review"}/>
                    <Midsection title={real_user_posts.filter((element) => element.status == "planned").length} headerSize={70} desc={"Planned"}/>
                    <Midsection title={real_user_posts.filter((element) => element.status == "done").length} headerSize={70} desc={"Done"}/>
                </div>
                
            </div>
            <div className="section">
                <Header title={`Welcome, ${user != null ? user.name : "Guest"}!`} desc={`Welcome to ${WEBSITE_NAME}. Get to postin'! Hint: if you want to look at ALL posts, click the Posts page in the navbar.`} headerSize={40}/>
            </div>
            <div className="miniMenu">
                <div className="tags">
                 {allTags.map((val, index) => (
                    <>
                    <button className="tag">{val}</button>
                    </>
                ))}   
                </div>
            </div>
            <div className="miniMenu">

            </div>
            <div className="miniMenu" style={{}}>
            <p><Filter></Filter>Filters:</p>  
            <Dropdown title={<>All Statuses <ArrowDownNarrowWideIcon></ArrowDownNarrowWideIcon></>} dropdownOptions={new Map([
                ["under_review", () => {setFilteringMethod(1)}],
                ["planned", () => {setFilteringMethod(2)}],
                ["done",() => {setFilteringMethod(3)}],
            ])}/> 
            <button onClick={() => {setFilteringMethod(0)}}>Reset Filtering</button>
            <button onClick={() => {
                setShowWindow(true); setIsEditing(false);
                setOriginalContent(""); setOriginalDescription("")
                setOriginalTitle(""); setID(0);
            }}><PlusCircleIcon></PlusCircleIcon> New Post</button>
            </div>
            
            
            <div className="communityPostContainer">
                
             {userPosts.length == 0 ? <p>No community posts exist. Try creating one!</p> : real_user_posts.map(({title, description, content, createdAt, updatedAt, priority, id, status, user: userPost, tags}, index) => {
                return (
                    <>
                    <div className="communityPost">
                        <div className="">
                    {(user.id === userPost.id || user.role === "admin") && <><button onClick={() => {changePriorityNumberOrStatus(id, priority + 1)}}><ArrowUpIcon></ArrowUpIcon></button></>}
                    
                     <p onClick={() => {}} className="priorityCommunity">{priority}</p>   
                     {(user.id === userPost.id || user.role === "admin") && <><button onClick={() => {changePriorityNumberOrStatus(id, priority - 1)}}><ArrowDown></ArrowDown></button></>}
                    </div>
                    <div className="column">
                        {(user.id === userPost.id || user.role === "admin") && <><div className="row">
                          <button onClick={() => {setShowWindow(true); setIsEditing(true);
                             setOriginalContent(userPosts[index].content); setOriginalDescription(userPosts[index].description)
                             setOriginalTitle(userPosts[index].title); setID(userPosts[index].id)}}>Edit</button>
                        <button onClick={() => {
                            async function deletePostInner() {
                                try {
                                    console.log(userPosts[index].id);
                                    await dispatch(deletePost(userPosts[index])).unwrap();
                                    console.log("Card deleted!");
                                     dispatch(getAllUserPosts()).unwrap();
                                } catch (error) {
                                    console.error(error);
                                }
                            }
                            deletePostInner();
                        }}>Delete</button>   
                        </div>
                        
                        </>
                           
                        }
                    <div className="row">
                 <Header title={title}/>   
                </div>
                <div className="row tags">
                    {tags.split(",").map((val, index) => (
                        <>
                        <p style={{backgroundColor: `rgba(${(140 * index) < 255 ? (140 * index) : 255}, 200, 100`}} className="tag">{val.trim()}</p>
                        </>
                    ))}
                </div>
                <div className="row">
                  <p>{userPost.name} - {`Created on ${createdAt.split("T")[0].split("-")[1]}/${createdAt.split("T")[0].split("-")[2]}/${createdAt.split("T")[0].split("-")[0]} - Updated on ${updatedAt.split("T")[0].split("-")[1]}/${updatedAt.split("T")[0].split("-")[2]}/${updatedAt.split("T")[0].split("-")[0]} `}</p>
                  <div className="dropdownParent">
                      <p style={{backgroundColor: `${getStatusColor(status)}`}} onClick={() => {
                        const idStatus = document.getElementById(`${id}-status`)
                        if (user.id === userPost.id) {
                          idStatus.classList.toggle("hidden");  
                        }
                      }}className="statusCommunity">{getStatusIcon(status)}</p> 
                      <div id={`${id}-status`} className="dropdown hidden">
                        {statusArr.map((val, index) => {
                            return(
                            <>
                            <p onClick={() => {
                                const changeStatus = async() => {
                                    try {
                                        await changePriorityNumberOrStatus(id, undefined, val);
                                        document.getElementById(`${id}-status`).classList.add("hidden");
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }
                                changeStatus();
                                }}>{val}</p>
                            </>)
                        })}
                      </div>
                    </div>  
                </div>
                <div>
                <p className="communityPostContent">{content}</p> 
                </div>
                       
                    </div>
                         
                
                
                
                </div>
                    </>
                )
                
            })} 
            </div>
            
            
        </div>
        
       </> 
    )
}
export default SignedinPage;