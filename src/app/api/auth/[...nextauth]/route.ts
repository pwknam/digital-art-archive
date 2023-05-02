import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authRouteHandler: NextAuthOptions = {
  pages: {
    signIn: "/login",
    newUser: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      session.user.id = token.sub;
      console.log("user:", user);
      console.log("token:", token);

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Kyushik" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.username,
            password: credentials?.password,
          },
        });

        console.log(user);

        if (user) {
          return user;
        } else {
          const newUser = await prisma.user.create({
            data: {
              email: credentials?.username,
              password: credentials?.password,
            },
          });
          return newUser;
        }

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        //   const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()

        // If no error and we have user data, return it
        //   if (res.ok && user) {
        //     return user
        //   }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
const handler = NextAuth(authRouteHandler);
export { handler as GET, handler as POST };
