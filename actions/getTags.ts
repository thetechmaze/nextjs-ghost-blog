"use server";

// some of the lines with comments have been added after the recording of tutorial to improve the fetching of data
import { ITag } from "@/components/PostCard";
import { revalidatePath } from "next/cache"; // clear the cache for a specific path

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
  // clear cache so clientside can detect changes in data
  revalidatePath("/blog");
  return tags;
}
