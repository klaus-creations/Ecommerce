import { width } from "@/constants/styles";

export default function Daydeals() {
  return (
    <div
      className={`${width} h-[500px] bg-slate-400 dark:bg-slate-900 flex items-center justify-around rounded-lg my-10`}
    >
      <div className="flex flex-col  items-start text-gray-800 dark:text-gray-300 ">
        <h2 className="text-xl lg:text-xl font-extrabold uppercase tracking-[1px] ">
          Deal of The Day
        </h2>

        <h4 className="text-base lg:text-xl font-bold trackng-[1px] uppercase text-gray-700 dark:text-gray-400 mb-5">
          40% off
        </h4>

        <button className="text-xl font-bold border-[1px] border-orange-500 px-4 py-1 rounded-lg cursor-pointer bg-orange-500/[.1] mb-8">
          Shop Now
        </button>

        <p className="text-xl lg:text-2xl text-orange-500 font-bold tracking-[2px]">
          08 : 22 : 23
        </p>
      </div>

      <img src="/hero3.jpg" className="h-[90%] object-cover" />
    </div>
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
