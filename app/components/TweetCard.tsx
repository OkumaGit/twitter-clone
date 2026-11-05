import Link from "next/link";
import { useEffect, useState } from "react";

type Tweet = {
  id: number;
  user: string;
  content: string;
  timestamp: string;
};

export default function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <article className="w-full max-w-xl rounded border border-zinc-200 bg-white p-3 shadow-sm hover:bg-sky-700">
      <p className="font-semibold">{tweet.user}</p>
      <p className="mt-1 text-sm">{tweet.content}</p>
      <small className="mt-2 block text-zinc-500">{tweet.timestamp}</small>
    </article>
  );
}
