"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";

export default function TweetForm() {
  const [content, setContent] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function submitTweet(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!content.trim()) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content.trim(),
          user: "JohnDoe",
        }),
      });

      if (!response.ok) {
        throw new Error("Tweet wasn't created");
      }

      setContent("");
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  function getInitials(name: string) {
    return name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  const userName = "John Doe";

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 font-semibold text-white"
          aria-label={`${userName} avatar`}
        >
          {getInitials(userName)}
        </div>
        <h2 className="text-lg font-semibold">What's new?</h2>
      </div>
      <form onSubmit={submitTweet} className="space-y-3">
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="What's happening?"
          disabled={isSending}
          required
          className="w-full rounded-lg border p-3"
        />
        <button
          type="submit"
          disabled={isSending}
          className="rounded-lg bg-sky-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {isSending ? "Publishing..." : "Publish"}
        </button>
      </form>
    </>
  );
}
