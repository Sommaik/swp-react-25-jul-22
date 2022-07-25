import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AppContainer: FC<Props> = (props) => {
    return <>
        <div>Text from AppContainer</div>
        <div>{ props.children }</div>
    </>
};

export default AppContainer;