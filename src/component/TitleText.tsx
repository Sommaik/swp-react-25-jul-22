import React, { ReactNode }  from "react";
import { Typography as Text, Button } from '@mui/material';

type Props = { value: string;}
type State = { cnt: number; }

/*class TitleText extends React.Component<Props, State>
{
    render(): React.ReactNode {
        return <>
            <Text>{this.props.value}</Text>
            <Text>{this.state?.cnt }</Text>
        </>
    }
}*/
/*class TitleText extends React.Component<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        this.state = {cnt: 0};
    }

    render(): React.ReactNode {
        return <>
            <Text>{this.props.value}</Text>
            <Text>{this.state?.cnt }</Text>
        </>
    }
}*/
class TitleText extends React.Component<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        this.state = {cnt: 0};
    }

    onClick(): void
    {
        this.setState((state, props) =>
        ({
            cnt: state.cnt + 1,
        }));
    }

    onTextChange(event: any): void
    {
        console.log(event);
        console.log(this.props);
        console.log(this.state);
        this.setState((state, props) => ({
            cnt: event.target.value,
        }));
    }

    render(): React.ReactNode {
        return <>
            <input type='text' onChange={(event)=>this.onTextChange(event)}/>
            <Button variant='contained' color="primary" onClick={(_) => this.onClick()}>
                {this.props.value} - {this.state?.cnt}
            </Button>
        </>
    }
}

export default TitleText;