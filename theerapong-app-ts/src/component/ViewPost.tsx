import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { PostModel } from '../api/post-api';

const ViewPost: FC = (props) => {

    const posts = useSelector((state: RootState) => state.post.posts);

    const row = posts.map((v: PostModel) => <tr>
        <td>{v.userId}</td>
        <td>{v.id}</td>
        <td>{v.title}</td>
        <td>{v.body}</td>
        </tr>);

    return <>
    <p>-- Begin component ViewPost --</p>
    <table>
        {row}
    </table>
    <p>-- End component ViewPost --</p>
    </>
}

export { ViewPost }