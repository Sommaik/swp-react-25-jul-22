import { Component, ReactNode } from 'react';

interface IState {
    isLoaded: boolean;
    items: [];
}

interface IModel {
    id: number;
    name: string;
}

class Member extends Component <{}, IState> {

    constructor(p: any) {
        super(p);
        this.state = {isLoaded: false, items: []};
    }

    render(): ReactNode {
        if(this.state.isLoaded) {
            
            const item = this.state.items.map((v: IModel) => (
                <li key={v.id}>{v.name}</li>
            ));
            return (<>
                <ul>
                    {item}
                </ul>
            </>);
        }
        else {
            return <h1>Loading......</h1>;
        }
    }

    componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( (res) => res.json())
        .then((value) => {
                this.setState({
                    isLoaded: true,
                    items: value,
                });
            },
            (error) => {
                this.setState({
                    //isLoaded: true,
                    //error
                })
            }
        )
    }
    
}

export default Member;