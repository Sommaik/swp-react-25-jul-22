import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostModel, readAllPost } from '../api/post-api';

const allPost = createAsyncThunk('post/fetchall', async () => {
    const resp = await readAllPost();
    return resp.data;
});

interface PostState {
    isLoading: boolean;
    posts: PostModel[];
    isError: boolean;
    error?: string;
    isLoadSuccess: boolean;
}

const initialState: PostState = {
    isLoading: false, 
    posts: [],
    isError: false,
    error: undefined,
    isLoadSuccess: false
}

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(allPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
                state.isLoadSuccess = true;
            })
            .addCase(allPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
    }
});

export const postReducer = postSlice.reducer;
export { allPost }
// export const {  allPost } = postSlice.actions;
