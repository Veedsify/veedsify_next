import Image from "next/image";
import Link from "next/link";
import HireSection from "../hire";

export default function MyProject() {
  return (
    <section className="mb-28">
      <div className="md:grid gap-x-4 gap-y-6">
        {/* PROJECTS */}
        <div className="border-indigo-600 border rounded-md p-4 mb-8 thick-shadow md:grid grid-cols-3">
          <Link href="/project/1">
            <div className="relative aspect-square mb-3">
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
          <div className="p-5 col-span-2">
            <Link href="/project/1">
              <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
            </Link>
            <div className="mb-4 border flex justify-between items-center p-3">
              <div className="">
                Start Date: <span className="font-medium">12/12/2003</span>
              </div>
              <div className="">
                End Date: <span className="font-medium">12/12/2003</span>
              </div>
            </div>
            <ul className="list-decimal pl-8 mb-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Express JS</li>
              <li>Mysql</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi aliquid esse voluptatem natus accusantium provident
              iste, quam omnis libero.
            </p>
          </div>
        </div>
        {/* PROJECTS */}
        <div className="border-indigo-600 border rounded-md p-4 mb-8 thick-shadow md:grid grid-cols-3">
          <Link href="/project/1">
            <div className="relative aspect-square mb-3">
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
          <div className="p-5 col-span-2">
            <Link href="/project/1">
              <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
            </Link>
            <div className="mb-4 border flex justify-between items-center p-3">
              <div className="">
                Start Date: <span className="font-medium">12/12/2003</span>
              </div>
              <div className="">
                End Date: <span className="font-medium">12/12/2003</span>
              </div>
            </div>
            <ul className="list-decimal pl-8 mb-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Express JS</li>
              <li>Mysql</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi aliquid esse voluptatem natus accusantium provident
              iste, quam omnis libero.
            </p>
          </div>
        </div>
        {/* PROJECTS */}
        <div className="border-indigo-600 border rounded-md p-4 mb-8 thick-shadow md:grid grid-cols-3">
          <Link href="/project/1">
            <div className="relative aspect-square mb-3">
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
          <div className="p-5 col-span-2">
            <Link href="/project/1">
              <h3 className="font-medium text-2xl mb-5">The NewYork Times</h3>
            </Link>
            <div className="mb-4 border flex justify-between items-center p-3">
              <div className="">
                Start Date: <span className="font-medium">12/12/2003</span>
              </div>
              <div className="">
                End Date: <span className="font-medium">12/12/2003</span>
              </div>
            </div>
            <ul className="list-decimal pl-8 mb-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Express JS</li>
              <li>Mysql</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi aliquid esse voluptatem natus accusantium provident
              iste, quam omnis libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
