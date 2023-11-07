import Image from "next/image";
import { TbStarFilled } from "react-icons/tb";
import Stars from "./stars";

export default function Partners() {
  return (
    <>
      <section>
        <div className="pt-20">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h4 className="text-pblue-500 text-lg font-medium uppercase mb-2">
              CUSTOMER REVIEWS
            </h4>
            <h2 className="text-interface-700 font-bold text-4xl leading-normal xl:text-5xl xl:leading-snug">
              What’s Our Customer Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-indigo-600 bg-white rounded p-6 thick-shadow">
              <div className="flex gap-2 flex-wrap mb-4">
                <Stars Data={{ num: 5}}/>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga fugit cum omnis amet odio dignissimos quaerat minima iusto perspiciatis.</p>
              <div className="flex gap-4 items-center">
                <Image src="/woman.jpg" alt="man" width="80" height="80" className="h-auto object-cover rounded-full aspect-square border border-amber-500" />
                <div>
                  <h3 className="font-medium text-xl">Lesly Kiliyan</h3>
                  <i>Travel Agent</i>
                </div>
              </div>
            </div>
            <div className="border border-indigo-600 bg-white rounded p-6 thick-shadow">
              <div className="flex gap-2 flex-wrap mb-4">
                <Stars Data={{ num: 5}}/>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga fugit cum omnis amet odio dignissimos quaerat minima iusto perspiciatis.</p>
              <div className="flex gap-4 items-center">
                <Image src="/image1.jpg" alt="man" width="80" height="80" className="h-auto object-cover rounded-full aspect-square border border-amber-500" />
                <div>
                  <h3 className="font-medium text-xl">Lesly Kiliyan</h3>
                  <i>Travel Agent</i>
                </div>
              </div>
            </div>
            <div className="border border-indigo-600 bg-white rounded p-6 thick-shadow">
              <div className="flex gap-2 flex-wrap mb-4">
                <Stars Data={{ num: 5}}/>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga fugit cum omnis amet odio dignissimos quaerat minima iusto perspiciatis.</p>
              <div className="flex gap-4 items-center">
                <Image src="/woman.jpg" alt="man" width="80" height="80" className="h-auto object-cover rounded-full aspect-square border border-amber-500" />
                <div>
                  <h3 className="font-medium text-xl">Lesly Kiliyan</h3>
                  <i>Travel Agent</i>
                </div>
              </div>
            </div>
            <div className="border border-indigo-600 bg-white rounded p-6 thick-shadow">
              <div className="flex gap-2 flex-wrap mb-4">
                <Stars Data={{ num: 5}}/>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga fugit cum omnis amet odio dignissimos quaerat minima iusto perspiciatis.</p>
              <div className="flex gap-4 items-center">
                <Image src="/man.png" alt="man" width="80" height="80" className="h-auto object-cover rounded-full aspect-square border border-amber-500" />
                <div>
                  <h3 className="font-medium text-xl">Lesly Kiliyan</h3>
                  <i>Travel Agent</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
