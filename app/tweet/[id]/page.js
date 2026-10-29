import { Suspense } from "react";

async function TweetContent({ params }) {
  const { id } = await params;
  return <div>Tweet {id}</div>;
}

export default function TweetPage({ params }) {
  return (
    <Suspense fallback={<div>Loading tweet...</div>}>
      <TweetContent params={params} />
    </Suspense>
  );
}
