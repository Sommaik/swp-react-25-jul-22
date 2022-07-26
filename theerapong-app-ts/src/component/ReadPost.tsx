import { FC } from 'react';
import { Button, Typography as Text } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { allPost } from '../app/post-slice';
import { AppDispatch } from '../app/store';

const ReadPost: FC = (props) => {

    const dispatch = useDispatch<AppDispatch>();

    return <>
        <p>-- Begin component ReadPost --</p>
        <Button variant='outlined' color='secondary'
            onClick={()=>dispatch(allPost())}>Read Post</Button>
        <p>-- End component ReadPost --</p>
    </>
}

export { ReadPost }