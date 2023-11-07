import Image from "next/image";
import Link from "next/link";

export default function BlogPosts() {
  return (
    <section className="mb-28">
      <div className="md:grid grid-cols-2 gap-x-4 gap-y-6">
        {/* BLOG */}
        <div className="thick-shadow border border-indigo-600 rounded-md p-4">
          <Link href="/blog/1">
            <div className="relative aspect-video mb-3">
              <Image
                src="/image1.jpg"
                fill
                sizes="(max-width: 768px) 100%"
                priority
                alt="blog"
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <Link href="/blog/1">
            <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            excepturi aliquid esse voluptatem natus accusantium provident iste,
            quam omnis libero.
          </p>
          <Link href="/blog/1" className="text-blue-600 block mt-3">
            Read..
          </Link>
        </div>
        {/* BLOG */}
        <div className="thick-shadow border border-indigo-600 rounded-md p-4">
          <Link href="/blog/1">
            <div className="relative aspect-video mb-3">
              <Image
                src="/image2.jpg"
                fill
                sizes="(max-width: 768px) 100%"
                priority
                alt="blog"
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <Link href="/blog/1">
            <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            excepturi aliquid esse voluptatem natus accusantium provident iste,
            quam omnis libero.
          </p>
          <Link href="/blog/1" className="text-blue-600 block mt-3">
            Read..
          </Link>
        </div>

        {/* BLOG */}
        <div className="thick-shadow border border-indigo-600 rounded-md p-4">
          <Link href="/blog/1">
            <div className="relative aspect-video mb-3">
              <Image
                src="/image3.jpg"
                fill
                sizes="(max-width: 768px) 100%"
                priority
                alt="blog"
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <Link href="/blog/1">
            <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            excepturi aliquid esse voluptatem natus accusantium provident iste,
            quam omnis libero.
          </p>
          <Link href="/blog/1" className="text-blue-600 block mt-3">
            Read..
          </Link>
        </div>
      </div>
    </section>
  );
}
