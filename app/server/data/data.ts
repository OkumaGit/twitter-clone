import fs from "node:fs/promises";

import type { Tweet } from "@/app/server/data/data";

const TWEETS_FILE = "./tweets.json";

export async function getTweets(): Promise<Tweet[]> {
  try {
    const data = await fs.readFile(TWEETS_FILE, "utf-8");
    return JSON.parse(data) as Tweet[];
  } catch (error) {
    console.error("Error rading tweets:", error);
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw new Error(``);
  }
}
