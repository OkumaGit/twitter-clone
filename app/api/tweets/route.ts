import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
    {
      id: 1,
      user: "JohnDoe",
      content: "Hello Next.js!",
      timestamp: "2m ago",
    },
    {
      id: 2,
      user: "JaneDoe",
      content: "Another tweet",
      timestamp: "5m ago",
    },
  ]);
}
