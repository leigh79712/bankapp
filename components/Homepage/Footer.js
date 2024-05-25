import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center h-10 mt-10">
      © Copyright by{" "}
      <Link href="http://www.leighleelin.com"> Jie Lin Yang</Link> and Jerry
      Tsai
    </div>
  );
}
