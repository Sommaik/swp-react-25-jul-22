import React, { FC, Component} from "react";
import { useSelector } from "react-redux";
import { PostModel } from "../app/api/post-api";
import { RootState } from "../app/store";

const PostShow: FC = () =>
{
    const postArr = useSelector((state: RootState) => state.post.posts);


    return (<>
        <ul>
            {
                postArr.map( (v: PostModel) => <li key={v.id}>{v.id} - {v.title}</li>)
            }
        </ul>
    </>);
}

export default PostShow;