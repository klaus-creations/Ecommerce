import { width } from "@/constants/styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// import { authClient } from "@/lib/auth-client";

// const { data, error } = await authClient.signUp.email(
//   {
//     email, // user email address
//     password, // user password -> min 8 characters by default
//     name, // user display name
//     image, // user image url (optional)
//     callbackURL: "/", // a url to redirect to after the user verifies their email (optional)
//   },
//   {
//     onRequest: (ctx) => {
//       //show loading
//     },
//     onSuccess: (ctx) => {
//       //redirect to the dashboard or sign in page
//     },
//     onError: (ctx) => {
//       // display the error message
//       alert(ctx.error.message);
//     },
//   }
// );

interface SignupInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupComponent() {
  const { register, handleSubmit } = useForm<SignupInputs>();
  const handleRegistration = function () {};

  return (
    <div
      className={`${width} h-screen flex flex-col items-center justify-center text-black dark:text-white`}
    >
      <form
        onSubmit={handleSubmit(handleRegistration)}
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
        </div>

        <button className="text-base font-extrabold tracking-[1px] text-white rounded-lg px-3 py-2 bg-orange-500">
          Create Account
        </button>
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
