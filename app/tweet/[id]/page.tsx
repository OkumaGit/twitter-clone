export const instant = false;
type TweetPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TweetPage({ params }: TweetPageProps) {
  const { id } = await params;
  return (
    <main className="container mx-auto p-6 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Tweet Page {id}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          This is the Tweet Page. ID: {id}
          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            app/tweet/page.tsx {id}
          </code>
          file to modify this page.
        </p>
      </div>
    </main>
  );
}
