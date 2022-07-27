import { Button } from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { allPost } from "../app/slice/post-slice";
const ReadPost: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Button onClick={() => dispatch(allPost())}>Read</Button>
    </>
  );
};

export default ReadPost;
