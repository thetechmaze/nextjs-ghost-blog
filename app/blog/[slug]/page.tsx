import { getPostBySlug } from "@/actions/getPostBySlug";
import Header from "@/components/Header";
import { IPost } from "@/components/PostCard";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post: IPost | undefined = await getPostBySlug(
    params.slug
  );
  if (!post) {
    redirect("/");
  }
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      {/* feature image */}
      <div className="relative z-0 max-w-screen-lg my-10 mx-auto overflow-hidden lg:rounded-lg aspect-video">
        {post.feature_image && (
          <Image
            src={post.feature_image}
            alt={
              post.feature_image_alt
                ? post.feature_image_alt
                : ""
            }
            width={"0"}
            height={"0"}
            sizes="100vw"
            className="w-full rounded-lg h-auto"
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        {/* title */}
        <div>
          <h1 className="px-4 text-center text-2xl font-bold md:text-4xl">
            {post.title}
          </h1>
        </div>

        {/* data and reading time */}
        <div className="flex items-center space-x-2 text-muted">
          <p className="text-xs font-semibold md:text-sm">
            {post.updated_at}
          </p>
          <span>||</span>
          <p className="text-xs font-semibold md:text-sm">
            {post.reading_time} mins read
          </p>
        </div>
      </div>

      <div className="border border-b mt-5"></div>

      <article className="relative w-full max-w-4xl mx-auto text-white">
        <div className="mx-auto max-w-3xl text-justify py-3 prose dark:prose-invert prose-a:text-blue-500">
          {post.html && (
            <div
              dangerouslySetInnerHTML={{
                __html: post.html,
              }}
            ></div>
          )}
        </div>
      </article>
    </div>
  );
}
