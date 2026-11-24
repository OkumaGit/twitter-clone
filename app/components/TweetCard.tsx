"use client";
import { useState, type MouseEvent } from "react";
import { CURRENT_USER_ID } from "../lib/auth";

type Tweet = {
  _id: string;
  user: string;
  content: string;
  timestamp: string;
  upvotes?: string[];
  downvotes?: string[];
};

export default function TweetCard({ tweet }: { tweet: Tweet }) {
  const [upvotes, setUpwotes] = useState<string[]>(tweet.upvotes ?? []);
  const [downvotes, setdownvotes] = useState<string[]>(tweet.downvotes ?? []);
  const [isVoting, setIsVoting] = useState(false);

  const hasUpvotesd = upvotes.includes(CURRENT_USER_ID);
  const hasDownvoted = downvotes.includes(CURRENT_USER_ID);

  return (
    <article className="w-full rounded border border-zinc-200 bg-white p-3 shadow-sm hover:bg-sky-300">
      <p className="font-semibold">{tweet.user}</p>
      <p className="font-semibold">{tweet._id}</p>
      <p className="mt-1 text-sm">{tweet.content}</p>
      <small className="mt-2 block text-zinc-500">{tweet.timestamp}</small>
    </article>
  );
}
