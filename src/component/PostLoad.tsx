import React, { Component} from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, Typography as Text } from '@mui/material';
import { PostModel, readAllPost } from "../app/api/post-api";
import { allPost, postReducer } from "../app/slice/post-slice";
import { AppDispatch } from "../app/store";

const PostLoad: FC = () =>
{
    const dispatch = useDispatch<AppDispatch>();

    return (<>
        <Button variant="outlined" color="primary" onClick={() => dispatch(allPost())}>Click me</Button>
        </>);
}

export default PostLoad;