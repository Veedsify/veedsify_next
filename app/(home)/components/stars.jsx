import { TbStarFilled } from "react-icons/tb";


export default function Stars({ Data }) {
  let { num } = Data;

  return (
    <>
      {Array.from({ length: num }).map((_, index) => (
        <TbStarFilled key={index} className="text-amber-400 text-lg" />
      ))}
    </>
  );
}
