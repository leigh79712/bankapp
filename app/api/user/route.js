const User = require("../../../models/user");

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
}
