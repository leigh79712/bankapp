import React from "react";

export default function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className="block text-left w-2/3 mx-auto">
      {props.children}
    </label>
  );
}
