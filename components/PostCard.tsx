import Image from "next/image";
import Link from "next/link";

export interface ITag {
  id: string;
  name: string;
  slug: string;
}

export interface IPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string;
  feature_image_alt?: string;
  updated_at: string;
  published_at: string;
  excerpt: string;
  reading_time: number;
  tags: ITag[];
}

export default function PostCard({
  data,
}: {
  data: IPost;
}) {
  return (
    <div className="border p-3 cursor-pointer sm:w-2/4 lg:w-2/5 xl:w-1/4 bg-slate-700 rounded-lg">
      <Link href={`/blog/${data.slug}`}>
        {/* feature image */}
        <div>
          <Image
            src={data.feature_image}
            alt={
              data.feature_image_alt
                ? data.feature_image_alt
                : ""
            }
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full rounded-lg h-auto"
          />
        </div>

        {/* title */}
        <div className="text-lg line-clamp-2 font-semibold mt-2">
          {data.title}
        </div>
      </Link>

      {/* tags */}
      <div className="flex mt-2">
        <span className="py-1 mt-2 text-sm">Tags:</span>
        <div className="flex flex-wrap items-center ml-5 text-xs space-x-4">
          {data.tags.map((tag, idx) => (
            <Link
              className="px-2 py-1 mt-2 border rounded-lg"
              key={idx}
              href={`/tags/${tag.slug}`}
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      <Link href={`/blog/${data.slug}`}>
        {/* excerpt */}
        <div className="text-justify line-clamp-4 mt-2">
          {data.excerpt}
        </div>
      </Link>
    </div>
  );
}
