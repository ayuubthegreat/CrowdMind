import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../store/BASE_URL.js';
import { useDispatch } from 'react-redux';


export const initialState = {
    loading: false,
    communityPosts: [],
    userPosts: [],
    error: null,
    successMessage: null,
    statusArr: ["under_review", "planned", "done"],
    allTags: [],
}

export const newPost = createAsyncThunk(
    'post/newPost',
    async ({ title, description, content, priority, tags}, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${BASE_URL}/post/newPost`, {title, description, content, priority, stringedTags: tags}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            })
            return response.data;
        } catch (error) {
        if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
    }
}
)
export const editPost = createAsyncThunk(
    'post/editPost',
    async ({ title, description, content, priority, status, idPost, stringedTags}, {rejectWithValue}) => {
        try {
            console.log(title, description, content, idPost);
            const response = await axios.post(`${BASE_URL}/post/editPost`, {title, description, content, priority, status, idPost, stringedTags}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            })
            return response.data;
        } catch (error) {
        if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
    }
}
)
export const editStatus = createAsyncThunk(
    'post/editStatus',
    async ({idPost, status}, {rejectWithValue}) => {
        try {
            console.log(idPost, status);
            const response = await axios.post(`${BASE_URL}/post/editStatus`, {idPost, status}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            })
            return response.data;
        } catch (error) {
        if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
    }
}
)
export const editPriority = createAsyncThunk(
    'post/editStatus',
    async ({idPost, priority}, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${BASE_URL}/post/editPriority`, {idPost, priority}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            })
            return response.data;
        } catch (error) {
        if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
    }
}
)

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async ({id}, {rejectWithValue}) => {
        try {
            console.log(id);
            const response = await axios.post(`${BASE_URL}/post/deletePost`, {id}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            })
            return response.data;
        } catch (error) {
        if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
    }
}
)

export const getAllUserPosts = createAsyncThunk(
    'post/getAllUserPosts',
    async (__, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/post/getUserPosts`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
        }
    } 

)
export const deleteAllPosts = createAsyncThunk(
    'post/getAllUserPosts',
    async (__, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/post/deletAllPosts`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
        }
    } 

)

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async (__, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${BASE_URL}/post/getAllPosts`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
                },
            
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                // Server responded with error
                return rejectWithValue(error.response.data);
            } else if (error.request) {
                // Request made but no response
                return rejectWithValue({ 
                    message: 'Cannot connect to server. Please check if the API is running.' 
                });
            } else {
                // Something else happened
                return rejectWithValue({ 
                    message: error.message || 'An unexpected error occurred' 
                });
            }
        }
    } 

)

const community_postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        deleteSuccessMessage: (state) => {
            state.successMessage = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(newPost.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        })
        .addCase(newPost.fulfilled, (state, action) => {
            state.loading = false;
            state.communityPosts.push(action.payload.data);
            console.log(state.communityPosts, action.payload.data);
            state.error = null;
            state.successMessage = action.payload.message;
        })
        .addCase(newPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || "Post has failed."
            state.successMessage = null;
        })
        builder
        .addCase(editPost.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        })
        .addCase(editPost.fulfilled, (state, action) => {
            state.loading = false;
            state.userPosts = action.payload.data;
            console.log("Editing post success!", action.payload.data)
            state.error = null;
            state.successMessage = action.payload.message;
        })
        .addCase(editPost.rejected, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.error = action.payload.message.name || "Post has failed."
            state.successMessage = null;
        })
        builder
        .addCase(editStatus.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        })
        .addCase(editStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.successMessage = action.payload.message;
        })
        .addCase(editStatus.rejected, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.error = action.payload.message.name || "Post has failed."
            state.successMessage = null;
        })
         builder
        .addCase(deletePost.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.successMessage = action.payload.message;
        })
        .addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.error = action.payload.message.name || "Post has failed."
            state.successMessage = null;
        })
        
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.communityPosts = action.payload.data.cards;
            console.log(state.communityPosts);
            state.successMessage = action.payload.message;
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || "Getting all posts have failed."
            state.successMessage = null;
        })
        builder
        .addCase(getAllUserPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        })
        .addCase(getAllUserPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userPosts = action.payload.data.cards;
            state.allTags = action.payload.data.tags;
            console.log(action.payload.data);
            state.successMessage = action.payload.message;
        })
        .addCase(getAllUserPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || "Getting all posts have failed."
            state.successMessage = null;
        })

    }
})
export default community_postSlice.reducer;

