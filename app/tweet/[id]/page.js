import { Suspense } from "react";
import TweetCard from ".../components";

async function TweetContent({ params }) {
  const { id } = await params;
  return <div>Tweet {id}</div>;
}

export default function TweetPage({ params }) {
  return (
    <Suspense fallback={<div>Loading tweet...</div>}>
      <TweetCard params={params} />
      <TweetContent params={params} />
    </Suspense>
  );
}
