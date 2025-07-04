// app/api/admin/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
 const cookieStore = await cookies();
  cookieStore.delete("admin-auth"); 
  return NextResponse.json({ success: true });
}
