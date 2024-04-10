import React, { FC } from "react";
import { useRouter } from "next/router";

interface IProps {}

const PostsDetail: FC<IProps> = (props) => {
  const router = useRouter();
  console.log(router, "============");

  return <div>PostsDetail</div>;
};

export default PostsDetail;
