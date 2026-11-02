"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import TweetCard from "@/components/TweetCard";

interface Tweet {
  id: number;
  user: string;
  content: string;
  timestamp: string;
}

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    async function fetchTweets() {
      const res = await fetch("/api/tweets");
      const data = await res.json();
      setTweets(data);
    }
    fetchTweets();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Latest Tweets</h1>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
            <p className="hover:bg-sky-700">
              <strong>{tweet.user}</strong>:{tweet.content}import TweetCard from
              "@/components/TweetCard";
            </p>
            <small>{tweet.timestamp}</small>
            <TweetCard tweet={tweet} />
          </Link>
        </div>
      ))}
    </div>
  );
}
