import { FC } from 'react';
import { ReadPost } from '../component/ReadPost';
import { ViewPost } from '../component/ViewPost';

const Post : FC = () => {

    return <>
        <ReadPost/>
        <ViewPost/>
    </>
}

export { Post }