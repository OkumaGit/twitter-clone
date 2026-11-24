import mongoose, { Schema, models, model } from "mongoose";

export interface ITweet {
  user: string;
  content: string;
  timestamp?: string;
  createdAt?: Date;
  upvotes: string[];
  downvotes: string[];
}

const TweetSchema = new Schema<ITweet>(
  {
    user: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: String, default: "Just now" },
    upvotes: { type: [String], default: [] },
    downvotes: { type: [String], default: [] },
  },
  { timestamps: true },
);

const Tweet = models.Tweet || model<ITweet>("Tweet", TweetSchema);

export default Tweet;
