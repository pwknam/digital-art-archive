import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

// export default async function createAccount(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { email, password } = req.body;

//   // Check if the email is already in use
//   const existingUser = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (existingUser) {
//     return res.status(400).json({ error: "Email is already in use" });
//   }

//   // Create the new user account
//   const newUser = await prisma.user.create({
//     data: {
//       email,
//       password,
//     },
//   });

//   res.status(200).json({ message: "Account created successfully" });
// }

export async function POST(request: Request) {
  const res = await request.json();
  const newUser = await prisma.user.create({
    data: { ...res },
  });
  console.log(res);
  return NextResponse.json({ res });
}
