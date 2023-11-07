import Image from "next/image";
import Link from "next/link";

export default function BlogHome() {
    return (
        <>
            <section>
                <div className="mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="max-w-lg mx-auto text-center mb-10">
                        <h2 className="text-interface-100 font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug">
                            Stay up to date with our
                            <span className="relative">
                <span className="relative z-20">News.</span>
                <svg
                    className="absolute -left-4 top-0 md:-left-1 z-0 md:top-2"
                    width="154"
                    height="48"
                    viewBox="0 0 154 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M23.1499 3.58264C52.2682 3.06408 114.859 6.41368 140.53 16.0079C168.178 26.3413 132.986 39.3609 95.1579 42.9452C56.0206 46.6537 13.0901 40.3705 5.35185 30.1016C-7.71187 12.7655 48.5117 2.11385 91.9796 3.26377"
                      stroke="#DAED1A"
                      strokeWidth="6"
                      strokeLinecap="round"
                  ></path>
                </svg>
              </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 pb-14 lg:pb-16">
                        <article className="swiper-slide border border-indigo-600 rounded thick-shadow">
                            <div className="bg-white shadow rounded p-5">
                                <Link href="blog-details.html" className="block mb-6 rounded">
                                    <Image
                                        width="200"
                                        height="200"
                                        src="/image3.jpg"
                                        className="w-full aspect-square rounded object-cover "
                                        alt="Human"
                                    />
                                </Link>
                                <div className="pl-1 pr-12">
                                    <div className="flex space-x-2 mb-3.5">
                                        <Link
                                            href="#"
                                            className="text-sm px-2 py-1 rounded bg-gray-100"
                                        >
                                            Digital
                                        </Link>
                                        <Link
                                            href="#"
                                            className="text-sm px-2 py-1 rounded bg-gray-100"
                                        >
                                            Marketing
                                        </Link>
                                    </div>
                                    <h3 className="blog-title mb-2 text-interface-100 transition font-semibold text-2xl">
                                        <Link href="blog-details.html">
                                            The Highly Creative UI/UX Workflow from a Silicon Valley.
                                        </Link>
                                    </h3>
                                    <span className="text-sm text-interface-200">
                    3 days read
                  </span>
                                </div>
                            </div>
                        </article>
                        <article className="swiper-slide border border-indigo-600 rounded thick-shadow">
                            <div className="bg-white shadow rounded p-5">
                                <Link href="blog-details.html" className="block mb-6 rounded">
                                    <Image
                                        width="200"
                                        height="200"
                                        src="/man.png"
                                        className="w-full aspect-square rounded object-cover "
                                        alt="Human"
                                    />
                                </Link>
                                <div className="pl-1 pr-12">
                                    <div className="flex space-x-2 mb-3.5">
                                        <Link
                                            href="#"
                                            className="text-sm px-2 py-1 rounded bg-gray-100"
                                        >
                                            Digital
                                        </Link>
                                        <Link
                                            href="#"
                                            className="text-sm px-2 py-1 rounded bg-gray-100"
                                        >
                                            Marketing
                                        </Link>
                                    </div>
                                    <h3 className="blog-title mb-2 text-interface-100 transition font-semibold text-2xl">
                                        <Link href="blog-details.html">
                                            Definitive Guide to Make a Daily More Productive Working
                                            Flow.
                                        </Link>
                                    </h3>
                                    <span className="text-sm text-interface-200">
                    9 days read
                  </span>
                                </div>
                            </div>
                        </article>
                        <article className="swiper-slide border border-indigo-600 rounded thick-shadow">
                            <div className="bg-white shadow rounded p-5">
                                <Link href="blog-details.html" className="block mb-6 rounded">
                                    <Image
                                        width="200"
                                        height="200"
                                        src="/image3.jpg"
                                        className="w-full aspect-square rounded object-cover "
                                        alt="Human"
                                    />
                                </Link>
                                <div className="pl-1 pr-12">
                                    <div className="flex space-x-2 mb-3.5">
                                        <Link
                                            href="#"
                                            className="text-sm px-2 py-1 rounded bg-gray-100"
                                        >
                                            Digital
                                        </Link>
                                        <Link
                                            href="#"
                                            className="text-sm px-2 py-1 rounded bg-gray-100"
                                        >
                                            Marketing
                                        </Link>
                                    </div>
                                    <h3 className="blog-title mb-2 text-interface-100 font-semibold text-2xl">
                                        <Link href="blog-details.html">
                                            Organic Food Isn’t Much Better For Your Future Health.
                                        </Link>
                                    </h3>
                                    <span className="text-sm text-interface-200">
                    3 days read
                  </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
