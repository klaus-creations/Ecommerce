import { width } from "@/constants/styles";
import { useTheme } from "@/features/theme";
import { Moon, SunMoon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthHeaderComponent() {
  const { isDarkMode: theme, setTheme } = useTheme();

  return (
    <header className="w-full absolute top-0 left-0 flex flex-col border-b-[1px] h-[10%] bg-slate-100 dark:bg-slate-900 border-gray-900/[.5] dark:bg-border-gray-200 dark:text-white text-black">
      <div
        className={`${width} flex items-center justify-between h-[100%] border-b-[1px] border-gray-900/[.2] 
        dark:border-gray-200/[.2]`}
      >
        <Link
          to={"/"}
          className="text-base lg:text-xl font-bold first-letter:text-2xl lg:first-letter:text-3xl first-letter:font-extrabold text-orange-500"
        >
          Gebeya
        </Link>

        <div className="flex items-center gap-4">
          {theme ? (
            <button
              onClick={() => setTheme(false)}
              className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md"
            >
              <Moon className="text-orange-500 size-6" />
            </button>
          ) : (
            <button
              onClick={() => setTheme(true)}
              className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md"
            >
              <SunMoon className="text-orange-500 size-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
