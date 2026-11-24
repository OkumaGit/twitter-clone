"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import TweetCard from "../components/TweetCard";
import TweetForm from "../components/TweetForm";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import SideBar from "../components/Sidebar";

interface Tweet {
  user: string;
  content: string;
  timestamp: string;
  _id: string;
}

export default function Profile() {
  // Fetching tweets
  const [tweets, setTweets] = useState<Tweet[]>([]);
  useEffect(() => {
    async function fetchTweets() {
      try {
        const res = await fetch("/api/tweets");
        if (!res.ok) {
          const body = await res.json();
          throw new Error(body.error ?? `HTTP ${res.status}`);
        }
        const data = await res.json();
        setTweets(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTweets();
  }, []);

  return (
    <div>
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <main className="mx-auto w-full max-w-2xl">
          <section className="mb-6 rounded-lg bg-white p-4 shadow-sm">
            <TweetForm />
          </section>
          <section aria-labelledby="latest-tweets">
            <div className="flex w-full max-w-2xl justify-between">
              <h2 id="latest-tweets" className="mb-4 text-xl font-bold">
                Latest Tweets
              </h2>
              <p>{tweets.length}</p>
            </div>
            <div className="space-y-4">
              {tweets.map((tweet) => (
                <div key={tweet._id}>
                  <Link key={tweet._id} href={`/tweet/${tweet._id}`}>
                    <TweetCard tweet={tweet} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
  //
}
