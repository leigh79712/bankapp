import React from "react";

export default function Button(props) {
  return (
    <button className="bg-tiffany-green text-sm rounded-3xl cursor-pointer text-white px-6 py-2">
      {props.children}
    </button>
  );
}
