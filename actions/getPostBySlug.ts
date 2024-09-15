"use server";

import { IPost } from "@/components/PostCard";

export async function getPostBySlug(slug: string) {
  const postUrl = `${process.env.GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags,authors&order=published_at%20desc&filter=slug:${slug}`;

  const postResponse = await fetch(postUrl).then(
    async function (res) {
      const status = res.status;
      const data = await res.json();
      return { data, status };
    }
  );

  if (postResponse.status != 200) {
    console.log(postResponse.data.errors);
    return undefined;
  }
  const post: IPost | undefined =
    postResponse.data.posts[0];

  if (!post) {
    return undefined;
  }

  post.published_at = post.published_at.split("T")[0];
  post.updated_at = post.updated_at.split("T")[0];

  return post;
}
