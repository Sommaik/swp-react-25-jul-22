import { FC, ReactNode} from 'react';
import { isPropertySignature } from 'typescript';

interface Props
{
    children: ReactNode
}

const AppContainer: FC<Props> = (props) =>
{
    return <>
        <div>{props.children}</div>
    </>
}

export default AppContainer;