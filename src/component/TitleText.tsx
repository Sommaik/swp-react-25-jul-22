import { Component, ReactNode } from "react";
import { Button } from "@mui/material";

type Props = {
  value: string;
};

type State = {
  cnt: number;
};

class TitleText extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { cnt: 0 };
  }

  onClick(): void {
    this.setState((state, props) => ({
      cnt: state.cnt + 1,
    }));
  }

  onTextChage(event: any): void {
    this.setState((state, props) => ({
      cnt: event.target.value,
    }));
  }

  render(): ReactNode {
    return (
      <>
        <input type="text" onChange={(evt) => this.onTextChage(evt)} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.onClick()}
        >
          {this.props.value} - {this.state.cnt}
        </Button>
      </>
    );
  }
}

export default TitleText;
