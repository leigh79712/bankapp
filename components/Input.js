"use client";
import React from "react";
import { useTheme } from "next-themes";
export default function Input(props) {
  const { theme, setTheme } = useTheme();
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`${theme == "dark" ? "bg-white" : "bg-[#f3f5f8]"} 
      border p-1 w-2/3 h-10 rounded mb-4`}
      name={props.name}
    />
  );
}
