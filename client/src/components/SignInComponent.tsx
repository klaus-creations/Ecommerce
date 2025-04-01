/* eslint-disable @typescript-eslint/no-explicit-any */
import { width } from "@/constants/styles";
import { useAuthStore } from "@/features/auth";
import { login } from "@/features/request";
import { signInValidations } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";

export default function SignInComponent() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const queryClient = useQueryClient();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast("User LoggedIn successfully");
      setUser(data?.data);
      queryClient.invalidateQueries({ queryKey: ["session"] });
      navigate("/");
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred";
      toast(errorMessage);
    },
  });

  type SignupFormType = z.infer<typeof signInValidations>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(signInValidations),
    defaultValues: {
      email: "",
      password: "",
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
        <h1 className="text-3xl font-bold">Login To Your Account</h1>

        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">Email</label>
          <input
            id="email"
            placeholder="Email Address"
            {...register("email")}
            type="email"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] border-secondary/90 rounded-lg shadow-sm  "
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
            placeholder="Password"
            {...register("password")}
            type="password"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] border-secondary/90 rounded-lg shadow-sm  "
          />
          {errors["password"] && (
            <span className="text-sm text-red-500">
              {errors["password"]?.message}
            </span>
          )}
        </div>

        {/* <button
          type="button"
          className="text-base underline tracking-[1px] text-orange-500 cursor-pointer self-start ml-10"
        >
          Forgot Password
        </button> */}

        <Button disabled={isLoading} type="submit">
          Sigin In
        </Button>
        <div className="flex items-center   gap-2">
          <span className="text-base font-bold tracking-[1px]">
            I dont have an Accountt{" "}
          </span>
          <Link
            to={"/auth/signup"}
            className="text-base font-bold tracking-[1px] text-primary "
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
