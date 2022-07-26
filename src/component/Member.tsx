import React, { Component } from "react";

interface IState
{
    items: [];
    isLoaded: boolean;
}

interface IModel
{
    id: number;
    name: string;
}

class Member extends Component<{}, IState>
{
    constructor(p: any)
    {
        super(p);
        this.state = {isLoaded: false,items: []};
    }

    render(): React.ReactNode
    {
        if (this.state.isLoaded)
        {
            return <>
                <ul>
                    {
                        this.state.items.map( (v: IModel) => <li key={v.id}>{v.name}</li>)
                    }
                </ul>
            </>
        } else
        {
            return <></>
        }
    }

    componentDidMount(): void
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) =>
            {
                this.setState({isLoaded: true,items: result});
            }
            , (error) =>
            {
                this.setState({isLoaded: false,items: error});
            }
        );
    }
}

export default Member;