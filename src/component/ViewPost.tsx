import { FC } from 'react';

import { useSelector } from "react-redux";
import { PostModel } from '../app/post-api';
import { RootState } from "../app/store";
 
const ViewPost: FC = () => {

    const items_ = useSelector((state: RootState) => state.post.posts);

    const items = items_.map((v: PostModel) => (
        <tr>
            <td>{v.title}</td>
            <td>{v.body}</td>
        </tr>
    ));

    // return (<>
    //     <ul>
    //         {item}
    //     </ul>
    // </>);

    return (
    <>
        <hr/>
        <h1>I'm ViewPost</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                
                {items}
                
            </tbody>
        </table>
        
        
    </>
    );
}

export default ViewPost;