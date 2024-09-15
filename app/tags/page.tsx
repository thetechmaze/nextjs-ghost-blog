import { getTags } from "@/actions/getTags";
import Header from "@/components/Header";
import { ITag } from "@/components/PostCard";
import Link from "next/link";

export default async function Tags() {
  // const sampleTags = [
  //   {
  //     id: "ddafadf",
  //     name: "Getting Started",
  //     slug: "getting-started",
  //   },
  //   {
  //     id: "ddafadf",
  //     name: "Fiction",
  //     slug: "fiction",
  //   },
  // ];

  const tags: ITag[] = await getTags();
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      {tags ? (
        <div className="flex flex-wrap space-x-5 mt-10">
          {tags.map((tag, idx) => (
            <Link
              key={idx}
              href={`/tags/${tag.slug}`}
              className="px-10 py-4 font-semibold text-xl border rounded-lg"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      ) : (
        <div>no tags yet</div>
      )}
    </div>
  );
}
