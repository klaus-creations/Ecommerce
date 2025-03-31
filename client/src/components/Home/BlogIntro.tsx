import { width } from "@/constants/styles";
import { Button } from "../ui/button";
import Heading from "../common/Heading";

export default function BlogIntro() {
  return (
    <section
      className={`${width} flex flex-col lg:flex-row gap-4 lg:gap-0 h-[80vh] overflow-hidden lg:justify-between bg-slate-300/[.2] dark:bg-slate-900/[.2] p-2 lg:p-4`}
    >
      <BlogIntroImage />
      <BlogsSomeIntro />
    </section>
  );
}

const BlogIntroImage = function () {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[30%] h-full flex flex-col items-start gap-3 lg:gap-4">
      <Heading heading="Blogs" />
      <h3 className="text-xl lg:text-2xl text-text2">
        Enjoy Our Weekly <strong className="text-primary">News</strong> and{" "}
        <strong className="text-primary">Articles</strong>{" "}
      </h3>
      <div className="w-full h-[65%]">
        <img src="/hero2.jpg" className="size-full object-cover" />
      </div>
    </div>
  );
};

const BlogsSomeIntro = function () {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[65%] h-full flex flex-row lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-y-auto">
      {Array.from({ length: 6 }, (_, i) => {
        return (
          <div key={i} className="flex  items-start  gap-4 lg:gap-6 shrink-0">
            <div className="size-40 lg:size-52 w-full">
              <img
                src={`/${i + 30}.jpg`}
                className="size-full overflow-hidden"
              />
            </div>

            <div className="flex flex-col items-start w-[50%]">
              <h2 className="text-base lg:text-xl tracking-[1px] text-text2">
                Blog Title
              </h2>
              <p className="text-xs lg:text-base tracking-[1px] text-text4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                sit sed consequatur nostrum unde nemo nam harum doloremque
                consectetur quia voluptates voluptatibus error ullam dolores
                tempora voluptatem ipsam, deserunt corporis.
              </p>

              <Button variant={"outline"}> Read More</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
