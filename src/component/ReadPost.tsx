import { Button } from '@mui/material';
import { FC } from 'react';

import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { allPost} from "../app/post-slice";

const ReadPost: FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    return (
    <>
        <h1>I'm ReadPost</h1>

        <Button variant="outlined" color="secondary" onClick={() => dispatch(allPost())}>Read Post</Button>
    </>
    );
}

export default ReadPost;