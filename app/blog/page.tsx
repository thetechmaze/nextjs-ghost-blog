import { getPosts } from "@/actions/getPosts";
import Header from "@/components/Header";
import PostCard, { IPost } from "@/components/PostCard";

export default async function Blog() {
  const SamplePost = {
    slug: "welcome-short",
    id: "5c7ece47da174000c0c5c6d7",
    title: "Welcome",
    html: "<p>👋 Welcome, it's great to have you here.</p>",
    feature_image:
      "https://demo.ghost.io/content/images/size/w2000/2022/05/welcome-to-ghost.png",
    feature_image_alt: "",
    updated_at: "2019-03-26T19:45:31.000+00:00",
    published_at: "2012-11-27T15:30:00.000+00:00",
    reading_time: 1,
    excerpt:
      "Welcome, it's great to have you here. Welcome, it's great to have you here. Welcome, it's great to have you here. Welcome, it's great to have you here. Welcome, it's great to have you here.",
    tags: [
      {
        id: "59799bbd6ebb2f00243a33db",
        name: "Getting Started",
        slug: "getting-started",
      },
      {
        id: "59799bbd6ebb2f00233a33db",
        name: "Fiction",
        slug: "fiction",
      },
    ],
  };

  const posts: IPost[] = await getPosts();
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="mt-12 pb-12 w-full flex flex-col sm:flex-row flex-wrap space-x-4 space-y-5 justify-center ">
        <div className="hidden">
          <PostCard data={SamplePost} />
        </div>

        {posts.map((post, idx) => (
          <PostCard key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
