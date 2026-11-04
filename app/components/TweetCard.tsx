<<<<<<< HEAD
import Link from "next/link";
import { useEffect, useState } from "react";

interface Tweet {
  id: number;
  user: string;
  content: string;
  timestampt: string;
}

type PageProps = { params: Promise<{ id: string }> };

const [tweets, setTweets] = useState<Tweet[]>([]);

export default async function TweetCard({ params }: PageProps) {
  const { id } = await params;
  return tweets.map((tweet) => (
    <>
      <Link href={`/tweet/${tweet.id}`}>
        <div>It's {id}</div>
      </Link>
    </>
  ));
=======
type Tweet = {
  id: number;
  user: string;
  content: string;
  timestamp: string;
};

export default function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <article className="w-full max-w-xl rounded border border-zinc-200 bg-white p-3 shadow-sm">
      <p className="font-semibold">{tweet.user}</p>
      <p className="mt-1 text-sm">{tweet.content}</p>
      <small className="mt-2 block text-zinc-500">{tweet.timestamp}</small>
    </article>
  );
>>>>>>> 970c92d (added few updates to M1)
}
