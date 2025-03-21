/* eslint-disable @typescript-eslint/no-explicit-any */
import { width } from "@/constants/styles";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupValidations } from "@/validations";
import { z } from "zod";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/features/request";
import { useAuthStore } from "@/features/auth";
import { Button } from "./ui/button";

export default function SignupComponent() {
  const { setUser } = useAuthStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(data);
      toast("User create and logged In successfully");
      setUser(data?.data?.user);
      queryClient.invalidateQueries({ queryKey: ["session"] });
      navigate("/");
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred";
      toast(errorMessage);
    },
  });
  type SignupFormType = z.infer<typeof signupValidations>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(signupValidations),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async function (data: SignupFormType) {
    mutate(data);
  };

  return (
    <div
      className={`${width} h-screen flex flex-col items-center justify-center text-black dark:text-white`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[80%] 2xl:w-[50%] flex flex-col items-center gap-3"
      >
        <h1 className="text-3xl font-bold">Create An Account</h1>
        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">Name</label>
          <input
            id="name"
            placeholder="Full Name"
            {...register("name")}
            type="text"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-orange-500/[.3] rounded-lg shadow-sm shadow-orange-500/[.4] "
          />

          {errors["name"] && (
            <span className="text-sm text-red-500">
              {errors["name"]?.message}
            </span>
          )}
        </div>

        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">Email</label>
          <input
            id="email"
            placeholder="Email Address"
            {...register("email")}
            type="email"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-orange-500/[.3] rounded-lg shadow-sm shadow-orange-500/[.4] "
          />

          {errors["email"] && (
            <span className="text-sm text-red-500">
              {errors["email"]?.message}
            </span>
          )}
        </div>

        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">
            Password
          </label>
          <input
            id="password"
            placeholder="Full Name"
            {...register("password")}
            type="password"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-orange-500/[.3] rounded-lg shadow-sm shadow-orange-500/[.4] "
          />
          {errors["password"] && (
            <span className="text-sm text-red-500">
              {errors["password"]?.message}
            </span>
          )}
        </div>

        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            placeholder="Full Name"
            {...register("confirmPassword")}
            type="password"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-orange-500/[.3] rounded-lg shadow-sm shadow-orange-500/[.4] "
          />
          {errors["confirmPassword"] && (
            <span className="text-sm text-red-500">
              {errors["confirmPassword"]?.message}
            </span>
          )}
        </div>

        <Button
          disabled={isLoading}
          className="text-base font-extrabold tracking-[1px] text-white rounded-lg px-3 py-2 bg-orange-500 hover:bg-orange-500/[.8]"
        >
          Create Account
        </Button>
        <div className="flex items-center   gap-2">
          <span className="text-base font-bold tracking-[1px]">
            I have an Account{" "}
          </span>
          <Link
            to={"/auth/signin"}
            className="text-base font-bold tracking-[1px] text-orange-500 "
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
