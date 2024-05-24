import React from "react";
import logo_light from "../../../public/images/logo-light.svg";
import logo_dark from "../../../public/images/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="">
      <form
        className="w-1/3 mx-auto text-center mt-20 p-10 rounded shadow-lg shadow-indigo-600/60"
        action=""
      >
        <Image src={logo_dark} height={100} width={200} className="mx-auto" />
        <h1 className="text-xl my-5 mx-auto">Sign In</h1>

        <label htmlFor="username" className="block text-left w-2/3 mx-auto">
          username
        </label>
        <input
          type="text"
          name="username"
          className="bg-white w-2/3 h-10 rounded mb-2 text-black"
          placeholder="username"
        />
        <label htmlFor="username" className="block text-left w-2/3 mx-auto">
          password
        </label>
        <input
          type="password"
          className="bg-white w-2/3 h-10 rounded mb-2 text-black"
          placeholder="password"
        />
        <label htmlFor="username" className="block text-left w-2/3 mx-auto">
          confirm-password
        </label>
        <input
          type="password"
          className="bg-white w-2/3 h-10 rounded mb-2  text-black"
          placeholder="confirm-password"
        />
        <label htmlFor="username" className="block text-left w-2/3 mx-auto">
          E-mail
        </label>
        <input
          type="email"
          className="bg-white w-2/3 h-10 rounded mb-2  text-black"
          placeholder="email"
        />
        <input
          type="submit"
          className="block w-1/3 bg-white text-black rounded border-none my-10 mx-auto h-8"
        />
        <p>
          Don't have account?{" "}
          <Link href="/login" className="mx-2 text-indigo-200">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
