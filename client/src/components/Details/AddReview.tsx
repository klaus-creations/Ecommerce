/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addReviewValidations } from "@/validations";
import { z } from "zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";

export default function AddReview() {
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: () => {
      console.log("hello world this new review");
    },
    onSuccess: (data) => {
      toast("User create and logged In successfully");
      console.log(data);
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred";
      toast(errorMessage);
    },
  });
  type SignupFormType = z.infer<typeof addReviewValidations>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(addReviewValidations),
    defaultValues: {
      rating: 0,
      review: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async function (data: SignupFormType) {
    mutate();
    console.log(data);
  };

  return (
    <div
      className={`w-full flex flex-col items-start justify-center text-black dark:text-white py-2`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start gap-3"
      >
        <h1 className="text-base lg:text-xl font-bold border-b-[1px] border-b-orange-500 pb-2">
          Add Review
        </h1>

        <div className="w-[90%] flex flex-col ml-3 items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">
            Rating (out of 5)
          </label>
          <input
            id="rating"
            placeholder="0"
            {...register("rating")}
            type="text"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-slate-600 rounded-md"
          />

          {errors["rating"] && (
            <span className="text-sm text-red-500">
              {errors["rating"]?.message}
            </span>
          )}
        </div>

        <div className="w-[90%] flex flex-col ml-3 items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">
            Review
          </label>
          <textarea
            id="password"
            placeholder="Your Review"
            {...register("review")}
            className="w-full h-40 lg:h-52 px-5 pt-3 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-slate-600 shadow-sm rounded-md  resize-none"
          />
          {errors["review"] && (
            <span className="text-sm text-red-500">
              {errors["review"]?.message}
            </span>
          )}
        </div>

        <Button
          disabled={isLoading}
          className="text-base font-extrabold tracking-[1px] text-white rounded-lg px-3 py-2 bg-orange-500 hover:bg-orange-500/[.8]"
        >
          Add Review
        </Button>
      </form>
    </div>
  );
}
