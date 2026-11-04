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
}
