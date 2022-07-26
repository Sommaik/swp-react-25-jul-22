import { FC, Fragment } from "react";
import { Typography as Text, Button } from "@mui/material";
import { useParams } from 'react-router-dom';

const name = "BlogPost Page";

const elem = <Fragment>

    <Text variant="h2">{ name }</Text>
    
</Fragment> 

const BlogPost: FC = () => {

    const { slug, id } = useParams();

    //return elem
    return <>
        <div>test</div>
        <div><Text variant="h2">{ slug }</Text> </div>
        <div><Text variant="h2">{ id }</Text> </div>
        
    </> 
}

export default BlogPost