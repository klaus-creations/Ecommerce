import { width } from "@/constants/styles";
import { Link } from "react-router-dom";
import { Menu, Moon, SearchIcon, ShoppingCart, SunMoon } from "lucide-react";
import { useTheme } from "@/features/theme";
import { useAuthStore } from "@/features/auth";
import LogoutComponent from "../LogoutComponent";

// TODO: HERE ARE ALL SHADCN UI COMPONENTS
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { navbarLinks } from "@/constants/navbar-links";

export default function HeaderComponent() {
  const { isDarkMode, setTheme } = useTheme();
  const { isAuthenticated, user } = useAuthStore();

  const theme = isDarkMode;

  return (
    <header className="w-full flex flex-col border-b-[1px] h-[15%] bg-slate-100 dark:bg-zinc-950/96 border-gray-900/[.5] dark:bg-border-gray-200 dark:text-white text-black">
      <div
        className={`${width} flex items-center justify-between h-[50%] border-b-[1px] border-gray-900/[.2] 
      dark:border-gray-200/[.2]`}
      >
        <Link
          to={"/"}
          className="text-base lg:text-xl font-bold first-letter:text-2xl lg:first-letter:text-3xl first-letter:font-extrabold text-primary"
        >
          Gebeya
        </Link>

        <nav className="lg:flex items-center gap-3 hidden">
          {navbarLinks.map((el, i) => {
            return (
              <Link key={i} to={el.link} className="">
                {el.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link to={"/cart"} className="cursor-pointer">
            <ShoppingCart className="text-black dark:text-white size-6" />
          </Link>
          {theme ? (
            <button
              onClick={() => setTheme(false)}
              className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md"
            >
              <Moon className="text-secondary size-6" />
            </button>
          ) : (
            <button
              onClick={() => setTheme(true)}
              className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md"
            >
              <SunMoon className="text-secondary size-6" />
            </button>
          )}
          <>
            {isAuthenticated ? (
              <Authenticated
                name={user?.name as string}
                email={user?.email as string}
              />
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <Link to="/auth/signin">
                  <Button>Login</Button>
                </Link>

                <Link to="/auth/signin">
                  <Button variant={"outline"}>Sign Up</Button>
                </Link>
              </div>
            )}
          </>
          <SheetTriggerC
            name={user?.name as string}
            email={user?.email as string}
            isAdmin={user?.isAdmin as boolean}
            isAuthenticated={isAuthenticated as boolean}
          />
        </div>
      </div>

      <div
        className={`${width} flex items-center justify-between h-[50%] w-full`}
      >
        <SearchComponent />
      </div>
    </header>
  );
}

const SearchComponent = function () {
  return (
    <form className="w-[70%] lg:w-[60%] 2xl:w-[40%] h-[60%] relative">
      <SearchIcon className="absolute top-[50%] -translate-y-[50%] left-2 text-gray-700 dark:text-gray-400 size-5" />
      <input
        type="text"
        placeholder="Search products"
        className="w-full h-full outline-none border-[1px] border-secondary rounded-4 pl-8 pr-10 rounded-lg"
      />

      <button className="text-base bg-secondary tracking-[1px] flex items-center gap-1 px-2 py-1 rounded-md text-white absolute top-[50%] -translate-y-[50%] right-2">
        <span>Search</span>
        {/* <SearchIcon className="text-white size-5" /> */}
      </button>
    </form>
  );
};

interface IAuthneticated {
  name: string;
  email: string;
}

const Authenticated = function ({ name, email }: IAuthneticated) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://githbbbbub.com/shadcn.png" />
          <AvatarFallback className="bg-orange-600 font-bold tracking-[1px] text-white">
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-start gap-4">
        <div className="w-full flex gap-3 itams-center">
          <Avatar>
            <AvatarImage src="https://githbbbbub.com/shadcn.png" />
            <AvatarFallback className="bg-orange-600 font-bold tracking-[1px] text-white">
              {name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-base font-bold tracking-[1px] text-gray-800 dark:text-gray-200">
              {name}
            </span>
            <span className="text-sm tracking-[1px] text-gray-600 dark:text-gray-400">
              {email}
            </span>
          </div>
        </div>
        <LogoutComponent />
      </PopoverContent>
    </Popover>
  );
};

interface ISheetTrigger {
  isAdmin: boolean;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

const SheetTriggerC = function ({
  name,
  email,
  isAdmin,
  isAuthenticated,
}: ISheetTrigger) {
  console.log(name, email, isAdmin);
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-5 text-gray-900 dark:text-gray-200" />
        </SheetTrigger>
        <SheetContent>
          <div className="size-full bg-slate-300 dark:bg-slate-700 flex flex-col justify-between">
            <SheetHeader>
              <SheetTitle>
                <Link
                  to={"/"}
                  className="text-xl font-bold first-letter:text-2xl lg:first-letter:text-3xl first-letter:font-extrabold text-orange-500"
                >
                  Gebeya
                </Link>
              </SheetTitle>
              {isAuthenticated && (
                <>
                  <div className="w-full flex gap-3 itams-center">
                    <Avatar>
                      <AvatarImage src="https://githbbbbub.com/shadcn.png" />
                      <AvatarFallback className="bg-orange-600 font-bold tracking-[1px] text-white">
                        {name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-base font-bold tracking-[1px] text-gray-800 dark:text-gray-200">
                        {name}
                      </span>
                      <span className="text-sm tracking-[1px] text-gray-600 dark:text-gray-400">
                        {email}
                      </span>
                    </div>
                  </div>
                  <>
                    {isAdmin ? (
                      <Button className="bg-transparent text-gray-900 dark:text-gray-100 font-extra tracking-[1px] text-base bold hover:bg-orange-500/[.2] border-[1px] border-orange-500/[.3] rounded-md">
                        Admin Dashboard
                      </Button>
                    ) : (
                      <Button className="bg-transparent text-gray-900 dark:text-gray-100 font-extra tracking-[1px] text-base bold hover:bg-orange-500/[.2] border-[1px] border-orange-500/[.3] rounded-md">
                        Admin request +
                      </Button>
                    )}
                  </>
                </>
              )}
            </SheetHeader>
            <SheetFooter className="w-full flex items-center">
              {isAuthenticated ? (
                <LogoutComponent />
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/auth/signin"
                    className="text-base tracking-[1px] bg-orange-500 py-1 px-2 rounded-md text-white"
                  >
                    Login
                  </Link>

                  <Link
                    to="/auth/signin"
                    className="text-base tracking-[1px] border-[1px] border-orange-500/[.5] py-1 px-2 rounded-md"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
