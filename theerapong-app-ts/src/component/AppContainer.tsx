import { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode;
}

const AppContainer: FC<Props> = (props) => {
    return <>
        <div>{ props.children }</div>
    </>
}

export { AppContainer }