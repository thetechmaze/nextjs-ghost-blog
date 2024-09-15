"use server";

import { ITag } from "@/components/PostCard";

export async function getTags() {
  const tagsUrl = `${process.env.GHOST_API_URL}/ghost/api/content/tags/?key=${process.env.GHOST_CONTENT_API_KEY}`;

  const tagsResponse = await fetch(tagsUrl).then(
    async function (res) {
      const status = res.status;
      const data = await res.json();
      return { data, status };
    }
  );

  if (tagsResponse.status != 200) {
    console.log(tagsResponse.data.errors);
    return [];
  }
  let tags: ITag[] = tagsResponse.data.tags;

  if (tags == undefined) tags = [];

  return tags;
}
