import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

class Parent extends Component<Props> {
  render(): ReactNode {
    return (
      <>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Parent;
