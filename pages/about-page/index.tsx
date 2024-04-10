import React, { FC } from "react";
import Router from "next/router";

interface IProps {}

const AboutPage: FC<IProps> = (props) => {
  return (
    <div className="flex items-center">
      <div className="flex-1">AboutPage</div>
      <div className="flex-1 cursor-pointer text-[#000000]" onClick={() => Router.push("/posts")}>
        AboutPage to posts page
      </div>
    </div>
  );
};

export default AboutPage;
