"use server";

import { IPost } from "@/components/PostCard";

export async function getPostsByTag(tagSlug: string) {
  let posts;

  const fields =
    "slug,title,feature_image,feature_image_alt,published_at,updated_at,excerpt,reading_time";

  const postsUrl = `${process.env.GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags,authors&order=published_at%20desc&fields=${fields}&filter=tag:${tagSlug}`;

  const postsResponse = await fetch(postsUrl).then(
    async function (res) {
      const status = res.status;
      const data = await res.json();
      return { data, status };
    }
  );

  if (postsResponse.status != 200) {
    console.log(postsResponse.data.errors);
    return [];
  }
  posts = postsResponse.data.posts;

  if (posts == undefined) posts = [];

  posts.map(
    (post: IPost) => (
      (post.published_at = post.published_at.split("T")[0]),
      (post.updated_at = post.updated_at.split("T")[0])
    )
  );

  return posts;
}
