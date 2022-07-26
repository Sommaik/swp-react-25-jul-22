import React, { Component} from "react";
import { PostModel } from "../app/api/post-api";
import PostLoad from "../component/PostLoad";
import PostShow from "../component/PostShow";

class PostPage extends Component<{}, PostModel>
{
    constructor(p: any)
    {
        super(p);
    }

    render(): React.ReactNode
    {
        return <>
            <PostLoad />
            <PostShow />
        </>
    }
}

export default PostPage;