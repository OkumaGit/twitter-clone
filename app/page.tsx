"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import TweetCard from "./components/TweetCard";
=======
import TweetCard from "@/app/components/TweetCard";
>>>>>>> 970c92d (added few updates to M1)

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
    <div className="flex flex-col gap-5 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Latest Tweets</h1>
<<<<<<< HEAD
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
            <p className="hover:bg-sky-700">
              <strong>{tweet.user}</strong>:{tweet.content}
            </p>
            <small>{tweet.timestamp}</small>
            {/* <TweetCard tweet={tweet} /> */}
            <TweetCard params={Tweet} />
          </Link>
        </div>
      ))}
=======
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <Link href={`/tweet/${tweet.id}`}>
              {/* <p className="hover:bg-sky-700">
              <strong>{tweet.user}</strong>:{tweet.content}
            </p>
            <small>{tweet.timestamp}</small> */}
              <TweetCard tweet={tweet} />
            </Link>
          </div>
        ))}
      </div>
>>>>>>> 970c92d (added few updates to M1)
    </div>
  );
}
