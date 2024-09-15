import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="py-5 flex justify-between">
        <Link
          href={"/"}
          className="text-2xl cursor-pointer select-none px-2 py-1 font-bold"
        >
          Ghost Blog
        </Link>
        <div className="flex justify-between text-xl space-x-10">
          <Link
            href={"/blog"}
            className="hover:bg-slate-200 px-2 py-1 rounded-lg cursor-pointer hover:text-slate-800"
          >
            Blog
          </Link>
          <Link
            href={"/tags"}
            className="hover:bg-slate-200 px-2 py-1 rounded-lg cursor-pointer hover:text-slate-800"
          >
            Tags
          </Link>
        </div>
      </div>
      <div className="border border-b"></div>
    </div>
  );
}
