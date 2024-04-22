import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_light from "../public/images/logo-light.png";
import sun from "../public/images/icons/sun.svg";
export default function Navbar() {
  return (
    <div className="flex h-14 items-center p-8 justify-evenly">
      <Image src={logo_light} width={130} alt="logo-light" />
      <div className="flex justify-between w-4/12 uppercase">
        <div>Home</div>
        <div>Feature</div>
        <div>Operations</div>
      </div>
      <div>
        <Link href="">Registers</Link>
        <Image src={sun} width={10} height={10} alt="sun" />
      </div>
    </div>
  );
}
