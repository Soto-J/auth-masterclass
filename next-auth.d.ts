import "next-auth";
import "next-auth/jwt";
import { DefaultSession } from "next-auth";

export type ExtendUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  interface Session {
    user: ExtendUser;
  }
}

// declare module "next-auth/jwt" {
//   interface JWT {
// user: {
//   role: "ADMIN" | "USER";
// };
//   }
// }
