"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import TweetCard from "./components/TweetCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TweetForm from "./components/TweetForm";
import SideBar from "./components/Sidebar";

interface Tweet {
  id: number;
  user: string;
  content: string;
  timestamp: string;
  _id: number;
}

export default function Home() {
  // Fetching tweets
  const [tweets, setTweets] = useState<Tweet[]>([]);
  useEffect(() => {
    async function fetchTweets() {
      const res = await fetch("/api/tweets");
      const data = await res.json();
      setTweets(data);
    }
    fetchTweets();
  }, []);
  //

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex-1">
          <SideBar />
        </div>
        {/* <div className="flex flex-col flex-3 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-col gap-2">
            </div>
          </div> */}
        <div className="flex flex-2">
          <main className="mx-auto w-full max-w-2xl">
            <section className="mb-6 rounded-lg bg-white p-4 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">What's new?</h2>
              <TweetForm />
            </section>
            <section aria-labelledby="latest-tweets">
              <div className="flex w-full max-w-xl justify-between">
                <h2 id="latest-tweets" className="mb-4 text-xl font-bold">
                  Latest Tweets
                </h2>
                <p>{tweets.length}</p>
              </div>
              <div className="space-y-4">
                {tweets.map((tweet) => (
                  <div key={tweet._id}>
                    <Link key={tweet.id} href={`/tweet/${tweet._id}`}>
                      <TweetCard tweet={tweet} />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
