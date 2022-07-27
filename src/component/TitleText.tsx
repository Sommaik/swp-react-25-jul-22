import { Component, ReactNode } from "react";
import { Button } from "@mui/material";
import { RootState } from "../app/store";
import { increment } from "../app/slice/counter-slice";
import { connect } from "react-redux";
import { ConnectedProps } from "react-redux";

type Props = {
  value: string;
};

type State = {
  cnt: number;
};

const mapState = (state: RootState, ownState?: Props) => {
  return { cnt: state.counter.value, value: ownState?.value };
};

const mapDispatch = {
  increment,
};

// type PropFromRedux = ConnectedProps<typeof connector>;

class TitleText extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { cnt: 0 };
  }

  onClick(): void {
    // this.setState((state, props) => ({
    //   cnt: state.cnt + 1,
    // }));
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

  componentDidMount(): void {
    console.log("when after create");
  }
}

const connector = connect(mapState, mapDispatch);

export default TitleText;
