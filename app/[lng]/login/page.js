import React from "react";

import Login from "../../../components/Login/Login";
export default function page({ params: { lng } }) {
  return <Login lng={lng} />;
}
