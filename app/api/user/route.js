import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const User = require("../../../models/user");

<<<<<<< HEAD
export async function GET(req) {
  const user = await req.user.json();
  return Response.json(user, { status: 200 });
}

export async function POST(req) {
  const body = await req.body.json();
  console.log("body", body);
  const { firstname, lastname, username, password, email } = body;
  const user = new User({ username, email, firstname, lastname });
  await User.register(user, password);
  redirect("/");
  return new Response("User created successfully", { status: 200 });
=======
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
>>>>>>> 1818d2a (post server)
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({
    data,
  });
}
// export default async function route(req, res) {
//   if (req.method === "GET") {
//     const user = req.user;
//     res.status(200).json(user);
//   }
//   if (req.method === "POST") {
//     console.log("h");
//     const { firstname, lastname, username, password, email } = req.body;
//     const user = new User({ username, email, firstname, lastname });
//     const registeredUser = await User.register(user, password);
//     res.redirect("/");
//   }
// }
