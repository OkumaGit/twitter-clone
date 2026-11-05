export default async function TweetPage({ params }) {
  const { id } = await params;
  return <div>Tweet {id}</div>;
}
