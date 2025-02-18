import withAuth from "@/hoc/withAuth";
import React from "react";

const Overview: React.FC = ({}) => {
  return <div>Welcome to OverView screeen</div>;
};

export default withAuth(Overview);
