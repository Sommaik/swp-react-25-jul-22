import { FC } from "react";
import { useParams } from "react-router-dom";
import { Typography as Text } from "@mui/material";

const BlogPost: FC = () => {
  const { slug, id } = useParams();
  return <Text variant="h2">{slug}</Text>;
};

export default BlogPost;
