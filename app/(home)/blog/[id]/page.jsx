import Image from "next/image";
import Link from "next/link";

export default function BlogPreview() {
  return (
    <>
      
      <section className="border-b mb-8">
        <div className="relative aspect-slim w-100 mb-8">
          <Image
            src="/image1.jpg"
            fill
            alt="blog"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl self-start font-medium mb-8">
            The NewYork Times
          </h2>
          <p className="self-start mb-4">
            <strong>Posted On:</strong> 12/12/2003 <br />
            By
            <Link href="/author/1" className="text-blue-600">
              {" "}
              Dike Wisdom
            </Link>
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            reiciendis voluptatum numquam debitis autem repellendus sint impedit
            quaerat ullam perferendis nostrum minima necessitatibus itaque,
            deserunt nam tempora facilis dolor. Possimus!
          </p>
        </div>
      </section>
      
    </>
  );
}
