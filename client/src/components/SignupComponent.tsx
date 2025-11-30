/* eslint-disable @typescript-eslint/no-explicit-any */
import { width } from "@/constants/styles";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validations/register.validation";

import { z } from "zod";
import { toast } from "sonner";
import { useAuthStore } from "@/features/auth";
import { Button } from "./ui/button";

import { useRegistration } from "@/lib/hooks/auth/useRegistration";
import { IRegisterPayload } from "@/types/user/regitserUser";

type SignupFormType = z.infer<typeof registerSchema>;

export default function SignupComponent() {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const { mutate: registerUser, isPending: isLoading } = useRegistration();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    // @ts-ignore
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: SignupFormType) => {
    const payload: IRegisterPayload = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    registerUser(payload, {
      onSuccess: (res) => {
        toast("User created successfully");
        setUser(res?.data?.user);
        navigate("/");
      },

      onError: (err: any) => {
        const msg =
          err.response?.data?.message || "An unexpected error occurred";
        toast(msg);
      },
    });
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

        {/* Name */}
        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">Name</label>
          <input
            id="name"
            placeholder="Full Name"
            {...register("name")}
            type="text"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border
            border-secondary rounded-lg shadow-sm"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">Email</label>
          <input
            id="email"
            placeholder="Email Address"
            {...register("email")}
            type="email"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border
            border-secondary rounded-lg shadow-sm"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">
            Password
          </label>
          <input
            id="password"
            placeholder="Password"
            {...register("password")}
            type="password"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border
            border-secondary rounded-lg shadow-sm"
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="w-[90%] flex flex-col items-start gap-1">
          <label className="text-base lg:font-bold tracking-[1px]">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("passwordConfirm")}
            type="password"
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border
            border-secondary rounded-lg shadow-sm"
          />
          {errors.passwordConfirm && (
            <span className="text-sm text-red-500">
              {errors.passwordConfirm.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <Button disabled={isLoading} type="submit">
          Create Account
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-base font-bold tracking-[1px]">
            I have an Account{" "}
          </span>
          <Link
            to={"/auth/signin"}
            className="text-base font-bold tracking-[1px] text-primary"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
