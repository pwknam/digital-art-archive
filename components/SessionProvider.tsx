"use client";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export const SessionProvider = (props) => {
  return (
    <NextAuthSessionProvider
      children={props.children}
      session={props.session}
    />
  );
};
