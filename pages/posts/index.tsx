import React, { FC } from "react";
import Router from "next/router";

interface IProps {}

const Posts: FC<IProps> = (props) => {
  return <div onClick={() => Router.push("/posts/1")}>Posts</div>;
};

export default Posts;
