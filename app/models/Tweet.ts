import mongoose, { Schema, models, model } from "mongoose";

export interface ITweet {
  user: string;
  content: string;
  timestamp?: string;
  createdAt?: Date;
}

const TweetSchema = new Schema<ITweet>({
  user: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, default: "Just now" },
});

const Tweet = models.Tweet || model<ITweet>("Tweet", TweetSchema);

export default Tweet;
