import Link from "next/link";

export default function PageHero({ PageProps }) {
  const { link, title } = PageProps;

  return (
    <>
      <section className="flex flex-col items-center justify-center blog_hero border-b mb-8">
        <h2 className="text-4xl font-medium">{title}</h2>
        <ul className="flex gap-2 mt-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={link}>{title}</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
