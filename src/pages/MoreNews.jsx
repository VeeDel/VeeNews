import React from "react";
import { useLocation } from "react-router-dom";

export const MoreNews = () => {
  const location = useLocation();
  const { topics } = location.state || {};
  console.log("topics", topics);
  return <div>MoreNews</div>;
};
