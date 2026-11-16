import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import Tweet from "@/app/models/Tweet";

// export function GET() {
//   const tweets = [
//     {
//       id: 1,
//       user: "JohnDoe",
//       content: "Hello Next.js!",
//       timestamp: "2m ago",
//     },
//     {
//       id: 2,
//       user: "JaneDoe",
//       content: "Another tweet",
//       timestamp: "5m ago",
//     },
//   ];

//   return NextResponse.json(tweets);
// }

export async function GET() {
  try {
    await connectToDatabase();

    let tweets = await Tweet.find({}).sort({
      createdAt: -1,
    });

    if (tweets.length === 0) {
      await Tweet.create([
        {
          user: "JohnDoe",
          content: "Hi from Docker MongoDB",
          timestamp: "1min ago",
        },
        {
          user: "JohnDoe",
          content: "Second tweet from real MongoDB",
          timestamp: "Just now",
        },
      ]);
    }
    return NextResponse.json(tweets);
  } catch (error) {
    console.error("Error with getting Tweets", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const newTweet = await Tweet.create({
      user: body.user || "Anonymous",
      content: body.content,
      timestamp: "Just now",
    });
    return NextResponse.json(newTweet, { status: 201 });
  } catch (error) {
    console.error("Error while creating tweet");
    return NextResponse.json({ error: "Tweet wasnt created" }, { status: 500 });
  }
}
