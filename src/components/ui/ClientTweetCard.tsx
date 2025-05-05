"use client";

import { useEffect, useState } from "react";
import { TweetProps, useTweet } from "react-tweet";
import { MagicTweet, TweetNotFound, TweetSkeleton } from "@/components/magicui/tweet-card";

export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: Omit<TweetProps, 'apiUrl'> & { apiUrl?: string; className?: string }) => {
  const [dynamicId, setDynamicId] = useState<string | null>(id || null); // Use the provided ID or null initially

  // Fetch the latest tweet ID dynamically
  useEffect(() => {
    if (!id) {
      const fetchLatestTweetId = async () => {
        try {
          const response = await fetch("https://api.twitter.com/2/users/:id/tweets?max_results=1", {
            headers: {
              Authorization: `AAAAAAAAAAAAAAAAAAAAAOPZ0wEAAAAAsPuYOME6YLaC%2F1ru3NDnDQxaLm0%3DAs7aif0BW5CO4zAliGyXBhSTtSonuSG7Py3Iz8baQM9FrKnEtS`, // Replace with your actual token
            },
          });
          const data = await response.json();
          if (data && data.data && data.data.length > 0) {
            setDynamicId(data.data[0].id); // Set the latest tweet ID
          }
        } catch (error) {
          console.error("Error fetching the latest tweet ID:", error);
        }
      };

      fetchLatestTweetId();
    }
  }, [id]);

  // Use the dynamic ID for fetching the tweet
  const { data, error, isLoading } = useTweet(dynamicId ?? undefined, apiUrl, fetchOptions);

  if (isLoading) return fallback;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <MagicTweet tweet={data} components={components} {...props} />;
};