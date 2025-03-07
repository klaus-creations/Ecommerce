import { width } from "@/constants/styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignInComponent() {
  const { register, handleSubmit } = useForm();
  const handleRegistration = function () {};

  return (
    <div
      className={`${width} h-screen flex flex-col items-center justify-center text-black dark:text-white`}
    >
      <form
        onSubmit={handleSubmit(handleRegistration)}
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
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-orange-500/[.3] rounded-lg shadow-sm shadow-orange-500/[.4] "
          />
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
            className="w-full h-12 px-5 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-none border-[1px] 
            border-orange-500/[.3] rounded-lg shadow-sm shadow-orange-500/[.4] "
          />
        </div>

        <button
          type="button"
          className="text-base underline tracking-[1px] text-orange-500 cursor-pointer self-start ml-10"
        >
          Forgot Password
        </button>

        <button className="text-base font-extrabold tracking-[1px] text-white rounded-lg px-3 py-2 bg-orange-500 uppercase cursor-pointer">
          Sigin Up
        </button>
        <div className="flex items-center   gap-2">
          <span className="text-base font-bold tracking-[1px]">
            I dont have an Accountt{" "}
          </span>
          <Link
            to={"/auth/signup"}
            className="text-base font-bold tracking-[1px] text-orange-500 "
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
