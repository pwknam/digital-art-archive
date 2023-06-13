/* eslint-disable react/no-children-prop */
"use client";
import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export const SessionProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  session: Session | null | undefined;
}) => {
  return (
    <NextAuthSessionProvider
      children={props.children}
      session={props.session}
    />
  );
};
