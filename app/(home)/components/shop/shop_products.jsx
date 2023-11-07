import Image from "next/image";
import Link from "next/link";

export default function ShopProducts() {
  return (
    <section>
      <div className="md:grid grid-cols-3 gap-x-4 gap-y-6">
        {/* BLOG */}
        <div className="border rounded-md border-indigo-600 p-4 thick-shadow">
          <Link href="/product/1">
            <div className="relative video_fliped mb-3">
              <Image
                src="/image1.jpg"
                fill
                priority
                alt="blog"
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <p className="mb-3 px-3 py-2 inline-block rounded-sm font-medium bg-gray-100">
            Editing Assets
          </p>
          <Link href="/product/1" className="flex items-center justify-between">
            <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
            <h3 className=" text-2xl mb-5">$5.0</h3>
          </Link>
        </div>
        {/* BLOG */}
        <div className="border rounded-md border-indigo-600 p-4 thick-shadow">
          <Link href="/product/1">
            <div className="relative video_fliped mb-3">
              <Image
                src="/image2.jpg"
                fill
                priority
                alt="blog"
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <p className="mb-3 px-3 py-2 inline-block rounded-sm font-medium bg-gray-100">
            Editing Assets
          </p>

          <Link href="/product/1" className="flex items-center justify-between">
            <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
            <h3 className=" text-2xl mb-5">$5.0</h3>
          </Link>
        </div>

        {/* BLOG */}
        <div className="border rounded-md border-indigo-600 p-4 thick-shadow">
          <Link href="/product/1">
            <div className="relative video_fliped mb-3">
              <Image
                src="/image3.jpg"
                fill
                priority
                alt="blog"
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <p className="mb-3 px-3 py-2 inline-block rounded-sm font-medium bg-gray-100">
            Editing Assets
          </p>
          <Link href="/product/1" className="flex items-center justify-between">
            <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
            <h3 className=" text-2xl mb-5">$5.0</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
