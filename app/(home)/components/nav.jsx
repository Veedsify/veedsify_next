import Link from "next/link";

export default function Nav() {
  return (
    <>
      <header className="border-b border-black">
        <nav className="flex items-center">
          <Link href="/">
            <h2 className="text-2xl">VeedSIFY</h2>
          </Link>
          <ul className=" flex gap-4 ml-auto">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
