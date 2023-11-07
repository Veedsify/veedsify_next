import Image from "next/image";
import Link from "next/link";

export default function HireSection() {
  return (
    <>
      <div className="relative">
        <Image
          src="/image2.jpg"
          fill
          sizes="(max-width: 768px) 100%"
          alt="background"
          className="-z-20 object-cover"
        />
        <div className="bg-black opacity-70 absolute inset-0 -z-10"></div>
        <section className="short_section py-24">
          <div className="md:grid grid-cols-2 gap-6 text-white items-center">
            <div className="mb-8 md:mb-0">
              <h1 className="font-bold text-3xl md:text-5xl text-white">
                Hire me <br /> as a product design <br /> great skills elite.
              </h1>
            </div>
            <div>
              <p className="text-2xl mb-3 text-white">
                I am product designer, who are excited about unique ideas and
                help
              </p>
              <Link
                href="/"
                className="bg-indigo-600 text-white inline-block px-8 py-4 border border-indigo-600 duration-300 rounded hover:bg-transparent hover:text-white hover:border-white"
              >
                Download CV
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
