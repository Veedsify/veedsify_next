import Image from "next/image";
import Link from "next/link";
import MyProject from "./project";

export default function HomeProjects() {
  return (
    <>
      <div className="relative">
        <Image
          src="/image3.jpg"
          fill
          sizes="(max-width: 768px) 100%"
          priority
          className="h-auto -z-10 object-cover opacity-75"
          alt="Services Background"
        />
        <div className="absolute bg-black opacity-80 inset-0 -z-10"></div>
        <section className="relative short_section mb-4 py-28">
          <div className="p-4 w-full text-white">
            <h4 className="text-center text-lg font-medium uppercase mb-2">
              My Projects
            </h4>
            <h1 className="text-4xl font-bold mb-8 text-white text-center">
              Let’s Check my Best Works
            </h1>
            <div className="flex justify-center">
              <p className="max-w-2xl mb-8 text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                assumenda at aut est excepturi, fuga fugiat fugit harum illo,
                incidunt iste magnam quia quisquam rem rerum saepe temporibus
                vero?
              </p>
            </div>
            <div className="md:grid grid-cols-3 gap-4">
              <div className="relative aspect-square group mb-8">
                <Image
                  src="/woman.jpg"
                  alt="project"
                  className="object-cover -z-10 h-auto"
                  fill
                  sizes="(max-width: 768px) 100%"
                  priority
                />
                <div className=" flex flex-col justify-center items-center card transition-all opacity-0 duration-300 group-hover:opacity-100 h-full p-5">
                  <h3 className="text-white text-3xl font-medium mb-6 duration-700 translate-y-4 group-hover:-translate-y-4">
                    Hello World
                  </h3>
                  <p className="mb-8 text-center duration-500 text-white translate-y-3 group-hover:-translate-y-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium, veniam!
                  </p>
                  <Link
                    href="/"
                    className="px-4 py-2 rounded border hover:bg-white hover:text-black duration-500 border-white text-white"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square group mb-8">
                <Image
                  src="/woman.jpg"
                  alt="project"
                  className="object-cover -z-10 h-auto"
                  fill
                  priority
                />
                <div className=" flex flex-col justify-center items-center card transition-all opacity-0 duration-300 group-hover:opacity-100 h-full p-5">
                  <h3 className="text-white text-3xl font-medium mb-6 duration-700 translate-y-4 group-hover:-translate-y-4">
                    Hello World
                  </h3>
                  <p className="mb-8 text-center duration-500 text-white translate-y-3 group-hover:-translate-y-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque, reiciendis.
                  </p>
                  <Link
                    href="/"
                    className="px-4 py-2 rounded border hover:bg-white hover:text-black duration-500 border-white text-white"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square group mb-8">
                <Image
                  src="/woman.jpg"
                  alt="project"
                  className="object-cover -z-10 h-auto"
                  fill
                  sizes="(max-width: 768px) 100%"
                  priority
                />
                <div className=" flex flex-col justify-center items-center card transition-all opacity-0 duration-300 group-hover:opacity-100 h-full p-5">
                  <h3 className="text-white text-3xl font-medium mb-6 duration-700 translate-y-4 group-hover:-translate-y-4">
                    Hello World
                  </h3>
                  <p className="mb-8 text-center duration-500 text-white translate-y-3 group-hover:-translate-y-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, doloribus.
                  </p>
                  <Link
                    href="/"
                    className="px-4 py-2 rounded border hover:bg-white hover:text-black duration-500 border-white text-white"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="bg-indigo-600 text-white px-8 py-4 border border-indigo-600 duration-300 rounded hover:bg-transparent hover:text-white hover:border-white"
              >
                See More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
