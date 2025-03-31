import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import { Button } from "../ui/button";

const popularCategories = [
  {
    name: "Electronics",
    img: "pt1.jpg",
    tottalProducts: 45,
  },
  {
    name: "Women's Fashion",
    img: "pt3.jpg",
    tottalProducts: 45,
  },
  {
    name: "Men's Fashion",
    img: "pt2.jpg",
    tottalProducts: 45,
  },
  {
    name: "Children Fashion",
    img: "pt4.jpg",
    tottalProducts: 45,
  },
  {
    name: "Sports and Oudoors",
    img: "pt4.jpg",
    tottalProducts: 45,
  },
];

export default function PopularCategories() {
  return (
    <section
      className={`${width} flex flex-col items-start bg-slate-300/[.3] dark:bg-slate-900/[.1] p-2 lg:p-4`}
    >
      <Heading heading="Popular Categories" />
      <div className="w-full flex flex-wrap gap-4">
        {popularCategories.map((el, i) => {
          return (
            <div
              key={i}
              className="flex items-center w-full lg:w-[46%] justify-between"
            >
              <div className="w-[30%]">
                <img
                  src={`/${el.img}`}
                  className="w-full object-cover bg-center"
                />
              </div>

              <div className="w-[60%] flex flex-col items-start gap-1">
                <h3 className="text-base lg:text-2xl font-normal tracking-[1px] text-text1">
                  {el.name}
                </h3>

                <p className="text-sm lg:text-xl text-text3">
                  {el.tottalProducts} products
                </p>

                <Button className="mt-5">Browse Category</Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
