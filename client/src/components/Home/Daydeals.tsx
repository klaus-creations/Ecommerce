import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import Rating from "../common/Rating";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export default function Daydeals() {
  return (
    <section
      className={`${width} flex-col bg-slate-300/[.2] lg:flex-row lg:items-start dark:bg-slate-900/[.2] flex justify-between gap-x-10  items-center  gap-3 p-2
      lg:p-4 rounded-lg `}
    >
      <img
        src="/deal.jpg"
        className="w-[95%] lg:w-[65%] 2xl:w-[50%] object-cover "
      />
      <div className="flex flex-col  items-start text-gray-800 dark:text-gray-300 gap-3 py-7">
        <Heading heading="Deal of The Day" />
        <h3 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-gray-950 dark:text-gray-50">
          Enjoy Our Daily Best Deal with{" "}
          <strong className="text-primary">50% </strong> Discount
        </h3>

        <div className="w-full flex flex-col items-start gap-2">
          <h4 className="text-base lg:text-xl font-light text-gray-700 dark:text-gray-400">
            New Headset OG4k
          </h4>

          <p className="text-xs lg:text-base font-normal text-gray-800 dark:text-gray-300 tracking-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
            quisquam fugit sequi sint odio quibusdam commodi facere ipsa id
            nihil dolorem reiciendis, magnam doloremque unde ut qui nisi
            aspernatur.
          </p>

          <Rating rating={6} />
          <Button>
            <span className="text-base font-bold tracking-[1px] ">
              Add To Cart
            </span>
            <ShoppingCart className="size-5" />
          </Button>
        </div>

        <p className="text-3xl lg:text-4xl 2xl:text-5xl text-gray-800 dark:text-gray-200 font-bold tracking-[2px] my-4">
          08 : 22 : 23
        </p>
      </div>
    </section>
  );
}

// {

//   Copy
//   <Dialog>
//     <DialogTrigger>Open</DialogTrigger>
//     <DialogContent>
//       <DialogHeader>
//         <DialogTitle>Are you absolutely sure?</DialogTitle>
//         <DialogDescription>
//           This action cannot be undone. This will permanently delete your account
//           and remove your data from our servers.
//         </DialogDescription>
//       </DialogHeader>
//     </DialogContent>
//   </Dialog>
// }
