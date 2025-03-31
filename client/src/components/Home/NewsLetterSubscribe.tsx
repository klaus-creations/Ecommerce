import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function NewsLetterSubscribe() {
  return (
    <div className="w-full flex flex-col lg:flex-row py-8 items-center justify-center lg:py-16 bg-primary text-gray-5 gap-5">
      <div className="flex flex-col items-center gap-3">
        <p className="text-base lg:text-xl text-gray-50  uppercase">
          Sale 20% off all store
        </p>
        <p className="text-3xl lg:text-4xl font-bold tracking-[1px] text-gray-50">
          Subscribe our Newsletter
        </p>
      </div>

      <form className="w-[70%] lg:w-[60%] 2xl:w-[40%] h-14  relative">
        <Input
          type="text"
          placeholder="Your Email Address"
          className="w-full h-full outline-none border-[1px] placeholder:text-gray-800 border-secondary rounded-4 bg-gray-50 dark:bg-gray-200 pl-8 pr-10 rounded-lg"
        />

        <Button className="h-full text-white absolute top-[50%] -translate-y-[50%] right-0">
          <span>Subscribe</span>
        </Button>
      </form>
    </div>
  );
}
