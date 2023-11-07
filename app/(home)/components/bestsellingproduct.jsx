import Image from "next/image";
import Link from "next/link";
import Stars from "./stars";

export default function BestSellingProducts() {
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-20">
          <div>
            <h3 className="text-indigo-600 mb-3 font-medium">
              Featured Product
            </h3>
            <p className="font-medium text-3xl md:text-5xl">
              Browse this weeks best selling
            </p>
          </div>
          <Link
            href="/shop"
            className=" mt-3 bg-indigo-600 text-white px-8 py-4 border border-indigo-600 duration-300 rounded hover:bg-transparent hover:text-indigo-600"
          >
            See More
          </Link>
        </div>
        <div className="md:grid grid-cols-2 gap-4">
          <div className="relative aspect-square group mb-8 rounded-md overflow-hidden">
            <Image
              src="/image7.jpg"
              alt="project"
              className="object-cover rounded -z-10 h-auto"
              fill
              sizes="(max-width: 768px) 100%"
              priority
            />
            <div className=" flex flex-col justify-center card transition-all opacity-0 duration-300 group-hover:opacity-100 h-full p-5">
              <h3 className="text-white mt-auto text-3xl font-medium mb-6 duration-700 translate-y-4 group-hover:-translate-y-4 max-w-lg">
                Fullstack React TSX Developer with Mern Stack Course
              </h3>
              <div className="duration-500 translate-y-3 group-hover:-translate-y-3 mb-4">
                <div className="flex items-center gap-2 text-lg">
                  <Stars Data={{ num: 5 }} />{" "}
                  <span className="ml-5 text-white">(310)</span>
                </div>
              </div>
              <Link
                href="/"
                className="px-4 py-2 rounded border hover:bg-white hover:text-black border-white text-white duration-500 translate-y-2 group-hover:-translate-y-2 text-center "
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div className="relative aspect-square group mb-8 rounded-md overflow-hidden">
            <Image
              src="/image5.jpg"
              alt="project"
              className="object-cover rounded -z-10 h-auto"
              fill
              sizes="(max-width: 768px) 100%"
              priority
            />
            <div className=" flex flex-col justify-center card transition-all opacity-0 duration-300 group-hover:opacity-100 h-full p-5">
              <h3 className="text-white mt-auto text-3xl font-medium mb-6 duration-700 translate-y-4 group-hover:-translate-y-4 max-w-lg">
                Fullstack React TSX Developer with Mern Stack Course
              </h3>
              <div className="duration-500 translate-y-3 group-hover:-translate-y-3 mb-4">
                <div className="flex items-center gap-2 text-lg">
                  <Stars Data={{ num: 5 }} />{" "}
                  <span className="ml-5 text-white">(310)</span>
                </div>
              </div>
              <Link
                href="/"
                className="px-4 py-2 rounded border hover:bg-white hover:text-black border-white text-white duration-500 translate-y-2 group-hover:-translate-y-2 text-center "
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
