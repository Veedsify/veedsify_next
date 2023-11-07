import Link from "next/link";
import { BsGithub, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
export default function FooterLinks() {
    return (
      <>
        <section className="py-10 short_section">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-8 mt-12">
            <Link
              href="/"
              className="justify-center p-8 border-2 text-2xl border-purple-400 border-dashed rounded-lg flex items-center gap-2"
            >
              <BsGithub className="text-5xl" />
              Github
            </Link>
            <Link
              href="/"
              className="justify-center p-8 border-2 text-2xl border-purple-400 border-dashed rounded-lg flex items-center gap-2 "
            >
              <BsYoutube className="text-5xl" />
              YouTube
            </Link>
            <Link
              href="/"
              className="justify-center p-8 border-2 text-2xl border-purple-400 border-dashed rounded-lg flex items-center gap-2 "
            >
              <BsTwitter className="text-5xl" />
              Twitter
            </Link>
            <Link
              href="/"
              className="justify-center p-8 border-2 text-2xl border-purple-400 border-dashed rounded-lg flex items-center gap-2 "
            >
              <BsInstagram className="text-5xl" />
              Instagram
            </Link>
          </div>
        </section>
      </>
    );
}