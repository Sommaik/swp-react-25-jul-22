import { FC, Fragment } from "react";
import { Typography as Text, Button } from "@mui/material";
import BigText from "./BigText";
import TitleText from "./TitleText";
import Parent from "./Parent";

const name = "Hello World";

const sayName = (n?: string) => `
    Hello ${name}

`;

const showName = (n?: string) => {
  let elm = (
    <Button variant="contained" color="primary">
      No name
    </Button>
  );
  if (n) {
    elm = <Text variant="body1">{n}</Text>;
  }
  return elm;
};

const elem = (
  <Fragment>
    <h1>{sayName()}</h1>
    <Text variant="h1">Simple</Text>
    <Text variant="h1">{sayName("Another name")}</Text>
    <div>{showName()}</div>
    <div>{showName("Text")}</div>
    <BigText text="" code="" model={{ year: 1, day: 1 }} />
    <TitleText value="XXXX" />
    <Parent title="Parent container">
      <TitleText value="Child Btn" />
    </Parent>
  </Fragment>
);

const HelloWorld: FC = () => {
  return elem;
};

// export {HelloWorld, HelloWorld as HW, BigText};
export default HelloWorld;
