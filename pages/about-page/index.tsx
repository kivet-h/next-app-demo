import React, { FC } from "react";
import Router from "next/router";

interface IProps {}

const AboutPage: FC<IProps> = (props) => {
  return <div onClick={() => Router.push("/posts")}>AboutPage to posts page</div>;
};

export default AboutPage;
