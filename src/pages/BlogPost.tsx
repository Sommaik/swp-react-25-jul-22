import { FC } from "react";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";

import { Typography as Text } from "@mui/material";

const BlogPost: FC = () =>
{
    const { slug, id } = useParams();

    return <>
        <Text variant="h2">slug: {slug}</Text>
        <Text variant="h2">id: {id}</Text>
    </>;
}

export default BlogPost;