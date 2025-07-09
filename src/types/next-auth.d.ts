// types/next-auth.d.ts

import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "admin" | "user";
    };
  }

  interface User {
    role?: "admin" | "user";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "admin" | "user";
  }
}
