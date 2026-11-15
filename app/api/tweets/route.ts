import { NextResponse } from "next/server";

export function GET() {
  const tweets = [
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
  ];

  return NextResponse.json(tweets);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "Tweet created", data: body });
}
