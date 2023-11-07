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
            sizes="(max-width: 768px) 100%"
            alt="blog"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl self-start font-medium mb-8">
            The NewYork Times
          </h2>
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
