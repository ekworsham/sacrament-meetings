import { NextRequest, NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";


export async function GET(request: NextRequest) {
  const query = new URL(request.url).searchParams.get("query") ?? ""; 
  const meetings = await getMeetings(query);
  return NextResponse.json(meetings);
}


// export async function GET(request: NextRequest) {
//   const query = request.nextUrl.searchParams.get("query") ?? "";

//   const meetings = await getMeetings(query);

//   return NextResponse.json(meetings);
// }