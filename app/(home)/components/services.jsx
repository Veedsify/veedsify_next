import Image from "next/image";
import Link from "next/link";

export default function HomeServices() {
    return (
        <>
            <section className="short_section">
                <div className="md:grid grid-cols-3 gap-4">
                    <div className="border border-indigo-600 p-6 rounded mb-4 thick-shadow">
                        <Image alt="Services" src="/services.svg" className="h-auto block mb-2" width="100" height="100" priority/>
                        <h1 className="text-2xl font-medium mb-3">Services 1</h1>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores neque repellat tempore unde voluptatibus voluptatum. Distinctio ipsam sint veniam.</p>
                        <Link href="/" className="underline">Learn More</Link>

                    </div>
                    <div className="border border-indigo-600 p-6 rounded mb-4 thick-shadow">
                        <Image alt="Services" src="/services.svg" className="h-auto block mb-2" width="100" height="100" priority/>
                        <h1 className="text-2xl font-medium mb-3">Services 1</h1>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at magni odit placeat unde! Consequatur doloribus modi nisi sed sunt.</p>
                        <Link href="/" className="underline">Learn More</Link>

                    </div>
                    <div className="border border-indigo-600 p-6 rounded mb-4 thick-shadow">
                        <Image alt="Services" src="/services.svg" className="h-auto block mb-2" width="100" height="100" priority/>
                        <h1 className="text-2xl font-medium mb-3">Services 1</h1>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio facere facilis ipsa labore laborum quaerat quis quod repellat sed.</p>
                        <Link href="/" className="underline">Learn More</Link>

                    </div>
                </div>
            </section>
        </>
    )
}