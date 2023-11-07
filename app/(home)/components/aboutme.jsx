import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <section className="md:grid grid-cols-2 gap-12">
        <div className="flex flex-col items-start justify-center mb-4">
          <div className="relative w-full aspect-square border border-indigo-600 rounded-lg overflow-hidden">
            <Image
              src="/man.png"
              alt="hero image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center my-12">
          <h1 className="text-2xl mb-4 font-medium">About Me:</h1>
          <h1 className="text-3xl font-bold mb-4">
            Find Perfect Dev Based <br />
            on Project
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            minus.
          </p>
          <div className="skills w-full">
            <div className="flex flex-col mb-6">
              <p className="font-medium text-lg mb-2">Express Js</p>
              <div className="relative skill-bar w-full overflow-hidden">
                <div className="absolute bg-indigo-600 top-0 left-0 w-full h-full"></div>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <p className="font-medium text-lg mb-2">Vanilla Js</p>
              <div className="relative skill-bar w-full overflow-hidden">
                <div className="absolute bg-indigo-600 top-0 left-0 w-1/3 h-full"></div>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <p className="font-medium text-lg mb-2">Next Js</p>
              <div className="relative skill-bar w-full overflow-hidden">
                <div className="absolute bg-indigo-600 top-0 left-0 w-2/3 h-full"></div>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="bg-indigo-600 text-white px-8 py-4 border border-indigo-600 duration-300 rounded hover:bg-transparent hover:text-indigo-600"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
